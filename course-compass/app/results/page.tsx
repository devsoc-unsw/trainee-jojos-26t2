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

export default function Results() {
  const router = useRouter();

  const [summary, setSummary] = useState<string>("");
  const [topMatch, setTopMatch] = useState<RecommendedCourseData | null>(null);
  const [otherMatches, setOtherMatches] = useState<RecommendedCourseData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      try {
        const storedAnswers = sessionStorage.getItem(QUIZ_ANSWERS_STORAGE_KEY);

        if (!storedAnswers) {
          router.push("/quiz");
          return;
        }

        const answers: QuizAnswer[] = JSON.parse(storedAnswers);

        const res = await fetch("/api/quiz/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers } satisfies QuizAnswerHistory),
        });

        console.log(res);

        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data: QuizResults = await res.json();
        console.log("RESULTS DATA:", JSON.stringify(data, null, 2));
        
        setSummary(data.summary);
        setTopMatch(data.topMatch);
        setOtherMatches(data.otherMatches);
      } catch (err) {
        console.error(err);
        setError("Something went wrong loading your results.");
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, []);

  // ... handleRetakeQuiz, handleBrowseCourses unchanged ...

  return (
    <main className="px-6 py-6 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-4 min-w-[280px]">
          <Image src="/owls/owl_grad.svg" alt="Course Compass owl mascot" width={64} height={64} />

          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-text-primary">Your Best Course Matches</h1>

            <p className="mt-1 text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Why This Was Recommended:</span>
              <br />
              {loading ? (
                <span className="inline-block h-4 w-64 animate-pulse rounded bg-gray-300/50 align-middle" />
              ) : (
                error || summary
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          {/* ... buttons unchanged ... */}
        </div>
      </div>

      <div className="mt-6">
        <RecommendedCourse course={topMatch} loading={loading} />
      </div>

      <OtherMatchesCarousel courses={otherMatches} loading={loading} />
    </main>
  );
}