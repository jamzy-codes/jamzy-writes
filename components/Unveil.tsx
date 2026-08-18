"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Segment = { text: string; highlight?: boolean };

type UnveilProps = {
  /** Ordered text chunks. `highlight: true` applies the gradient class to those words. */
  segments: Segment[];
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** Classes applied to highlighted words (defaults to the site's blue→violet gradient). */
  highlightClassName?: string;
  /** "load" animates on mount (Hero headline); "view" animates when scrolled into view (About). */
  trigger?: "load" | "view";
  delay?: number;
  /** Seconds between each word rising into place. */
  stagger?: number;
  margin?: string;
};

const DEFAULT_HIGHLIGHT =
  "bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

/**
 * Word-by-word "unveil": each word sits in an overflow-hidden mask and rises
 * from below into view, staggered. Uses a single parent-controlled variant
 * (not nested whileInView) so it reliably reveals even when nested inside
 * another animated section. Used for the Hero headline (on load) and the
 * About tagline (on scroll). Honors prefers-reduced-motion.
 */
export default function Unveil({
  segments,
  as = "h1",
  className,
  highlightClassName = DEFAULT_HIGHLIGHT,
  trigger = "load",
  delay = 0,
  stagger = 0.05,
  margin = "-60px",
}: UnveilProps) {
  const reduce = useReducedMotion();
  const MotionTag = tags[as];

  const words: { word: string; highlight?: boolean }[] = [];
  for (const seg of segments) {
    for (const w of seg.text.split(/\s+/)) {
      if (w.length) words.push({ word: w, highlight: seg.highlight });
    }
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "115%" },
    show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  if (reduce) {
    return (
      <MotionTag className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.highlight ? highlightClassName : undefined}>
            {seg.text}
            {i < segments.length - 1 ? " " : ""}
          </span>
        ))}
      </MotionTag>
    );
  }

  const motionProps =
    trigger === "load"
      ? { initial: "hidden" as const, animate: "show" as const }
      : { initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, margin } };

  return (
    <MotionTag className={className} variants={container} {...motionProps}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}
          >
            <motion.span
              className={`inline-block ${w.highlight ? highlightClassName : ""}`}
              variants={word}
            >
              {w.word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}
