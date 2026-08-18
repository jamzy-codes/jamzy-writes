"use client";

import { useEffect, useState } from "react";

export default function Globe() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const theme = document.documentElement.getAttribute("data-theme");
      setSrc(theme === "light" ? "/images/globe-curve-light.png" : "/images/globe-curve.png");
    }
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Soft themed glow so the globe reads clearly in both dark and light mode */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-[5.6/1] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(77,127,255,0.20), rgba(139,92,246,0.12) 50%, transparent 75%)",
          filter: "blur(22px)",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        style={{
          backgroundImage: src ? `url(${src})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: src ? 1 : 0,
        }}
      />
    </div>
  );
}
