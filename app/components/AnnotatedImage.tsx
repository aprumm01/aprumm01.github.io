"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  annotation?: string;
  magnify?: boolean;
}

const MAG_W = 300;
const MAG_H = 188;
const ZOOM = 2.5;

interface MagState {
  viewX: number;
  viewY: number;
  relX: number;
  relY: number;
  imgW: number;
  imgH: number;
}

export default function AnnotatedImage({ src, alt, caption, annotation, magnify }: Props) {
  const [open, setOpen] = useState(false);
  const [mag, setMag] = useState<MagState | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnify || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    let magX = e.clientX + 18;
    let magY = e.clientY - MAG_H - 18;
    if (magX + MAG_W > window.innerWidth - 8) magX = e.clientX - MAG_W - 18;
    if (magY < 8) magY = e.clientY + 28;

    setMag({ viewX: magX, viewY: magY, relX, relY, imgW: rect.width, imgH: rect.height });
  }, [magnify]);

  const handleMouseLeave = useCallback(() => setMag(null), []);

  return (
    <>
      <div className={`grid gap-8 items-start ${annotation ? "lg:grid-cols-[3fr_2fr]" : "grid-cols-1"}`}>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="block w-full text-left group/img"
            aria-label={`View full size: ${alt}`}
          >
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-lg bg-[#111]"
              style={{ aspectRatio: "16/9", cursor: magnify ? "crosshair" : undefined }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
                  {magnify ? "Hover to zoom · Click to expand ↗" : "View full size ↗"}
                </span>
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

      {mag && magnify && (
        <div
          className="pointer-events-none fixed z-40 overflow-hidden rounded-lg border border-white/20 shadow-2xl"
          style={{
            left: mag.viewX,
            top: mag.viewY,
            width: MAG_W,
            height: MAG_H,
            backgroundColor: "#111",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            style={{
              position: "absolute",
              width: `${mag.imgW * ZOOM}px`,
              height: `${mag.imgH * ZOOM}px`,
              objectFit: "cover",
              objectPosition: "top",
              left: `${MAG_W / 2 - mag.relX * ZOOM}px`,
              top: `${MAG_H / 2 - mag.relY * ZOOM}px`,
            }}
          />
          <div
            className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 40%)" }}
          />
        </div>
      )}

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
