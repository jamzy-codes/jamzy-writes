"use client";

import { useEffect, useState } from "react";
import ChainMarquee from "./ChainMarquee";

const DARK = "/images/globe-curve.png";
const LIGHT = "/images/globe-curve-light.png";

export default function GlobeSection() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [src, setSrc] = useState<string>(DARK);

  useEffect(() => {
    const apply = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      setTheme(isLight ? "light" : "dark");
      setSrc(isLight ? LIGHT : DARK);
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      aria-label="Protocols documented across Web3"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: theme === "light" ? "#f7f8fb" : "#010211" }}
    >
      <div className="relative w-full">
        {/* Original globe asset, full viewport width, natural aspect ratio (no crop, glow intact) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Global Web3 protocol network visualised as a connected globe"
          className="w-full h-auto block select-none pointer-events-none"
          draggable={false}
        />

        {/* Text layer anchored to the globe's visual center, positioned slightly lower */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 translate-y-[30%] sm:translate-y-[14%]">
          <div className="relative z-10 w-full max-w-[1100px] mx-auto">
            <ChainMarquee />
          </div>

          <div className="relative z-10 mt-4 sm:mt-5 font-mono text-[11px] sm:text-[11.5px] globe-text-muted">
            ⌄ Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
