"use client";

import { useState } from "react";

const LAYERS = [
  { id: "access", label: "Access Layer", items: "React PWA · USSD · Offline Mode · iOS/Android", color: "#2dd4bf" },
  { id: "intelligence", label: "Intelligence Layer", items: "Multilingual LLM · RAG Pipeline · Integrity Monitor", color: "#4d7fff" },
  { id: "identity", label: "Identity Layer", items: "ZK-SNARKs (Circom) · ERC-4337 Wallets · Privacy Proofs", color: "#8b5cf6" },
  { id: "storage", label: "Storage Layer", items: "0G Labs Decentralized Storage · On-chain Data Proofs", color: "#f5a623" },
  { id: "trust", label: "Trust Layer", items: "Ethereum Mainnet · Smart Contracts · DAO Governance", color: "#ef4444" },
];

export default function IMOArchitectureDiagram() {
  const [hotId, setHotId] = useState<string | null>(null);

  return (
    <div className="border border-border-c bg-surface-2 rounded-lg p-6">
      <div className="flex flex-col gap-2.5">
        {LAYERS.map((layer, i) => {
          const isHot = hotId === layer.id;
          return (
            <div key={layer.id}>
              <button
                onMouseEnter={() => setHotId(layer.id)}
                onMouseLeave={() => setHotId(null)}
                className="w-full text-left rounded-lg border px-4 py-3 transition-all"
                style={{
                  borderColor: isHot ? layer.color : "var(--border-c)",
                  backgroundColor: isHot ? `${layer.color}1a` : "var(--surface)",
                  boxShadow: isHot ? `0 0 16px ${layer.color}55` : "none",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-1 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="font-bold text-[13px]" style={{ color: isHot ? layer.color : "var(--text)" }}>
                    {layer.label}
                  </span>
                </div>
                <div className="text-[11px] text-text-dim mt-1 ml-3.5">{layer.items}</div>
              </button>
              {i < LAYERS.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M7 9L1 1M7 9l6-8"
                      stroke="var(--text-dim)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="font-mono text-[10.5px] text-text-dim text-center mt-4">
        Hover a layer to see what it&apos;s built on
      </p>
    </div>
  );
}
