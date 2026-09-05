import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { CATEGORY_TO_FACULTY } from "@/lib/quizQuestions";


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = 30;
    const offset = Number(searchParams.get("offset") ?? 0);

    const search = searchParams.get("search") ?? "";

    const faculties =
      searchParams.get("faculties")?.split(",").filter(Boolean) ?? [];

    const tags =
      searchParams.get("tags")?.split(",").filter(Boolean) ?? [];

    const maxWorkload = Number(
      searchParams.get("maxWorkload") ?? 10
    );

    const maxDifficulty = Number(
      searchParams.get("maxDifficulty") ?? 10
    );

    const maxAssessmentIntensity = Number(
      searchParams.get("maxAssessmentIntensity") ?? 10
    );

    /*
     * ---------------------------------------------------------
     * 1. Get courses
     * ---------------------------------------------------------
     */

    let courseCodes: string[] | null = null;

    /*
     * ---------------------------------------------------------
     * 2. Faculty filter
     * ---------------------------------------------------------
     */
if (faculties.length > 0) {
  const facultyValues = faculties.flatMap(
    (category) => CATEGORY_TO_FACULTY[category] ?? []
  );

  if (facultyValues.length === 0) {
    return NextResponse.json({ courses: [] });
  }

  const { data: facultyCourses, error: facultyError } =
    await supabase
      .from("courses")
      .select("code")
      .in("faculty", facultyValues);

  if (facultyError) {
    console.error("Faculty query error:", facultyError);

    return NextResponse.json(
      { error: facultyError.message },
      { status: 500 }
    );
  }

  courseCodes =
    facultyCourses?.map((course) => course.code) ?? [];

  if (courseCodes.length === 0) {
    return NextResponse.json({ courses: [] });
  }
}

    /*
     * ---------------------------------------------------------
     * 3. Tag filter
     * ---------------------------------------------------------
     */

