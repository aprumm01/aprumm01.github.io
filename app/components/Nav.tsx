"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-widest uppercase text-[#fafafa] hover:text-white/60 transition-colors"
        >
          Adam Prumm
        </Link>
        <ul className="flex items-center gap-8">
          {[
            { label: "Work", href: "/#work" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-[#888] hover:text-[#fafafa] transition-colors tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
