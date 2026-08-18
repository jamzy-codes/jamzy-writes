"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypeInProps = {
  text: string;
  className?: string;
  speed?: number; // ms per character
};

/**
 * Types `text` in character-by-character on mount (and again on every reload,
 * since the component remounts). Used for the "Jamzy" logo. Honors
 * prefers-reduced-motion by rendering the full text immediately.
 */
export default function TypeIn({ text, className, speed = 80 }: TypeInProps) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduce]);

  const done = count >= text.length;
  return (
    <span className={className}>
      {text.slice(0, count)}
      {!done && (
        <span className="inline-block w-[1px] h-[1em] align-[-0.12em] bg-current ml-[1px] animate-pulse" />
      )}
    </span>
  );
}
