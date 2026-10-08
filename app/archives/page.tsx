import Link from "next/link";

const archives = [
  {
    name: "Research Vault",
    description: "Design research and HCI readings",
    url: "https://aprumm01.github.io/research-vault/",
  },
  {
    name: "Iteration & Sustainability Archive",
    description: "AI, design iteration, and environmental sustainability",
    url: "https://aprumm01.github.io/iteration-sustainability-archive/",
  },
  {
    name: "SRCwL Archive",
    description: "Speculative and Reflective Computing with Leather",
    url: "https://aprumm01.github.io/srcwl-archive/",
  },
];

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <div className="mx-auto max-w-2xl px-6 py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#888] transition-colors mb-12"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-light tracking-tight mb-16">
          Archives
        </h1>

        <ul className="flex flex-col gap-8">
          {archives.map((archive) => (
            <li key={archive.name}>
              <a
                href={archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h2 className="text-xl text-[#888] group-hover:text-[#fafafa] transition-colors mb-1">
                  {archive.name}
                </h2>
                <p className="text-sm text-[#555]">
                  {archive.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
