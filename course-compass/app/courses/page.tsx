"use client";

import React from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import { CourseCard } from "../components/courseCard"; 

// dummy data
const coursesData = [
  { code: "COMP9999", title: "Hardest and Dumbest COMP Course Ever", description: "How to use programming socks.", tags: ["Engineering", "Core"] },
  { code: "MATH6700", title: "Babylonian Mathematics", description: "Using cuneiform for fast integer arithmetic in sub-polynomial time.", tags: ["Science"] },
  { code: "ECON1103", title: "Megaconomics 1", description: "Understanding how to utilise free labour for fish farming.", tags: ["Business"] },
  { code: "ARTS6967", title: "Finno-Korean Hyperwar", description: "Complete timeline of the Finno-Korean Hyperwar; one of the most devastating disagreements everrr.", tags: ["Arts & Social"] },
  { code: "PHYS4444", title: "Drive-By Mechanics", description: "Detailed study of drive-by techniques, with a focus on projectile motion.", tags: ["Science"] },
  { code: "COMM2501", title: "Data Visualisation and Communication", description: "Dumbest course ever.", tags: ["Business", "Core"] },
];

export default function Courses() {
  return (
    <div className="w-full min-h-screen pt-[40px] px-[0.5%]">
      
      <div className="flex w-full gap-[4%] items-start">
        
        <div className="w-[280px] shrink-0">
          <div className="flex flex-col items-start">
            <div className="flex items-end gap-2">
              <img src="/owls/owl_search.png" className="w-20 h-20 object-contain -mb-4" alt="Logo" />
              <h2 className="text-2xl font-extrabold text-[#2d2d44]">Filters</h2>
            </div>
            <div className="mt-4">
              <Filters />
            </div>
          </div>
        </div>


        <div className="flex-1 flex flex-col gap-8">
          <div className="w-full">
            <Search />
          </div>
          <div className="grid grid-cols-3 gap-[2%] w-full pb-20">
            {coursesData.map((course) => (
              <CourseCard key={course.code} {...course} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}