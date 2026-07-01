"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const distance = 42;

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const offset =
    direction === "left" || direction === "up" ? distance : direction === "right" || direction === "down" ? -distance : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(16px)", [axis]: direction === "none" ? 0 : offset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: "easeOut" } },
};