if (tags.length > 0) {
  const { data: tagCourses, error: tagError } = await supabase
    .from("course_tags")
    .select("course_code, tag_value")
    .in("tag_value", tags);

  if (tagError) {
    console.error("Tag query error:", tagError);

    return NextResponse.json(
      { error: tagError.message },
      { status: 500 }
    );
  }

  /*
   * Group tags by course.
   *
   * A course must contain ALL selected tags.
   */
  const tagsByCourse = new Map<string, Set<string>>();

  for (const row of tagCourses ?? []) {
    if (!row.course_code || !row.tag_value) continue;

    if (!tagsByCourse.has(row.course_code)) {
      tagsByCourse.set(row.course_code, new Set());
    }

    tagsByCourse.get(row.course_code)!.add(row.tag_value);
  }

  /*
   * Keep only courses that have every selected tag.
   */
  const matchingCourseCodes = Array.from(tagsByCourse.entries())
    .filter(([_, courseTags]) =>
      tags.every((tag) => courseTags.has(tag))
    )
    .map(([courseCode]) => courseCode);

  /*
   * Combine with faculty filtering if one exists.
   */
  if (courseCodes !== null) {
    courseCodes = courseCodes.filter((code) =>
      matchingCourseCodes.includes(code)
    );
  } else {
    courseCodes = matchingCourseCodes;
  }

  if (courseCodes.length === 0) {
    return NextResponse.json({ courses: [] });
  }
}
    /*
     * ---------------------------------------------------------
     * 4. Get courses from courses table
     * ---------------------------------------------------------
     */

    let query = supabase.from("courses").select("*");

    /*
     * Search course code OR course name
     */
    if (search.trim()) {
      const escapedSearch = search
        .trim()
        .replace(/[%_]/g, "\\$&");

      query = query.or(
        `code.ilike.%${escapedSearch}%,name.ilike.%${escapedSearch}%`
      );
    }

    /*
     * Apply faculty/tag course-code restrictions
     */
    if (courseCodes !== null) {
      query = query.in("code", courseCodes);
    }

    const { data: courses, error: coursesError } = await query
      .order("code")
      .range(0, 9999);
    if (coursesError) {
      console.error("Courses query error:", coursesError);

      return NextResponse.json(
        { error: coursesError.message },
        { status: 500 }
      );
    }

    if (!courses || courses.length === 0) {
      return NextResponse.json({ courses: [] });
    }

    /*
     * ---------------------------------------------------------
     * 5. Get attributes
     *
     * course_attributes stores:
     *
     * course_code | attribute_name | score
     *
     * So we need to turn the rows into:
     *
     * {
     *   workload: ...,
     *   difficulty: ...,
     *   assessment_intensity: ...
     * }
     * ---------------------------------------------------------
     */

    const codes = courses.map((course) => course.code);

    const { data: attributes, error: attributesError } =
      await supabase
        .from("course_attributes")
        .select("course_code, attribute_name, score")
        .in("course_code", codes);

    if (attributesError) {
      console.error("Attributes query error:", attributesError);

      return NextResponse.json(
        { error: attributesError.message },
        { status: 500 }
      );
    }

    /*
     * Group attributes by course
     */

    const attributesByCourse = new Map<
      string,
      {
        workload?: number;
        difficulty?: number;
        assessment?: number;
      }
    >();

    for (const attribute of attributes ?? []) {
      if (!attribute.course_code) continue;

      if (!attributesByCourse.has(attribute.course_code)) {
        attributesByCourse.set(attribute.course_code, {});
      }

      const courseAttributes =
        attributesByCourse.get(attribute.course_code)!;

      const score = Number(attribute.score);

      if (attribute.attribute_name === "workload") {
        courseAttributes.workload = score;
      }

      if (attribute.attribute_name === "difficulty") {
        courseAttributes.difficulty = score;
      }

      if (
        attribute.attribute_name === "assessment"
      ) {
        courseAttributes.assessment = score;
      }
    }

    /*
     * ---------------------------------------------------------
     * 6. Apply rating filters
     * ---------------------------------------------------------
     */

    const filteredCourses = courses.filter((course) => {
      const attributesForCourse =
        attributesByCourse.get(course.code);

      /*
       * If a course doesn't have attributes, don't show it
       * when rating filters are being used.
       */
      if (!attributesForCourse) {
        return false;
      }

      const workload = attributesForCourse.workload;
      const difficulty = attributesForCourse.difficulty;
      const assessment =
        attributesForCourse.assessment;

      if (
        workload === undefined ||
        difficulty === undefined ||
        assessment === undefined
      ) {
        return false;
      }

      return (
        workload <= maxWorkload &&
        difficulty <= maxDifficulty &&
        assessment <= maxAssessmentIntensity
      );
    });

    /*
     * ---------------------------------------------------------
     * 7. Get tags for remaining courses
     * ---------------------------------------------------------
     */

    const filteredCodes = filteredCourses.map(
      (course) => course.code
    );

    let courseTags: {
      course_code: string | null;
      tag_value: string | null;
    }[] = [];

    if (filteredCodes.length > 0) {
      const { data: tagsData, error: tagsError } =
        await supabase
          .from("course_tags")
          .select("course_code, tag_value")
          .in("course_code", filteredCodes);

      if (tagsError) {
        console.error("Course tags query error:", tagsError);

        return NextResponse.json(
          { error: tagsError.message },
          { status: 500 }
        );
      }

      courseTags = tagsData ?? [];
    }

    /*
     * ---------------------------------------------------------
     * 8. Group tags by course
     * ---------------------------------------------------------
     */

    const tagsByCourse = new Map<string, string[]>();

    for (const row of courseTags) {
      if (!row.course_code || !row.tag_value) continue;

      if (!tagsByCourse.has(row.course_code)) {
        tagsByCourse.set(row.course_code, []);
      }

      tagsByCourse.get(row.course_code)!.push(row.tag_value);
    }

    /*
     * ---------------------------------------------------------
     * 9. Build response
     * ---------------------------------------------------------
     */

    const result = filteredCourses.map((course) => {
      const courseAttributes =
        attributesByCourse.get(course.code);

      return {
        ...course,

        // These names are convenient for the frontend
        course_code: course.code,
        course_name: course.name,

        workload: courseAttributes?.workload,
        difficulty: courseAttributes?.difficulty,
        assessment_intensity:
          courseAttributes?.assessment,

        tags: tagsByCourse.get(course.code) ?? [],
      };
    });

    const paginatedCourses = result.slice(offset, offset + limit);

    return NextResponse.json({
      courses: paginatedCourses,
      hasMore: offset + limit < result.length,
      total: result.length,
    });
  } catch (error) {
    console.error("COURSES API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}