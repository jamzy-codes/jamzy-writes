"use client";

import { useState } from "react";

const DATA = [
  { year: 1, annual: 80, cumulative: 80 },
  { year: 2, annual: 80, cumulative: 160 },
  { year: 3, annual: 40, cumulative: 200 },
  { year: 4, annual: 40, cumulative: 240 },
  { year: 5, annual: 20, cumulative: 260 },
  { year: 6, annual: 20, cumulative: 280 },
  { year: 7, annual: 10, cumulative: 290 },
  { year: 8, annual: 10, cumulative: 300 },
  { year: 9, annual: 10, cumulative: 310 },
  { year: 10, annual: 10, cumulative: 320 },
];

const HALVING_YEARS = [3, 5, 7];
const MAX_ANNUAL = 80;

export default function IMOEmissionDiagram() {
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const active = DATA.find((d) => d.year === hoverYear);

  return (
    <div className="border border-border-c bg-surface-2 rounded-lg p-6">
      <div className="flex justify-between items-baseline mb-4 gap-3">
        <div className="font-bold text-[12.5px]">IMO Emission Schedule</div>
        <div className="font-mono text-[11px] text-text-dim text-right tabular-nums">
          {active ? `Year ${active.year}: ${active.annual}M annual · ${active.cumulative}M cumulative` : "Hover a year"}
        </div>
      </div>

      <div className="flex items-end gap-2 h-[160px] border-b border-border-c pb-1">
        {DATA.map((d) => (
          <div
            key={d.year}
            className="flex-1 flex flex-col items-center gap-1.5 relative"
            onMouseEnter={() => setHoverYear(d.year)}
            onMouseLeave={() => setHoverYear(null)}
          >
            {HALVING_YEARS.includes(d.year) && (
              <div className="absolute -left-1 top-0 bottom-0 w-px bg-amber/40" />
            )}
            <div
              className="w-full rounded-t transition-[background-color,box-shadow] duration-200 cursor-default"
              style={{
                height: `${(d.annual / MAX_ANNUAL) * 130}px`,
                backgroundColor: hoverYear === d.year ? "var(--teal)" : "rgba(45,212,191,0.35)",
                boxShadow: hoverYear === d.year ? "0 0 12px rgba(45,212,191,0.5)" : "none",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1.5">
        {DATA.map((d) => (
          <div key={d.year} className="flex-1 text-center font-mono text-[9.5px] text-text-dim">
            {d.year}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5 mt-4 font-mono text-[10px] text-text-dim">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-teal/60" /> Annual emission
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-0.5 bg-amber" /> Halving
        </span>
      </div>
    </div>
  );
}
