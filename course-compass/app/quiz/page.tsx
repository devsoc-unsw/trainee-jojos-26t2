// app/quiz/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { quizStorage, StoredAnswer } from "@/lib/quizStorage";
import { PrimaryButton } from "../components/Buttons/primary";
import { SecondaryButton } from "../components/Buttons/secondary";
import owlAsk from "@/public/owls/owl.svg";
import Image from "next/image";

import artsHumanitiesIcon from "@/public/question-icons/arts-humanities.svg";
import businessEconomicsIcon from "@/public/question-icons/business-economics.svg";
import engineeringIcon from "@/public/question-icons/engineering.svg";
import healthMedicineIcon from "@/public/question-icons/health-medicine.svg";
import scienceTechnologyIcon from "@/public/question-icons/science-technology.svg";
import socialSciencesIcon from "@/public/question-icons/social-sciences.svg";
import checkSelectedIcon from "@/public/question-icons/check-selected.svg";

const OPTION_ICONS: Record<string, typeof artsHumanitiesIcon> = {
  "arts-design-architecture": artsHumanitiesIcon,
  business: businessEconomicsIcon,
  engineering: engineeringIcon,
  "law-justice": socialSciencesIcon,
  "medicine-health": healthMedicineIcon,
  science: scienceTechnologyIcon,
};

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

  const showIcons =
    !!question?.options?.length &&
    question.options.every((opt) => OPTION_ICONS[opt.id]);

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16">
      {/* Speech bubble + owl */}
      <div className="flex w-full items-center justify-center gap-8 py-6">
        <div className="relative min-h-[150px] w-full max-w-[500px] rounded-2xl bg-[#d9d9d9] px-10 py-8">
          {isDone ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-lg font-medium text-text-primary">
                We&apos;ve narrowed it down. Ready to see your matches?
              </p>
            </div>
          ) : loading || !question ? (
            <div className="animate-pulse space-y-2">
              <div className="h-5 w-3/4 rounded bg-gray-400/40" />
              <div className="h-5 w-1/2 rounded bg-gray-400/40" />
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-text-primary">
                {question.questionText}
              </h1>
              {question.subtitle && (
                <p className="mt-2 text-base text-text-secondary">
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
              -right-8
              -translate-y-1/2
              w-0
              h-0
              border-t-[40px]
              border-t-transparent
              border-b-[40px]
              border-b-transparent
              border-l-[40px]
              border-l-[#d9d9d9]
            "
          />
        </div>

        <div className="hidden h-28 w-28 flex-shrink-0 sm:block">
          <Image
            src={owlAsk}
            alt="Owl"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {isDone ? (
        <div className="mt-12 flex w-full items-center justify-between py-4">
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
          <div className="mt-12 w-full rounded-2xl bg-white p-8 shadow-sm">
            <div className="mx-auto flex max-w-[640px] flex-wrap justify-center gap-5">
              {(question?.options ?? []).map((opt) => {
                const isSelected = selected.includes(opt.id);
                const icon = showIcons ? OPTION_ICONS[opt.id] : undefined;

                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    disabled={loading}
                    className={`relative flex w-[192px] flex-col items-start justify-start rounded-xl border p-5 text-left transition disabled:opacity-40 ${
                      isSelected
                        ? "border-primary bg-[#eef1f8]"
                        : "border-gray-200 bg-white hover:border-primary/40"
                    }`}
                  >
                    {/* Checkmark badge, tucked into the corner */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 h-5 w-5">
                        <Image
                          src={checkSelectedIcon}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                    )}

                    {/* Icon circle */}
                    {showIcons && (
                      <div
                        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full transition ${
                          isSelected ? "bg-primary" : "bg-gray-100"
                        }`}
                      >
                        {icon && (
                          <div className="relative h-6 w-6">
                            <Image
                              src={icon}
                              alt=""
                              fill
                              className={`object-contain transition ${
                                isSelected ? "brightness-0 invert" : ""
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <span className="text-base font-semibold text-text-primary">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Back / Next row */}
          <div className="mt-12 flex w-full items-center justify-between py-4">
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