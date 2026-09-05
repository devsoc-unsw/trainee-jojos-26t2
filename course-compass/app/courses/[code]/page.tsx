"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
    workloadSeverity: number | null;
    courseDifficulty: number | null;
    assessmentIntensity: number | null;
  };
  handbook: {
    description: string;
    prerequisites: string;
    exclusions: string;
    uoc: number;
  };
}

interface Review {
  reviewId: string;
  quote: string;
  source: "studentvip" | "unilectives";
  url: string;
  date: string | null;
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
  const code = params.code;

  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [reviewsError, setReviewsError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const year = new Date().getFullYear();
  const handbookUrl = `https://www.handbook.unsw.edu.au/undergraduate/courses/${year}/${course?.code}`;

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
      Promise.all([fetchCourse(), fetchReviews()]).finally(() =>
        setLoading(false)
      );
    }
  }, [code]);

  if (loading) {
    return (
      <main className="px-6 py-6 sm:px-10 lg:px-16">
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-40 rounded bg-gray-300/50" />
          <div className="h-8 w-2/3 rounded bg-gray-300/50" />
          <div className="mt-4 h-32 w-full rounded-xl bg-gray-200/60" />
          <div className="h-32 w-full rounded-xl bg-gray-200/60" />
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-6 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-text-secondary">
        <span >{course?.code || code}</span>

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

      <div className="mt-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-3xl font-bold text-text-primary">
          {course?.name || courseError || "Course not found"}
        </h1>
{/* 
          <a    
            href={handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--white)] hover:brightness-110"
          >
            View on Handbook */}
          {/* </a> */}

        <a
          href={handbookUrl}
          className="
            inline-flex
            items-center
            gap-2
            text-[13px]
            font-semibold
            text-[#404e7c]
            hover:text-[var(--green)]
            transition-colors
          "
        >
          Open Handbook
          <ArrowRight size={15} />
        </a>
      </div>

      {course?.shortSummary && (
        <p className="mt-2 text-text-primary">{course.shortSummary}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {course?.tags && course.tags.length > 0 ? (
          course.tags.map((tag) => (
            <span
              key={tag.label}
              className="

                bg-[#f8fafc]

                text-[#64748b]

                text-[11px]

                py-1

                px-3

                rounded-md

                border border-[#e2e8f0]

                font-medium

              "
            >
              {tag.label}
            </span>
          ))
        ) : (
          <span className="text-xs text-text-secondary">
            No tags available yet.
          </span>
        )}
      </div>

      {/* Evaluation Ratings */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-text-primary">
          Evaluation Ratings
        </h2>

        {course?.ratings ? (
          <div className="mt-4 flex flex-col gap-3">
            <RatingRow
              label="Workload Severity"
              value={course.ratings.workloadSeverity}
            />
            <RatingRow
              label="Content Difficulty"
              value={course.ratings.courseDifficulty}
            />
            <RatingRow
              label="Assessment Intensity"
              value={course.ratings.assessmentIntensity}
            />
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
              <span className="font-semibold text-text-primary">
                Description:
              </span>{" "}
              {course.handbook.description || "No description available."}
            </p>

            {course.handbook.prerequisites && (
              <p>
                <span className="font-semibold text-text-primary">
                  Prerequisites:
                </span>{" "}
                {course.handbook.prerequisites}
              </p>
            )}

            {course.handbook.exclusions && (
              <p>
                <span className="font-semibold text-text-primary">
                  Exclusions:
                </span>{" "}
                {course.handbook.exclusions}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-4 text-sm text-text-secondary">
            {courseError || "Handbook information not available yet."}
          </p>
        )}
      </section>

      {/* Student Reviews */}
      <section className="mt-6">
        <h2 className="text-lg font-bold text-text-primary">
          Student Reviews
        </h2>

        {reviews.length > 0 ? (
          <div className="mt-4 flex flex-col gap-4">
            {reviews.filter((r) => r.quote != "").map((review) => (
              <ReviewCard key={review.reviewId} review={review} />
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

function StarRating({ value }: { value: number | null }) {
  if (value === null) {
    return (
      <span className="text-sm font-semibold text-text-secondary">
        N/A
      </span>
    );
  }

  // Convert the rating from /10 to /5.
  // Round to the nearest 0.5.
  const starsOutOfFive = Math.round((value / 2) * 2) / 2;

  return (
    <div
      className="flex items-center gap-0.5"
      title={`${value.toFixed(1)} / 10`}
      aria-label={`${starsOutOfFive} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;

        if (starsOutOfFive >= starValue) {
          // Full star
          return (
            <span
              key={i}
              className="text-lg leading-none text-[var(--primary)]"
            >
              ★
            </span>
          );
        }

        if (starsOutOfFive === starValue - 0.5) {
          // Half star
          return (
            <span
              key={i}
              className="relative text-lg leading-none text-gray-300"
            >
              <span
                className="absolute left-0 top-0 overflow-hidden text-[var(--primary)]"
                style={{ width: "50%" }}
              >
                ★
              </span>
              <span>★</span>
            </span>
          );
        }

        // Empty star
        return (
          <span
            key={i}
            className="text-lg leading-none text-gray-300"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
function RatingRow({
  label,
  value,
}: {
  label: string;
  value: number | null;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">{label}</span>
      <StarRating value={value} />
    </div>
  );
}

const QUOTE_TRUNCATE_LENGTH = 220;

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = review.quote.length > QUOTE_TRUNCATE_LENGTH;
  const displayText =
    isLong && !expanded
      ? review.quote.slice(0, QUOTE_TRUNCATE_LENGTH).trimEnd() + "..."
      : review.quote;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex-1">
        <p className="text-sm text-text-primary">
          &ldquo;{displayText}&rdquo;
        </p>

        {isLong && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
            className="mt-1 text-xs font-medium text-primary hover:underline cursor-pointer"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {review.date && (
          <p className="mt-2 text-xs text-text-secondary">{review.date}</p>
        )}
      </div>
        
        <a
    
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg"
        title={`View on ${review.source}`}
      >
        {review.source === "studentvip" ? (
          <img
            width="20px"
            src="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://studentvip.com.au&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
          />
        ) : (
          <img
            width="20px"
            src="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://unilectives.devsoc.app&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
          />
        )}
      </a>
    </div>
  );
}