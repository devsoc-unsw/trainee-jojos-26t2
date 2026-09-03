import { supabase } from "@/lib/supabase";
import {
  QUESTION_BANK,
  CATEGORY_TO_FACULTY,
  CandidateQuestion,
} from "@/lib/quizQuestions";

export type QuestionType = "fixed_category" | "boolean_tag" | "numeric_threshold";

export interface QuizAnswer {
  questionId: string;
  questionType: QuestionType;
  selectedOptionIds: string[];
}

export interface QuizAnswerHistory {
  answers: QuizAnswer[];
}

interface PoolCourse {
  code: string;
}
function getScoreDescription(
  attributeName: string,
  score: number
): string {
  const level = Math.round(score);

  if (attributeName === "difficulty") {
    if (level <= 2) return "very easy";
    if (level <= 4) return "fairly easy";
    if (level <= 6) return "moderate";
    if (level <= 8) return "challenging";
    return "extremely challenging";
  }

  if (attributeName === "workload") {
    if (level <= 2) return "a very light workload";
    if (level <= 4) return "a light workload";
    if (level <= 6) return "a moderate workload";
    if (level <= 8) return "a heavy workload";
    return "a very heavy workload";
  }

  if (attributeName === "assessment") {
    if (level <= 2) return "very light assessments";
    if (level <= 4) return "light assessments";
    if (level <= 6) return "moderate assessments";
    if (level <= 8) return "demanding assessments";
    return "very demanding assessments";
  }

  return `a level ${level} course`;
}

// Filters the full course pool by replaying every answer as a constraint.
export async function getFilteredPool(history: QuizAnswerHistory): Promise<PoolCourse[]> {
  let codes: string[] | null = null; // null = no constraint applied yet

  for (const answer of history.answers) {
    let matchingCodes: string[] = [];

    if (answer.questionType === "fixed_category") {
      const facultyKeywords = answer.selectedOptionIds.flatMap(
        (id) => CATEGORY_TO_FACULTY[id] ?? []
      );
      if (facultyKeywords.length > 0) {
        const orFilter = facultyKeywords
          .map((kw) => `faculty.ilike.%${kw}%`)
          .join(",");
        const { data } = await supabase.from("courses").select("code").or(orFilter);
        matchingCodes = (data ?? []).map((c) => c.code);
      }
    }

    if (answer.questionType === "boolean_tag") {
      const question = QUESTION_BANK.find((q) => q.questionId === answer.questionId);
      if (question?.tagValue) {
        const wantsTag = answer.selectedOptionIds[0] === "yes";
        const { data: tagged } = await supabase
          .from("course_tags")
          .select("course_code")
          .eq("tag_value", question.tagValue);
        const taggedCodes = new Set((tagged ?? []).map((t) => t.course_code));

        if (wantsTag) {
          matchingCodes = Array.from(taggedCodes);
        } else {
          const { data: allCourses } = await supabase.from("courses").select("code");
          matchingCodes = (allCourses ?? [])
            .map((c) => c.code)
            .filter((code) => !taggedCodes.has(code));
        }
      }
    }

    if (answer.questionType === "numeric_threshold") {
      const question = QUESTION_BANK.find((q) => q.questionId === answer.questionId);
      if (question?.attributeName) {
        const wantsLower = answer.selectedOptionIds[0] === "below";
        const thresholdStr = answer.selectedOptionIds[1]; // threshold value passed back from next-question
        const threshold = thresholdStr ? parseFloat(thresholdStr) : 5;

        const { data: attrs } = await supabase
          .from("course_attributes")
          .select("course_code, score")
          .eq("attribute_name", question.attributeName);

        matchingCodes = (attrs ?? [])
          .filter((a) => (wantsLower ? a.score <= threshold : a.score > threshold))
          .map((a) => a.course_code);
      }
    }

    codes = codes === null ? matchingCodes : codes.filter((c) => matchingCodes.includes(c));
  }

  if (codes === null) {
    const { data } = await supabase.from("courses").select("code");
    return data ?? [];
  }

  return codes.map((code) => ({ code }));
}

