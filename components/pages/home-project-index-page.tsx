"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { getTemplateMatrix } from "@/data/template-matrix";

type Locale = "en" | "zh";

type TemplateMatrixShowcaseItem = {
  slug: string;
  displayNumber: string;
  title: string;
  titleZh: string;
  keywords: string[];
  keywordsZh: string[];
  industry: string;
  industryZh: string;
  targetCustomer: string;
  targetCustomerZh: string;
  imageSrc: string;
  previewBackground: string;
  posterLayout: string;
  posterStatement: string;
  posterTags: string[];
  route: string;
  visualDirection: string;
  visualDirectionZh: string;
};

const templateMatrixItems: TemplateMatrixShowcaseItem[] = getTemplateMatrix().map((item, index) => ({
  slug: item.slug,
  displayNumber: String(index + 1).padStart(2, "0"),
  title: item.shortNameEn,
  titleZh: item.shortNameCn,
  keywords: item.keywordsEn,
  keywordsZh: item.keywordsCn,
  industry: item.categoryTagEn,
  industryZh: item.categoryTagCn,
  targetCustomer: item.targetCustomerEn,
  targetCustomerZh: item.targetCustomerCn,
  imageSrc: item.imageSrc,
  previewBackground: item.previewBackground,
  posterLayout: item.posterLayout,
  posterStatement: item.visualDirectionEn,
  posterTags: item.posterTags,
  route: item.route,
  visualDirection: item.visualDirectionEn,
  visualDirectionZh: item.visualDirectionCn,
}));

const loopedIndustryShowcaseItems = [...templateMatrixItems, ...templateMatrixItems];

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

