"use client";

interface Props {
  src: string;
  caption?: string;
  annotation?: string;
  poster?: string;
}

export default function VideoPlayer({ src, caption, annotation, poster }: Props) {
  return (
    <div className={`grid gap-8 items-start ${annotation ? "lg:grid-cols-[3fr_2fr]" : "grid-cols-1"}`}>
      <div>
        <div className="relative overflow-hidden rounded-lg bg-[#111]" style={{ aspectRatio: "16/9" }}>
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
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
  );
}
