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
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setQuestion(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load quiz question:", err);
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (showFinishInstead) {
      handleFinish();
    } else {
      handleNext();
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col justify-between">
      <form 
        onSubmit={handleSubmit}
        className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col gap-8 justify-center"
      >
        
        {/* [SECTION 1] REDESIGNED SPEECH CARD & OWL ASSISTANT */}
        <div className="w-full flex items-center gap-6">
          {/* Bigger Grey Speech Box */}
          <div className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl p-8 shadow-sm relative">
            {isDone ? (
              <div>
                <h1 className="text-2xl font-bold text-gray-900">All finished!</h1>
                <p className="text-gray-600 text-base mt-2">Ready to review matches?</p>
              </div>
            ) : loading || !question ? (
              <div className="animate-pulse space-y-3">
                <div className="h-6 bg-gray-300/60 rounded w-3/4" />
                <div className="h-4 bg-gray-300/60 rounded w-1/2" />
              </div>
            ) : (
              <div>
                {/* Large Bold Question Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {question.questionText}
                </h1>
                {/* Normal Text Size Subtitle */}
                {question.subtitle && (
                  <p className="text-gray-600 text-base sm:text-lg mt-2 font-medium leading-relaxed">
                    {question.subtitle}
                  </p>
                )}
              </div>
            )}
            
            {/* Matching Grey Speech Bubble Arrow pointing right */}
            <div className="hidden sm:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-100 border-r border-b border-gray-200 rotate-[-45deg]" />
          </div>

          {/* Clean Bigger Owl Avatar Container (No white square background box) */}
          <div className="hidden sm:block w-24 h-24 relative flex-shrink-0 self-center">
            <Image 
              src={owlAsk} 
              alt="Owl Assistant" 
              className="object-contain" 
              fill 
              priority 
            />
          </div>
        </div>

        {/* [SECTION 2] OPTIONS GRID */}
        {!isDone && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
            {loading || !question
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-28 bg-gray-200 animate-pulse rounded-xl" />
                ))
              : (question.options ?? []).map((opt) => {
                  const isSelected = selected.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleOption(opt.id)}
                      disabled={loading}
                      className={`group text-left border rounded-xl p-5 min-h-[112px] flex flex-col justify-between transition-all duration-200 ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-600/20"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="w-full flex justify-between items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        }`}>
                          <span>⚙</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ${
                          isSelected ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 bg-white"
                        }`}>
                          {isSelected && "✓"}
                        </div>
                      </div>
                      
                      <span className="text-sm font-semibold text-gray-800 mt-4 block">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
          </div>
        )}

        {/* [SECTION 3] NAVIGATION ACTION CONTROLS */}
        <div className="w-full flex justify-between items-center mt-4 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            Back
          </button>

          {isDone ? (
            <button 
              type="button" 
              onClick={handleFinish} 
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm text-sm"
            >
              See Matches
            </button>
          ) : (
            <fieldset 
              disabled={selected.length === 0 || loading} 
              className="disabled:opacity-40 disabled:pointer-events-none transition-opacity"
            >
              <PrimaryButton>
                {loading ? "Loading..." : showFinishInstead ? "Finish" : "Next Question"}
              </PrimaryButton>
            </fieldset>
          )}
        </div> 
      </form>
    </div>
  );
}
