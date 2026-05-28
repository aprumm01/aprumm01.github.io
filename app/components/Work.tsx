import Link from "next/link";
import { projects } from "@/app/lib/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <div className="mb-16 flex items-center gap-4">
        <span className="text-xs tracking-widest uppercase text-[#333]">01</span>
        <div className="h-px flex-1 bg-[#1a1a1a]" />
        <span className="text-sm tracking-widest uppercase text-[#777]">Selected Work</span>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className="group relative overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#0e0e0e] transition-all duration-300 hover:border-white/8"
          >
            {/* Accent glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 0% 100%, ${project.accentColor}cc, transparent)`,
              }}
            />

            <div className="relative flex flex-col gap-0">
              {/* Top: metadata + content */}
              <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:gap-12">
                {/* Number */}
                <div className="shrink-0 lg:w-16">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#1e1e1e] group-hover:text-[#2a2a2a] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <p className="mb-1 text-sm tracking-wide uppercase text-[#777]">
                      {project.category}
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#f0f0f0] leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#777]">
                      {project.role} &middot; {project.period}
                    </p>
                  </div>

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
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#333]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.03] px-3 py-1.5 text-sm text-[#888] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-[#1a1a1a] px-8 md:px-10 py-5">
                <Link
                  href={`/work/${project.slug}`}
                  className="group/btn inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm text-[#999] transition-all duration-200 hover:bg-white hover:text-[#0a0a0a] hover:border-white"
                >
                  View case study
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </Link>
              </div>

              {/* Image strip */}
              <Link href={`/work/${project.slug}`} className="block">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border-t border-[#1a1a1a]">
                  {project.images.map((img, i) => (
                    <div
                      key={`${img.src}-${i}`}
                      className={`relative overflow-hidden bg-[#111] ${i > 0 ? "hidden sm:block" : ""}`}
                      style={{ aspectRatio: "16/9" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/60 to-transparent" />
                      {i === 0 && (
                        <span className="absolute bottom-2 left-3 text-xs tracking-widest uppercase text-[#777]">
                          {project.role.split(",")[0].trim()}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
