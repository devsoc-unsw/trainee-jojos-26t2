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

interface ScoredCourse {
  code: string;
  matchScore: number;
  explanation: {
    attribute: string;
    studentPreference: string;
    courseValue: number;
    contribution: string;
  }[];
}

function getScoreDescription(attributeName: string, score: number): string {
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
  let codes: string[] | null = null;

  for (const answer of history.answers) {
    let matchingCodes: string[] = [];

    if (answer.questionType === "fixed_category") {
      const facultyNames = answer.selectedOptionIds.flatMap(
        (id) => CATEGORY_TO_FACULTY[id] ?? []
      );
      if (facultyNames.length > 0) {
        const { data } = await supabase.from("courses").select("code").in("faculty", facultyNames);
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
        const wantsLower = answer.selectedOptionIds[0] === "below"; // "No, I'd prefer easier/lighter"

        if (wantsLower) {
          // Real constraint: exclude anything above the threshold shown
          const thresholdStr = answer.selectedOptionIds[1];
          const threshold = thresholdStr ? parseFloat(thresholdStr) : 5;

          const { data: attrs } = await supabase
            .from("course_attributes")
            .select("course_code, score")
            .eq("attribute_name", question.attributeName);

          matchingCodes = (attrs ?? [])
            .filter((a) => a.score <= threshold)
            .map((a) => a.course_code);
        } else {
          // "Yes, comfortable with this" — permission, not exclusion.
          // Don't filter the pool at all on this answer.
          const { data: allCourses } = await supabase.from("courses").select("code");
          matchingCodes = (allCourses ?? []).map((c) => c.code);
        }
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

// Picks the next question by testing how evenly each unused question splits the pool,
// with a penalty against splits that would overshoot below the 3-5 target range.
export async function pickNextQuestion(
  pool: PoolCourse[],
  askedQuestionIds: string[]
): Promise<(CandidateQuestion & { questionText: string; options: { id: string; label: string }[] }) | null> {
  const candidates = QUESTION_BANK.filter((q) => !askedQuestionIds.includes(q.questionId));
  if (candidates.length === 0 || pool.length === 0) return null;

  const poolCodes = pool.map((c) => c.code);
  const TARGET_MIN = 3;

  const { data: allTags } = await supabase
    .from("course_tags")
    .select("course_code, tag_value")
    .in("course_code", poolCodes);

  const tagsByCourse = new Map<string, Set<string>>();
  for (const row of allTags ?? []) {
    if (!tagsByCourse.has(row.course_code)) tagsByCourse.set(row.course_code, new Set());
    tagsByCourse.get(row.course_code)!.add(row.tag_value);
  }

  const { data: allAttrs } = await supabase
    .from("course_attributes")
    .select("course_code, attribute_name, score")
    .in("course_code", poolCodes);

  const attrsByCourseAndName = new Map<string, number>();
  for (const row of allAttrs ?? []) {
    attrsByCourseAndName.set(`${row.course_code}::${row.attribute_name}`, row.score);
  }

  let best: { question: CandidateQuestion; adjustedScore: number; threshold?: number } | null = null;

  for (const question of candidates) {
    let yesCount = 0;
    let noCount = 0;
    let threshold: number | undefined;

    if (question.questionType === "boolean_tag" && question.tagValue) {
      yesCount = poolCodes.filter((c) => tagsByCourse.get(c)?.has(question.tagValue!)).length;
      noCount = poolCodes.length - yesCount;
      if (yesCount === 0 || noCount === 0) continue;
    } else if (question.questionType === "numeric_threshold" && question.attributeName) {
      const scores = poolCodes
        .map((c) => attrsByCourseAndName.get(`${c}::${question.attributeName}`))
        .filter((s): s is number => s !== undefined)
        .sort((a, b) => a - b);
      if (scores.length === 0) continue;

      threshold = scores[Math.floor(scores.length / 2)];
      yesCount = scores.filter((s) => s <= threshold!).length; // "below" side
      noCount = scores.length - yesCount; // "above" side
      if (yesCount === 0 || noCount === 0) continue;
    } else {
      continue;
    }

    const splitScore = 1 - Math.abs(yesCount - noCount) / poolCodes.length;

    // Penalize splits that would leave a side smaller than TARGET_MIN,
    // to avoid overshooting straight past the 3-5 stopping range.
    const smallerSide = Math.min(yesCount, noCount);
    const overshootPenalty = smallerSide < TARGET_MIN ? (TARGET_MIN - smallerSide) * 0.15 : 0;
    const adjustedScore = splitScore - overshootPenalty;

    if (!best || adjustedScore > best.adjustedScore) {
      best = { question, adjustedScore, threshold };
    }
  }

  if (!best) return null;

  let questionText = best.question.questionText;

  if (best.question.questionType === "numeric_threshold") {
    const level = Math.round(best.threshold!);
    const description = getScoreDescription(best.question.attributeName!, best.threshold!);

    if (best.question.attributeName === "difficulty") {
      questionText = `Would you be comfortable with a ${description} course (difficulty rating of ${level}/10)?`;
    } else if (best.question.attributeName === "workload") {
      questionText = `Would you be comfortable with ${description} (workload rating of ${level}/10)?`;
    } else if (best.question.attributeName === "assessment") {
      questionText = `Would you be comfortable with ${description} (assessment rating of ${level}/10)?`;
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

  return { ...best.question, questionText, options };
}

export async function scoreFinalPool(
  pool: PoolCourse[],
  history: QuizAnswerHistory
): Promise<ScoredCourse[]> {
  if (pool.length === 0) return [];
  const poolCodes = pool.map((c) => c.code);

  const { data: allAttrs } = await supabase
    .from("course_attributes")
    .select("course_code, attribute_name, score")
    .in("course_code", poolCodes);

  const { data: allTags } = await supabase
    .from("course_tags")
    .select("course_code, tag_value")
    .in("course_code", poolCodes);

  const attrLookup = new Map<string, number>();
  for (const row of allAttrs ?? []) {
    attrLookup.set(`${row.course_code}::${row.attribute_name}`, row.score);
  }

  const tagLookup = new Map<string, Set<string>>();
  for (const row of allTags ?? []) {
    if (!tagLookup.has(row.course_code)) tagLookup.set(row.course_code, new Set());
    tagLookup.get(row.course_code)!.add(row.tag_value);
  }

  const scored: ScoredCourse[] = poolCodes.map((code) => {
    let score = 0;
    let maxScore = 0;
    const explanation: ScoredCourse["explanation"] = [];

    for (const answer of history.answers) {
      if (answer.questionType === "fixed_category") continue;

      const question = QUESTION_BANK.find((q) => q.questionId === answer.questionId);
      if (!question) continue;

      if (question.questionType === "boolean_tag" && question.tagValue) {
        maxScore += 1;
        const wantsTag = answer.selectedOptionIds[0] === "yes";
        const hasTag = tagLookup.get(code)?.has(question.tagValue) ?? false;
        const matched = wantsTag === hasTag;
        if (matched) score += 1;

        explanation.push({
          attribute: question.tagValue,
          studentPreference: wantsTag ? `wants "${question.tagValue}"` : `doesn't want "${question.tagValue}"`,
          courseValue: hasTag ? 1 : 0,
          contribution: matched ? "Matched your preference" : "Didn't match your preference",
        });
      }

      if (question.questionType === "numeric_threshold" && question.attributeName) {
        maxScore += 1;
        const courseValue = attrLookup.get(`${code}::${question.attributeName}`);
        if (courseValue === undefined) continue;

        const wantsLower = answer.selectedOptionIds[0] === "below";
        const thresholdStr = answer.selectedOptionIds[1];
        const threshold = thresholdStr ? parseFloat(thresholdStr) : 5;

        let matched: boolean;
        if (wantsLower) {
          matched = courseValue <= threshold; // real constraint, still checked
        } else {
          matched = true; // "comfortable with X" never penalizes any course on this axis
        }

        if (matched) score += 1;

        explanation.push({
          attribute: question.attributeName,
          studentPreference: wantsLower ? "prefers lower " + question.attributeName : "open to higher " + question.attributeName,
          courseValue,
          contribution: matched
            ? `Matched your preference (${question.attributeName}: ${courseValue.toFixed(1)}/10)`
            : `Didn't quite match (${question.attributeName}: ${courseValue.toFixed(1)}/10)`,
        });
      }
    }

    return {
      code,
      matchScore: maxScore > 0 ? score / maxScore : 0.5,
      explanation,
    };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore);
}

export async function buildRecommendedCourses(scored: ScoredCourse[]) {
  if (scored.length === 0) return [];
  const codes = scored.map((s) => s.code);

  const { data: courses } = await supabase
    .from("courses")
    .select("code, name, overview")
    .in("code", codes);

  const { data: tags } = await supabase
    .from("course_tags")
    .select("course_code, tag_value, source_review_id, reviews(source, url)")
    .in("course_code", codes);

  const courseLookup = new Map((courses ?? []).map((c) => [c.code, c]));

  const tagsByCourse = new Map<string, { label: string; source: string; sourceUrl: string }[]>();
  for (const row of tags ?? []) {
    if (!tagsByCourse.has(row.course_code)) tagsByCourse.set(row.course_code, []);
    const review = (row as any).reviews;
    tagsByCourse.get(row.course_code)!.push({
      label: row.tag_value,
      source: review?.source ?? "handbook",
      sourceUrl: review?.url ?? `/courses/${row.course_code}`,
    });
  }

  return scored.map((s) => {
    const course = courseLookup.get(s.code);
    return {
      code: s.code,
      name: course?.name ?? s.code,
      matchScore: s.matchScore,
      tags: tagsByCourse.get(s.code) ?? [],
      shortSummary: course?.overview ?? "",
      explanation: s.explanation,
    };
  });
}

export function buildSummary(history: QuizAnswerHistory): string {
  const parts: string[] = [];

  for (const answer of history.answers) {
    const question = QUESTION_BANK.find((q) => q.questionId === answer.questionId);
    if (!question) continue;

    if (question.questionType === "boolean_tag" && question.tagValue) {
      const wantsTag = answer.selectedOptionIds[0] === "yes";
      if (wantsTag) parts.push(question.tagValue.toLowerCase());
    }

    if (question.questionType === "numeric_threshold" && question.attributeName) {
      const wantsLower = answer.selectedOptionIds[0] === "below";
      parts.push(`${wantsLower ? "low" : "high"} ${question.attributeName}`);
    }
  }

  if (parts.length === 0) {
    return "Based on your answers, we've matched you with courses that fit your general preferences.";
  }

  return `Based on your interest in ${parts.slice(0, -1).join(", ")}${parts.length > 1 ? ", and " : ""
    }${parts[parts.length - 1]}, here are your best course matches.`;
}