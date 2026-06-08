"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { LenisProvider } from "@/components/motion/lenis-provider";

type Locale = "en" | "zh";

export type TemplateFrame = {
  title: string;
  titleZh: string;
  copy: string;
  copyZh: string;
  type: "cover" | "interface" | "workflow" | "signal" | "mobile" | "detail" | "result";
};

export type IndustryTemplate = {
  slug: string;
  number: string;
  title: string;
  titleZh: string;
  category: string;
  categoryZh: string;
  service: string;
  serviceZh: string;
  industry: string;
  industryZh: string;
  year: string;
  description: string;
  descriptionZh: string;
  previewBackground: string;
  frames: TemplateFrame[];
};

type WorkDetailReelPageProps = {
  project: IndustryTemplate;
};

function ObysBracket({ className = "" }: { className?: string }) {
  return (
    <div className={["obys-bracket", className].join(" ")} aria-hidden="true">
      <svg
        className="obys-bracket__side obys-bracket__side--left"
        viewBox="0 0 120 300"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 0H118V46H68C38 46 22 89 22 150s16 104 46 104h50v46H0V0Z"
        />
      </svg>
      <svg
        className="obys-bracket__side obys-bracket__side--right"
        viewBox="0 0 120 300"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 0H118V46H68C38 46 22 89 22 150s16 104 46 104h50v46H0V0Z"
        />
      </svg>
    </div>
  );
}

export function WorkDetailReelPage({ project }: WorkDetailReelPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const [activeFrame, setActiveFrame] = useState(0);
  const [entered, setEntered] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const isZh = locale === "zh";

  const frames = useMemo(
    () =>
      project.frames.map((frame, index) => ({
        ...frame,
        kicker: isZh
          ? `案例 ${String(index + 1).padStart(2, "0")}`
          : `Case ${String(index + 1).padStart(2, "0")}`,
        media: `/industry/${project.slug}.svg`,
      })),
    [isZh, project.frames, project.slug],
  );

  const loopedFrames = [...frames, ...frames];
  const projectCopy = {
    title: isZh ? project.titleZh : project.title,
    category: isZh ? project.industryZh : project.industry,
    service: isZh ? "网站设计" : "Web Design",
    industry: isZh ? project.industryZh : project.industry,
    description: isZh ? project.descriptionZh : project.description,
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setEntered(true);
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("tiih-locale");

    if (storedLocale === "zh" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    const root = railRef.current;

    if (!root) {
      return;
    }

    const frameNodes = Array.from(root.querySelectorAll<HTMLElement>("[data-work-frame]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!centeredEntry) {
          return;
        }

        if (!(centeredEntry.target instanceof HTMLElement)) {
          return;
        }

        const index = Number(centeredEntry.target.dataset.workFrame);

        if (!Number.isNaN(index)) {
          setActiveFrame(index % frames.length);
        }
      },
      {
        root,
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    frameNodes.forEach((frame) => observer.observe(frame));

    return () => {
      observer.disconnect();
    };
  }, [frames.length]);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    let isResetting = false;

    function handleRailScroll() {
      if (!rail || isResetting) {
        return;
      }

      const loopPoint = rail.scrollHeight / 2;

      if (rail.scrollTop >= loopPoint) {
        isResetting = true;
        rail.scrollTop = rail.scrollTop - loopPoint;
        window.requestAnimationFrame(() => {
          isResetting = false;
        });
      }
    }

    rail.addEventListener("scroll", handleRailScroll, { passive: true });

    return () => {
      rail.removeEventListener("scroll", handleRailScroll);
    };
  }, []);

  function updateLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem("tiih-locale", nextLocale);
  }

  return (
    <LenisProvider>
      <main ref={pageRef} className={["work-reel-page", entered ? "is-entered" : ""].join(" ")}>
        <div className="work-reel-entry" aria-hidden={entered}>
          <div className="work-reel-entry__scope">
            <span>(</span>
            <i />
            <span>)</span>
          </div>
        </div>

        <header className="work-reel-nav">
          <Link href="/">TIIH</Link>
          <nav aria-label="Work detail navigation">
            <Link href="/">{isZh ? "索引" : "Index"}</Link>
            <Link href="/work">{isZh ? "模板" : "Templates"}</Link>
            <Link href="/contact">{isZh ? "提交需求" : "Start Project"}</Link>
            <span className="language-switch" aria-label="Language switch">
              <button
                type="button"
                onClick={() => updateLocale("zh")}
                className={isZh ? "is-active" : ""}
              >
                CN
              </button>
              <button
                type="button"
                onClick={() => updateLocale("en")}
                className={!isZh ? "is-active" : ""}
              >
                EN
              </button>
            </span>
          </nav>
        </header>

        <aside className="work-reel-copy">
          <h1 lang={isZh ? "zh" : "en"}>{projectCopy.title}</h1>
          <p>{projectCopy.description}</p>
          <Link href="/" className="work-reel-back">
            {isZh ? "返回索引" : "Back to Index"}
          </Link>
          <div className="work-frame-index" aria-label="Frame index">
            {frames.map((frame, index) => (
              <button
                key={frame.title}
                type="button"
                className={activeFrame === index ? "is-active" : ""}
                onClick={() => {
                  const target = railRef.current?.querySelector<HTMLElement>(
                    `[data-work-frame="${index}"]`,
                  );

                  target?.scrollIntoView({ block: "center", behavior: "smooth" });
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{isZh ? frame.titleZh : frame.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <aside className="work-reel-meta" aria-live="polite">
          <p className="work-reel-meta__number">{project.number}</p>
          <dl>
            <div>
              <dt>{isZh ? "类型" : "Category"}</dt>
              <dd>{projectCopy.category}</dd>
            </div>
            <div>
              <dt>{isZh ? "服务" : "Service"}</dt>
              <dd>{projectCopy.service}</dd>
            </div>
          </dl>
        </aside>

        <ObysBracket className="work-reel-aim" />

        <section
          ref={railRef}
          className="work-reel-frames"
          data-lenis-prevent
          aria-label={`${project.title} editorial reel`}
        >
          {loopedFrames.map((frame, index) => {
            const frameIndex = index % frames.length;

            return (
            <article
              key={`${project.slug}-${frame.title}-${index}`}
              data-work-frame={frameIndex}
              className={[
                "work-reel-frame",
                `work-reel-frame--${frame.type}`,
                activeFrame === frameIndex ? "is-active" : "",
              ].join(" ")}
            >
              <div className="work-reel-frame__stage">
                <Image
                  src={frame.media}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="(min-width: 900px) 58vw, 82vw"
                  className="object-contain"
                />
                <div className="work-reel-frame__wash" style={{ background: project.previewBackground }} />
                <div className="work-reel-frame__poster">
                  <p>{frame.kicker}</p>
                  <span>{projectCopy.category}</span>
                  <span>{projectCopy.service}</span>
                </div>
              </div>
            </article>
            );
          })}
        </section>
      </main>
    </LenisProvider>
  );
}
