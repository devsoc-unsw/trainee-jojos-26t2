"use client";

import React from 'react';

export default function Search() {
  return (
    <div className="flex items-center bg-white border-[1.5px] border-[#f0e6dd] rounded-[12px] py-[10px] px-[18px] w-full transition-colors duration-200 ease-in-out focus-within:border-[#d8c8ba]">
      <svg 
        className="w-[20px] h-[20px] text-[#718096] mr-[12px] shrink-0" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <input 
        type="text" 
        className="border-none outline-none w-full text-[15px] text-[#2d3748] bg-transparent placeholder:text-[#a0aec0] placeholder:font-normal" 
        placeholder="Search by course name, code, or keyword..." 
      />
    </div>
  );
}