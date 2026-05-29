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
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-sm text-[#ccc] leading-snug font-[family-name:var(--font-playfair)]">
              {piece.title}
            </p>
            <span className="shrink-0 text-xs text-[#777] pt-0.5">{piece.year}</span>
          </div>
          <p className="text-xs tracking-wide text-[#777] uppercase mb-2">
            {piece.category}
          </p>
          <p className="text-sm text-[#999] leading-relaxed">
            {piece.description}
          </p>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={piece.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 cursor-zoom-out"
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
            className="flex flex-col md:flex-row max-w-5xl w-full gap-8 md:gap-12 items-start md:items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: image */}
            <div className="w-full md:flex-1 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.src}
                alt={piece.alt}
                className="w-full rounded-lg object-contain max-h-[60vh] md:max-h-[75vh]"
              />
            </div>

            {/* Right: details */}
            <div className="w-full md:w-72 md:shrink-0 flex flex-col gap-5">
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
