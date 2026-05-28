export default function Footer() {
  return (
    <footer className="border-t border-[#141414] px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-xs text-[#555] font-[family-name:var(--font-inter)]">
          © {new Date().getFullYear()} Adam Prumm
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:adam.prumm@gmail.com"
            className="text-xs text-[#555] hover:text-[#888] transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/adam-prumm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-[#888] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
