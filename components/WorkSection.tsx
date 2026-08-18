import WorkTimeline from "./WorkTimeline";
import Reveal from "./Reveal";
import { totalPagesWritten } from "@/data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-14 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-10">
          <Reveal className="min-w-0">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shadow-[0_0_8px_var(--blue)]" />
                Selected Work
              </div>
              <h2 className="font-sans font-extrabold text-[24px] sm:text-[32px] tracking-[-0.01em] mt-3.5 mb-2">
                Five protocols. Five different{" "}
                <span className="bg-gradient-to-r from-blue to-violet bg-clip-text text-transparent">
                  gaps
                </span>{" "}
                to close.
              </h2>
              <p className="text-text-muted text-[14.5px] max-w-[60ch]">
                Click any project to read the full documentation directly on this site.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="border border-border-c bg-surface rounded-[10px] px-[18px] py-3.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(15,18,30,0.12)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2">
              <path d="M12 20l9-5-9-5-9 5-9 5zM12 12L3 7l9-5-9 5-9 5z" />
            </svg>
            <div>
              <div className="text-[19px] font-extrabold">{totalPagesWritten}</div>
              <div className="text-[11px] text-text-dim">Pages Written</div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <WorkTimeline />
        </Reveal>
      </div>
    </section>
  );
}
