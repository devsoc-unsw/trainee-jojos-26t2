// app/results/recommended_course.tsx
"use client";

import { useRouter } from "next/navigation";

interface SourcedTag {
  label: string;
  source: "reddit" | "unilectives" | "handbook";
  sourceUrl: string;
}

interface ExplanationItem {
  attribute: string;
  studentPreference: string;
  courseValue: number;
  contribution: string;
}

export interface RecommendedCourseData {
  code: string;
  name: string;
  matchScore: number;
  tags: SourcedTag[];
  shortSummary: string;
  explanation: ExplanationItem[];
}

interface RecommendedCourseProps {
  course: RecommendedCourseData | null;
}

export function RecommendedCourse({ course }: RecommendedCourseProps) {
  const router = useRouter();

  if (!course) {
    return (
      <section className="rounded-xl bg-secondary p-6">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Top Match
          </span>
        </div>
        <p className="mt-2 text-lg font-medium text-white/70">
          No course match available yet.
        </p>
      </section>
    );
  }

  function handleClick() {
    router.push(`/courses/${course!.code}`);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full rounded-xl bg-secondary p-6 text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <div className="flex items-center gap-2">
        <span className="rounded bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Top Match
        </span>
        <span className="text-sm font-medium text-white/80">
          {course.code}
        </span>
      </div>

      <h2 className="mt-2 text-2xl font-bold text-green">{course.name}</h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag.label}
            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-text-primary"
          >
            {tag.label}
          </span>
        ))}
      </div>
    </button>
  );
}