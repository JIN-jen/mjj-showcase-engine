"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { HomeLoader } from "@/components/sections/home-loader";
import { ProjectPreviewPanel } from "@/components/sections/project-preview-panel";
import { projectIndexItems } from "@/lib/site-data/project-index";
import { useProjectIndexMotion } from "@/lib/motion/use-project-index-motion";

export function HomeProjectIndexPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState(projectIndexItems[0]?.slug);

  useProjectIndexMotion(pageRef, setActiveSlug);

  const activeProject = useMemo(
    () =>
      projectIndexItems.find((project) => project.slug === activeSlug) ??
      projectIndexItems[0],
    [activeSlug],
  );

  return (
    <SiteShell>
      <HomeLoader />
      <div ref={pageRef} className="relative">
        <section className="section-frame min-h-[44rem] border-b border-white/8 pt-16">
          <div className="cinematic-container flex min-h-[44rem] flex-col justify-between gap-16 py-10 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
              <div className="space-y-8">
                <p className="eyebrow" data-index-reveal="intro">
                  [TIIH / Project Index]
                </p>
                <div className="space-y-5">
                  <h1
                    className="display-heading max-w-5xl text-[clamp(4.75rem,14vw,12rem)]"
                    data-index-reveal="intro"
                  >
                    Archive
                  </h1>
                  <p
                    className="max-w-3xl text-[clamp(1.4rem,3vw,2.8rem)] leading-[0.95] tracking-[-0.05em] text-white/92"
                    data-index-reveal="intro"
                  >
                    Work-facing front door. Index first. Media second. Narrative through
                    motion, not stacked landing-page blocks.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <div className="glow-panel p-5 md:p-6" data-index-reveal="intro">
                  <p className="eyebrow text-ink">[System State]</p>
                  <div className="mt-7 space-y-3 text-sm leading-6 text-ink-muted">
                    <p>Loader sequence active.</p>
                    <p>Interactive project archive active.</p>
                    <p>Future media / video / WebGL layer reserved.</p>
                  </div>
                </div>

                <div className="space-y-3" data-index-reveal="intro">
                  <div className="glow-line" />
                  <p className="eyebrow text-ink">[Scroll into the work index]</p>
                </div>
              </div>
            </div>

            <div
              className="grid gap-8 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_auto_auto]"
              data-index-reveal="intro"
            >
              <p className="eyebrow text-ink">[Index / Hover / Enter]</p>
              <Link href="/work" className="eyebrow transition-colors hover:text-ink">
                [Open full archive]
              </Link>
              <p className="eyebrow">[Phase 1 / placeholder media only]</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-clip border-b border-white/8">
          <div className="cinematic-container grid gap-10 py-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)] lg:items-start lg:py-16">
            <div className="min-w-0">
              <div className="mb-6 grid grid-cols-[5.4rem_minmax(0,1.9fr)_1fr_1fr_1fr] gap-3 border-b border-white/10 pb-3">
                <p className="eyebrow">[No.]</p>
                <p className="eyebrow">[Project]</p>
                <p className="eyebrow hidden md:block">[Category]</p>
                <p className="eyebrow hidden md:block">[Service]</p>
                <p className="eyebrow hidden md:block">[Year / Status]</p>
              </div>

              <div className="space-y-1">
                {projectIndexItems.map((project) => {
                  const isActive = activeProject.slug === project.slug;

                  return (
                    <Link
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      data-project-row
                      data-project-slug={project.slug}
                      onMouseEnter={() => setActiveSlug(project.slug)}
                      onFocus={() => setActiveSlug(project.slug)}
                      className={[
                        "index-row group relative grid grid-cols-[5.4rem_minmax(0,1.9fr)_1fr_1fr_1fr] gap-3 overflow-hidden border-b border-white/8 py-5 transition-all duration-300",
                        isActive ? "text-ink" : "text-white/52 hover:text-white/90",
                      ].join(" ")}
                    >
                      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--glow-strong)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="eyebrow relative z-10">{project.number}</p>
                      <div className="relative z-10 min-w-0">
                        <p className="text-[clamp(1.7rem,3vw,3.6rem)] leading-none tracking-[-0.06em]">
                          {project.title}
                        </p>
                        <p className="mt-2 pr-4 text-sm leading-6 text-white/38 md:hidden">
                          {project.category} / {project.service} / {project.status}
                        </p>
                      </div>
                      <p className="eyebrow relative z-10 hidden self-center md:block">
                        {project.category}
                      </p>
                      <p className="eyebrow relative z-10 hidden self-center md:block">
                        {project.service}
                      </p>
                      <p className="eyebrow relative z-10 hidden self-center justify-self-start md:block">
                        {project.status}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <ProjectPreviewPanel project={activeProject} />
          </div>
        </section>

        <section className="section-frame min-h-[26rem]">
          <div className="cinematic-container flex min-h-[26rem] flex-col justify-end gap-10 py-10 md:py-14">
            <div className="grid gap-6 border-t border-white/8 pt-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
              <p className="statement-heading max-w-4xl" data-index-reveal="outro">
                Access line open for future contact, archive routing, and system entry.
              </p>
              <div className="flex flex-col justify-between gap-6" data-index-reveal="outro">
                <p className="eyebrow">[Bottom Line / Contact Access Placeholder]</p>
                <div className="grid grid-cols-1 gap-3 text-sm leading-6 text-ink-muted md:grid-cols-2">
                  <p>[Future direct email]</p>
                  <p>[Future WhatsApp / access route]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
