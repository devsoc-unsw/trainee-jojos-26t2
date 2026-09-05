"use client";

import { useMemo, useState } from "react";
import { ALLOWED_TAGS } from "@/lib/allowedTags";

type Faculty = {
  id: string;
  label: string;
};

type Ratings = {
  workload: number;
  difficulty: number;
  assessment: number;
};

interface FiltersProps {
  faculties: Faculty[];
  selectedFaculties: string[];
  onFacultyChange: (faculty: string) => void;

  selectedTags: string[];
  onTagChange: (tag: string) => void;

  ratings: Ratings;
  onRatingChange: (
    type: keyof Ratings,
    value: number
  ) => void;
}

function RatingFilter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-[#100c29]">
          {label}
        </span>

        <span className="text-xs text-[#44526a]">
          Max {value * 2}/10
        </span>
      </div>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="text-2xl leading-none"
            aria-label={`Maximum ${star} out of 5`}
          >
            {star <= value ? "★" : "☆"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Filters({
  faculties,
  selectedFaculties,
  onFacultyChange,
  selectedTags = [],
  onTagChange,
  ratings,
  onRatingChange,
}: FiltersProps) {
  const [tagSearch, setTagSearch] = useState("");

  const availableTags = useMemo(() => {
    const search = tagSearch.trim().toLowerCase();

    return ALLOWED_TAGS.filter((tag) => {
      if (selectedTags.includes(tag)) {
        return false;
      }

      if (!search) {
        return true;
      }

      return tag.toLowerCase().includes(search);
    });
  }, [tagSearch, selectedTags]);

  return (
    <div className="space-y-8">
      {/* Faculty */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-[#100c29]">
          Faculty
        </h2>

        <div className="space-y-2">
          {faculties.map((faculty) => (
            <label
              key={faculty.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#44526a]"
            >
              <input
                type="checkbox"
                checked={selectedFaculties.includes(
                  faculty.id
                )}
                onChange={() =>
                  onFacultyChange(faculty.id)
                }
                className="h-4 w-4 rounded border-gray-300"
              />

              <span>{faculty.label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-[#100c29]">
          Tags
        </h2>

        <input
          type="text"
          value={tagSearch}
          onChange={(event) =>
            setTagSearch(event.target.value)
          }
          placeholder="Search tags..."
          className="mb-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#404e7c]"
        />

        {selectedTags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagChange(tag)}
                className="rounded-full bg-[#404e7c] px-3 py-1 text-xs text-white"
              >
                {tag} ×
              </button>
            ))}
          </div>
        )}

        <div className="max-h-60 space-y-1 overflow-y-auto">
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(tag)}
              className="block w-full rounded-md px-2 py-1.5 text-left text-sm text-[#44526a] hover:bg-gray-100"
            >
              {tag}
            </button>
          ))}

          {availableTags.length === 0 && (
            <p className="px-2 py-2 text-sm text-[#44526a]">
              No tags found.
            </p>
          )}
        </div>
      </section>

      {/* Ratings */}
      <section>
        <h2 className="mb-4 text-sm font-semibold text-[#100c29]">
          Ratings
        </h2>

        <div className="space-y-5">
          <RatingFilter
            label="Workload"
            value={ratings.workload}
            onChange={(value) =>
              onRatingChange("workload", value)
            }
          />

          <RatingFilter
            label="Course Difficulty"
            value={ratings.difficulty}
            onChange={(value) =>
              onRatingChange("difficulty", value)
            }
          />

          <RatingFilter
            label="Assessment Intensity"
            value={ratings.assessment}
            onChange={(value) =>
              onRatingChange("assessment", value)
            }
          />
        </div>
      </section>
    </div>
  );
}