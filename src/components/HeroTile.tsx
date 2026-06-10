"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import { BentoTile } from "./BentoGrid";

interface HeroTileProps {
  name: string;
  streak: number;
  index?: number;
}

export default function HeroTile({ name, streak, index = 0 }: HeroTileProps) {
  return (
    <BentoTile className="col-span-1 md:col-span-2 row-span-1" index={index}>
      <div className="relative flex flex-col justify-between h-full p-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-glow-purple opacity-50" />

        <header className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 text-zinc-400 text-sm mb-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Good to see you again</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">{name}</span>
          </motion.h1>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10 flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">
              {streak} day streak
            </span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-sm ${
                  i < streak % 7
                    ? "bg-orange-400"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </BentoTile>
  );
}
