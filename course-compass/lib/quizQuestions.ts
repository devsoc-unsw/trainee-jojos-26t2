export type QuestionType = "fixed_category" | "boolean_tag" | "numeric_threshold";

export interface CandidateQuestion {
  questionId: string;
  questionType: QuestionType;
  questionText: string;
  subtitle?: string;
  multiSelect: boolean;
  // for boolean_tag: the tag_value this question splits on
  tagValue?: string;
  // for numeric_threshold: the attribute_name this question splits on
  attributeName?: string;
}

export const CATEGORY_TO_FACULTY: Record<string, string[]> = {
  "arts-design-architecture": ["Faculty of Arts, Design and Architecture"],
  "business": ["UNSW Business School"],
  "engineering": ["Faculty of Engineering"],
  "law-justice": ["Faculty of Law & Justice"], // confirm exact string in your DB
  "medicine-health": ["Faculty of Medicine and Health"],
  "science": ["Faculty of Science"],
};

export const FIRST_QUESTION: CandidateQuestion = {
  questionId: "q_category",
  questionType: "fixed_category",
  questionText: "What faculty interests you most?",
  subtitle: "Select all that apply. This helps us customize course recommendations to your passion areas.",
  multiSelect: true,
};

export const FIRST_QUESTION_OPTIONS = [
  { id: "arts-design-architecture", label: "Arts, Design & Architecture" },
  { id: "business", label: "Business" },
  { id: "engineering", label: "Engineering" },
  { id: "law-justice", label: "Law & Justice" },
  { id: "medicine-health", label: "Medicine & Health" },
  { id: "science", label: "Science" },
];

// The pool of adaptive questions the engine picks from after the first question.
export const QUESTION_BANK: CandidateQuestion[] = [
  {
    questionId: "q_workload",
    questionType: "numeric_threshold",
    questionText: "How much weekly time can you commit?",
    multiSelect: false,
    attributeName: "workload",
  },
  {
    questionId: "q_difficulty",
    questionType: "numeric_threshold",
    questionText: "How challenging do you want the course to be?",
    multiSelect: false,
    attributeName: "difficulty",
  },
  {
    questionId: "q_assessment",
    questionType: "numeric_threshold",
    questionText: "How demanding should the assessments be?",
    multiSelect: false,
    attributeName: "assessment",
  },
  {
    questionId: "q_group_work",
    questionType: "boolean_tag",
    questionText: "Do you enjoy group work?",
    multiSelect: false,
    tagValue: "Group Work",
  },
  {
    questionId: "q_project",
    questionType: "boolean_tag",
    questionText: "Do you prefer project-based courses over exam-heavy ones?",
    multiSelect: false,
    tagValue: "Project",
  },
  {
    questionId: "q_programming",
    questionType: "boolean_tag",
    questionText: "Are you interested in programming-heavy courses?",
    multiSelect: false,
    tagValue: "Programming",
  },
];