export function HomeProjectIndexPage() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const [transitionProject, setTransitionProject] = useState<string | null>(null);
  const [locale, setLocale] = useState<Locale>("en");

  const activeProject = templateMatrixItems[activeIndex] ?? templateMatrixItems[0];
  const isZh = locale === "zh";

  function getProjectCopy(project: TemplateMatrixShowcaseItem) {
    return {
      title: isZh ? project.titleZh : project.title,
      keywords: isZh ? project.keywordsZh : project.keywords,
      category: isZh ? project.industryZh : project.industry,
      service: isZh ? "模板获客矩阵" : "Lead Generation Matrix",
      industry: isZh ? project.industryZh : project.industry,
      targetCustomer: isZh ? project.targetCustomerZh : project.targetCustomer,
      visualDirection: isZh ? project.visualDirectionZh : project.visualDirection,
    };
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroComplete(true);
    }, 2100);

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

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-editorial-index]"));

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

        const index = Number(centeredEntry.target.dataset.editorialIndex);

        if (!Number.isNaN(index)) {
          setActiveIndex(index % templateMatrixItems.length);
        }
      },
      {
        root,
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

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

  function handleProjectOpen(event: MouseEvent<HTMLAnchorElement>, route: string) {
    event.preventDefault();

    if (transitionProject) {
      return;
    }

    setTransitionProject(route);
    window.setTimeout(() => {
      router.push(route);
    }, 760);
  }

  return (
    <LenisProvider>
      <main
        ref={pageRef}
        className={[
          "editorial-index-page",
          introComplete ? "is-ready" : "is-intro",
          transitionProject ? "is-transitioning" : "",
        ].join(" ")}
      >
        <div className="editorial-intro-loader" aria-hidden={introComplete}>
          <div className="editorial-intro-loader__scope">
            <span>(</span>
            <div>
              <p>00</p>
              <i />
              <p>M-JJ</p>
            </div>
            <span>)</span>
          </div>
        </div>

        {transitionProject ? (
          <div className="editorial-route-transition" aria-hidden="true">
            <div className="editorial-route-transition__scope">
              <span>(</span>
              <p>{isZh ? "打开模板" : "Opening Template"}</p>
              <span>)</span>
            </div>
          </div>
        ) : null}

        <header className="editorial-shell" aria-label="Home navigation">
          <Link href="/" className="editorial-logo" aria-label="M-JJ home">
            M-JJ
          </Link>
          <nav className="editorial-nav" aria-label="Primary navigation">
            <Link href="/">{isZh ? "矩阵" : "Matrix"}</Link>
            <Link href="/about">{isZh ? "关于" : "About"}</Link>
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

        <aside className="editorial-project-list" aria-label="Template matrix list">
          {templateMatrixItems.map((project, index) => {
            const projectCopy = getProjectCopy(project);

            return (
              <Link
                key={project.slug}
                href={project.route}
                onClick={(event) => handleProjectOpen(event, project.route)}
                className={activeIndex === index ? "is-active" : ""}
              >
                <span>{project.displayNumber}</span>
                <span>
                  {projectCopy.title}
                  <small>{projectCopy.keywords.slice(0, 3).join(" / ")}</small>
                </span>
              </Link>
            );
          })}
        </aside>

        <aside className="editorial-meta" aria-live="polite">
          <p className="editorial-meta__number">{activeProject.displayNumber}</p>
          <div>
            <p>{isZh ? "分类" : "Category"}</p>
            <span>{getProjectCopy(activeProject).category}</span>
          </div>
          <div>
            <p>{isZh ? "目标客户" : "Target Customer"}</p>
            <span>{getProjectCopy(activeProject).targetCustomer}</span>
          </div>
          <div>
            <p>{isZh ? "视觉标签" : "Visual Tag"}</p>
            <span>{getProjectCopy(activeProject).visualDirection}</span>
          </div>
          <div>
            <p>{isZh ? "SEO关键词" : "SEO Keywords"}</p>
            <span>{getProjectCopy(activeProject).keywords.slice(0, 4).join(" / ")}</span>
          </div>
          <p className="editorial-meta__description">
            {getProjectCopy(activeProject).keywords.join(" / ")}
          </p>
        </aside>

        <ObysBracket className="editorial-brackets" />

        <div className="editorial-mode-switch" aria-hidden="true">
          <span>{isZh ? "纵向" : "Vertical"}</span>
          <span>{isZh ? "横向" : "Horizontal"}</span>
          <span>{isZh ? "网格" : "Grid"}</span>
        </div>

        <p className="editorial-copyright">2026 M-JJ Showcase Engine. All rights reserved.</p>

        <section
          ref={railRef}
          className="editorial-image-strip"
          data-lenis-prevent
          aria-label="Template matrix image stream"
        >
          {loopedIndustryShowcaseItems.map((project, index) => {
            const itemIndex = index % templateMatrixItems.length;
            const projectCopy = getProjectCopy(project);

            return (
              <article
                key={`${project.slug}-${index}`}
                id={`project-${project.displayNumber}-${index}`}
                data-editorial-index={itemIndex}
                className={[
                  "editorial-strip-item",
                  activeIndex === itemIndex ? "is-active" : "",
                ].join(" ")}
              >
              <Link
                href={project.route}
                onClick={(event) => handleProjectOpen(event, project.route)}
                className={`editorial-image-card editorial-image-card--${project.posterLayout}`}
              >
                  <div className="editorial-poster__number">
                    <span>M-JJ</span>
                    <strong>{project.displayNumber}</strong>
                  </div>
                  <div className="editorial-poster__media">
                    <Image
                      src={project.imageSrc}
                      alt={projectCopy.title}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 900px) 34vw, 72vw"
                      className="editorial-poster__image"
                    />
                    <div
                      className="editorial-poster__wash"
                      style={{ background: project.previewBackground }}
                    />
                  </div>
                  <div className="editorial-poster__content">
                    <p className="editorial-poster__kicker">{isZh ? "模板海报" : "TEMPLATE POSTER"}</p>
                    <h2>{projectCopy.title}</h2>
                    <span>{project.posterStatement}</span>
                  </div>
                  <div className="editorial-poster__meta">
                    <em>{projectCopy.industry}</em>
                    <strong>{projectCopy.targetCustomer}</strong>
                  </div>
                  <div className="editorial-poster__tags">
                    {project.posterTags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </LenisProvider>
  );
}
