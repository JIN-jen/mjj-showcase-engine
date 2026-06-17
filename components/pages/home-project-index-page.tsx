"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { LenisProvider } from "@/components/motion/lenis-provider";

type Locale = "en" | "zh";

type IndustryShowcaseItem = {
  slug: string;
  displayNumber: string;
  title: string;
  titleZh: string;
  subtypes: string[];
  subtypesZh: string[];
  industry: string;
  industryZh: string;
  imageSrc: string;
  previewBackground: string;
  posterLayout: string;
  posterStatement: string;
  posterTags: string[];
};

const industryShowcaseItems: IndustryShowcaseItem[] = [
  {
    slug: "hospitality",
    displayNumber: "01",
    title: "Hospitality",
    titleZh: "酒店与旅行",
    subtypes: ["Hotel", "Resort", "Safari", "Travel Agency", "Guest House", "Booking Website"],
    subtypesZh: ["酒店", "度假村", "Safari", "旅行社", "民宿", "预订网站"],
    industry: "Hospitality",
    industryZh: "酒店",
    imageSrc: "/industry/hospitality.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(206,199,184,0.9) 42%, rgba(128,145,132,0.72) 100%)",
    posterLayout: "collage",
    posterStatement: "Luxury editorial collage for hotel, resort and safari booking entry.",
    posterTags: ["Luxury Stay", "Suite", "Pool"],
  },
  {
    slug: "food-beverage",
    displayNumber: "02",
    title: "Food & Beverage",
    titleZh: "餐饮与食品",
    subtypes: ["Restaurant", "Cafe", "Bar", "Bakery", "Takeaway", "Food Brand"],
    subtypesZh: ["餐厅", "咖啡馆", "酒吧", "烘焙店", "外卖", "食品品牌"],
    industry: "Food",
    industryZh: "餐饮",
    imageSrc: "/industry/food-beverage.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(214,196,174,0.92) 44%, rgba(142,97,75,0.7) 100%)",
    posterLayout: "menu",
    posterStatement: "Magazine menu poster for restaurant, cafe, bar and reservation flow.",
    posterTags: ["Menu", "Dining", "Reservation"],
  },
  {
    slug: "construction",
    displayNumber: "03",
    title: "Construction",
    titleZh: "建筑与工程",
    subtypes: [
      "Construction Company",
      "Building Materials",
      "Equipment Rental",
      "Road Contractor",
      "Steel Supplier",
    ],
    subtypesZh: ["建筑公司", "建材", "设备租赁", "道路承包商", "钢材供应商"],
    industry: "Construction",
    industryZh: "建筑",
    imageSrc: "/industry/construction.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(196,193,187,0.92) 40%, rgba(104,102,94,0.74) 100%)",
    posterLayout: "blueprint",
    posterStatement: "Architecture blueprint poster for build, contractor and project showcase.",
    posterTags: ["Blueprint", "Project", "Build"],
  },
  {
    slug: "mining-energy",
    displayNumber: "04",
    title: "Mining & Energy",
    titleZh: "矿业与能源",
    subtypes: ["Mining Company", "Fuel Supplier", "Lubricants", "Generator", "Solar Energy"],
    subtypesZh: ["矿业公司", "燃油供应", "润滑油", "发电机", "太阳能"],
    industry: "Mining",
    industryZh: "矿业",
    imageSrc: "/industry/mining-energy.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(190,195,191,0.92) 42%, rgba(86,103,112,0.72) 100%)",
    posterLayout: "industrial",
    posterStatement: "Industrial authority poster for site, fleet, mining and energy operators.",
    posterTags: ["Site", "Fleet", "Energy"],
  },
  {
    slug: "import-wholesale",
    displayNumber: "05",
    title: "Import & Wholesale",
    titleZh: "进口与批发",
    subtypes: ["Trading Company", "Wholesale Store", "Yiwu Import", "Hardware", "Electronics", "Daily Goods"],
    subtypesZh: ["贸易公司", "批发店", "义乌进口", "五金", "电子产品", "日用品"],
    industry: "Trading",
    industryZh: "贸易",
    imageSrc: "/industry/import-wholesale.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(204,202,192,0.92) 42%, rgba(118,126,146,0.7) 100%)",
    posterLayout: "catalog",
    posterStatement: "Trade catalog poster for import, wholesale and supply businesses.",
    posterTags: ["Import", "Wholesale", "Supply"],
  },
  {
    slug: "logistics-auto",
    displayNumber: "06",
    title: "Logistics & Auto",
    titleZh: "物流与汽车",
    subtypes: ["Freight Forwarder", "Customs Clearance", "Transport Company", "Fleet Management", "Auto Parts"],
    subtypesZh: ["货运代理", "清关", "运输公司", "车队管理", "汽车配件"],
    industry: "Logistics",
    industryZh: "物流",
    imageSrc: "/industry/logistics-auto.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(193,200,201,0.92) 40%, rgba(92,118,128,0.72) 100%)",
    posterLayout: "route",
    posterStatement: "Route system poster for delivery, fleet, port and transport operations.",
    posterTags: ["Delivery", "Fleet", "Port"],
  },
  {
    slug: "agriculture-processing",
    displayNumber: "07",
    title: "Agriculture & Processing",
    titleZh: "农业与加工",
    subtypes: ["Farm", "Timber", "Cashew", "Cold Chain", "Food Processing"],
    subtypesZh: ["农场", "木材", "腰果", "冷链", "食品加工"],
    industry: "Agriculture",
    industryZh: "农业",
    imageSrc: "/industry/agriculture-processing.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(199,205,184,0.92) 42%, rgba(98,126,88,0.68) 100%)",
    posterLayout: "field",
    posterStatement: "Field production poster for harvest, processing and export brands.",
    posterTags: ["Harvest", "Processing", "Export"],
  },
  {
    slug: "professional-services",
    displayNumber: "08",
    title: "Professional Services",
    titleZh: "专业服务",
    subtypes: ["Law Firm", "Accounting", "Medical", "Education", "IT Service", "Marketing Agency"],
    subtypesZh: ["律师事务所", "会计", "医疗", "教育", "IT 服务", "营销机构"],
    industry: "Services",
    industryZh: "服务",
    imageSrc: "/industry/professional-services.svg",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(205,202,197,0.92) 42%, rgba(126,116,142,0.68) 100%)",
    posterLayout: "editorial",
    posterStatement: "Editorial business poster for advisory, legal and finance services.",
    posterTags: ["Advisory", "Legal", "Finance"],
  },
];

