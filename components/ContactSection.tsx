"use client";

import { motion } from "framer-motion";
import ContactAtom from "./ContactAtom";
import Reveal from "./Reveal";

const CHANNELS = [
  {
    name: "X",
    href: "https://x.com/Only_1_Jamzy",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.647h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/Only_1_Jamzy",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.05-2 1.92c-.21.21-.4.4-.82.4z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jamai-fowobaje-1814b331a",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 11.01-4.13 2.07 2.07 0 01-.01 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:only1jamzy@gmail.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          className="relative border border-violet bg-surface rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-5 min-w-0"
          animate={{
            boxShadow: [
              "0 0 16px rgba(139,92,246,0.15), 0 0 0 1px rgba(139,92,246,0.1)",
              "0 0 34px rgba(139,92,246,0.38), 0 0 0 1px rgba(139,92,246,0.25)",
              "0 0 16px rgba(139,92,246,0.15), 0 0 0 1px rgba(139,92,246,0.1)",
            ],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Reveal>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-blue mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shadow-[0_0_8px_var(--blue)]" />
                Let&apos;s Connect
              </div>
              <h3 className="font-sans font-extrabold text-[24px] sm:text-[28px] mb-2 text-text">
                Have a protocol that needs explaining?
              </h3>
              <p className="text-text-muted text-sm max-w-[46ch] mb-4">
                Send over what you&apos;re building. I&apos;ll tell you what&apos;s missing before an investor does.
              </p>

              <div className="flex flex-wrap gap-3">
                {CHANNELS.map((c) => (
                  <motion.a
                    key={c.name}
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2.5 border border-border-c bg-surface-2 text-text rounded-lg px-4 py-3 text-sm font-semibold"
                    whileHover={{
                      y: -2,
                      borderColor: "var(--blue)",
                      boxShadow: "0 0 20px rgba(77,127,255,0.35)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {c.icon}
                    {c.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          <ContactAtom />
        </motion.div>
      </div>
    </section>
  );
}
