import Link from "next/link";
import { projects } from "@/app/lib/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <div className="mb-16 flex items-center gap-4">
        <span className="text-xs tracking-widest uppercase text-[#333]">01</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2A4A2E]/40 to-transparent" />
        <span className="text-sm tracking-widest uppercase text-[#777]">Selected Work</span>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className="group card-hover relative overflow-hidden rounded-xl border border-[#1A2E1C]/60 hover:border-[#2E5233]/50"
            style={{
              background: `
                radial-gradient(ellipse 35% 45% at 0% 100%, #0C1209 0%, transparent 52%),
                radial-gradient(ellipse 25% 30% at 100% 0%, #0A1108 0%, transparent 48%),
                linear-gradient(160deg, #0a0c0a 0%, #0d0d0d 50%, #0a0c0a 100%)
              `,
            }}
          >
            {/* Per-project accent glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 0% 100%, ${project.accentColor}bb, transparent)`,
              }}
            />
            {/* Green top-edge highlight on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3D6B42]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col">
              <div className="flex flex-col gap-5 p-8 md:p-10">

                {/* Category label */}
                <p className="text-xs tracking-widest uppercase text-[#A67C3A]">
                  {project.category}
                </p>

                {/* Header row: stacks on mobile (title → button), side-by-side on md+ */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                  <div className="flex items-baseline gap-4 min-w-0 flex-1">
                    <span className="gold-text font-[family-name:var(--font-playfair)] text-4xl opacity-60 group-hover:opacity-95 transition-opacity duration-300 shrink-0 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#f0f0f0] leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#666]">
                        {project.role} &middot; {project.period}
                      </p>
                    </div>
                  </div>

                  {/* Primary CTA — below title on mobile, top-right on md+ */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="self-start shrink-0 inline-flex items-center gap-2 rounded-full border border-[#4E7D53]/40 px-5 py-2 text-sm font-medium text-[#a0c8a3] hover:border-[#4E7D53]/80 hover:text-white transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, #0F1A12 0%, #1B3320 60%, #131D15 100%)" }}
                  >
                    View case study
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </Link>
                </div>

                {/* Description */}
                <p className="text-base text-[#999] leading-relaxed max-w-2xl font-[family-name:var(--font-inter)]">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[#888] leading-relaxed font-[family-name:var(--font-inter)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#4E7D53]/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0E1A11]/70 px-3 py-1.5 text-sm text-[#5A8060] border border-[#1E3A22]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image section */}
              {project.slug === "web-and-graphics" ? (
                <div className="border-t border-[#1A2E1C]/50 p-6 md:p-8 pt-5 md:pt-5">
                  <div className="grid grid-cols-3 gap-3">
                    {project.images.map((img, imgIdx) => (
                      <Link
                        key={`${img.src}-${imgIdx}`}
                        href={`/work/${project.slug}`}
                        className="group/img relative block overflow-hidden rounded-lg"
                        style={{ aspectRatio: "4/3" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover object-top opacity-75 group-hover/img:opacity-100 transition-all duration-300 group-hover/img:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 ring-1 ring-[#4E7D53]/0 group-hover/img:ring-[#4E7D53]/40 rounded-lg transition-all duration-300" />
                        <span className="absolute bottom-2 left-2.5 text-xs tracking-widest uppercase text-white/0 group-hover/img:text-white/70 transition-colors duration-300">
                          View
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border-t border-[#1A2E1C]/50">
                    {project.images.slice(0, 3).map((img, imgIdx) => (
                      <div
                        key={`${img.src}-${imgIdx}`}
                        className={`relative overflow-hidden bg-[#0c120e] ${imgIdx > 0 ? "hidden sm:block" : ""}`}
                        style={{ aspectRatio: "16/9" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a140b]/70 to-transparent" />
                        {imgIdx === 0 && (
                          <span className="absolute bottom-2 left-3 text-xs tracking-widest uppercase text-[#777]">
                            {project.role.split(",")[0].trim()}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
