"use client"

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface SourcedTag {
  label: string;
  source: "unilectives" | "studentvip" | "handbook";
  sourceUrl: string;
}

interface CourseDetail {
  code: string;
  name: string;
  shortSummary: string;
  tags: SourcedTag[];
  faculty: string;
  term: string;
  ratings: {
    workloadSeverity: number;
    courseDifficulty: number;
    assessmentIntensity: number;
  }
  handbook: {
    description: string;
    prerequisites: string;
    exclusions: string;
    uoc: number;
  }
}

interface Review {
  reviewId: string;
  quote: string;
  source: "studentvip" | "unilectives";
  url: string;
  date: string | null
  relatedTags: SourcedTag[];
}

interface ReviewsResponse {
  results: Review[];
  page: number;
  totalPages: number;
}

const NO_COURSE_PLACEHOLDER = "Course details are not available yet.";
const NO_REVIEWS_PLACEHOLDER = "No student reviews available yet.";

export default function Course() {
  const params = useParams<{ code: string }>();
  const router = useRouter();
  const code = params.code;

  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [reviewsError, setReviewsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`/api/courses/${code}`);
        if (!res.ok) {
          throw new Error(`Course fetch failed: ${res.status}`);
        }
        const data: CourseDetail = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
        setCourseError(NO_COURSE_PLACEHOLDER);
      }
    }

    async function fetchReviews() {
      try {
        const res = await fetch(`/api/courses/${code}/reviews`);
        if (!res.ok) {
          throw new Error(`Reviews fetch failed: ${res.status}`);
        }
        const data: ReviewsResponse = await res.json();
        setReviews(data.results);
      } catch (err) {
        console.error(err);
        setReviewsError(NO_REVIEWS_PLACEHOLDER);
      }
    }

    if (code) {
      fetchCourse();
      fetchReviews();
    }
  }, [code]);

  return (
    <main className="px-6 py-6 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-text-secondary">
        <span>{course?.code || code}</span>
        {course?.faculty && (
          <>
            <span>&middot;</span>
            <span>{course.faculty}</span>
          </>
        )}
        {course?.term && (
          <>
            <span>&middot;</span>
            <span>{course.term}</span>
          </>
        )}
      </div>

      <h1 className="mt-1 text-3xl font-bold text-text-primary">
        {course?.name || courseError || "Loading course..."}
      </h1>

      <div className="mt-3 flex flex-wrap gap-2">
        {course?.tags && course.tags.length > 0 ? (
          course.tags.map((tag) => (
            <span
              key={tag.label}
              className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-text-primary"
            >
              {tag.label}
            </span>
          ))
        ) : (
          <span className="text-xs text-text-secondary">No tags available yet.</span>
        )}
      </div>

      {/* Evaluation Ratings */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-text-primary">Evaluation Ratings</h2>

        {course?.ratings ? (
          <div className="mt-4 flex flex-col gap-3">
            <RatingRow label="Workload Severity" value={course.ratings.workloadSeverity} />
            <RatingRow label="Content Difficulty" value={course.ratings.courseDifficulty} />
            <RatingRow label="Assessment Intensity" value={course.ratings.assessmentIntensity} />
          </div>
        ) : (
          <p className="mt-4 text-sm text-text-secondary">
            {courseError || "Ratings not available yet."}
          </p>
        )}
      </section>

      {/* Official Handbook Information */}
      <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-text-primary">
          Official Handbook Information
        </h2>

        {course?.handbook ? (
          <div className="mt-4 flex flex-col gap-2 text-sm text-text-secondary">
            <p>
              <span className="font-semibold text-text-primary">Description:</span>{" "}
              {course.handbook.description}
            </p>
            <p>
              <span className="font-semibold text-text-primary">Prerequisites:</span>{" "}
              {course.handbook.prerequisites || "None"}
            </p>
            <p>
              <span className="font-semibold text-text-primary">Exclusions:</span>{" "}
              {course.handbook.exclusions || "None"}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-text-secondary">
            {courseError || "Handbook information not available yet."}
          </p>
        )}
      </section>

      {/* Student Reviews */}
      <section className="mt-6">
        <h2 className="text-lg font-bold text-text-primary">Student Reviews</h2>

        {reviews.length > 0 ? (
          <div className="mt-4 flex flex-col gap-4">
            {reviews.map((review) => (
              <div
                key={review.reviewId}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <p className="flex-1 text-sm text-text-primary">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <span className="text-lg" title={review.source}>
                  {review.source === "studentvip" ? "🔶" : "📘"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-text-secondary">
            {reviewsError || NO_REVIEWS_PLACEHOLDER}
          </div>
        )}
      </section>
    </main>
  );
}

function RatingRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">{label}</span>
      <span className="font-semibold text-primary">{value} / 10</span>
    </div>
  );
}