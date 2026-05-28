import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import AnnotatedImage from "@/app/components/AnnotatedImage";
import VideoPlayer from "@/app/components/VideoPlayer";
import { projects, getProject, getAdjacentProjects, type GalleryItem } from "@/app/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const image = project.images[0]?.src ?? "/projects/sap-concur/search-results.jpg";
  const title = `${project.title} | Adam Prumm`;

  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      url: `https://aprumm01.github.io/work/${slug}/`,
      siteName: "Adam Prumm",
      images: [{ url: image, alt: project.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-36 pb-16">
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#777] hover:text-[#ccc] transition-colors"
          >
            ← Work
          </Link>

          <p className="mb-3 text-sm tracking-widest uppercase text-[#888]">
            {project.category}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-tight text-[#fafafa] mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-[#888] mb-8">
            {project.role} &middot; {project.period}
          </p>

          {/* Skills & Methods chips */}
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-[#888]">
              Skills &amp; Methods
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#333] px-4 py-1.5 text-sm text-[#aaa] transition-all duration-200 ease-out hover:border-white/25 hover:text-[#e8e8e8] hover:bg-white/[0.05] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview stats */}
        {project.overviewStats && (
          <section className="border-t border-[#1a1a1a]">
            <div className="mx-auto max-w-4xl px-6 py-12">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {project.overviewStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#fafafa]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs tracking-widest uppercase text-[#888]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hero image strip */}
        <div className="border-t border-[#1a1a1a]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
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
                  className="h-full w-full object-cover object-top opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Case study sections */}
        {project.sections.map((section, i) => (
          <section key={section.heading} className="border-t border-[#1a1a1a]">
            <div className="mx-auto max-w-4xl px-6 py-16">
              <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
                {/* Section label */}
                <div className="pt-1">
                  <span className="text-xs tracking-widest uppercase text-[#444]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#ccc] leading-snug">
                    {section.heading}
                  </h2>
                </div>

                {/* Section body */}
                <div className="flex flex-col gap-8">
                  {/* Paragraphs */}
                  <div className="flex flex-col gap-5">
                    {section.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className="text-base text-[#aaa] leading-relaxed font-[family-name:var(--font-inter)]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Section images, each with inline annotation */}
                  {section.images && section.images.length > 0 && (
                    <div className="flex flex-col gap-10">
                      {section.images.map((img) => (
                        <AnnotatedImage
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          caption={img.caption}
                          annotation={img.annotation}
                        />
                      ))}
                    </div>
                  )}

                  {/* Section videos */}
                  {section.videos && section.videos.length > 0 && (
                    <div className="flex flex-col gap-10">
                      {section.videos.map((vid) => (
                        <VideoPlayer
                          key={vid.src}
                          src={vid.src}
                          caption={vid.caption}
                          annotation={vid.annotation}
                          poster={vid.poster}
                        />
                      ))}
                    </div>
                  )}

                  {/* Section stats */}
                  {section.stats && section.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 rounded-xl border border-[#1a1a1a] bg-[#0e0e0e] p-6 sm:grid-cols-4">
                      {section.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#fafafa]">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs tracking-widest uppercase text-[#888]">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gallery grid */}
                  {section.gallery && section.gallery.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {section.gallery.map((piece: GalleryItem) => (
                        <div
                          key={piece.title}
                          className="group overflow-hidden rounded-lg border border-[#1a1a1a] bg-[#0e0e0e]"
                        >
                          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={piece.src}
                              alt={piece.alt}
                              className="h-full w-full object-cover object-top opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                              loading="lazy"
                            />
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
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Prev / Next navigation */}
        <nav className="border-t border-[#1a1a1a]">
          <div className="mx-auto max-w-4xl px-6 py-12 flex items-center justify-between">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="text-xs tracking-widest uppercase text-[#555] group-hover:text-[#888] transition-colors">
                  ← Previous
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#999] group-hover:text-[#fafafa] transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col items-end gap-1"
              >
                <span className="text-xs tracking-widest uppercase text-[#555] group-hover:text-[#888] transition-colors">
                  Next →
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#999] group-hover:text-[#fafafa] transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </main>
    </>
  );
}
