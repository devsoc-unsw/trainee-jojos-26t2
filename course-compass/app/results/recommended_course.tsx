"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SourcedTag {
  label: string;
  source: "unilectives" | "handbook" | "studentvip";
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
  loading?: boolean;
}

export function RecommendedCourse({
  course,
  loading,
}: RecommendedCourseProps) {
  if (loading) {
    return (
      <section className="rounded-xl bg-secondary p-6">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Top Match
          </span>
        </div>

        <div className="mt-3 space-y-2 animate-pulse">
          <div className="h-6 w-2/3 rounded bg-white/20" />
          <div className="h-4 w-full rounded bg-white/10" />

          <div className="mt-3 flex gap-2">
            <div className="h-6 w-20 rounded-full bg-white/10" />
            <div className="h-6 w-24 rounded-full bg-white/10" />
            <div className="h-6 w-16 rounded-full bg-white/10" />
          </div>
        </div>
      </section>
    );
  }

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

  return (
    <div
      className="
      w-full
      rounded-xl
      bg-secondary
      p-6
      text-left
    "
    >
      <div className="flex items-center gap-2">
        <span className="rounded bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Top Match
        </span>

        <span className="text-sm font-medium text-white/80">
          {course.code}
        </span>
      </div>

      <h2 className="mt-2 text-2xl font-bold text-green">
        {course.name}
      </h2>

      <p className="mt-1 text-sm text-white/80">
        {course.shortSummary}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag.label}
            className="
            rounded-full
            bg-white
            px-3
            py-1
            text-xs
            font-medium
            text-text-primary
          "
          >
            {tag.label}
          </span>
        ))}
      </div>
      <Link
        href={`/courses/${encodeURIComponent(course.code)}`}
        className="
            mt-3
            inline-flex
            items-center
            gap-2
            text-[13px]
            font-semibold
            text-[#404e7c]
            text-[var(--white)]
            hover:text-[var(--green)]
            transition-colors
          "
      >
        View course
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}