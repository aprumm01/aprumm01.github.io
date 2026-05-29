"use client";
import { useState, useRef, useCallback, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  annotation?: string;
  magnify?: boolean;
}

const ZOOM = 2.5;

interface MagState {
  viewX: number;
  viewY: number;
  relX: number;
  relY: number;
  imgW: number;
  imgH: number;
  lensW: number;
  lensH: number;
}

export default function AnnotatedImage({ src, alt, caption, annotation, magnify }: Props) {
  const [open, setOpen] = useState(false);
  const [mag, setMag] = useState<MagState | null>(null);
  const lightboxImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!open) {
      setMag(null);
      return;
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleLightboxMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if (!magnify || !lightboxImgRef.current) return;
    const img = lightboxImgRef.current;
    if (!img.naturalWidth || !img.naturalHeight) return;
    const rect = img.getBoundingClientRect();

    // object-contain may letterbox the image inside the element —
    // compute the actual rendered content rect so relX/Y map to real image pixels
    const naturalAspect = img.naturalWidth / img.naturalHeight;
    const elementAspect = rect.width / rect.height;
    let contentW: number, contentH: number, contentLeft: number, contentTop: number;
    if (naturalAspect > elementAspect) {
      contentW = rect.width;
      contentH = rect.width / naturalAspect;
      contentLeft = rect.left;
      contentTop = rect.top + (rect.height - contentH) / 2;
    } else {
      contentH = rect.height;
      contentW = rect.height * naturalAspect;
      contentLeft = rect.left + (rect.width - contentW) / 2;
      contentTop = rect.top;
    }

    // Cursor position relative to actual image content (not element box)
    const relX = e.clientX - contentLeft;
    const relY = e.clientY - contentTop;

    // Lens width adapts to image but is capped so wide landscape images don't create a screen-filling lens
    const lensW = Math.min(Math.round(contentW + 80), 500, window.innerWidth - 40);
    const lensH = Math.round(lensW * 0.65);

    // Center the lens on the cursor, clamped to stay fully within the viewport
    const magX = Math.max(8, Math.min(e.clientX - Math.round(lensW / 2), window.innerWidth - lensW - 8));
    const magY = Math.max(8, Math.min(e.clientY - Math.round(lensH / 2), window.innerHeight - lensH - 8));

    setMag({ viewX: magX, viewY: magY, relX, relY, imgW: contentW, imgH: contentH, lensW, lensH });
  }, [magnify]);

  const handleLightboxMouseLeave = useCallback(() => setMag(null), []);

  return (
    <>
      {/* ── Thumbnail ─────────────────────────────────────────────────────── */}
      <div className={`grid gap-8 items-start ${annotation ? "lg:grid-cols-[3fr_2fr]" : "grid-cols-1"}`}>
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
                  {magnify ? "Click to expand + zoom ↗" : "View full size ↗"}
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

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full size view: ${alt}`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/95 p-6 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#aaa] hover:bg-white/20 hover:text-white transition-colors z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          {magnify && (
            <p className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-[#777] tracking-wide pointer-events-none">
              Hover to zoom
            </p>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={lightboxImgRef}
            src={src}
            alt={alt}
            className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
            style={{ cursor: magnify ? "crosshair" : "default" }}
            onClick={(e) => e.stopPropagation()}
            onMouseMove={magnify ? handleLightboxMouseMove : undefined}
            onMouseLeave={magnify ? handleLightboxMouseLeave : undefined}
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

      {/* ── Magnifier lens (background-image avoids any img-element distortion) ── */}
      {mag && magnify && open && (
        <div
          className="pointer-events-none fixed z-[60] overflow-hidden rounded-xl border border-white/25 shadow-2xl"
          style={{
            left: mag.viewX,
            top: mag.viewY,
            width: mag.lensW,
            height: mag.lensH,
            backgroundImage: `url(${src})`,
            backgroundSize: `${mag.imgW * ZOOM}px ${mag.imgH * ZOOM}px`,
            backgroundPosition: `${mag.lensW / 2 - mag.relX * ZOOM}px ${mag.lensH / 2 - mag.relY * ZOOM}px`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#0a0a0a",
          }}
        >
          <div
            className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 30%)" }}
          />
        </div>
      )}
    </>
  );
}
