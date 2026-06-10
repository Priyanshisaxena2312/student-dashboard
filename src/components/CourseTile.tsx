"use client";

import { motion } from "framer-motion";
import { BentoTile } from "./BentoGrid";
import { DynamicIcon } from "./DynamicIcon";
import { Course } from "@/types";

interface CourseTileProps {
  course: Course;
  index?: number;
}

export default function CourseTile({ course, index = 0 }: CourseTileProps) {
  const gradients = [
    "from-violet-600/20 to-indigo-600/20",
    "from-cyan-600/20 to-blue-600/20",
    "from-emerald-600/20 to-teal-600/20",
    "from-rose-600/20 to-pink-600/20",
  ];

  const accentColors = [
    "from-accent-purple to-indigo-500",
    "from-accent-cyan to-blue-500",
    "from-accent-green to-teal-500",
    "from-rose-500 to-pink-500",
  ];

  const gradientIndex = index % gradients.length;

  return (
    <BentoTile className="col-span-1 row-span-1" index={index}>
      <div className="relative flex flex-col justify-between h-full p-5">
        {/* Background gradient mesh */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradients[gradientIndex]} opacity-40`}
        />

        <header className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <DynamicIcon name={course.icon_name} className="w-5 h-5 text-zinc-300" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-100 line-clamp-2">
              {course.title}
            </h3>
          </div>
        </header>

        <footer className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400">Progress</span>
            <span className="text-xs font-semibold text-zinc-300">
              {course.progress}%
            </span>
          </div>
          {/* Animated progress bar */}
          <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${course.progress}%` }}
              transition={{
                delay: 0.5 + index * 0.15,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`h-full rounded-full bg-gradient-to-r ${accentColors[gradientIndex]}`}
            />
          </div>
        </footer>
      </div>
    </BentoTile>
  );
}
