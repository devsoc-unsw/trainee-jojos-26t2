import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CourseCardStuff {
  code: string;
  title: string;
  description: string;
  tags: string[];
}

export function CourseCard({
  code,
  title,
  description,
  tags,
}: CourseCardStuff) {
  return (
    <div
      className="
        bg-white
        border border-[#e2e8f0]
        rounded-[16px]
        p-6
        flex flex-col
        transition-all duration-200
        hover:border-[var(--green)]
        hover:shadow-md
        aspect-[1.5/1]
        w-full
      "
    >
      <span className="text-[12px] font-semibold text-[#94a3b8] uppercase tracking-wide mb-1">
        {code}
      </span>

      <h3 className="text-[17px] font-[800] text-[#1e293b] leading-tight mb-2 line-clamp-1">
        {title}
      </h3>

      <p className="text-[14px] text-[#64748b] leading-relaxed line-clamp-2 mb-4">
        {description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
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
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/courses/${encodeURIComponent(code)}`}
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
          View course
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}