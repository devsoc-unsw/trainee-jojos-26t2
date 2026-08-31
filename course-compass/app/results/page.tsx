// app/results/page.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/app/components/Buttons/primary";
import { SecondaryButton } from "@/app/components/Buttons/secondary";

export default function Results() {
  const router = useRouter();

  function handleRetakeQuiz() {
    sessionStorage.removeItem("quiz_answers");
    router.push("/quiz");
  }

  function handleBrowseCourses() {
    router.push("/courses");
  }

  return (
    <main className="px-6 py-6 sm:px-10 lg:px-16">
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-4">
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
              technology, low-difficulty path preferences, and project-based
              evaluation criteria.
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
    </main>
  );
}