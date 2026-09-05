"use client";

import Image from "next/image";
import { useState } from "react";

export default function IconBtn() {
  const owls = [
    {
      src: "/owls/owl_icon.svg",
      zoom: 1,
    },
    {
      src: "/owls/jojo/pixil-frame-0 (1).svg",
      zoom: 1.4,
    },
    {
      src: "/owls/jojo/pixil-frame-0 (2).svg",
      zoom: 1.4,
    },
    {
      src: "/owls/jojo/pixil-frame-0 (3).svg",
      zoom: 1.0,
    },
    {
      src: "/owls/jojo/pixil-frame-0 (4).svg",
      zoom: 1.0,
    },
    {
      src: "/owls/jojo/pixil-frame-0 (5).svg",
      zoom: 1.0,
    },
  ];

  const [owl, setOwl] = useState(0);
  const [pressed, setPressed] = useState(false);

  const handlePointerDown = () => {
    setPressed(true);
  };

  const handlePointerUp = () => {
    setOwl((current) => (current + 1) % owls.length);
    setPressed(false);
  };

  const currentOwl = owls[owl];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="
        cursor-pointer
        w-40 h-40
        col-span-2
        relative
        bg-white
        rounded-3xl
        p-6
        flex
        items-center
        justify-center
        shadow-2xl
        select-none
      "
    >
      <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-[#5be29c]/40 pointer-events-none" />

      <div
        className={`
          w-32 h-32
          relative
          transition-transform
          duration-150
          ease-out
          ${pressed ? "scale-75" : "scale-100"}
        `}
        style={{
          transform: `scale(${(pressed ? 0.75 : 1) * currentOwl.zoom})`,
        }}
      >
        <Image
          src={currentOwl.src}
          alt="Course Compass Mascot"
          fill
          sizes="128px"
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}