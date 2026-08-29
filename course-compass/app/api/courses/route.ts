import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/courses
// Query params: search, tags, maxWorkload, maxDifficulty, maxAssessmentIntensity, page, limit
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") ?? undefined;
  const tags = searchParams.get("tags")?.split(",") ?? undefined;
  const maxWorkload = searchParams.get("maxWorkload");
  const maxDifficulty = searchParams.get("maxDifficulty");
  const maxAssessmentIntensity = searchParams.get("maxAssessmentIntensity");
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 20);

  // TODO: build the real Supabase query using the filters above.
  // const { data, error, count } = await supabase.from("courses").select("*", { count: "exact" })...

  return NextResponse.json({
    results: [],
    page,
    totalPages: 0,
    totalResults: 0,
  });
}
