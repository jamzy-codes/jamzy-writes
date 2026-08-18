"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import TypeIn from "./TypeIn";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-surface/55 border-b border-border-c shadow-[0_1px_0_0_var(--border-soft),0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1240px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a
          href="#"
          className="font-logo text-xl font-bold uppercase tracking-wide text-text inline-flex items-center py-2.5 -my-2.5"
        >
          <TypeIn text="Jamzy" className="inline-flex items-center" />
          <span className="text-violet">!</span>
        </a>

        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[14.5px] text-text-muted hover:text-text transition-colors py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-gradient-to-r from-blue to-violet rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-[7px] font-mono text-[11.5px] text-text-muted border border-border-c px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_theme(colors.green)]" />
            Available for work
          </div>

          <ThemeToggle />

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white bg-gradient-to-r from-blue to-violet px-4 py-2.5 rounded-lg"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 30px rgba(77,127,255,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            DM me
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
