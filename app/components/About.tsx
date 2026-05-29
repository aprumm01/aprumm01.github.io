const skills = [
  "AI Interaction Design",
  "Conversational UI",
  "Product Design",
  "UX Research",
  "Design Systems",
  "Enterprise UX",
  "Workshop Facilitation",
  "Usability Testing",
  "Design Sprints",
  "Accessibility (WCAG)",
  "Progressive Disclosure",
  "Mixed-Methods Research",
];

const roles = [
  { title: "Principal UX Designer", org: "SAP Concur", period: "2023–Present" },
  { title: "Sr. UX Design Specialist", org: "SAP Concur", period: "2021–2023" },
  { title: "Sr. UX Researcher & Sprint Facilitator", org: "ATPCO", period: "2020–2021" },
  { title: "UX Designer", org: "ATPCO", period: "2018–2020" },
  { title: "Web Designer & Developer", org: "Tribeswell LLC", period: "2014–2016" },
];

const education = [
  { degree: "PhD Candidate, Informatics (HCI & Design Track)", school: "Indiana University · Minor in Education" },
  { degree: "MS Human-Computer Interaction & Design", school: "Indiana University" },
  { degree: "MFA Graphic Design", school: "Indiana University" },
  { degree: "BFA Graphic Design", school: "Purdue Fort Wayne" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <div className="mb-16 flex items-center gap-4">
        <span className="text-xs tracking-widest uppercase text-[#777]">02</span>
        <div className="h-px flex-1 bg-[#1a1a1a]" />
        <span className="text-sm tracking-widest uppercase text-[#777]">About</span>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-snug text-[#fafafa]">
            Designer with deep roots in research, systems thinking, and the
            travel industry.
          </h2>
          <div className="flex flex-col gap-4 text-base text-[#aaa] leading-relaxed font-[family-name:var(--font-inter)]">
            <p>
              I&apos;m Principal UX Designer and design lead for SAP Concur&apos;s Travel UX
              team, a platform serving tens of millions of business travelers
              across 103 countries. Today my work centers on AI: I&apos;m leading
              interaction design for SAP Joule&apos;s conversational booking experience
              across all four travel verticals, and I built the team&apos;s Synthetic
              User Tool from scratch, a full data pipeline that turns monthly
              customer feedback into segmentable AI personas, now used by our
              team of designers.
            </p>
            <p>
              Before the AI work, I owned the full air booking flow at Concur:
              search, multi-fare display, seat selection, fare merchandising, and
              review &amp; book. Prior to Concur, I was at ATPCO, the airline
              industry&apos;s pricing infrastructure backbone, where I led UX research
              and design across the product portfolio, ran Design Sprints
              across product teams, and designed tools for pricing analysts
              at 490+ airlines worldwide.
            </p>
            <p>
              I hold an MFA in Graphic Design and an MS in HCI from Indiana
              University, and I&apos;m currently a PhD candidate in Informatics (HCI
              and Design track, minor in Education) studying how people make
              sense of AI in design education.
            </p>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full border border-[#2a2a2a] px-4 py-1.5 text-sm text-[#888]">
              Certified Master Facilitator · AJ&amp;Smart
            </span>
            <span className="rounded-full border border-[#2a2a2a] px-4 py-1.5 text-sm text-[#888]">
              PhD Candidate · Indiana University
            </span>
            <span className="rounded-full border border-[#2a2a2a] px-4 py-1.5 text-sm text-[#888]">
              49.6% T&amp;E Market Share · SAP Concur
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          {/* Skills */}
          <div>
            <p className="mb-3 text-xs tracking-widest uppercase text-[#888]">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[#2a2a2a] px-4 py-1.5 text-sm text-[#888] transition-all duration-200 ease-out hover:border-white/25 hover:text-[#e8e8e8] hover:bg-white/[0.05] cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="border-t border-[#1a1a1a] pt-8">
            <p className="mb-4 text-xs tracking-widest uppercase text-[#888]">Experience</p>
            <div className="flex flex-col gap-3">
              {roles.map((r) => (
                <div key={`${r.title}-${r.org}`} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#ccc] leading-snug">{r.title}</p>
                    <p className="text-sm text-[#777]">{r.org}</p>
                  </div>
                  <span className="shrink-0 text-xs text-[#777] pt-0.5">{r.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-[#1a1a1a] pt-8">
            <p className="mb-4 text-xs tracking-widest uppercase text-[#888]">Education</p>
            <div className="flex flex-col gap-3">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="text-sm text-[#ccc] leading-snug">{e.degree}</p>
                  <p className="text-sm text-[#777]">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