// Picks the next question by testing how evenly each unused question splits the pool.
export async function pickNextQuestion(
  pool: PoolCourse[],
  askedQuestionIds: string[]
): Promise<(CandidateQuestion & { options: { id: string; label: string }[] }) | null> {
  const candidates = QUESTION_BANK.filter((q) => !askedQuestionIds.includes(q.questionId));
  if (candidates.length === 0 || pool.length === 0) return null;

  const poolCodes = pool.map((c) => c.code);

  // One query for ALL tags across the whole pool, instead of one query per tag question
  const { data: allTags } = await supabase
    .from("course_tags")
    .select("course_code, tag_value")
    .in("course_code", poolCodes);

  const tagsByCourse = new Map<string, Set<string>>();
  for (const row of allTags ?? []) {
    if (!tagsByCourse.has(row.course_code)) tagsByCourse.set(row.course_code, new Set());
    tagsByCourse.get(row.course_code)!.add(row.tag_value);
  }

  // One query for ALL numeric attributes across the pool
  const { data: allAttrs } = await supabase
    .from("course_attributes")
    .select("course_code, attribute_name, score")
    .in("course_code", poolCodes);

  const attrsByCourseAndName = new Map<string, number>();
  for (const row of allAttrs ?? []) {
    attrsByCourseAndName.set(`${row.course_code}::${row.attribute_name}`, row.score);
  }

  let best: { question: CandidateQuestion; score: number; threshold?: number } | null = null;

  for (const question of candidates) {
    if (question.questionType === "boolean_tag" && question.tagValue) {
      const yesCount = poolCodes.filter((c) => tagsByCourse.get(c)?.has(question.tagValue!)).length;
      const noCount = poolCodes.length - yesCount;
      if (yesCount === 0 || noCount === 0) continue; // skip degenerate splits
      const score = 1 - Math.abs(yesCount - noCount) / poolCodes.length;
      if (!best || score > best.score) best = { question, score };
    }

    if (question.questionType === "numeric_threshold" && question.attributeName) {
      const scores = poolCodes
        .map((c) => attrsByCourseAndName.get(`${c}::${question.attributeName}`))
        .filter((s): s is number => s !== undefined)
        .sort((a, b) => a - b);
      if (scores.length === 0) continue;

      const median = scores[Math.floor(scores.length / 2)];
      const below = scores.filter((s) => s <= median).length;
      const above = scores.length - below;
      if (below === 0 || above === 0) continue;
      const score = 1 - Math.abs(below - above) / scores.length;
      if (!best || score > best.score) best = { question, score, threshold: median };
    }
  }

  if (!best) return null;

  let questionText = best.question.questionText;

  if (best.question.questionType === "numeric_threshold") {
    const level = Math.round(best.threshold!);
    const description = getScoreDescription(
      best.question.attributeName!,
      best.threshold!
    );

    if (best.question.attributeName === "difficulty") {
      questionText = `Would you be comfortable with a ${description} course (difficulty rateing of ${level}/10)?`;
    } else if (best.question.attributeName === "workload") {
      questionText = `Would you be comfortable with ${description} (workload rateing of ${level}/10)?`;
    } else if (best.question.attributeName === "assessment") {
      questionText = `Would you be comfortable with ${description} (assessment rateing of ${level}/10)?`;
    }
  }

  const options =
    best.question.questionType === "numeric_threshold"
      ? [
        {
          id: "below",
          label:
            best.question.attributeName === "difficulty"
              ? "No, I'd prefer an easier course"
              : best.question.attributeName === "workload"
                ? "No, I'd prefer a lighter workload"
                : "No, I'd prefer less demanding assessments",
        },
        {
          id: "above",
          label:
            best.question.attributeName === "difficulty"
              ? "Yes, I'm comfortable with this difficulty"
              : best.question.attributeName === "workload"
                ? "Yes, I'm comfortable with this workload"
                : "Yes, I'm comfortable with these assessments",
        },
      ]
      : [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
      ];

  return {
    ...best.question,
    questionText,
    options,
  };
}

export async function scoreFinalPool(pool: PoolCourse[], history: QuizAnswerHistory) {
  // TODO: full scoring against all answers — for now, return the pool unscored
  // so /quiz/results has something to work with; refine once ready.
  return pool.map((c) => ({ code: c.code, matchScore: 0 }));
}
