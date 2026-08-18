"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Vertical distance (px) the element travels while fading in. */
  y?: number;
  duration?: number;
  /** Reveal only the first time it scrolls into view (recommended). */
  once?: boolean;
  /** IntersectionObserver margin — element triggers this far before fully in view. */
  margin?: string;
};

/**
 * Scroll-reveal wrapper: fades + lifts its children into view once, using
 * Framer Motion's `whileInView`. Respects `prefers-reduced-motion` by
 * rendering the content immediately with no transform.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  margin = "-80px",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
