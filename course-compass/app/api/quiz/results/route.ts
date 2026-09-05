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

  let answers = [...body.answers];
  let pool = await getFilteredPool({ answers });

  // If no courses match, progressively drop the most recent (most specific) answers
  while (pool.length === 0 && answers.length > 1) {
    answers = answers.slice(0, -1);
    pool = await getFilteredPool({ answers });
  }

  const ranked = await scoreFinalPool(pool, { answers: body.answers }); // score against FULL original answers
  const enriched = await buildRecommendedCourses(ranked);
  const summary = buildSummary(body);

  return NextResponse.json({
    summary,
    topMatch: enriched[0] ?? null,
    otherMatches: enriched.slice(1),
  });
}