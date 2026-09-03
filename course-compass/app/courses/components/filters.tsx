"use client";

import React, { useState } from "react";

function StarRating({ rating, onChange }: { rating: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState<number | null>(null);
  const displayValue = hover !== null ? hover : rating;

  return (
    <div 
      className="relative inline-block text-[18px] leading-none tracking-[2px] select-none" 
      onMouseLeave={() => setHover(null)}
    >
      <div className="text-[#e2e8f0]">★★★★★</div>
      <div 
        className="absolute top-0 left-0 whitespace-nowrap overflow-hidden text-[#2d2d44]" 
        style={{ width: `${(displayValue / 5) * 100}%` }}
      >
        ★★★★★
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex z-10">
        {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => (
          <div 
            key={v} 
            className="flex-1 h-full cursor-pointer" 
            onMouseEnter={() => setHover(v)} 
            onClick={() => onChange(v)} 
          />
        ))}
      </div>
    </div>
  );
}


export default function Filters() {
  const [ratings, setRatings] = useState({ workload: 3, difficulty: 3, intensity: 3 });
  const tags = ["Engineering (CS)", "Science", "Arts & Social", "Business"];

  return (
    <div className="w-[280px] bg-white border-2 border-[#2d2d44] rounded-[12px] p-[25px] font-sans">
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[800] text-[#2d2d44] mb-[15px] mt-0">
            Tags
        </h3>
        <div className="flex flex-col gap-[10px]">
          {tags.map((tag) => (
            <label key={tag} className="flex items-center gap-[12px] text-[14px] text-[#4a5568] cursor-pointer">
              <input 
                type="checkbox" 
                className="accent-[#2d2d44] w-[17px] h-[17px] cursor-pointer" 
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-[30px]">
        <h3 className="text-[15px] font-[800] text-[#2d2d44] mb-[15px] mt-0">
            Ratings
        </h3>
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between items-center text-[14px] text-[#4a5568]">
            <span>Workload</span>
            <StarRating rating={ratings.workload} onChange={(v) => setRatings({...ratings, workload: v})} />
          </div>
          <div className="flex justify-between items-center text-[14px] text-[#4a5568]">
            <span>Course Difficulty</span>
            <StarRating rating={ratings.difficulty} onChange={(v) => setRatings({...ratings, difficulty: v})} />
          </div>
          <div className="flex justify-between items-center text-[14px] text-[#4a5568]">
            <span>Assessment Intensity</span>
            <StarRating rating={ratings.intensity} onChange={(v) => setRatings({...ratings, intensity: v})} />
          </div>
        </div>
      </div>
    </div>
  );
}