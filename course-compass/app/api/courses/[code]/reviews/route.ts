import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/courses/[code]/reviews
// Query params: source, tag, page, limit
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code: rawCode } = await params;
    const code = rawCode.toUpperCase();

    const { searchParams } = new URL(req.url);

    const source = searchParams.get("source") ?? undefined;
    const tag = searchParams.get("tag") ?? undefined;

    const page = Math.max(
      1,
      Number(searchParams.get("page") ?? 1)
    );

    const limit = Math.max(
      1,
      Number(searchParams.get("limit") ?? 10)
    );

    const offset = (page - 1) * limit;

    let query = supabase
      .from("reviews")
      .select("id, source, url, raw_text, term, year", {
        count: "exact",
      })
      .eq("course_code", code)
      .order("year", { ascending: false });

    // Filter by review source
    if (source) {
      query = query.eq("source", source);
    }

    // Filter by tag
    if (tag) {
      const { data: taggedIds, error: tagError } = await supabase
        .from("course_tags")
        .select("source_review_id")
        .eq("course_code", code)
        .eq("tag_value", tag);

      if (tagError) {
        console.error("Tag lookup error:", tagError);

        return NextResponse.json(
          { error: "Failed to filter reviews by tag" },
          { status: 500 }
        );
      }

      const ids = (taggedIds ?? [])
        .map((t) => t.source_review_id)
        .filter((id): id is string => id !== null);

      if (ids.length === 0) {
        return NextResponse.json({
          results: [],
          page,
          totalPages: 0,
        });
      }

      query = query.in("id", ids);
    }

    // Fetch reviews
    const {
      data: reviews,
      count,
      error: reviewsError,
    } = await query.range(offset, offset + limit - 1);

    if (reviewsError) {
      console.error("Reviews query error:", reviewsError);

      return NextResponse.json(
        { error: "Failed to fetch reviews" },
        { status: 500 }
      );
    }

    const reviewIds = (reviews ?? []).map((r) => r.id);

    // Fetch tags belonging to these reviews.
    // We deliberately avoid the Supabase foreign-key join here.
    let allTagsForReviews: {
      tag_value: string;
      source_review_id: string | null;
    }[] = [];

    if (reviewIds.length > 0) {
      const { data: tagRows, error: allTagsError } = await supabase
        .from("course_tags")
        .select("tag_value, source_review_id")
        .in("source_review_id", reviewIds);

      if (allTagsError) {
        console.error("Review tags query error:", allTagsError);
      } else {
        allTagsForReviews = tagRows ?? [];
      }
    }

    // Fetch the reviews associated with those tags so we can
    // determine each tag's source and URL.
    const taggedReviewIds = [
      ...new Set(
        allTagsForReviews
          .map((row) => row.source_review_id)
          .filter((id): id is string => id !== null)
      ),
    ];

    const reviewInfoById = new Map<
      string,
      { source: string; url: string }
    >();

    if (taggedReviewIds.length > 0) {
      const { data: taggedReviews, error: taggedReviewsError } =
        await supabase
          .from("reviews")
          .select("id, source, url")
          .in("id", taggedReviewIds);

      if (taggedReviewsError) {
        console.error(
          "Tagged review lookup error:",
          taggedReviewsError
        );
      } else {
        for (const review of taggedReviews ?? []) {
          reviewInfoById.set(review.id, {
            source: review.source,
            url: review.url,
          });
        }
      }
    }

    // Group tags by review ID
    const tagsByReview = new Map<
      string,
      {
        label: string;
        source: string;
        sourceUrl: string;
      }[]
    >();

    for (const row of allTagsForReviews) {
      if (!row.source_review_id) continue;

      if (!tagsByReview.has(row.source_review_id)) {
        tagsByReview.set(row.source_review_id, []);
      }

      const reviewInfo = reviewInfoById.get(row.source_review_id);

      tagsByReview.get(row.source_review_id)!.push({
        label: row.tag_value,
        source: reviewInfo?.source ?? "handbook",
        sourceUrl: reviewInfo?.url ?? "",
      });
    }

    // Format response
    const results = (reviews ?? []).map((review) => ({
      reviewId: review.id,
      quote: review.raw_text,
      source: review.source,
      url: review.url,
      date: review.year
        ? `${review.term ?? ""} ${review.year}`.trim()
        : null,
      relatedTags: tagsByReview.get(review.id) ?? [],
    }));

    return NextResponse.json({
      results,
      page,
      totalPages: count ? Math.ceil(count / limit) : 0,
    });
  } catch (error) {
    console.error(
      "GET /api/courses/[code]/reviews failed:",
      error
    );

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
