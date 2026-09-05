"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    icon: "/owls/owl_read.svg",
    label: (
      <>
        Open the{" "}
        <Link
          href="/quiz"
          className="underline underline-offset-1 hover:text-[var(--green)] transition-opacity duration-500"
        >
          quiz
        </Link>
      </>
    ),
  },
  {
    icon: "/owls/owl_speak.svg",
    label: "Answer a few questions",
  },
  {
    icon: "/owls/owl_grad.svg",
    label: "Find your course",
  },
];

export function StepCarousel() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // 3 real slides + clone of first slide
  const slides = [...STEPS, STEPS[0]];
  const isAtClone = index === STEPS.length;

  function handleNext() {
    setAnimate(true);
    setIndex((prev) => prev + 1);
  }

  function handleTransitionEnd() {
    if (isAtClone) {
      setAnimate(false);
      setIndex(0);
    }
  }

  return (
    <div className="relative max-w-md mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden rounded-2xl">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            animate ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((step, i) => (
            <div key={i} className="w-full shrink-0 px-1">
              <div
                className="
                  min-h-[150px]
                  rounded-2xl
                  bg-[var(--background)]
                  border
                  border-black/10
                  shadow-lg
                  px-6
                  py-5
                  flex
                  items-center
                  gap-5
                "
              >
                {/* Owl */}
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={step.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-row items-center gap-2">
                  {/* Step number */}
                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-[var(--secondary)]
                      text-[#5be29c]
                      text-sm
                      font-black
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {(i % STEPS.length) + 1}
                  </span>

                  {/* Description */}
                  <p className="text-[#111625] font-black text-lg leading-tight">
                    {step.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        aria-label="Next step"
        className="
          cursor-pointer
          absolute
          top-1/2
          -right-5
          -translate-y-1/2
          w-11
          h-11
          rounded-full
          bg-[var(--secondary)]
          border-2
          border-[#5be29c]
          flex
          items-center
          justify-center
          shadow-lg
          hover:brightness-125
          transition
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#5be29c]
        "
      >
        <svg
          className="w-5 h-5 text-[#5be29c]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {STEPS.map((_, i) => (
          <span
            key={i}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${
                i === index % STEPS.length
                  ? "w-6 bg-[#5be29c]"
                  : "w-1.5 bg-black/20"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}