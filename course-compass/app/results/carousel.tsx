// app/results/carousel.tsx
"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/app/components/courseCard";
import { RecommendedCourseData } from "@/app/results/recommended_course";

interface OtherMatchesCarouselProps {
  courses: RecommendedCourseData[];
}

export function OtherMatchesCarousel({ courses }: OtherMatchesCarouselProps) {
  const router = useRouter();

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-text-primary">
        Other Close Matches
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        These courses strongly complement your core parameters.
      </p>

      {courses.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-text-secondary">
          No other close matches available yet.
        </div>
      ) : (
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {courses.map((course) => (
            <div
              key={course.code}
              role="button"
              tabIndex={0}
              onClick={() => router.push(`/courses/${course.code}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(`/courses/${course.code}`);
                }
              }}
            >
              <Card>
                <div className="p-4 text-left">
                  <span className="text-xs font-semibold text-text-secondary">
                    {course.code}
                  </span>
                  <h3 className="mt-1 font-bold text-text-primary">
                    {course.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {course.shortSummary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="rounded-full bg-background px-3 py-1 text-xs font-medium text-text-primary"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}