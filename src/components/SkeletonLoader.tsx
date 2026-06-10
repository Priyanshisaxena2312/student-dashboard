"use client";

import { motion } from "framer-motion";

export function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-white/[0.06] 
        bg-surface-800/60 overflow-hidden ${className}`}
    >
      <div className="p-5 h-full flex flex-col justify-between">
        <div className="space-y-3">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-10 rounded-xl bg-white/5"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="h-4 w-3/4 rounded-md bg-white/5"
          />
        </div>
        <div className="space-y-2">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="h-3 w-1/2 rounded-md bg-white/5"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="h-2 w-full rounded-full bg-white/5"
          />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <section className="grid gap-4 p-4 md:p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[200px]">
      {/* Hero skeleton */}
      <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl border border-white/[0.06] bg-surface-800/60 overflow-hidden">
        <div className="p-6 h-full flex flex-col justify-between">
          <div className="space-y-3">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-4 w-32 rounded-md bg-white/5"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="h-8 w-64 rounded-md bg-white/5"
            />
          </div>
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="h-8 w-40 rounded-full bg-white/5"
          />
        </div>
      </div>

      {/* Activity skeleton */}
      <SkeletonTile className="col-span-1 row-span-1" />

      {/* Course skeletons */}
      <SkeletonTile className="col-span-1 row-span-1" />
      <SkeletonTile className="col-span-1 row-span-1" />
      <SkeletonTile className="col-span-1 row-span-1" />
    </section>
  );
}
