"use client";

import { useState } from "react";

const WEB2_FLOW = ["User (Data Creator)", "Platform (Google/Meta)", "Data Brokers", "Enterprise Buyers"];
const SDX_FLOW = ["Data Owner (Seller)", "StreamDataX Protocol", "Verified Buyer"];

export default function StreamDataXValueFlowDiagram() {
  const [hot, setHot] = useState<string | null>(null);

  return (
    <div className="border border-border-c bg-surface-2 rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="text-center mb-3">
            <div className="font-bold text-[12.5px] text-red-400">WEB2 MODEL</div>
            <div className="text-[10.5px] text-text-dim">You create. They profit.</div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {WEB2_FLOW.map((step, i) => (
              <div key={step}>
                <button
                  onMouseEnter={() => setHot(`web2-${i}`)}
                  onMouseLeave={() => setHot(null)}
                  className={`w-full text-center rounded-md border px-2 py-2 text-[11px] transition-all ${
                    hot === `web2-${i}`
                      ? "border-red-400 bg-red-400/10 text-text"
                      : "border-border-c text-text-muted"
                  }`}
                >
                  {step}
                </button>
                {i < WEB2_FLOW.length - 1 && (
                  <div className="text-center text-text-dim text-[10px] py-0.5">↓</div>
                )}
              </div>
            ))}
              <div className="mt-auto pt-2 w-full text-center rounded-md bg-red-400/10 border border-red-400/40 py-2 text-[11px] font-bold text-red-400 break-words">
              User receives: $0
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-center mb-3">
            <div className="font-bold text-[12.5px] text-teal">STREAMDATAX MODEL</div>
            <div className="text-[10.5px] text-text-dim">You create. You capture.</div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {SDX_FLOW.map((step, i) => (
              <div key={step}>
                <button
                  onMouseEnter={() => setHot(`sdx-${i}`)}
                  onMouseLeave={() => setHot(null)}
                  className={`w-full text-center rounded-md border px-2 py-2 text-[11px] transition-all ${
                    hot === `sdx-${i}`
                      ? "border-teal bg-teal-soft text-text"
                      : "border-border-c text-text-muted"
                  }`}
                >
                  {step}
                </button>
                {i < SDX_FLOW.length - 1 && (
                  <div className="text-center text-text-dim text-[10px] py-0.5">↓</div>
                )}
              </div>
            ))}
              <div className="mt-auto pt-2 w-full text-center rounded-md bg-green-soft border border-green/40 py-2 text-[11px] font-bold text-green break-words">
              User receives: $SDXT instantly
            </div>
          </div>
        </div>
      </div>
      <p className="font-mono text-[10.5px] text-text-dim text-center mt-4">
        Hover either side to trace where the value actually goes
      </p>
    </div>
  );
}
