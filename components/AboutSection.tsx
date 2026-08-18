import AboutPortrait from "./AboutPortrait";
import Reveal from "./Reveal";
import Unveil from "./Unveil";
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
    label: "Protocols",
    sub: "Documented across DeFi, Infra, and Web3.",
    icon: <path d="M9 12h6m-6 4h6M9 8h1M5 21V5a2 2 0 012-2h7l5 5v13a2 2 0 01-2 2H7a2 2 0 01-2-2z" />,
  },
  {
    value: String(totalPagesWritten),
    label: "Pages Written",
    sub: "Whitepapers, guides, and technical docs.",
    icon: <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />,
  },
  {
    value: String(totalArchitectureDiagrams),
    label: "Architecture Diagrams",
    sub: "Custom-built visuals that explain complex systems.",
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
    label: "Whitepapers",
    sub: "End-to-end research, writing, and structuring.",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-14 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center mb-11">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shadow-[0_0_8px_var(--blue)]" />
              About
            </div>
            <h2 className="font-sans font-extrabold text-[24px] sm:text-[32px] tracking-[-0.01em] mt-3.5 mb-5 leading-tight">
              Who&apos;s writing this?
              <br />
              <Unveil
                as="span"
                trigger="view"
                stagger={0.05}
                segments={[
                  { text: "Jamzy —" },
                  { text: "Technical Writer,", highlight: true },
                  { text: "Aspiring Blockchain Developer." },
                ]}
              />
            </h2>
            <p className="text-text-muted text-[14.5px] max-w-[54ch] mb-4 leading-relaxed">
              I research complex protocols, break down the mechanics, and craft
              documentation that helps builders, investors, teams, and users
              understand what actually matters.
            </p>
            <p className="text-text-muted text-[14.5px] max-w-[54ch] leading-relaxed">
              From whitepapers to architecture deep dives, I turn technical
              complexity into clarity, educate communities, and onboard users.
              I&apos;m building toward blockchain development as a parallel
              path alongside technical writing.
            </p>
          </div>

          <AboutPortrait />
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border border-border-c bg-surface rounded-[10px] px-4 py-4 shadow-[0_4px_16px_rgba(15,18,30,0.12)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2" className="mb-2">
                {s.icon}
              </svg>
              <div className="text-[19px] font-extrabold">
                <CountUp end={Number(s.value)} />
              </div>
              <div className="text-[11.5px] text-text-dim mt-0.5">{s.label}</div>
              <p className="text-[11px] text-text-dim mt-1.5 leading-snug">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
