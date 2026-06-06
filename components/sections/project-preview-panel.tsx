"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/motion/gsap";
import type { ProjectIndexItem } from "@/lib/site-data/project-index";

type ProjectPreviewPanelProps = {
  project: ProjectIndexItem;
};

export function ProjectPreviewPanel({ project }: ProjectPreviewPanelProps) {
  const [displayedProject, setDisplayedProject] = useState(project);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayedProject.slug === project.slug || !panelRef.current) {
      return;
    }

    const panel = panelRef.current;
    const wipe = panel.querySelector<HTMLElement>("[data-preview-wipe]");
    const copies = panel.querySelectorAll<HTMLElement>("[data-preview-copy]");

    if (!wipe || copies.length === 0) {
      setDisplayedProject(project);
      return;
    }

    const timeline = gsap.timeline();

    timeline
      .set(wipe, {
        scaleX: 0,
        transformOrigin: "left center",
      })
      .to(copies, {
        y: 18,
        opacity: 0,
        duration: 0.14,
        stagger: 0.02,
        ease: "power2.in",
      })
      .to(
        wipe,
        {
          scaleX: 1,
          duration: 0.22,
          ease: "power3.inOut",
          onComplete: () => setDisplayedProject(project),
        },
        0,
      )
      .set(wipe, {
        transformOrigin: "right center",
      })
      .fromTo(
        copies,
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.28,
          stagger: 0.03,
          ease: "power3.out",
        },
        0.24,
      )
      .to(
        wipe,
        {
          scaleX: 0,
          duration: 0.28,
          ease: "power3.inOut",
        },
        0.24,
      );

    return () => {
      timeline.kill();
      gsap.set(copies, { opacity: 1, y: 0 });
      gsap.set(wipe, { scaleX: 0 });
    };
  }, [project, displayedProject.slug]);

  return (
    <aside className="lg:sticky lg:top-24">
      <div
        ref={panelRef}
        className="project-preview-panel relative min-h-[38rem] overflow-hidden"
        data-index-reveal="preview"
      >
        <div data-preview-wipe className="preview-wipe absolute inset-0 z-20 bg-[#060606]" />
        <div
          className="project-preview-media absolute inset-0 opacity-95"
          style={{
            background: displayedProject.previewBackground,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(176,196,222,0.18),transparent_34%)]" />
        <div className="absolute left-[10%] top-[12%] h-44 w-40 border border-white/8 bg-white/3 backdrop-blur-[1px]" />
        <div className="absolute bottom-[12%] right-[10%] h-52 w-30 border border-white/8 bg-black/20" />
        <div className="absolute left-[58%] top-[36%] h-20 w-20 rounded-full border border-white/10 bg-[var(--glow)] blur-[1px]" />

        <div className="relative z-10 flex min-h-[38rem] flex-col justify-between p-5 md:p-6">
          <div className="space-y-4">
            <p data-preview-copy className="eyebrow text-white/76">
              [Featured Preview]
            </p>
            <div className="overflow-hidden">
              <p
                className="text-[clamp(2.9rem,5.4vw,5rem)] leading-[0.86] tracking-[-0.075em] text-white"
                data-preview-title
                data-preview-copy
              >
                {displayedProject.title}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 border-t border-white/12 pt-4">
              <div>
                <p data-preview-copy className="eyebrow text-white/54">[Category]</p>
                <p data-preview-copy className="mt-2 text-sm text-white/86">
                  {displayedProject.category}
                </p>
              </div>
              <div>
                <p data-preview-copy className="eyebrow text-white/54">[Service]</p>
                <p data-preview-copy className="mt-2 text-sm text-white/86">
                  {displayedProject.service}
                </p>
              </div>
              <div>
                <p data-preview-copy className="eyebrow text-white/54">[State]</p>
                <p data-preview-copy className="mt-2 text-sm text-white/86">
                  {displayedProject.status}
                </p>
              </div>
              <div>
                <p data-preview-copy className="eyebrow text-white/54">[Route]</p>
                <p data-preview-copy className="mt-2 text-sm text-white/86">
                  /work/{displayedProject.slug}
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p data-preview-copy className="eyebrow text-white/54">[Preview Surface]</p>
              <p data-preview-copy className="mt-2 max-w-sm text-sm leading-6 text-white/68">
                {displayedProject.previewLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
