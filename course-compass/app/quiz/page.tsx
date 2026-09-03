"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { quizStorage, StoredAnswer } from "@/lib/quizStorage";
import { PrimaryButton } from "../components/Buttons/primary";
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

  function handleFinish() {
    router.push("/results");
  }

  const showFinishInstead = (question?.remainingCount ?? Infinity) < 5;

  return (
    <div>
      <div className="mt-5 w-auto flex justify-center items-center">
        <div className="relative bg-[#d9d9d9] px-20 py-12 mr-0 min-h-[120px] min-w-[280px] flex flex-col justify-center">
          {
            isDone ? (
              <div className="mt-4 flex flex-col items-center gap-3">
                <p>We've narrowed it down. Ready to see your matches?</p>
                <button
                  onClick={handleFinish}
                  className="bg-[var(--primary)] text-[var(--white)] rounded-lg px-4 py-2"
                >
                  Finish
                </button>
              </div>) :
              (
                loading || !question ? (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-4 bg-gray-400/40 rounded w-3/2" />
                    <div className="h-4 bg-gray-400/40 rounded w-3/2" />
                  </div>
                ) : (
                  <>
                    <h1>{question.questionText}</h1>
                    {question.subtitle && (
                      <p className="text-[var(--text-secondary)]">{question.subtitle}</p>
                    )}
                  </>
                ))}
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

        <div className="hidden sm:block h-20 w-20">
          <Image src={owlAsk} alt="Owl" />
        </div>
      </div>

      {isDone ? (
        <div className="mt-4 flex flex-col items-center gap-3">
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 my-4">
            {(question?.options ?? []).map((opt) => (
              <button
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                disabled={loading}
                className={`border rounded-lg p-3 disabled:opacity-40 ${selected.includes(opt.id)
                    ? "bg-[var(--primary)] text-[var(--white)]"
                    : "bg-[var(--white)] text-[var(--text-primary)]"
                  }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            onClick={showFinishInstead ? handleFinish : handleNext}
            disabled={selected.length === 0 || loading}
          >
            <PrimaryButton>
              {loading ? "Loading..." : showFinishInstead ? "Finish" : "Next Question"}
            </PrimaryButton>
          </button>

        </>
      )}
    </div>
  );
}