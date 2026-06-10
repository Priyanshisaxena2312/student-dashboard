"use client";

import { motion } from "framer-motion";
import { BentoTile } from "./BentoGrid";
import { Activity } from "lucide-react";

interface ActivityTileProps {
  index?: number;
}

// Generate mock contribution data
function generateContributions(): number[][] {
  const weeks = 12;
  const days = 7;
  const data: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];

    for (let d = 0; d < days; d++) {
      week.push(
        Math.random() > 0.3
          ? Math.floor(Math.random() * 4) + 1
          : 0
      );
    }

    data.push(week);
  }

  return data;
}
const contributions = generateContributions();

const intensityColors = [
  "bg-white/5",
  "bg-emerald-900/60",
  "bg-emerald-700/60",
  "bg-emerald-500/60",
  "bg-emerald-400/70",
];

export default function ActivityTile({ index = 0 }: ActivityTileProps) {
  return (
    <BentoTile className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1" index={index}>
      <div className="flex flex-col h-full p-5">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-zinc-200">Activity</h3>
          </div>
          <span className="text-xs text-zinc-500">Last 12 weeks</span>
        </header>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex gap-[3px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + (wi * 7 + di) * 0.008,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-[10px] h-[10px] rounded-[2px] ${intensityColors[level]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BentoTile>
  );
}
