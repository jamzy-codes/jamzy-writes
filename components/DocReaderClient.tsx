"use client";

import dynamic from "next/dynamic";
import type { Project } from "@/data/projects";

const DocReaderPage = dynamic(() => import("./DocReaderPage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center text-text-dim font-mono text-sm">
      Loading document reader…
    </div>
  ),
});

export default function DocReaderClient({ project }: { project: Project }) {
  return <DocReaderPage project={project} />;
}
