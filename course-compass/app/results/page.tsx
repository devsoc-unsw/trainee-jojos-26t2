// app/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/app/components/Buttons/primary";
import { SecondaryButton } from "@/app/components/Buttons/secondary";
import {
  RecommendedCourse,
  RecommendedCourseData,
} from "@/app/results/recommended_course";
import { OtherMatchesCarousel } from "@/app/results/carousel";

interface QuizAnswer {
  questionId: string;
  questionType: "fixed_category" | "boolean_tag" | "numeric_threshold";
  selectedOptionIds: string[];
}

interface QuizAnswerHistory {
  answers: QuizAnswer[];
}

interface QuizResults {
  summary: string;
  topMatch: RecommendedCourseData;
  otherMatches: RecommendedCourseData[];
}

const QUIZ_ANSWERS_STORAGE_KEY = "quiz_answers";

// Dummy data for quiz results
const DUMMY_RESULTS: QuizResults = {
  summary:
    "According to your answers to the quiz, you tend to be more practical in your learning. We recommend a course that focuses heavily on project-based assessments. ",

  topMatch: {
    code: "COMP2420",
    name: "Introduction to Data Science",
    matchScore: 0.94,
    tags: [
      {
        label: "Moderate Workload",
        source: "unilectives",
        sourceUrl: "https://unilectives.devsoc.app/course/COMP2420",
      },
      {
        label: "Low Difficulty",
        source: "studentvip",
        sourceUrl: "https://studentvip.com.au",
      },
      {
        label: "Project-Heavy",
        source: "handbook",
        sourceUrl: "https://www.handbook.unsw.edu.au",
      },
    ],
    shortSummary: "An introductory course to data science.",
    explanation: [],
  },

  otherMatches: [
    {
      code: "MATH1014",
      name: "Mathematics for Data Analysis",
      matchScore: 0.67,
      tags: [
        {
          label: "Math Focus",
          source: "handbook",
          sourceUrl: "https://www.handbook.unsw.edu.au",
        },
        {
          label: "Highly Rated",
          source: "unilectives",
          sourceUrl: "https://unilectives.devsoc.app/course/MATH1014",
        },
      ],
      shortSummary:
        "High overlap with logical analysis requirements without complex abstract proofs",
      explanation: [],
    },
    {
      code: "MATH1014",
      name: "Mathematics for Data Analysis",
      matchScore: 0.67,
      tags: [
        {
          label: "Math Focus",
          source: "handbook",
          sourceUrl: "https://www.handbook.unsw.edu.au",
        },
        {
          label: "Highly Rated",
          source: "unilectives",
          sourceUrl: "https://unilectives.devsoc.app/course/MATH1014",
        },
      ],
      shortSummary:
        "High overlap with logical analysis requirements without complex abstract proofs",
      explanation: [],
    },
    {
      code: "MATH1014",
      name: "Mathematics for Data Analysis",
      matchScore: 0.67,
      tags: [
        {
          label: "Math Focus",
          source: "handbook",
          sourceUrl: "https://www.handbook.unsw.edu.au",
        },
        {
          label: "Highly Rated",
          source: "unilectives",
          sourceUrl: "https://unilectives.devsoc.app/course/MATH1014",
        },
      ],
      shortSummary:
        "High overlap with logical analysis requirements without complex abstract proofs",
      explanation: [],
    },
  ],
};

export default function Results() {
  const router = useRouter();

  const [summary, setSummary] = useState<string>("");
  const [topMatch, setTopMatch] = useState<RecommendedCourseData | null>(null);
  const [otherMatches, setOtherMatches] = useState<RecommendedCourseData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Using dummy data for now — swap back to the real fetch below once
    // /api/quiz/results is ready.
    setSummary(DUMMY_RESULTS.summary);
    setTopMatch(DUMMY_RESULTS.topMatch);
    setOtherMatches(DUMMY_RESULTS.otherMatches);

    /* ---- REAL FETCH LOGIC — restore this when the API is ready ----

    async function fetchResults() {
      try {
        const storedAnswers = sessionStorage.getItem(QUIZ_ANSWERS_STORAGE_KEY);

        if (!storedAnswers) {
          setError(NO_RESULTS_PLACEHOLDER);
          return;
        }

        const answers: QuizAnswer[] = JSON.parse(storedAnswers);

        const res = await fetch("/api/quiz/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers } satisfies QuizAnswerHistory),
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const data: QuizResults = await res.json();
        setSummary(data.summary);
        setTopMatch(data.topMatch);
        setOtherMatches(data.otherMatches);
      } catch (err) {
        console.error(err);
        setError("Something went wrong loading your results.");
      }
    }

    fetchResults();

    ---- END REAL FETCH LOGIC ---- */
  }, []);

  function handleRetakeQuiz() {
    sessionStorage.removeItem(QUIZ_ANSWERS_STORAGE_KEY);
    router.push("/quiz");
  }

  function handleBrowseCourses() {
    router.push("/courses");
  }

  return (
    <main className="px-6 py-6 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-4 min-w-[280px]">
          <Image
            src="/owls/owl_grad.svg"
            alt="Course Compass owl mascot"
            width={64}
            height={64}
          />

          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-text-primary">
              Your Best Course Matches
            </h1>

            <p className="mt-1 text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                Why This Was Recommended:
              </span>
              <br />
              {error || summary}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            role="button"
            tabIndex={0}
            onClick={handleRetakeQuiz}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleRetakeQuiz();
            }}
          >
            <SecondaryButton>Retake Quiz</SecondaryButton>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={handleBrowseCourses}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleBrowseCourses();
            }}
          >
            <PrimaryButton>Browse All Courses</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <RecommendedCourse course={topMatch} />
      </div>

      <OtherMatchesCarousel courses={otherMatches} />
    </main>
  );
}