const loopedIndustryShowcaseItems = [...industryShowcaseItems, ...industryShowcaseItems];

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

  const activeProject = industryShowcaseItems[activeIndex] ?? industryShowcaseItems[0];
  const isZh = locale === "zh";

  function getProjectCopy(project: IndustryShowcaseItem) {
    return {
      title: isZh ? project.titleZh : project.title,
      subtypes: isZh ? project.subtypesZh : project.subtypes,
      category: isZh ? "商业网站模板" : "Business Website Template",
      service: "UI / UX / Development",
      industry: isZh ? project.industryZh : project.industry,
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
          setActiveIndex(index % industryShowcaseItems.length);
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

  function handleProjectOpen(event: MouseEvent<HTMLAnchorElement>, slug: string) {
    event.preventDefault();

    if (transitionProject) {
      return;
    }

    setTransitionProject(slug);
    window.setTimeout(() => {
      router.push(`/work/${slug}`);
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
              <p>TIIH</p>
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
          <Link href="/" className="editorial-logo" aria-label="TIIH home">
            TIIH
          </Link>
          <nav className="editorial-nav" aria-label="Primary navigation">
            <Link href="/work">{isZh ? "模板" : "Work"}</Link>
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

        <aside className="editorial-project-list" aria-label="Industry template list">
          {industryShowcaseItems.map((project, index) => {
            const projectCopy = getProjectCopy(project);

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={(event) => handleProjectOpen(event, project.slug)}
                className={activeIndex === index ? "is-active" : ""}
              >
                <span>{project.displayNumber}</span>
                <span>
                  {projectCopy.title}
                  <small>{projectCopy.subtypes.join(" / ")}</small>
                </span>
              </Link>
            );
          })}
        </aside>

        <aside className="editorial-meta" aria-live="polite">
          <p className="editorial-meta__number">{activeProject.displayNumber}</p>
          <div>
            <p>{isZh ? "类型" : "Category"}</p>
            <span>{getProjectCopy(activeProject).category}</span>
          </div>
          <div>
            <p>{isZh ? "服务" : "Service"}</p>
            <span>{getProjectCopy(activeProject).service}</span>
          </div>
          <div>
            <p>{isZh ? "行业" : "Industry"}</p>
            <span>{getProjectCopy(activeProject).industry}</span>
          </div>
          <p className="editorial-meta__description">
            {getProjectCopy(activeProject).subtypes.join(" / ")}
          </p>
        </aside>

        <ObysBracket className="editorial-brackets" />

        <div className="editorial-mode-switch" aria-hidden="true">
          <span>{isZh ? "纵向" : "Vertical"}</span>
          <span>{isZh ? "横向" : "Horizontal"}</span>
          <span>{isZh ? "网格" : "Grid"}</span>
        </div>

        <p className="editorial-copyright">2026 TIIH. All rights reserved.</p>

        <section
          ref={railRef}
          className="editorial-image-strip"
          data-lenis-prevent
          aria-label="Industry template image stream"
        >
          {loopedIndustryShowcaseItems.map((project, index) => {
            const itemIndex = index % industryShowcaseItems.length;
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
                href={`/work/${project.slug}`}
                onClick={(event) => handleProjectOpen(event, project.slug)}
                className={`editorial-image-card editorial-image-card--${project.posterLayout}`}
              >
                  <div className="editorial-poster__number">
                    <span>TIIH</span>
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
                    <p className="editorial-poster__kicker">{isZh ? "行业海报" : "PROJECT POSTER"}</p>
                    <h2>{projectCopy.title}</h2>
                    <span>{project.posterStatement}</span>
                  </div>
                  <div className="editorial-poster__meta">
                    <em>{projectCopy.industry}</em>
                    <strong>{projectCopy.subtypes[0]}</strong>
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
