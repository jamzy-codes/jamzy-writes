"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { id: "seller", label: "Seller", sub: "Raw Dataset" },
  { id: "generator", label: "ZK Proof", sub: "Generator" },
  { id: "proof", label: "Proof", sub: "No raw data exposed" },
  { id: "verifier", label: "Buyer", sub: "Verification" },
  { id: "contract", label: "Smart Contract", sub: "Validator" },
];

export default function StreamDataXZKDiagram() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const [hotIndex, setHotIndex] = useState<number | null>(null);
  const pausedRef = useRef(false);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    function layout() {
      const wrap = wrapRef.current;
      const path = pathRef.current;
      if (!wrap || !path) return;
      const wrapRect = wrap.getBoundingClientRect();
      const pts = boxRefs.current.map((b) => {
        const r = b.getBoundingClientRect();
        return { x: r.left + r.width / 2 - wrapRect.left, y: r.top + r.height / 2 - wrapRect.top };
      });
      pointsRef.current = pts;
      if (pts.length < 2) return;
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) d += ` L ${pts[i].x} ${pts[i].y}`;
      path.setAttribute("d", d);
    }
    layout();
    window.addEventListener("resize", layout);

    let t = 0;
    let raf: number;
    function animate() {
      const path = pathRef.current;
      const dot = dotRef.current;
      const pts = pointsRef.current;
      if (path && dot && pts.length > 1 && !pausedRef.current) {
        const len = path.getTotalLength();
        t += 0.0035;
        if (t > 1) t = 0;
        const pt = path.getPointAtLength(len * t);
        dot.setAttribute("cx", String(pt.x));
        dot.setAttribute("cy", String(pt.y));
        dot.style.opacity = "0.9";
        const idx = Math.min(Math.floor(t * pts.length), pts.length - 1);
        setHotIndex(idx);
      }
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", layout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="border border-border-c bg-surface-2 rounded-lg p-6">
      <div ref={wrapRef} className="relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path ref={pathRef} d="" stroke="var(--text-dim)" strokeWidth="1.3" fill="none" opacity="0.4" />
          <circle ref={dotRef} r="3.5" fill="var(--blue)" opacity="0" />
        </svg>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-3 sm:gap-2 flex-wrap">
          {STAGES.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => {
                if (el) boxRefs.current[i] = el;
              }}
              onMouseEnter={() => {
                pausedRef.current = true;
                setHotIndex(i);
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
              }}
              className={`flex-1 min-w-0 text-center rounded-lg border px-2 py-3 transition-all cursor-default break-words ${
                hotIndex === i
                  ? "border-blue bg-blue-soft shadow-[0_0_16px_rgba(77,127,255,0.4)]"
                  : "border-border-c bg-surface"
              }`}
            >
              <div className={`text-[12px] font-bold ${hotIndex === i ? "text-text" : "text-text-muted"}`}>
                {s.label}
              </div>
              <div className="text-[10.5px] text-text-dim mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="font-mono text-[10.5px] text-text-dim text-center mt-5">
        Hover a stage — watch the proof travel through{" "}
        <span className="text-blue">without exposing the seller&apos;s raw data</span>
      </p>
    </div>
  );
}
