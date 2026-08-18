"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
};

/**
 * Counts up from `start` (default 1) to `end` the first time it scrolls into
 * view. Used for the "Protocols Documented / Pages Written / …" stat boxes in
 * both the Hero and About sections. Honors prefers-reduced-motion.
 */
export default function CountUp({ end, start = 1, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? end : start);

  useEffect(() => {
    if (!inView || reduce) return;

    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(start + (end - start) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, start, end, duration]);

  return (
    <span ref={ref} className={className}>
      {reduce ? end : value}
    </span>
  );
}
