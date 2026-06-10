"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

const tileVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const hoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.015,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export function BentoTile({ children, className = "", index = 0 }: BentoTileProps) {
  return (
    <motion.article
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative group rounded-2xl border border-white/[0.06] 
        bg-surface-800/60 backdrop-blur-sm overflow-hidden
        ${className}`}
    >
      {/* Hover glow border effect */}
      <motion.div
        variants={hoverVariants}
        className="absolute inset-0 rounded-2xl will-change-transform"
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-br from-accent-purple/20 via-transparent to-accent-blue/20"
        />
        <div
          className="absolute inset-[1px] rounded-2xl bg-surface-800/90"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>

      {/* Noise texture */}
      <div className="noise-bg absolute inset-0 rounded-2xl pointer-events-none" />
    </motion.article>
  );
}

interface BentoGridProps {
  children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <section
      className="grid gap-4 p-4 md:p-6
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        auto-rows-[180px] md:auto-rows-[200px]"
    >
      {children}
    </section>
  );
}
