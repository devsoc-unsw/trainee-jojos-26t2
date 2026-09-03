import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { FIRST_QUESTION, FIRST_QUESTION_OPTIONS } from "@/lib/quizQuestions";

export async function GET() {
  const { count } = await supabase.from("courses").select("*", { count: "exact", head: true });

  return NextResponse.json({
    ...FIRST_QUESTION,
    options: FIRST_QUESTION_OPTIONS,
    remainingCount: count ?? 0,
  });
}