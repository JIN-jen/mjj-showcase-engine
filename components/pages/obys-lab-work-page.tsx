"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ObysLabItem } from "@/components/pages/obys-lab-data";
import { ObysProjectStill } from "@/components/pages/obys-project-still";

type LabLanguage = "cn" | "en";

type ObysLabWorkPageProps = {
  item: ObysLabItem;
};

const caseFrames = ["01", "02", "03", "04", "05", "06"];

const defaultBriefTemplateByIndustrySlug: Record<string, string> = {
  agriculture: "commercial-farm",
  construction: "contractor",
  hospitality: "luxury-hotel",
  "import-wholesale": "general-trading",
  logistics: "freight-forwarder",
  mining: "mine-operator",
  "professional-services": "law-firm",
  restaurant: "fine-dining",
};

const detailCopy = {
  cn: {
    work: "作品",
    about: "关于",
    back: "返回",
    category: "类别",
    industry: "行业",
    service: "服务",
    case: "案例",
    projectBrief: "项目资料",
    briefCopy: "请准备：",
    startBrief: "开始提交资料",
    delivery: "交付",
    deliveryValue: "3–5天",
    price: "价格",
    priceValue: "获取报价",
  },
  en: {
    work: "Work",
    about: "About",
    back: "Back",
    category: "Category",
    industry: "INDUSTRY",
    service: "Service",
    case: "Case",
    projectBrief: "PROJECT BRIEF",
    briefCopy: "Prepare:",
    startBrief: "Start Project Brief",
    delivery: "DELIVERY",
    deliveryValue: "3–5 DAYS",
    price: "PRICE",
    priceValue: "Request Quote",
  },
} satisfies Record<LabLanguage, Record<string, string>>;

function getStoredLanguage(): LabLanguage {
  if (typeof window === "undefined") {
    return "cn";
  }

  return window.localStorage.getItem("tiih-obys-lab-language") === "en" ? "en" : "cn";
}

