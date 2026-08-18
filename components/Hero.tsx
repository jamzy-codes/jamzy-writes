"use client";

import { motion } from "framer-motion";
import OrbitNetwork from "./OrbitNetwork";
import Unveil from "./Unveil";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import {
  totalProtocols,
  totalPagesWritten,
  totalArchitectureDiagrams,
  totalWhitepapers,
} from "@/data/projects";

const STATS = [
  {
    value: String(totalProtocols),
    label: "Protocols Documented",
    icon: (
      <path d="M9 12h6m-6 4h6M9 8h1M5 21V5a2 2 0 012-2h7l5 5v13a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
    ),
  },
  {
    value: String(totalPagesWritten),
    label: "Pages Written",
    icon: <path d="M12 20l9-5-9-5-9 5 9 5zM12 12L3 7l9-5 9 5-9 5z" />,
  },
  {
    value: String(totalArchitectureDiagrams),
    label: "Architecture Diagrams",
    icon: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M6 8v4l6 4 6-4V8" />
      </>
    ),
  },
  {
    value: String(totalWhitepapers),
    label: "Whitepapers Delivered",
    icon: <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />,
  },
];

export default function Hero() {
  return (
    <header className="pt-11 sm:pt-[72px] pb-2">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-blue shadow-[0_0_8px_var(--blue)]" />
            Web3 Technical Writer
          </div>

          <Unveil
            as="h1"
            className="font-sans font-extrabold text-[30px] sm:text-[38px] md:text-[46px] leading-[1.14] tracking-[-0.02em] mt-5 mb-4"
            trigger="load"
            stagger={0.05}
            segments={[
              { text: "Turning dense protocol mechanics into documents people" },
              { text: "actually trust.", highlight: true },
            ]}
            highlightClassName="bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent underline decoration-[3px] decoration-violet/60 underline-offset-4"
          />

          <Reveal delay={0.35}>
            <p className="text-[15.5px] sm:text-base text-text-muted max-w-[46ch] mb-7 sm:mb-8">
              I research, I dissect, and I write documentation that makes complex
              Web3 systems simple, accurate, and investor ready.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mb-8">
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue to-violet px-[22px] py-[13px] rounded-lg"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 34px rgba(77,127,255,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Explore Selected Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.55 + i * 0.08}
                className="border border-border-c bg-surface rounded-[10px] px-4 py-3.5 shadow-[0_4px_16px_rgba(15,18,30,0.12)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-violet mb-2"
                >
                  {s.icon}
                </svg>
                <div className="text-[21px] font-extrabold">
                  <CountUp end={Number(s.value)} />
                </div>
                <div className="text-[11.5px] text-text-dim mt-0.5">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <OrbitNetwork />
      </div>
    </header>
  );
}
