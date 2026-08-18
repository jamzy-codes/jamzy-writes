import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import StreamDataXZKDiagram from "./diagrams/StreamDataXZKDiagram";
import StreamDataXValueFlowDiagram from "./diagrams/StreamDataXValueFlowDiagram";
import IMOArchitectureDiagram from "./diagrams/IMOArchitectureDiagram";
import IMOEmissionDiagram from "./diagrams/IMOEmissionDiagram";

const TAG_COLORS: Record<string, string> = {
  "Whitepaper · Diagrams": "text-violet bg-violet-soft",
  "Protocol Docs": "text-teal bg-teal-soft",
  "Cross-Margin Guide": "text-blue bg-blue-soft",
  "Getting Started Guide": "text-teal bg-teal-soft",
};

export default function Workspace({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const tagClass = TAG_COLORS[project.tag] ?? "text-violet bg-violet-soft";

  return (
    <div className="border border-border-c bg-surface rounded-2xl overflow-hidden">
      <button
        onClick={onClose}
        className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text px-6 pt-5 transition-colors"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Work
      </button>

      <div className="px-6 pt-4 pb-6 flex justify-between gap-5 flex-wrap">
        <div>
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-border-c mb-3 relative bg-surface-2">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 items-center mb-2">
            <span className="font-mono text-[11px] border border-border-c rounded px-2 py-0.5 text-text-dim">
              {String(project.order).padStart(2, "0")}
            </span>
            <span
              className={`font-mono text-[10.5px] uppercase tracking-wide rounded px-2 py-0.5 ${tagClass}`}
            >
              {project.tag}
            </span>
          </div>
          <h3 className="text-2xl font-extrabold mb-2">{project.name}</h3>
          <p className="text-text-muted max-w-[56ch] text-[14.5px]">
            {project.positioning}
          </p>
        </div>

        <div className="border border-border-c bg-surface-2 rounded-lg px-4 py-3.5 text-xs text-text-muted h-fit">
          {project.pageCount} pages ·{" "}
          {(project.diagramCount ?? project.diagrams.length) || "no"} diagrams
        </div>
      </div>

      <div className="px-6 pb-6">
        <span className="block font-mono text-[10.5px] tracking-wider uppercase text-violet mb-2">
          The Gap
        </span>
        <p className="text-text-muted text-[14.5px] max-w-[64ch] mb-6">
          {project.gap}
        </p>

        {project.diagrams.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {project.diagrams.map((d) => {
              if (project.slug === "streamdatax" && d.src.includes("zkp")) {
                return (
                  <div key={d.src}>
                    <StreamDataXZKDiagram />
                    <figcaption className="font-mono text-[10.5px] text-text-dim mt-2">
                      {d.caption}
                    </figcaption>
                  </div>
                );
              }
              if (
                project.slug === "streamdatax" &&
                d.src.includes("value-flow")
              ) {
                return (
                  <div key={d.src}>
                    <StreamDataXValueFlowDiagram />
                    <figcaption className="font-mono text-[10.5px] text-text-dim mt-2">
                      {d.caption}
                    </figcaption>
                  </div>
                );
              }
              if (project.slug === "imo" && d.src.includes("architecture")) {
                return (
                  <div key={d.src}>
                    <IMOArchitectureDiagram />
                    <figcaption className="font-mono text-[10.5px] text-text-dim mt-2">
                      {d.caption}
                    </figcaption>
                  </div>
                );
              }
              if (project.slug === "imo" && d.src.includes("emission")) {
                return (
                  <div key={d.src}>
                    <IMOEmissionDiagram />
                    <figcaption className="font-mono text-[10.5px] text-text-dim mt-2">
                      {d.caption}
                    </figcaption>
                  </div>
                );
              }
              return (
                <figure key={d.src}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border-c bg-surface-2">
                    <Image
                      src={d.src}
                      alt={d.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="font-mono text-[10.5px] text-text-dim mt-2">
                    {d.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}

        <div className="relative border-l-2 border-violet bg-surface-2 rounded-r-md px-6 py-5 mb-6">
          <span className="block font-mono text-[10px] text-text-dim mb-2 uppercase tracking-wide">
            Excerpt
          </span>
          <p className="font-medium text-[16px] leading-relaxed">
            &ldquo;{project.excerpt}&rdquo;
          </p>
          {project.excerptAttribution && (
            <p className="text-xs text-text-dim mt-2">
              {project.excerptAttribution}
            </p>
          )}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue to-violet text-white font-semibold text-sm px-5 py-3 rounded-lg hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(77,127,255,0.3)] transition-all"
        >
          Read Full Documentation
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