export function ObysLabWorkPage({ item }: ObysLabWorkPageProps) {
  const railRef = useRef<HTMLElement>(null);
  const [language, setLanguage] = useState<LabLanguage>("cn");
  const [activeFrame, setActiveFrame] = useState(0);
  const activeFrameRef = useRef(0);
  const copy = detailCopy[language];
  const title = language === "cn" ? item.titleCn : item.title;
  const category = language === "cn" ? item.categoryCn : item.category;
  const service = language === "cn" ? item.serviceCn.replaceAll("/", " / ") : item.service.replaceAll("/", " / ");
  const briefTemplate = defaultBriefTemplateByIndustrySlug[item.slug] ?? "";
  const briefHref = `/brief?industry=${encodeURIComponent(item.slug)}&template=${encodeURIComponent(briefTemplate)}&lang=${language}`;
  const briefItems =
    language === "cn"
      ? ["Logo", "图片", "公司名称", "联系方式", "业务介绍"]
      : ["Logo", "Images", "Company name", "Contact details", "Business description"];
  const localizedItem = {
    ...item,
    category,
    title,
  };

  function setActiveFrameSafely(nextFrame: number) {
    if (activeFrameRef.current === nextFrame) {
      return;
    }

    activeFrameRef.current = nextFrame;
    setActiveFrame(nextFrame);
  }

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  function changeLanguage(nextLanguage: LabLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("tiih-obys-lab-language", nextLanguage);
  }

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const isCompactViewport = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCompactViewport || prefersReducedMotion) {
      setActiveFrameSafely(0);
      return;
    }

    const targets = Array.from(rail.querySelectorAll<HTMLElement>("[data-detail-frame]"));
    let frameId = 0;

    function updateCenterLock() {
      frameId = 0;

      const viewportCenter = window.innerHeight / 2;
      const lockRange = Math.max(window.innerHeight * 0.36, 240);
      let closestDistance = Number.POSITIVE_INFINITY;
      let closestIndex = 0;

      targets.forEach((target, index) => {
        const rect = target.getBoundingClientRect();
        const targetCenter = rect.top + rect.height / 2;
        const distance = Math.abs(targetCenter - viewportCenter);
        const lock = Math.max(0, 1 - distance / lockRange);

        target.style.setProperty("--lab-detail-lock", lock.toFixed(3));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      targets.forEach((target, index) => target.classList.toggle("is-active", index === closestIndex));
      setActiveFrameSafely(closestIndex);
    }

    function requestCenterLockUpdate() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateCenterLock);
    }

    updateCenterLock();
    window.addEventListener("scroll", requestCenterLockUpdate, { passive: true });
    window.addEventListener("resize", requestCenterLockUpdate);

    return () => {
      window.removeEventListener("scroll", requestCenterLockUpdate);
      window.removeEventListener("resize", requestCenterLockUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <main className="obys-lab-detail-page">
      <header className="obys-lab-detail-header">
        <Link href="/obys-lab" aria-label="Back to Obys lab">
          TIIH
        </Link>
        <nav aria-label="Obys lab detail navigation">
          <Link href="/obys-lab">{copy.work}</Link>
          <Link href="/about">{copy.about}</Link>
          <span className="obys-lab-language" aria-label="Language switch">
            <button type="button" className={language === "cn" ? "is-active" : ""} onClick={() => changeLanguage("cn")}>
              CN
            </button>
            <button type="button" className={language === "en" ? "is-active" : ""} onClick={() => changeLanguage("en")}>
              EN
            </button>
          </span>
        </nav>
      </header>

      <aside className="obys-lab-detail-copy">
        <Link href="/obys-lab" className="obys-lab-detail-back">
          {copy.back}
        </Link>
        <h1>{title}</h1>
        <dl>
          <div>
            <dt>{copy.category}</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>{copy.service}</dt>
            <dd>{service}</dd>
          </div>
          <div>
            <dt>{copy.case}</dt>
            <dd>
              {caseFrames[activeFrame]} / {caseFrames.length.toString().padStart(2, "0")}
            </dd>
          </div>
        </dl>
      </aside>

      <section ref={railRef} className="obys-lab-detail-rail" aria-label={`${title} case image stream`}>
        {caseFrames.map((frame, index) => {
          const frameTemplate = item.templates[index];
          const frameTemplateHref = frameTemplate?.templateHref;

          return (
            <article
              key={frame}
              data-detail-frame={frame}
              className={`obys-lab-detail-frame obys-lab-detail-frame--${index + 1}`}
            >
              <div>
                <ObysProjectStill item={localizedItem} mode="detail" frameIndex={index} />
                {frameTemplateHref ? (
                  <Link
                    href={frameTemplateHref}
                    aria-label={
                      language === "cn"
                        ? `查看 ${frameTemplate.titleCN || frameTemplate.titleEN} 演示`
                        : `View ${frameTemplate.titleEN || frameTemplate.titleCN} Demo`
                    }
                    style={{ position: "absolute", inset: 0, zIndex: 3 }}
                  />
                ) : null}
              </div>
              <dl className="obys-lab-detail-metadata" aria-label={`${title} metadata`}>
                <div>
                  <dt>{copy.industry}</dt>
                  <dd>{category}</dd>
                </div>
                <div>
                  <dt>{copy.service}</dt>
                  <dd>{service}</dd>
                </div>
              </dl>
              <div className="obys-lab-detail-entry" aria-label={`${title} template entry`}>
                <section>
                  <h2>{copy.projectBrief}</h2>
                  <p>{copy.briefCopy}</p>
                  <ul>
                    {briefItems.map((briefItem) => (
                      <li key={briefItem}>{briefItem}</li>
                    ))}
                  </ul>
                  <Link href={briefHref}>{copy.startBrief}</Link>
                </section>
                <section>
                  <h2>{copy.delivery}</h2>
                  <p>{copy.deliveryValue}</p>
                </section>
                <section>
                  <h2>{copy.price}</h2>
                  <p>{copy.priceValue}</p>
                </section>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="obys-lab-detail-footer">
        <span>{copy.case} {caseFrames[activeFrame]}</span>
        <Link href="/obys-lab">{copy.work}</Link>
      </footer>
      <style jsx>{`
        .obys-lab-detail-metadata,
        .obys-lab-detail-entry {
          font-size: clamp(0.48rem, 0.58vw, 0.62rem);
          letter-spacing: 0.06em;
          line-height: 1.18;
        }

        .obys-lab-detail-metadata {
          gap: clamp(2rem, 3vw, 3rem);
        }

        .obys-lab-detail-entry {
          gap: clamp(2rem, 3vw, 3rem);
        }

        .obys-lab-detail-metadata div,
        .obys-lab-detail-entry section {
          gap: clamp(0.42rem, 0.72vw, 0.72rem);
          padding-top: clamp(0.7rem, 1vw, 1rem);
          border-top: 1px solid rgba(17, 17, 17, 0.14);
        }

        .obys-lab-detail-metadata dt,
        .obys-lab-detail-entry h2 {
          color: #8a8a8a;
          font: inherit;
          font-weight: 500;
          letter-spacing: inherit;
          line-height: inherit;
        }

        .obys-lab-detail-metadata dd,
        .obys-lab-detail-entry p,
        .obys-lab-detail-entry li,
        .obys-lab-detail-entry strong {
          color: #111;
          font-size: inherit;
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: inherit;
        }

        .obys-lab-detail-entry section:first-child {
          gap: clamp(0.58rem, 0.9vw, 0.92rem);
        }

        .obys-lab-detail-entry section:first-child h2,
        .obys-lab-detail-entry section:first-child a {
          color: #111;
          font-weight: 500;
        }

        .obys-lab-detail-entry section:first-child p {
          color: rgba(17, 17, 17, 0.82);
        }

        .obys-lab-detail-entry a {
          color: #111;
          font-size: inherit;
          font-weight: 500;
          letter-spacing: inherit;
          line-height: inherit;
          text-decoration: none;
        }

        .obys-lab-detail-entry a::after {
          content: " →";
        }

        @media (max-width: 768px) {
          .obys-lab-detail-page {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 4.8rem 0.9rem 1.2rem;
            background: #f8f6ef;
          }

          .obys-lab-detail-header {
            inset: 0.72rem 0.72rem auto;
          }

          .obys-lab-detail-header nav {
            max-width: 54vw;
          }

          .obys-lab-detail-rail {
            order: 1;
            gap: 1rem;
            padding: 0;
          }

          .obys-lab-detail-copy {
            order: 2;
            position: static;
            width: auto;
            margin: 0;
            grid-template-columns: 1fr;
            gap: 0.52rem;
            padding: 0;
            transform: none;
          }

          .obys-lab-detail-copy h1 {
            max-width: 18ch;
            font-size: clamp(1rem, 6.2vw, 1.6rem);
            line-height: 0.96;
          }

          .obys-lab-detail-copy dl {
            gap: 0.28rem;
          }

          .obys-lab-detail-copy dl div {
            gap: 0.08rem;
          }

          .obys-lab-detail-copy dd {
            font-size: clamp(0.62rem, 3.4vw, 0.78rem);
            line-height: 1.08;
          }

          .obys-lab-detail-copy > a {
            margin-top: 0.12rem;
          }

          .obys-lab-detail-frame {
            min-height: auto;
            display: grid;
            gap: 0.9rem;
            justify-items: center;
            padding-bottom: 1.1rem;
          }

          .obys-lab-detail-frame > div:not(.obys-lab-detail-entry) {
            width: min(86vw, 420px);
            aspect-ratio: 1 / 1;
            opacity: 1;
            filter: none;
            transform: none;
            padding: 0;
          }

          .obys-lab-detail-frame.is-active > div:not(.obys-lab-detail-entry) {
            opacity: 1;
            filter: none;
            transform: none;
          }

          .obys-lab-detail-frame:nth-child(5n + 1),
          .obys-lab-detail-frame:nth-child(5n + 2),
          .obys-lab-detail-frame:nth-child(5n + 3),
          .obys-lab-detail-frame:nth-child(5n + 4),
          .obys-lab-detail-frame:nth-child(5n) {
            --detail-rail-offset: 0rem;
            --detail-rail-ratio: 1 / 1;
            --detail-rail-width: min(86vw, 420px);
          }

          .obys-lab-detail-metadata {
            position: static;
            width: min(86vw, 420px);
            margin: 0;
            gap: 0.52rem;
            font-size: clamp(0.58rem, 2.8vw, 0.72rem);
          }

          .obys-lab-detail-entry {
            position: static;
            width: min(86vw, 420px);
            gap: 0.92rem;
            font-size: clamp(0.58rem, 2.8vw, 0.72rem);
          }

          .obys-lab-detail-entry section {
            gap: 0.38rem;
          }

          .obys-lab-detail-entry h2 {
            font-size: inherit;
          }

          .obys-lab-detail-entry p,
          .obys-lab-detail-entry li {
            max-width: none;
            font-size: inherit;
          }

          .obys-lab-detail-entry ol li {
            grid-template-columns: 1.25rem 1fr;
          }

          .obys-lab-detail-footer {
            order: 3;
            position: static;
            right: auto;
            bottom: auto;
            margin-top: 0.2rem;
            justify-content: space-between;
            padding-top: 0.2rem;
            font-size: clamp(0.54rem, 2.6vw, 0.7rem);
          }
        }
      `}</style>
    </main>
  );
}
