// Shared quiz logic used by /api/quiz/next-question and /api/quiz/results.
// Filtering/scoring is stubbed — replace with real Supabase queries.

export type QuestionType = "fixed_category" | "boolean_tag" | "numeric_threshold";

export interface QuizAnswer {
  questionId: string;
  questionType: QuestionType;
  selectedOptionIds: string[];
}

export interface QuizAnswerHistory {
  answers: QuizAnswer[];
}

// TODO: replace with a real Supabase query that filters courses
// by chaining every answer in the history as a WHERE clause.
export async function getFilteredPool(history: QuizAnswerHistory) {
  // Placeholder: return an empty pool until wired up to Supabase.
  return [] as { code: string }[];
}

// TODO: for each not-yet-asked question, compute how evenly it splits
// the current pool (boolean_tag: count per value; numeric_threshold:
// split at median) and return the question with the best split.
export async function pickNextQuestion(
  pool: { code: string }[],
  askedQuestionIds: string[]
) {
  return null; // placeholder
}

// TODO: score every course in the narrowed pool (3-5 courses) against
// the full answer history and return them sorted by matchScore desc.
export async function scoreFinalPool(
  pool: { code: string }[],
  history: QuizAnswerHistory
) {
  return [] as {
    code: string;
    matchScore: number;
  }[];
}
