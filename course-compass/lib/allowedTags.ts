// Keep this in sync with courseInfoScripts/aiProcessor.py's ALLOWED_TAGS.
export const ALLOWED_TAGS = [
    // # --- Assessment / teaching format ---
    "Project",
    "Exam",
    "Assignment",
    "Group Work",
    "Individual Work",
    "Essay",
    "Lab",
    "Fieldwork",
    "Presentation",
    "Quiz/Test",
    "Tutorial",
    "Workshop",
    "Practical",
    "Research",
    "Case Study",
    "Participation",
    "Oral Assessment",

    // # --- Work / study characteristics ---
    "Reading-Heavy",
    "Math-Intensive",
    "Writing-Intensive",
    "Content-Heavy",
    "Fast-Paced",
    "Self-Directed",
    "Memorisation-Heavy",
    "Attendance-Required",
    "Weekly Assessments",
    "Final Exam",
    "No Final Exam",

    // # --- Course experience ---
    "Time-Consuming",
    "Flexible",
    "Structured",
    "Heavy Workload",
    "Light Workload",
    "Practical/Applied",
    "Theory-Focused",
    "Industry-Relevant",

    // # --- Level ---
    "Introductory",
    "Intermediate",
    "Advanced",
    "Postgraduate",

    // # --- Computer Science / Engineering ---
    "Programming",
    "Frontend",
    "Backend",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "AI/Machine Learning",
    "Networking",
    "Security",
    "Databases",
    "Systems Programming",
    "Algorithms & Theory",
    "Software Engineering",
    "Hardware/Electronics",
    "Robotics",
    "Cloud Computing",
    "Embedded Systems",
    "Computer Architecture",
    "Operating Systems",

    // # --- Mathematics / Statistics ---
    "Statistics",
    "Pure Mathematics",
    "Applied Mathematics",
    "Numerical Methods",
    "Calculus",
    "Linear Algebra",
    "Discrete Mathematics",
    "Probability",
    "Optimisation",

    // # --- Science ---
    "Biology",
    "Chemistry",
    "Physics",
    "Earth & Environmental Science",
    "Psychology",

    // # --- Business / Economics ---
    "Accounting",
    "Finance",
    "Marketing",
    "Management",
    "Economics",
    "Entrepreneurship",

    // # --- Law ---
    "Legal Writing",
    "Case Law",
    "Mooting/Advocacy",
    "Problem Questions",
    "Legal Research",

    // # --- Arts / Humanities / Social Science ---
    "Creative Writing",
    "History",
    "Philosophy",
    "Politics & Society",
    "Media & Communication",
    "Languages",
    "Sociology",

    // # --- Medicine / Health ---
    "Clinical Placement",
    "Anatomy/Physiology",
    "Public Health",
    "Clinical Skills",

    // # --- Design / Built Environment ---
    "Design-Focused",
    "Studio-Based",
    "Architecture",
    "Design Portfolio",
    "CAD",

    // # --- Industry / professional ---
    "Industry Placement",
    "Professional Practice",
    "Industry Project",
    "Guest Lectures",
] as const;

export type AllowedTag = (typeof ALLOWED_TAGS)[number];

// Tags that don't make sense as a standalone quiz question — pure metadata,
// not a student preference (e.g. "Postgraduate" is filtered by degree, not asked).
export const EXCLUDED_FROM_QUIZ: AllowedTag[] = [
  "Postgraduate", "Introductory", "Intermediate", "Advanced",
  "Final Exam", "No Final Exam", // redundant with q_assessment numeric question
];

// Custom phrasing for tags where a generic template reads awkwardly.
// Anything not listed here falls back to the generic template below.
export const TAG_QUESTION_TEXT: Partial<Record<AllowedTag, string>> = {
  "Group Work": "Do you enjoy working in groups?",
  "Individual Work": "Do you prefer working independently?",
  "Programming": "Are you interested in programming-heavy courses?",
  "Math-Intensive": "Are you comfortable with math-heavy content?",
  "Writing-Intensive": "Do you enjoy writing-intensive courses?",
  "Reading-Heavy": "Are you comfortable with heavy reading loads?",
  "Exam": "Do you prefer exam-based assessment?",
  "Project": "Do you prefer project-based assessment over exams?",
  "Fast-Paced": "Do you prefer a fast-paced course?",
  "Self-Directed": "Do you prefer self-directed learning?",
  "Industry-Relevant": "Is industry relevance important to you?",
  "Clinical Placement": "Are you interested in courses with clinical placements?",
  "Fieldwork": "Are you interested in courses involving fieldwork?",
};

export function getTagQuestionText(tag: AllowedTag): string {
  return TAG_QUESTION_TEXT[tag] ?? `Are you interested in courses tagged "${tag}"?`;
}