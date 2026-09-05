import React from "react";
import Vido from "./video";
import MeetTheTeam from "./meeter";

export default function About() {
  return (
    /* 1. Added flex-col to stack items, and gap-8 for spacing */
    <main className="flex flex-col items-center justify-center p-6 bg-[#f9f9f7] min-h-screen gap-8 overflow-x-hidden">
          
      {/* TOP SECTION: Speech Bubble & Mascot */}
      {/* This wrapper is the same width as the video below */}
      <div className="relative w-full max-w-3xl">
        
        {/* The Speech Bubble */}
        <div className="relative bg-[#e5e7eb] p-8 md:p-10 rounded-sm shadow-sm z-10">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-[#3c486b]">
              Welcome to Course Compass!
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
              This is team Jojos' 26T2 training program project, aimed at helping you decide what courses to choose in your degree.
              Click the video below for a tutorial on how Course Compass works!
            </p>
          </div>

          {/* Triangle Tail */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -right-4 
                      w-0 h-0 
                      border-t-[15px] border-t-transparent 
                      border-b-[15px] border-b-transparent 
                      border-l-[20px] border-l-[#e5e7eb]" 
          />
        </div>

        {/* THE MASCOT: Positioned outside the bubble to the right */}
        {/* -right-24 or -right-28 pushes it past the tail */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-24 md:-right-28">
          <img 
            src="/owls/owl.png" 
            alt="Mascot" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain pixelated"
          />
        </div>
      </div>

      {/* BOTTOM SECTION: Video (Matches max-w-2xl) */}
      <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md z-0">
        <div className="aspect-video bg-gray-200 rounded overflow-hidden">
            <Vido videoId="MseM_Dske5c"/>
        </div>
      </div>
      <div>
           <div
    style={{
      height: '2px',
      background: 'linear-gradient(to right, transparent, var(--green), transparent)',
      margin: '2rem 0',
    }}
  />       <MeetTheTeam />
      </div>
    </main>
  );
}