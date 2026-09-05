import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/courses/[code]
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code: rawCode } = await params;
    const code = rawCode.toUpperCase();

    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select("*")
      .eq("code", code)
      .single();

    if (courseError || !course) {
      console.error("Course lookup error:", courseError);

      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    const { data: attributes, error: attrError } = await supabase
      .from("course_attributes")
      .select("attribute_name, score, confidence")
      .eq("course_code", code);

    if (attrError) {
      console.error("Attributes error:", attrError);
    }

    const { data: tags, error: tagError } = await supabase
      .from("course_tags")
      .select(
        "tag_value, source_review_id, reviews!course_tags_source_review_id_fkey(source, url)"
      )
      .eq("course_code", code);

    if (tagError) {
      console.error("Tags error:", tagError);
    }

    const attrLookup = Object.fromEntries(
      (attributes ?? []).map((a) => [a.attribute_name, a.score])
    );

    const sourcedTags = (tags ?? []).map((t) => {
      const review = (t as any).reviews;

      return {
        label: t.tag_value,
        source: review?.source ?? "handbook",
        sourceUrl:
          review?.url ??
          course.handbook_url ??
          `/courses/${code}`,
      };
    });

    return NextResponse.json({
      code: course.code,
      name: course.name,
      shortSummary: course.overview ?? "",
      faculty: course.faculty ?? "",
      term: "",
      tags: sourcedTags,
      ratings: {
        workloadSeverity: attrLookup["workload"] ?? null,
        courseDifficulty: attrLookup["difficulty"] ?? null,
        assessmentIntensity: attrLookup["assessment"] ?? null,
      },
      handbook: {
        description: course.description ?? "",
        prerequisites: "",
        exclusions: "",
        uoc: 0,
      },
    });
  } catch (error) {
    console.error("GET /api/courses/[code] failed:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
