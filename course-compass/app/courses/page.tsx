"use client";

import { useEffect, useState } from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import { CourseCard } from "../components/courseCard";

const FACULTIES = [
  {
    id: "arts-design-architecture",
    label: "Arts, Design & Architecture",
  },
  {
    id: "business",
    label: "Business",
  },
  {
    id: "engineering",
    label: "Engineering",
  },
  {
    id: "law-justice",
    label: "Law & Justice",
  },
  {
    id: "medicine-health",
    label: "Medicine & Health",
  },
  {
    id: "science",
    label: "Science",
  },
];

type Ratings = {
  workload: number;
  difficulty: number;
  assessment: number;
};

const PAGE_SIZE = 30;

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const [selectedFaculties, setSelectedFaculties] = useState<string[]>([
    "engineering",
  ]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [ratings, setRatings] = useState<Ratings>({
    workload: 5,
    difficulty: 5,
    assessment: 5,
  });

  const [courses, setCourses] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const [offset, setOffset] = useState(0);

  const toggleFaculty = (faculty: string) => {
    setSelectedFaculties((current) =>
      current.includes(faculty)
        ? current.filter((item) => item !== faculty)
        : [...current, faculty]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );
  };

  const updateRating = (
    type: keyof Ratings,
    value: number
  ) => {
    setRatings((current) => ({
      ...current,
      [type]: value,
    }));
  };

  /*
   * Fetch courses whenever filters change.
   */
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);

      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search.trim());
      }

      if (selectedFaculties.length > 0) {
        params.set(
          "faculties",
          selectedFaculties.join(",")
        );
      }

      if (selectedTags.length > 0) {
        params.set("tags", selectedTags.join(","));
      }

      params.set(
        "maxWorkload",
        String(ratings.workload * 2)
      );

      params.set(
        "maxDifficulty",
        String(ratings.difficulty * 2)
      );

      params.set(
        "maxAssessmentIntensity",
        String(ratings.assessment * 2)
      );

      params.set("offset", "0");
      params.set("limit", String(PAGE_SIZE));

      try {
        const response = await fetch(
          `/api/courses?${params.toString()}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        setCourses(data.courses ?? []);
        setHasMore(data.hasMore ?? false);
        setOffset(PAGE_SIZE);
      } catch (error) {
        console.error(error);
        setCourses([]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [
    search,
    selectedFaculties,
    selectedTags,
    ratings,
  ]);

  /*
   * Load the next batch.
   */
  const loadMore = async () => {
    setLoadingMore(true);

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (selectedFaculties.length > 0) {
      params.set(
        "faculties",
        selectedFaculties.join(",")
      );
    }

    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }

    params.set(
      "maxWorkload",
      String(ratings.workload * 2)
    );

    params.set(
      "maxDifficulty",
      String(ratings.difficulty * 2)
    );

    params.set(
      "maxAssessmentIntensity",
      String(ratings.assessment * 2)
    );

    params.set("offset", String(offset));
    params.set("limit", String(PAGE_SIZE));

    try {
      const response = await fetch(
        `/api/courses?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();

      setCourses((current) => [
        ...current,
        ...(data.courses ?? []),
      ]);

      setHasMore(data.hasMore ?? false);
      setOffset((current) => current + PAGE_SIZE);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F5]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <h1>Browse Courses</h1>
          <p>
            Find courses that match your preferences.
          </p>
        </div>

        <div className="mb-8">
          <Search
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">

          <aside>
            <Filters
              faculties={FACULTIES}
              selectedFaculties={selectedFaculties}
              onFacultyChange={toggleFaculty}
              selectedTags={selectedTags}
              onTagChange={toggleTag}
              ratings={ratings}
              onRatingChange={updateRating}
            />
          </aside>

          <section>

            {loading ? (
              <div>Loading courses...</div>
            ) : courses.length === 0 ? (
              <div>No courses found</div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  {courses.map((course) => (
                    <CourseCard
                      key={course.course_code}
                      code={course.course_code}
                      title={course.course_name}
                      description={course.description}
                      tags={course.tags ?? []}
                    />
                  ))}

                </div>

                {hasMore && (
                  <div className="mt-8 flex justify-center">

                    <button
                      onClick={loadMore}
                      disabled={loadingMore}
                      className="rounded-lg bg-[#404e7c] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                    >
                      {loadingMore
                        ? "Loading..."
                        : "Load more"}
                    </button>

                  </div>
                )}
              </>
            )}

          </section>
        </div>
      </div>
    </main>
  );
}