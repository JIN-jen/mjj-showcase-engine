"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { projectIndexItems } from "@/lib/site-data/project-index";

const editorialProjectSlugs = [
  "tiih-intelligence-terminal",
  "ai-landing-page-system",
  "tz-helper-erp",
  "industrial-signal-dashboard",
  "construction-company-showcase",
  "hotel-landing-page-template",
];

const projectDescriptions = [
  "Operational intelligence interface for industrial decisions, signals, and executive control.",
  "A repeatable landing-page production system for AI-native service launches.",
  "ERP workflow layer for teams coordinating requests, operations, and delivery states.",
  "Monitoring dashboard language for industrial signals, charts, alerts, and status review.",
  "Editorial showcase structure for construction firms, built around project proof and credibility.",
  "Hospitality landing template for rooms, booking intent, and destination-first presentation.",
];

export function HomeProjectIndexPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(
    () =>
      editorialProjectSlugs
        .map((slug, index) => {
          const project = projectIndexItems.find((item) => item.slug === slug);

          return project
            ? {
                ...project,
                displayNumber: String(index + 1).padStart(2, "0"),
                description: projectDescriptions[index],
              }
            : null;
        })
        .filter(Boolean),
    [],
  );

  const activeProject = projects[activeIndex] ?? projects[0];

  useEffect(() => {
    const root = pageRef.current;

    if (!root) {
      return;
    }

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-editorial-index]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!centeredEntry) {
          return;
        }

        const index = Number(centeredEntry.target.dataset.editorialIndex);

        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-44% 0px -44% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <LenisProvider>
      <main ref={pageRef} className="editorial-index-page">
        <header className="editorial-shell" aria-label="Home navigation">
          <Link href="/" className="editorial-logo" aria-label="TIIH home">
            TIIH
          </Link>
          <nav className="editorial-nav" aria-label="Primary navigation">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <aside className="editorial-project-list" aria-label="Project list">
          {projects.map((project, index) =>
            project ? (
              <Link
                key={project.slug}
                href={`#project-${project.displayNumber}`}
                className={activeIndex === index ? "is-active" : ""}
              >
                <span>{project.displayNumber}</span>
                <span>{project.title}</span>
              </Link>
            ) : null,
          )}
        </aside>

        {activeProject ? (
          <aside className="editorial-meta" aria-live="polite">
            <p className="editorial-meta__number">{activeProject.displayNumber}</p>
            <div>
              <p>Category</p>
              <span>{activeProject.category}</span>
            </div>
            <div>
              <p>Service</p>
              <span>{activeProject.service}</span>
            </div>
            <div>
              <p>Contact</p>
              <span>hello@tiih.com</span>
            </div>
            <p className="editorial-meta__description">{activeProject.description}</p>
          </aside>
        ) : null}

        <div className="editorial-brackets" aria-hidden="true">
          <span>(</span>
          <span>)</span>
        </div>

        <div className="editorial-mode-switch" aria-hidden="true">
          <span>Vertical</span>
          <span>Horizontal</span>
          <span>Grid</span>
        </div>

        <p className="editorial-copyright">2026 TIIH. All rights reserved.</p>

        <section className="editorial-image-strip" aria-label="Selected project image stream">
          {projects.map((project, index) =>
            project ? (
              <article
                key={project.slug}
                id={`project-${project.displayNumber}`}
                data-editorial-index={index}
                className={[
                  "editorial-strip-item",
                  activeIndex === index ? "is-active" : "",
                ].join(" ")}
              >
                <Link href={`/work/${project.slug}`} className="editorial-image-card">
                  <Image
                    src={
                      index % 2 === 0
                        ? "/home/tanzania-industrial-ground.png"
                        : "/home/intelligence-systems.png"
                    }
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 900px) 34vw, 72vw"
                    className="object-cover"
                  />
                  <div
                    className="editorial-image-tint"
                    style={{ background: project.previewBackground }}
                  />
                </Link>
              </article>
            ) : null,
          )}
        </section>
      </main>
    </LenisProvider>
  );
}
