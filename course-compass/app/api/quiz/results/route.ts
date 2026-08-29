import { NextRequest, NextResponse } from "next/server";
import {
  getFilteredPool,
  scoreFinalPool,
  QuizAnswerHistory,
} from "@/lib/quizEngine";

// POST /api/quiz/results
// Body: { answers: QuizAnswer[] }
export async function POST(req: NextRequest) {
  const body: QuizAnswerHistory = await req.json();

  // Recompute the pool server-side — never trust a client-sent pool.
  const pool = await getFilteredPool(body);
  const ranked = await scoreFinalPool(pool, body);

  // TODO: once scoreFinalPool is implemented, build the real response:
  // summary, topMatch (ranked[0]) with explanation, otherMatches (ranked[1:])
  return NextResponse.json({
    summary: "",
    topMatch: ranked[0] ?? null,
    otherMatches: ranked.slice(1),
  });
}
