"use client";
import { useState, useEffect } from "react";
import type { GalleryItem } from "@/app/lib/projects";

export default function GalleryCard({ piece }: { piece: GalleryItem }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group overflow-hidden rounded-lg border border-[#1a1a1a] bg-[#0e0e0e] text-left w-full hover:border-[#333] transition-colors"
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={piece.src}
            alt={piece.alt}
            className="h-full w-full object-cover object-top opacity-70 transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="rounded-full bg-black/70 px-2.5 py-1 text-xs tracking-wide text-[#ccc] backdrop-blur-sm">
              View details ↗
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-base text-[#ccc] leading-snug font-[family-name:var(--font-playfair)] font-semibold">
              {piece.title}
            </p>
            <span className="shrink-0 text-xs text-[#666] pt-1">{piece.year}</span>
          </div>
          <p className="text-xs tracking-widest text-[#666] uppercase">
            {piece.category}
          </p>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={piece.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 cursor-zoom-out overflow-hidden"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#aaa] hover:bg-white/20 hover:text-white transition-colors z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="flex flex-col md:flex-row max-w-7xl w-full h-[85vh] gap-0 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: scrollable image(s) column */}
            <div className="flex-1 flex flex-col gap-0 overflow-y-auto pr-0 md:pr-8 scrollbar-thin">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.src}
                alt={piece.alt}
                className="w-full rounded-lg object-contain mb-8"
              />
              {/* Future: Add more images here if GalleryItem supports multiple images */}
            </div>

            {/* Right: sticky details */}
            <div className="w-full md:w-80 md:shrink-0 flex flex-col gap-5 mt-6 md:mt-0 md:sticky md:top-0 md:self-start md:h-fit">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#555] mb-2">
                  {piece.category}
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#fafafa] leading-snug">
                  {piece.title}
                </h2>
                <p className="mt-1 text-sm text-[#555]">{piece.year}</p>
              </div>
              <div className="h-px w-8 bg-[#2a2a2a]" />
              <p className="text-sm leading-relaxed text-[#888] font-[family-name:var(--font-inter)]">
                {piece.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
