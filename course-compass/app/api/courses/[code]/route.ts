import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/courses/[code]
export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const { code } = params;

  // TODO: fetch course + ratings + handbook info + tags from Supabase
  // const { data, error } = await supabase.from("courses").select("*").eq("code", code).single();

  const course = null; // placeholder

  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}
