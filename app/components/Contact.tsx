export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 flex items-center gap-4">
        <span className="text-xs tracking-widest uppercase text-[#333]">03</span>
        <div className="h-px flex-1 bg-[#1a1a1a]" />
        <span className="text-xs tracking-widest uppercase text-[#777]">Contact</span>
      </div>

      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-none text-[#fafafa]">
            Let&apos;s work together.
          </h2>
          <p className="max-w-md text-sm text-[#999] leading-relaxed font-[family-name:var(--font-inter)]">
            Open to senior design roles, research collaborations, and
            consulting. Available for conversations about enterprise UX, travel
            tech, and design research.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="mailto:adam.prumm@gmail.com"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm text-[#ccc] transition-all hover:bg-white hover:text-[#0a0a0a] hover:border-white"
          >
            adam.prumm@gmail.com
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <a
            href="https://linkedin.com/in/adam-prumm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#2a2a2a] px-7 py-3 text-sm text-[#888] transition-all hover:border-white/15 hover:text-[#ccc]"
          >
            linkedin.com/in/adam-prumm
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
