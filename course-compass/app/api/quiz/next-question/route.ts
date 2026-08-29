import { NextRequest, NextResponse } from "next/server";
import {
  getFilteredPool,
  pickNextQuestion,
  QuizAnswerHistory,
} from "@/lib/quizEngine";

// POST /api/quiz/next-question
// Body: { answers: QuizAnswer[] }
export async function POST(req: NextRequest) {
  const body: QuizAnswerHistory = await req.json();

  const pool = await getFilteredPool(body);

  if (pool.length <= 5) {
    return NextResponse.json({
      done: true,
      remainingCount: pool.length,
    });
  }

  const askedQuestionIds = body.answers.map((a) => a.questionId);
  const nextQuestion = await pickNextQuestion(pool, askedQuestionIds);
  
  // TODO: once pickNextQuestion is implemented, return the real question object
  return NextResponse.json(
    nextQuestion ?? { done: true, remainingCount: pool.length }
  );
}
