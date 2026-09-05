// app/quiz/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { quizStorage, StoredAnswer } from "@/lib/quizStorage";
import { PrimaryButton } from "../components/Buttons/primary";
import { SecondaryButton } from "../components/Buttons/secondary";
import owlAsk from "@/public/owls/owl.png";
import Image from "next/image";

interface QuizOption {
  id: string;
  label: string;
}

interface QuizQuestionData {
  questionId: string;
  questionType: "fixed_category" | "boolean_tag" | "numeric_threshold";
  questionText: string;
  subtitle?: string;
  multiSelect: boolean;
  options: QuizOption[];
  remainingCount: number;
}

export default function QuizPage() {
  const router = useRouter();
  const [question, setQuestion] = useState<QuizQuestionData | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    quizStorage.clear();
    fetch("/api/quiz/first-question")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
        setLoading(false);
      });
  }, []);

  function toggleOption(id: string) {
    if (question?.multiSelect) {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
      );
    } else {
      setSelected([id]);
    }
  }

  async function handleNext() {
    if (!question || selected.length === 0) return;

    const answer: StoredAnswer = {
      questionId: question.questionId,
      questionType: question.questionType,
      selectedOptionIds: selected,
    };
    const history = quizStorage.add(answer);

    setLoading(true);
    const res = await fetch("/api/quiz/next-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: history }),
    });
    const data = await res.json();

    if (data.done) {
      setIsDone(true);
      setQuestion(null);
      setLoading(false);
      return;
    }

    setQuestion(data);
    setSelected([]);
    setLoading(false);
  }

  async function handleBack() {
    const current = quizStorage.get();
    if (current.length === 0) return;

    const removedAnswer = current[current.length - 1];
    const history = quizStorage.removeLast();

    setLoading(true);
    setIsDone(false);

    if (history.length === 0) {
      const res = await fetch("/api/quiz/first-question");
      const data = await res.json();
      setQuestion(data);
      setSelected([]);
      setLoading(false);
      return;
    }

    const res = await fetch("/api/quiz/next-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: history }),
    });
    const data = await res.json();

    setQuestion(data);
    setSelected(removedAnswer.selectedOptionIds);
    setLoading(false);
  }

  function handleFinish() {
    router.push("/results");
  }

  const showFinishInstead = (question?.remainingCount ?? Infinity) < 5;
  const canGoBack = quizStorage.get().length > 0 && !loading;

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-10">
      {/* Speech bubble + owl */}
      <div className="flex w-full items-center justify-center gap-6">
        <div className="relative min-h-[120px] w-full max-w-[420px] rounded-2xl bg-[#d9d9d9] px-8 py-6">
          {isDone ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="font-medium text-text-primary">
                We&apos;ve narrowed it down. Ready to see your matches?
              </p>
            </div>
          ) : loading || !question ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 w-3/4 rounded bg-gray-400/40" />
              <div className="h-4 w-1/2 rounded bg-gray-400/40" />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold text-text-primary">
                {question.questionText}
              </h1>
              {question.subtitle && (
                <p className="mt-1 text-sm text-text-secondary">
                  {question.subtitle}
                </p>
              )}
            </>
          )}

          {/* Speech bubble point */}
          <div
            className="
              hidden sm:block
              absolute
              top-1/2
              -right-7
              -translate-y-1/2
              w-0
              h-0
              border-t-[35px]
              border-t-transparent
              border-b-[35px]
              border-b-transparent
              border-l-[35px]
              border-l-[#d9d9d9]
            "
          />
        </div>

        <div className="hidden h-24 w-24 flex-shrink-0 sm:block">
          <Image
            src={owlAsk}
            alt="Owl"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {isDone ? (
        <div className="mt-8">
          <div
            role="button"
            tabIndex={0}
            onClick={handleFinish}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleFinish();
            }}
          >
            <PrimaryButton>Finish</PrimaryButton>
          </div>
        </div>
      ) : (
        <>
          {/* Options card */}
          <div className="mt-8 w-full rounded-2xl bg-white p-6 shadow-sm">
            <div className="mx-auto grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
              {(question?.options ?? []).map((opt) => {
                const isSelected = selected.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    disabled={loading}
                    className={`rounded-xl border p-4 text-left transition disabled:opacity-40 ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 bg-white hover:border-primary/40"
                    }`}
                  >
                    <span className="text-sm font-semibold text-text-primary">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Back / Next row */}
          <div className="mt-6 flex w-full items-center justify-between">
            {canGoBack ? (
              <div
                role="button"
                tabIndex={0}
                onClick={handleBack}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleBack();
                }}
              >
                <SecondaryButton>Back</SecondaryButton>
              </div>
            ) : (
              <span />
            )}

            <div
              role="button"
              tabIndex={0}
              aria-disabled={selected.length === 0 || loading}
              onClick={() => {
                if (selected.length === 0 || loading) return;
                showFinishInstead ? handleFinish() : handleNext();
              }}
              onKeyDown={(e) => {
                if (
                  (e.key === "Enter" || e.key === " ") &&
                  !(selected.length === 0 || loading)
                ) {
                  showFinishInstead ? handleFinish() : handleNext();
                }
              }}
              className={
                selected.length === 0 || loading
                  ? "pointer-events-none opacity-40"
                  : ""
              }
            >
              <PrimaryButton>
                {loading
                  ? "Loading..."
                  : showFinishInstead
                  ? "Finish"
                  : "Next Question"}
              </PrimaryButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
}