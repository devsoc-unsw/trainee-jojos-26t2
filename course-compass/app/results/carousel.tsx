// app/results/carousel.tsx
"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/app/components/courseCard";
import { RecommendedCourseData } from "@/app/results/recommended_course";

interface OtherMatchesCarouselProps {
  courses: RecommendedCourseData[];
  loading?: boolean;
}

export function OtherMatchesCarousel({ courses, loading }: OtherMatchesCarouselProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, courses]);

  function scrollByCard(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 288;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + 16) : cardWidth + 16,
      behavior: "smooth",
    });
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-text-primary">Other Close Matches</h2>
      <p className="mt-1 text-sm text-text-secondary">
        These courses strongly complement your core parameters.
      </p>

      {loading ? (
        <div className="mt-4 flex flex-nowrap gap-4 overflow-hidden pb-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-72 shrink-0">
              <Card>
                <div className="p-4 animate-pulse space-y-2">
                  <div className="h-3 w-16 rounded bg-gray-300/50" />
                  <div className="h-5 w-3/4 rounded bg-gray-300/50" />
                  <div className="h-4 w-full rounded bg-gray-300/40" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-6 w-16 rounded-full bg-gray-300/40" />
                    <div className="h-6 w-20 rounded-full bg-gray-300/40" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : courses.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-text-secondary">
          No other close matches available yet.
        </div>
      ) : (
        <div className="relative mt-4">
          {canScrollLeft && (
            <>
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent" />
              <button
                onClick={() => scrollByCard("left")}
                aria-label="Scroll to previous courses"
                className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronLeft className="h-5 w-5 text-text-primary" />
              </button>
            </>
          )}

          {canScrollRight && (
            <>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent" />
              <button
                onClick={() => scrollByCard("right")}
                aria-label="Scroll to more courses"
                className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronRight className="h-5 w-5 text-text-primary" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {courses.map((course) => (
              <div
                key={course.code}
                data-card
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/courses/${course.code}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(`/courses/${course.code}`);
                  }
                }}
                className="w-72 shrink-0"
              >
                <Card>
                  <div className="p-4 text-left">
                    <span className="text-xs font-semibold text-text-secondary">
                      {course.code}
                    </span>
                    <h3 className="mt-1 font-bold text-text-primary">{course.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{course.shortSummary}</p>
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
        </div>
      )}
    </section>
  );
}