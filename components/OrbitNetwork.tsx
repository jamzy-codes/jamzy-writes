"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

interface NodeDef {
  label: string;
  shortLabel: string;
  angle: number;
  color: string;
  icon: ReactNode;
}

const NODES: NodeDef[] = [
  {
    label: "ZK Zero Knowledge",
    shortLabel: "ZK Proofs",
    angle: -75,
    color: "#4d7fff",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d7fff" strokeWidth="2">
        <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </svg>
    ),
  },
  {
    label: "Oracles",
    shortLabel: "Oracles",
    angle: -25,
    color: "#8b5cf6",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
        <path d="M4 11a8 8 0 0116 0" />
        <path d="M7 11a5 5 0 0110 0" />
        <circle cx="12" cy="11" r="1.5" fill="#8b5cf6" stroke="none" />
        <path d="M12 12.5V21" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    label: "Solana",
    shortLabel: "Solana",
    angle: 15,
    color: "#4d7fff",
    icon: <Image src="/chains/solana.svg" alt="" width={14} height={14} />,
  },
  {
    label: "Data Availability",
    shortLabel: "Data Layer",
    angle: 65,
    color: "#4d7fff",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d7fff" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    label: "Stablecoins",
    shortLabel: "Stablecoins",
    angle: 135,
    color: "#22c55e",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.7 2.5 1.7c0 2.4-5 1.1-5 3.5 0 1 1 1.8 2.5 1.8s2.5-.8 2.5-1.8" />
      </svg>
    ),
  },
  {
    label: "Cross-Margin",
    shortLabel: "Margin",
    angle: 190,
    color: "#4d7fff",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d7fff" strokeWidth="2">
        <rect x="3" y="4" width="8" height="6" rx="1" />
        <rect x="13" y="4" width="8" height="6" rx="1" />
        <rect x="3" y="14" width="8" height="6" rx="1" />
        <rect x="13" y="14" width="8" height="6" rx="1" />
        <path d="M11 7h2M11 17h2M7 10v4M17 10v4" />
      </svg>
    ),
  },
  {
    label: "Tokenomics",
    shortLabel: "Tokens",
    angle: 235,
    color: "#8b5cf6",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 010 18" fill="#8b5cf6" fillOpacity="0.25" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function OrbitNetwork() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRefs = useRef<SVGLineElement[]>([]);
  const nodeRefs = useRef<HTMLDivElement[]>([]);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    function layout() {
      if (!wrap || !svg) return;
      const rect = wrap.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const R = rect.width * 0.42;

      const points = NODES.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        return { x: cx + R * Math.cos(rad), y: cy + R * Math.sin(rad) };
      });
      pointsRef.current = points;

      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        line.setAttribute("x1", String(cx));
        line.setAttribute("y1", String(cy));
        line.setAttribute("x2", String(points[i].x));
        line.setAttribute("y2", String(points[i].y));
      });

      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        node.style.left = `${points[i].x}px`;
        node.style.top = `${points[i].y}px`;
      });
    }

    layout();
    window.addEventListener("resize", layout);

    function handleMove(e: MouseEvent) {
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let closest = -1;
      let minDist = Infinity;
      pointsRef.current.forEach((p, i) => {
        const d = Math.hypot(p.x - mx, p.y - my);
        if (d < minDist) {
          minDist = d;
          closest = i;
        }
      });
      const isLit = minDist < 110;
      lineRefs.current.forEach((line, i) =>
        line?.classList.toggle("orbit-line-lit", i === closest && isLit)
      );
      nodeRefs.current.forEach((node, i) =>
        node?.classList.toggle("orbit-node-lit", i === closest && isLit)
      );
    }

    function handleLeave() {
      lineRefs.current.forEach((line) => line?.classList.remove("orbit-line-lit"));
      nodeRefs.current.forEach((node) => node?.classList.remove("orbit-node-lit"));
    }

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("resize", layout);
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-square max-w-[320px] lg:max-w-[420px] mx-auto"
    >
      <div className="absolute inset-[6%] border border-blue/20 rounded-full pointer-events-none" />
      <div className="absolute inset-[16%] border border-violet/15 rounded-full pointer-events-none" />

      <svg ref={svgRef} className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        {NODES.map((n, i) => (
          <line
            key={n.label}
            ref={(el) => {
              if (el) lineRefs.current[i] = el;
            }}
            className="stroke-text-dim opacity-45 [stroke-width:1px] transition-[stroke,opacity,stroke-width] duration-300"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] aspect-square rounded-full overflow-hidden border-2 border-border-hover shadow-[0_0_0_10px_var(--media-surface),0_0_50px_rgba(77,127,255,0.25)] z-[3]">
        <Image
          src="/images/pfp-hero.jpg"
          alt="Jamzy"
          fill
          sizes="200px"
          className="object-cover"
          priority
        />
      </div>

      {NODES.map((n, i) => (
        <div
          key={n.label}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el;
          }}
          className="orbit-node absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-surface-2 border border-border-c rounded-[9px] px-3 py-2 text-[11.5px] font-semibold whitespace-nowrap z-[2] transition-[border-color,box-shadow] duration-300"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <span className="w-5 h-5 rounded-full bg-bg border border-border-hover flex items-center justify-center flex-shrink-0">
            {n.icon}
          </span>
          <span className="lg:hidden">{n.shortLabel}</span>
          <span className="hidden lg:inline">{n.label}</span>
        </div>
      ))}

      <div className="absolute top-[6%] right-[2%] w-[70px] h-[1.5px] bg-gradient-to-r from-transparent to-[#cfe0ff] rotate-[-32deg] opacity-70 pointer-events-none" />
    </div>
  );
}
