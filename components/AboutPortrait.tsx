"use client";

import { useEffect, useState } from "react";

export default function AboutPortrait() {
  const [src, setSrc] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      const m = window.innerWidth < 640;
      setIsMobile(m);
      // Always use the background-removed cutout (with glow) — on mobile too,
      // just rendered at a wider width than before.
      setSrc("/images/pfp-about-desktop.png");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!src) return <div className="aspect-square sm:aspect-[4/5]" />;

  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(77,127,255,0.22), rgba(139,92,246,0.14) 55%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Jamzy portrait"
        className={isMobile ? "w-full max-w-[420px] mx-auto relative" : "w-full relative"}
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 76%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 76%, transparent 100%)",
        }}
      />
    </div>
  );
}
