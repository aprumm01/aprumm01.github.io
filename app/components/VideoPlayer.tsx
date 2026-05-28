"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  src: string;
  caption?: string;
  annotation?: string;
  poster?: string;
}

export default function VideoPlayer({ src, caption, annotation, poster }: Props) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openLightbox() {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setOpen(false);
    document.body.style.overflow = "";
    if (videoRef.current) videoRef.current.pause();
  }

  return (
    <>
      <div className={`grid gap-8 items-start ${annotation ? "lg:grid-cols-[3fr_2fr]" : "grid-cols-1"}`}>
        <div>
          <button
            onClick={openLightbox}
            className="group relative block w-full overflow-hidden rounded-lg bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            style={{ aspectRatio: "16/9" }}
            aria-label="Play video"
          >
            {poster && (
              <img
                src={poster}
                alt=""
                className="h-full w-full object-cover opacity-60 transition-opacity duration-200 group-hover:opacity-75"
              />
            )}
            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-200 group-hover:bg-white/20 group-hover:scale-110">
                <svg className="ml-0.5 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
          {caption && (
            <p className="mt-2 text-xs tracking-wide text-[#777]">{caption}</p>
          )}
        </div>

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative overflow-hidden rounded-xl bg-black shadow-2xl"
            style={{ width: "min(90vw, calc(84vh * 16 / 9))", aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="h-full w-full"
            />
            <button
              onClick={closeLightbox}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 transition-colors hover:bg-black/80 hover:text-white"
              aria-label="Close video"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
