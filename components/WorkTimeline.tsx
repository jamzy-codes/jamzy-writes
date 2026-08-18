"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Workspace from "./Workspace";

export default function WorkTimeline() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const active = selectedSlug !== null;
  const selectedProject = projects.find((p) => p.slug === selectedSlug);

  return (
    <div
      className={`grid grid-cols-1 min-w-0 gap-0 transition-[grid-template-columns] duration-500 ease-out items-start ${
        active ? "lg:grid-cols-[290px_1fr] lg:gap-7" : ""
      }`}
    >
      <div className="relative min-w-0">
        <div className="hidden lg:block absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-violet to-violet/10 z-0" />

        <motion.div
          layout
          className={
            active
              ? "flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
              : "flex flex-col gap-3.5"
          }
        >
          {projects.map((p, index) => {
            const isSelected = p.slug === selectedSlug;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              >
              <motion.button
                layout
                onClick={() => setSelectedSlug(p.slug)}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                className={`relative z-10 text-left flex gap-4 rounded-xl border bg-surface flex-shrink-0 ${
                  active ? "p-3.5 w-[240px] lg:w-auto" : "p-5 w-full"
                } ${
                  isSelected
                    ? "border-violet shadow-[0_0_0_1px_theme(colors.violet),0_0_24px_rgba(139,92,246,0.15)]"
                    : "border-border-c shadow-[0_2px_10px_rgba(15,18,30,0.10)] hover:border-violet hover:shadow-[0_0_22px_rgba(139,92,246,0.22)]"
                }`}
                style={{ transition: "border-color .2s ease, box-shadow .2s ease" }}
              >
                <motion.div
                  layout
                  className={`rounded-full border flex items-center justify-center flex-shrink-0 font-mono text-xs ${
                    isSelected ? "border-violet text-violet shadow-[0_0_12px_rgba(139,92,246,0.5)]" : "border-border-c text-text-dim"
                  } w-[38px] h-[38px]`}
                  style={{ transition: "border-color .2s ease, color .2s ease, box-shadow .2s ease" }}
                >
                  {String(p.order).padStart(2, "0")}
                </motion.div>

                <motion.div layout className="relative w-11 h-11 rounded-lg overflow-hidden border border-border-c flex-shrink-0 bg-surface-2">
                  <Image src={p.logo} alt="" fill className="object-cover" />
                </motion.div>

                <motion.div layout className="min-w-0 flex-1">
                  <p className="font-extrabold text-base">{p.name}</p>
                  {(!active || isSelected) && (
                    <p className="text-[14.5px] text-text-muted mt-2 max-w-[38ch]">
                      {p.positioning}
                    </p>
                  )}
                </motion.div>
              </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {active && selectedProject && (
          <motion.div
            key={selectedProject.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-7 lg:mt-0 min-w-0"
          >
            <Workspace project={selectedProject} onClose={() => setSelectedSlug(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
