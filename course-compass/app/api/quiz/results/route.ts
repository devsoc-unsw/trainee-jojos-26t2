import { NextRequest, NextResponse } from "next/server";
import {
  getFilteredPool,
  scoreFinalPool,
  buildRecommendedCourses,
  buildSummary,
  QuizAnswerHistory,
} from "@/lib/quizEngine";

export async function POST(req: NextRequest) {
  const body: QuizAnswerHistory = await req.json();

  const pool = await getFilteredPool(body);
  const ranked = await scoreFinalPool(pool, body);
  const enriched = await buildRecommendedCourses(ranked);
  const summary = buildSummary(body);
  return NextResponse.json({
    summary,
    topMatch: enriched[0] ?? null,
    otherMatches: enriched.slice(1),
  });
}