"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactAtom() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const theme = document.documentElement.getAttribute("data-theme");
      setSrc(theme === "light" ? "/images/contact-graphic-light.png" : "/images/contact-graphic.png");
    }
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="flex justify-center"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src ?? "/images/contact-graphic.png"}
        alt=""
        className="w-[260px] sm:w-[300px] lg:w-[340px] h-auto transition-opacity duration-200"
        style={{ opacity: src ? 1 : 0 }}
      />
    </motion.div>
  );
}
