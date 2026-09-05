const KEY = "quiz_answers";

export interface StoredAnswer {
  questionId: string;
  questionType: "fixed_category" | "boolean_tag" | "numeric_threshold";
  selectedOptionIds: string[];
}

export const quizStorage = {
  get: (): StoredAnswer[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(sessionStorage.getItem(KEY) || "[]");
  },
  add: (answer: StoredAnswer) => {
    const current = quizStorage.get();
    const updated = [...current, answer];
    sessionStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  },
  removeLast: () => {
    const current = quizStorage.get();
    const updated = current.slice(0, -1);
    sessionStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  },
  clear: () => sessionStorage.removeItem(KEY),
};