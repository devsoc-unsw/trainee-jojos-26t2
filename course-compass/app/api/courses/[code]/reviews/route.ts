import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/courses/[code]/reviews
// Query params: source, tag, page, limit
export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const { code } = params;
  const { searchParams } = new URL(req.url);

  const source = searchParams.get("source") ?? undefined; // "reddit" | "unilectives"
  const tag = searchParams.get("tag") ?? undefined;
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  // TODO: fetch reviews (+ evidence quotes + SourcedTag info) for this course
  // const { data, error } = await supabase.from("reviews").select("*").eq("course_code", code)...

  return NextResponse.json({
    results: [],
    page,
    totalPages: 0,
  });
}
