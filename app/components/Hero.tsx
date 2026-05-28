export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0a0a0a 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <p className="opacity-0 animate-fade-up delay-100 text-xs tracking-[0.35em] uppercase text-[#888] font-[family-name:var(--font-inter)]">
          Principal UX Designer &amp; Researcher
        </p>

        <h1 className="opacity-0 animate-fade-up delay-200 font-[family-name:var(--font-playfair)] text-[clamp(3.5rem,11vw,9rem)] font-normal leading-none tracking-tight text-[#fafafa]">
          Adam Prumm
        </h1>

        <p className="opacity-0 animate-fade-up delay-300 max-w-lg text-sm text-[#999] leading-relaxed font-[family-name:var(--font-inter)]">
          10 years of design experience spanning enterprise travel products,
          web design, and front-end development. Principal UX Designer at SAP
          Concur. PhD candidate at Indiana University.
        </p>

        <div className="opacity-0 animate-fade-up delay-400 flex items-center gap-5 pt-2">
          <a
            href="#work"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-[#fafafa] hover:bg-white/5 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm text-[#888] hover:text-[#fafafa] transition-colors"
          >
            Get in touch &rarr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-[#2a2a2a]" />
      </div>
    </section>
  );
}
