"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { HomeLoader } from "@/components/sections/home-loader";
import { projectIndexItems } from "@/lib/site-data/project-index";
import { useHomeStoryMotion } from "@/lib/motion/use-home-story-motion";

const selectedWorkSlugs = [
  "tiih-intelligence-terminal",
  "ai-landing-page-system",
];

const selectedWork = selectedWorkSlugs
  .map((slug) => projectIndexItems.find((project) => project.slug === slug))
  .filter(Boolean);

const capabilities = ["Signals", "Decisions", "Systems", "Execution"];

export function HomeProjectIndexPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useHomeStoryMotion(pageRef);

  return (
    <SiteShell>
      <HomeLoader />
      <div ref={pageRef} className="relative overflow-hidden">
        <section className="relative -mt-18 min-h-[300vh] overflow-hidden border-b border-white/10">
          <div className="sticky top-0 min-h-screen overflow-hidden">
            <div className="absolute inset-0 opacity-32">
              <Image
                src="/home/tanzania-industrial-ground.png"
                alt="Tanzania industrial ground"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.74),rgba(0,0,0,0.5)_52%,rgba(10,10,10,1))]" />
            <div className="cinematic-container relative z-10 grid min-h-screen grid-rows-[1fr_auto] pt-28">
              <div className="grid items-end border-b border-white/12 pb-8 md:grid-cols-[0.28fr_1fr] md:gap-10 lg:pb-10">
                <p data-home-hero className="eyebrow self-start pt-2 text-white/72">
                  [Tanzania / Industrial Systems / AI-Native Infrastructure]
                </p>
                <h1
                  data-home-hero
                  className="font-display text-7xl leading-[0.86] tracking-normal text-white md:text-9xl lg:text-[10rem] xl:text-[10.8rem]"
                >
                  Industrial Intelligence. Built for Tanzania.
                </h1>
              </div>
              <div
                data-home-hero
                className="grid gap-4 py-5 md:grid-cols-[0.28fr_1fr_auto] md:items-start"
              >
                <p className="eyebrow text-white/60">[Scroll / Ground Layer]</p>
                <p className="max-w-xl text-base leading-7 text-white/68 md:text-lg md:leading-8">
                  Systems, tools, and business infrastructure for operators building East
                  Africa&apos;s industrial future.
                </p>
                <p className="eyebrow text-white/60 md:text-right">
                  Machinery. Materials. Movement.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 min-h-screen">
            <div className="cinematic-container flex min-h-screen flex-col justify-end pb-20">
              <div
                data-home-reveal
                className="grid gap-8 border-t border-white/12 pt-6 md:grid-cols-[0.28fr_1fr]"
              >
                <p data-home-item className="eyebrow">
                  [00 / Hold]
                </p>
                <p
                  data-home-item
                  className="max-w-5xl font-display text-6xl leading-[0.9] tracking-normal text-white/88 md:text-8xl lg:text-9xl"
                >
                  Before intelligence, there is ground.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 min-h-screen">
            <div className="cinematic-container grid min-h-screen gap-8 py-16 md:py-20 lg:grid-cols-[0.24fr_0.76fr] lg:items-center">
              <div data-home-reveal className="flex min-h-[72vh] flex-col justify-between border-t border-white/12 pt-6">
                <p data-home-item className="eyebrow">
                  [03 / Tanzania Industrial Ground]
                </p>
                <p data-home-item className="max-w-xs text-base leading-7 text-white/58">
                  Machinery. Materials. Movement.
                </p>
              </div>

              <div
                data-home-visual
                className="story-visual-plane relative min-h-[72vh] overflow-hidden border border-white/10 bg-white/3"
              >
                <Image
                  data-home-media
                  src="/home/tanzania-industrial-ground.png"
                  alt="Industrial ground in Tanzania"
                  fill
                  sizes="(min-width: 1024px) 76vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame min-h-[360vh]">
          <div className="cinematic-container flex min-h-screen flex-col justify-end pb-16 pt-28 md:pb-20">
            <div
              data-home-reveal
              className="grid gap-8 border-t border-white/12 pt-6 md:grid-cols-[0.28fr_1fr_auto]"
            >
              <p data-home-item className="eyebrow">
                [05 / Project Reel]
              </p>
              <h2
                data-home-item
                className="max-w-6xl font-display text-6xl leading-[0.9] tracking-normal text-white md:text-8xl lg:text-9xl"
              >
                Built systems, selected as proof.
              </h2>
              <Link
                data-home-item
                href="/work"
                className="eyebrow index-nav-link justify-self-start text-white/70 hover:text-white md:justify-self-end"
              >
                [View Work]
              </Link>
            </div>
          </div>

          <div className="cinematic-container space-y-20 pb-20">
            {selectedWork.map((project, index) =>
              project ? (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  data-home-work
                  className={[
                    "group grid min-h-screen gap-8 border-t border-white/12 pt-28 lg:items-center",
                    index % 2 === 0
                      ? "lg:grid-cols-[0.42fr_0.58fr]"
                      : "lg:grid-cols-[0.58fr_0.42fr]",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex min-h-[76vh] flex-col justify-between",
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2",
                    ].join(" ")}
                  >
                    <div className="space-y-8">
                      <p className="eyebrow text-white/54">
                        [{String(index + 1).padStart(2, "0")} / {project.category}]
                      </p>
                      <h3 className="font-display text-6xl leading-[0.88] tracking-normal text-white md:text-8xl lg:text-[8.5rem]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="grid gap-5 border-t border-white/10 pt-5 md:grid-cols-2">
                      <p className="eyebrow text-white/48">[{project.service}]</p>
                      <p className="eyebrow text-white/48 md:text-right">
                        [{project.status}]
                      </p>
                    </div>
                  </div>

                  <div
                    className={[
                      "relative min-h-[76vh] overflow-hidden border border-white/10 bg-black",
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: project.previewBackground }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(176,196,222,0.22),transparent_34%)]" />
                    <div className="absolute inset-8 border border-white/12" />
                  </div>
                </Link>
              ) : null,
            )}
          </div>

          <div className="cinematic-container flex min-h-screen flex-col justify-end pb-20">
            <div
              data-home-reveal
              className="grid gap-8 border-t border-white/12 pt-6 md:grid-cols-[0.28fr_1fr]"
            >
              <p data-home-item className="eyebrow">
                [Hold / Systems]
              </p>
              <p
                data-home-item
                className="max-w-5xl font-display text-6xl leading-[0.9] tracking-normal text-white/88 md:text-8xl lg:text-9xl"
              >
                Signals become decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="section-frame min-h-[300vh]">
          <div className="cinematic-container grid min-h-screen gap-12 py-16 md:py-20 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
            <div data-home-reveal className="flex min-h-[72vh] flex-col justify-between border-t border-white/12 pt-6">
              <p data-home-item className="eyebrow">
                [06 / Index]
              </p>
              <p data-home-item className="max-w-xs text-base leading-7 text-white/58">
                Decisions become systems.
              </p>
            </div>

            <div className="space-y-0">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  data-home-capability
                  className="relative grid min-h-36 gap-5 border-b border-white/10 py-8 md:grid-cols-[6rem_1fr] md:items-center"
                >
                  <span
                    data-home-capability-line
                    className="absolute left-0 top-0 h-px w-full bg-[var(--glow-strong)]"
                  />
                  <p className="eyebrow text-white/42">
                    [{String(index + 1).padStart(2, "0")}]
                  </p>
                  <h3 className="font-display text-6xl leading-[0.88] tracking-normal text-white md:text-8xl lg:text-9xl">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="cinematic-container grid min-h-screen gap-12 py-16 md:py-20 lg:grid-cols-[1fr_0.56fr] lg:items-end">
            <div data-home-reveal className="space-y-7 border-t border-white/12 pt-6">
              <p data-home-item className="eyebrow">
                [07 / Founder]
              </p>
              <h2
                data-home-item
                className="font-display text-6xl leading-[0.9] tracking-normal text-white md:text-8xl lg:text-9xl"
              >
                Jin builds AI-native industrial systems in Tanzania.
              </h2>
            </div>
            <div data-home-reveal className="border-t border-white/12 pt-6">
              <p data-home-item className="max-w-md text-base leading-7 text-white/62">
                Chinese founder. East African operating context. Construction,
                systems, business.
              </p>
            </div>
          </div>

          <div className="cinematic-container flex min-h-screen flex-col justify-end py-16 md:py-20">
            <div data-home-reveal className="space-y-12 border-t border-white/12 pt-6">
              <div className="grid gap-8 md:grid-cols-[0.28fr_1fr]">
                <p data-home-item className="eyebrow">
                  [08 / Contact]
                </p>
                <h2
                  data-home-item
                  className="font-display text-6xl leading-[0.9] tracking-normal text-white md:text-8xl lg:text-9xl"
                >
                  Build Something Real.
                </h2>
              </div>

              <div className="grid gap-6 border-t border-white/12 pt-6 md:grid-cols-3">
                <Link data-home-item href="/contact" className="group">
                  <p className="eyebrow text-white/46">[Work Inquiry]</p>
                  <p className="mt-3 text-xl text-white transition-colors group-hover:text-[var(--glow-strong)]">
                    Start a build
                  </p>
                </Link>
                <a data-home-item href="mailto:hello@tiih.com" className="group">
                  <p className="eyebrow text-white/46">[Email]</p>
                  <p className="mt-3 text-xl text-white transition-colors group-hover:text-[var(--glow-strong)]">
                    hello@tiih.com
                  </p>
                </a>
                <Link data-home-item href="/work" className="group">
                  <p className="eyebrow text-white/46">[Selected Work]</p>
                  <p className="mt-3 text-xl text-white transition-colors group-hover:text-[var(--glow-strong)]">
                    View proof
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </SiteShell>
  );
}
