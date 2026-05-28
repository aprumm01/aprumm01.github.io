"use client";
import { useState, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  annotation?: string;
}

export default function AnnotatedImage({ src, alt, caption, annotation }: Props) {
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
      <div className={`grid gap-8 items-start ${annotation ? "lg:grid-cols-[3fr_2fr]" : "grid-cols-1"}`}>
        {/* Image */}
        <div>
          <button
            onClick={() => setOpen(true)}
            className="block w-full text-left group/img"
            aria-label={`View full size: ${alt}`}
          >
            <div
              className="relative overflow-hidden rounded-lg bg-[#111]"
              style={{ aspectRatio: "16/9" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-top opacity-85 transition-opacity duration-300 group-hover/img:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100">
                <span className="rounded-full bg-black/70 px-2.5 py-1 text-xs tracking-wide text-[#ccc] backdrop-blur-sm">
                  View full size ↗
                </span>
              </div>
            </div>
          </button>
          {caption && (
            <p className="mt-2 text-xs tracking-wide text-[#777]">{caption}</p>
          )}
        </div>

        {/* Annotation */}
        {annotation && (
          <div className="flex flex-col gap-3 lg:pt-1">
            <div className="h-px w-8 bg-[#2a2a2a]" />
            <p className="text-sm leading-relaxed text-[#888] font-[family-name:var(--font-inter)]">
              {annotation}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full size view: ${alt}`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/95 p-6 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#aaa] hover:bg-white/20 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {annotation && (
            <p
              className="max-w-2xl text-center text-sm leading-relaxed text-[#888]"
              onClick={(e) => e.stopPropagation()}
            >
              {annotation}
            </p>
          )}
        </div>
      )}
    </>
  );
}
