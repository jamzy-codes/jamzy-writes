"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { Project, DocSection } from "@/data/projects";

// Self-hosted PDF.js worker from /public
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

// How many pages above/below the viewport to keep rendered
const RENDER_BUFFER = 2;

interface PageDimension {
  width: number;
  height: number;
}

function flattenSections(sections: DocSection[]): DocSection[] {
  const out: DocSection[] = [];
  for (const s of sections) {
    out.push(s);
    if (s.children) out.push(...s.children);
  }
  return out;
}

/** Derive the active section ID from the current visible page number. */
function getActiveId(flatSections: DocSection[], currentPage: number): string {
  if (flatSections.length === 0) return "";
  let found = flatSections[0].id;
  for (const s of flatSections) {
    if (s.page <= currentPage) found = s.id;
  }
  return found;
}

/** Find which top-level section owns a given flat-section ID. */
function getActiveParentId(toc: DocSection[], activeId: string): string {
  for (const s of toc) {
    if (s.id === activeId) return s.id;
    if (s.children?.some((c) => c.id === activeId)) return s.id;
  }
  return toc[0]?.id ?? "";
}

export default function DocReaderPage({ project }: { project: Project }) {
  const toc = useMemo(() => project.toc ?? [], [project.toc]);
  const flatSections = useMemo(() => flattenSections(toc), [toc]);

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentWidth, setContentWidth] = useState(820);
  const [pageDimensions, setPageDimensions] = useState<PageDimension[]>([]);
  const [renderedPages, setRenderedPages] = useState<Set<number>>(new Set([1, 2, 3]));

  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollObserverRef = useRef<IntersectionObserver | null>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);

  // ── Derived state (single source of truth) ──
  const activeId = getActiveId(flatSections, currentPage);
  const activeParentId = getActiveParentId(toc, activeId);
  const progress = numPages ? Math.round((currentPage / numPages) * 100) : 0;

  // ── Scroll to top on mount ──
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ── Responsive content width ──
  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setContentWidth(Math.min(900, Math.max(320, w)));
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Pre-fetch page dimensions for layout-jump-free rendering ──
  useEffect(() => {
    if (!project.pdfPath || numPages === 0) return;
    let cancelled = false;
    (async () => {
      try {
        const doc = await pdfjs.getDocument(project.pdfPath).promise;
        const dims: PageDimension[] = [];
        for (let i = 1; i <= doc.numPages; i++) {
          if (cancelled) return;
          const page = await doc.getPage(i);
          const viewport = page.getViewport({ scale: 1 });
          dims.push({ width: viewport.width, height: viewport.height });
        }
        if (!cancelled) setPageDimensions(dims);
      } catch {
        /* fallback: A4 ratio placeholders */
      }
    })();
    return () => { cancelled = true; };
  }, [project.pdfPath, numPages]);

  // ── IntersectionObserver: track most-visible page ──
  useEffect(() => {
    if (numPages === 0) return;
    if (scrollObserverRef.current) scrollObserverRef.current.disconnect();

    const obs = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;

        const closest = intersecting.reduce((best, e) => {
          const bMid = Math.abs(best.boundingClientRect.top + best.boundingClientRect.height / 2 - window.innerHeight / 2);
          const eMid = Math.abs(e.boundingClientRect.top + e.boundingClientRect.height / 2 - window.innerHeight / 2);
          return eMid < bMid ? e : best;
        });

        const page = Number((closest.target as HTMLElement).dataset.page);
        if (!page) return;

        setCurrentPage(page);
        setRenderedPages((prev) => {
          const start = Math.max(1, page - RENDER_BUFFER);
          const end = Math.min(numPages, page + RENDER_BUFFER);
          let changed = false;
          const next = new Set(prev);
          for (let i = start; i <= end; i++) {
            if (!next.has(i)) { next.add(i); changed = true; }
          }
          return changed ? next : prev;
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    );

    pageRefs.current.forEach((el) => el && obs.observe(el));
    scrollObserverRef.current = obs;
    return () => obs.disconnect();
  }, [numPages]);

  // ── Auto-scroll mobile section rail to keep active section visible ──
  useEffect(() => {
    if (!mobileRailRef.current) return;
    const btn = mobileRailRef.current.querySelector(`[data-section-id="${activeParentId}"]`);
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeParentId]);

  // ── Navigation ──
  function scrollToPage(pageNum: number) {
    setRenderedPages((prev) => {
      const start = Math.max(1, pageNum - RENDER_BUFFER);
      const end = Math.min(numPages, pageNum + RENDER_BUFFER);
      const next = new Set(prev);
      for (let i = start; i <= end; i++) next.add(i);
      return next;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pageRefs.current[pageNum - 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function pageHeightForWidth(dim: PageDimension, width: number): number {
    if (!dim || dim.width === 0) return Math.round(width * 1.414);
    return Math.round((dim.height / dim.width) * width);
  }

  /* ─────────────────────────── SHARED UI PIECES ─────────────────────────── */

  /** Reading progress bar — used in both mobile controls and desktop sidebar */
  const progressBar = (
    <>
      <div className="flex justify-between font-mono text-[10.5px] text-text-dim mb-1">
        <span>Reading progress</span>
        <span>{progress}%</span>
      </div>
      <div className="h-[3px] bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue to-violet transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );

  /* ═══════════════════════════════ RENDER ═══════════════════════════════ */

  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══════════ FIXED HEADER ═══════════ */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/90 border-b border-border-soft">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[56px] sm:h-[64px] flex items-center justify-between gap-3">
          <Link
            href="/#work"
            className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted hover:text-text transition-colors flex-shrink-0"
            aria-label={`Back to ${project.name}`}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="hidden sm:inline">Back to {project.name}</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="text-center min-w-0">
            <div className="font-bold text-[13.5px] sm:text-[14.5px] truncate">
              {project.name} — Full Documentation
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-text-dim mt-0.5">
              {numPages > 0 ? numPages : project.pageCount} pages
            </div>
          </div>
          <div className="w-[50px] sm:w-[90px] flex-shrink-0" />
        </div>
      </header>

      {/* ═══════════ MOBILE: STICKY READING CONTROLS ═══════════
           Visible on < lg only. Stays fixed below header while PDF scrolls. */}
      <div className="lg:hidden sticky top-[56px] sm:top-[64px] z-30 bg-bg/92 backdrop-blur-md border-b border-border-soft">
        {/* Progress bar */}
        <div className="px-4 pt-2.5 pb-1.5">
          {progressBar}
        </div>

        {/* Horizontal section rail */}
        <div
          ref={mobileRailRef}
          className="section-rail overflow-x-auto px-4 pb-2.5 flex gap-1.5"
          role="tablist"
          aria-label="Document sections"
        >
          {toc.map((s) => (
            <button
              key={s.id}
              data-section-id={s.id}
              onClick={() => scrollToPage(s.page)}
              role="tab"
              aria-selected={activeParentId === s.id}
              className={`flex-shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full border transition-all ${
                activeParentId === s.id
                  ? "text-blue border-blue bg-blue-soft shadow-[0_0_8px_rgba(77,127,255,0.15)]"
                  : "text-text-dim border-border-c hover:text-text-muted hover:border-border-hover"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════ MAIN LAYOUT ═══════════ */}
      <div className="flex-1 max-w-[1240px] mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[250px_1fr] gap-8 lg:gap-10 py-6 lg:py-8 min-w-0">
        {/* ─── Desktop sidebar (hidden on mobile) ─── */}
        <aside className="hidden lg:flex lg:flex-col lg:sticky lg:top-[88px] lg:self-start lg:max-h-[calc(100vh-110px)] min-w-0">
          {/* Progress */}
          <div className="mb-5 flex-shrink-0">
            {progressBar}
          </div>

          {/* Vertical section navigation */}
          <nav
            className="flex-1 overflow-y-auto reader-scrollbar pr-1 -mr-1 min-h-0"
            aria-label="Document sections"
          >
            <div className="space-y-0.5">
              {toc.map((s) => {
                const isActive = activeId === s.id;
                const isParentActive = activeParentId === s.id;
                return (
                  <div key={s.id}>
                    <button
                      onClick={() => scrollToPage(s.page)}
                      className={`group block w-full text-left text-[12.5px] py-2 px-3 border-l-2 rounded-r-md transition-all ${
                        isActive
                          ? "text-blue border-blue bg-blue-soft/60 font-semibold"
                          : isParentActive
                            ? "text-text-muted border-blue/30 hover:text-text hover:bg-surface-3/50"
                            : "text-text-muted border-transparent hover:text-text hover:border-border-hover hover:bg-surface-3/30"
                      }`}
                    >
                      {s.title}
                    </button>
                    {s.children && s.children.length > 0 && (
                      <div className={`ml-3 border-l border-border-soft transition-opacity ${
                        isParentActive ? "opacity-100" : "opacity-50"
                      }`}>
                        {s.children.map((c) => {
                          const cActive = activeId === c.id;
                          return (
                            <button
                              key={c.id}
                              onClick={() => scrollToPage(c.page)}
                              className={`block w-full text-left text-[11.5px] py-1.5 pl-3.5 pr-2 transition-all ${
                                cActive
                                  ? "text-blue font-semibold"
                                  : "text-text-dim hover:text-text-muted"
                              }`}
                            >
                              {c.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Download card */}
          <div className="mt-5 flex-shrink-0 border border-border-c bg-surface-2 rounded-lg p-3.5">
            <div className="text-[12.5px] font-bold">{project.name}</div>
            <div className="text-[11px] text-text-dim mt-1 mb-3">
              {numPages > 0 ? numPages : project.pageCount} pages
            </div>
            <a
              href={project.pdfPath}
              download={`${project.downloadName}.pdf`}
              className="flex items-center justify-center gap-2 font-mono text-[11.5px] border border-border-c rounded-md py-2 text-text-muted hover:text-text hover:border-blue transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
              Download original PDF
            </a>
          </div>
        </aside>

        {/* ─── PDF content area ─── */}
        <div ref={wrapRef} className="min-w-0">
          <Document
            file={project.pdfPath}
            onLoadSuccess={({ numPages: n }) => {
              setNumPages(n);
              setRenderedPages(new Set([1, 2, 3]));
            }}
            loading={
              <div className="text-center text-text-dim py-20 font-mono text-sm">
                Loading document…
              </div>
            }
            error={
              <div className="text-center text-red-400 py-20 font-mono text-sm">
                Failed to load PDF. Please try refreshing the page.
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, i) => {
              const pageNum = i + 1;
              const dim = pageDimensions[i];
              const shouldRender = renderedPages.has(pageNum);
              const reservedHeight = dim
                ? pageHeightForWidth(dim, contentWidth)
                : Math.round(contentWidth * 1.414);

              return (
                <div
                  key={i}
                  ref={(el) => { pageRefs.current[i] = el; }}
                  data-page={pageNum}
                  /* Mobile: offset for header (56px) + mobile controls (~90px) = ~150px
                     Desktop: offset for header (64px) + margin = 96px */
                  className="mb-5 sm:mb-6 scroll-mt-[150px] sm:scroll-mt-[160px] lg:scroll-mt-24"
                >
                  <div
                    className="mx-auto bg-white dark:bg-[#0a0c12] rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)] relative"
                    style={{ width: contentWidth, minHeight: reservedHeight }}
                  >
                    {shouldRender ? (
                      <Page
                        pageNumber={pageNum}
                        width={contentWidth}
                        devicePixelRatio={
                          typeof window !== "undefined"
                            ? Math.min(window.devicePixelRatio ?? 1, 2)
                            : 1
                        }
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    ) : (
                      <div
                        className="w-full flex items-center justify-center"
                        style={{ height: reservedHeight }}
                      >
                        <div className="font-mono text-[11px] text-text-dim opacity-30">
                          {pageNum}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Document>

          {/* Prev / Next navigation */}
          {numPages > 0 && (
            <div className="flex justify-between pt-6 border-t border-border-soft gap-3">
              <button
                onClick={() => scrollToPage(Math.max(1, currentPage - 1))}
                className="font-mono text-[11.5px] border border-border-c rounded-lg px-3.5 py-2 text-text-muted hover:text-text transition-colors"
                aria-label="Previous page"
              >
                ← Prev
              </button>
              <span className="font-mono text-[11.5px] text-text-dim self-center">
                {currentPage} / {numPages}
              </span>
              <button
                onClick={() => scrollToPage(Math.min(numPages, currentPage + 1))}
                className="font-mono text-[11.5px] border border-border-c rounded-lg px-3.5 py-2 text-text-muted hover:text-text transition-colors"
                aria-label="Next page"
              >
                Next →
              </button>
            </div>
          )}

          {/* Mobile download link */}
          <a
            href={project.pdfPath}
            download={`${project.downloadName}.pdf`}
            className="lg:hidden flex items-center justify-center gap-2 font-mono text-[11.5px] border border-border-c rounded-md py-2.5 mt-4 mb-10 text-text-muted hover:text-text"
          >
            Download original PDF
          </a>
        </div>
      </div>
    </div>
  );
}
