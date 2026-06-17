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
  const copy = detailCopy[language];
  const title = language === "cn" ? item.titleCn : item.title;
  const category = language === "cn" ? item.categoryCn : item.category;
  const service = language === "cn" ? item.serviceCn.replaceAll("/", " / ") : item.service.replaceAll("/", " / ");
  const briefTemplate = defaultBriefTemplateByIndustrySlug[item.slug] ?? "";
  const briefHref = `/brief?industry=${encodeURIComponent(item.slug)}&template=${encodeURIComponent(briefTemplate)}&lang=${language}`;
  const demoHref = item.templates.find((template) => template.templateHref)?.templateHref;
  const briefItems =
    language === "cn"
      ? ["Logo", "图片", "公司名称", "联系方式", "业务介绍"]
      : ["Logo", "Images", "Company name", "Contact details", "Business description"];
  const localizedItem = {
    ...item,
    category,
    title,
  };

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
      setActiveFrame(closestIndex);
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
        {caseFrames.map((frame, index) => (
          <article
            key={frame}
            data-detail-frame={frame}
            className={`obys-lab-detail-frame obys-lab-detail-frame--${index + 1}`}
          >
            <div>
              <span className="obys-lab-detail-signal">{item.number}</span>
              <ObysProjectStill item={localizedItem} mode="detail" frameIndex={index} />
              {index === 0 && demoHref ? (
                <Link
                  href={demoHref}
                  aria-label={language === "cn" ? "查看 Luxury Hotel 演示" : "View Luxury Hotel Demo"}
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
        ))}
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
      `}</style>
    </main>
  );
}
