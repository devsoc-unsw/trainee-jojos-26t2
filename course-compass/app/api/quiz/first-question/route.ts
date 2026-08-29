import { NextResponse } from "next/server";

// GET /api/quiz/first-question
// Always returns the same fixed safeguard question (broad category, multi-select).
export async function GET() {
  const question = {
    questionId: "q_category",
    questionType: "fixed_category",
    questionText: "What topics interest you most?",
    subtitle:
      "Select all that apply. This helps us customize course recommendations to your passion areas.",
    multiSelect: true,
    options: [
      { id: "science-tech", label: "Science & Technology" },
      { id: "arts-humanities", label: "Arts & Humanities" },
      { id: "business-economics", label: "Business & Economics" },
      { id: "health-medicine", label: "Health & Medicine" },
      { id: "engineering", label: "Engineering" },
      { id: "social-sciences", label: "Social Sciences" },
    ],
    remainingCount: 0, // TODO: replace with actual total course count
  };

  return NextResponse.json(question);
}
