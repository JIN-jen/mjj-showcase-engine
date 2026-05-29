"use client";

import Link from "next/link";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { navItems } from "@/lib/site-data/navigation";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-canvas text-ink">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/55 to-transparent" />
        <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-black/25 backdrop-blur-md">
          <div className="cinematic-container flex items-center justify-between gap-6 py-4">
            <Link href="/" className="eyebrow text-ink">
              TIIH / Brand Website
            </Link>
            <nav className="hidden items-center gap-6 text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="relative z-0 pt-18">{children}</main>
      </div>
    </LenisProvider>
  );
}
