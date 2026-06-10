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

const detailCopy = {
  cn: {
    work: "作品",
    about: "关于",
    back: "返回",
    category: "类别",
    year: "年份",
    industry: "行业",
    service: "服务",
    location: "地点",
    case: "案例",
    templates: "模板",
    chooseTemplate: "选择此模板",
    projectBrief: "项目资料",
    briefCopy: "请准备标志、图片、公司名称、联系方式和业务介绍。",
    startBrief: "开始提交资料",
    delivery: "交付",
    deliveryValue: "3-5天",
    price: "价格",
    priceValue: "获取报价",
  },
  en: {
    work: "Work",
    about: "About",
    back: "Back",
    category: "Category",
    year: "YEAR",
    industry: "INDUSTRY",
    service: "Service",
    location: "LOCATION",
    case: "Case",
    templates: "TEMPLATES",
    chooseTemplate: "Choose This Template",
    projectBrief: "PROJECT BRIEF",
    briefCopy: "Prepare your logo, images, company name, contact details and business description.",
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
  const service = language === "cn" ? item.serviceCn : item.service;
  const briefHref = `/brief?industry=${encodeURIComponent(item.industry)}`;
  const briefItems =
    language === "cn"
      ? ["标志", "图片", "公司名称", "联系方式", "业务介绍"]
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
            </div>
            <dl className="obys-lab-detail-metadata" aria-label={`${title} metadata`}>
              <div>
                <dt>{copy.year}</dt>
                <dd>{item.year}</dd>
              </div>
              <div>
                <dt>{copy.industry}</dt>
                <dd>{category}</dd>
              </div>
              <div>
                <dt>{copy.service}</dt>
                <dd>{service}</dd>
              </div>
              <div>
                <dt>{copy.location}</dt>
                <dd>{item.location}</dd>
              </div>
            </dl>
            <div className="obys-lab-detail-entry" aria-label={`${title} template entry`}>
              <section>
                <h2>{copy.templates}</h2>
                <ol>
                  {item.templates.map((template) => (
                    <li key={template.number}>
                      <span>{template.number}</span>
                      <span>
                        <strong>{language === "cn" ? template.titleCN : template.titleEN}</strong>
                      </span>
                    </li>
                  ))}
                </ol>
                <Link href="/contact">{copy.chooseTemplate}</Link>
              </section>
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
          font-size: clamp(0.42rem, 0.52vw, 0.56rem);
          letter-spacing: 0.08em;
          line-height: 1.12;
        }

        .obys-lab-detail-metadata dt,
        .obys-lab-detail-entry h2 {
          color: rgba(17, 17, 17, 0.42);
          font: inherit;
          font-weight: 500;
          letter-spacing: inherit;
          line-height: inherit;
        }

        .obys-lab-detail-metadata dd,
        .obys-lab-detail-entry p,
        .obys-lab-detail-entry li,
        .obys-lab-detail-entry strong {
          font-size: inherit;
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: inherit;
        }

        .obys-lab-detail-entry a {
          font-size: inherit;
          font-weight: 500;
          letter-spacing: inherit;
          line-height: inherit;
        }
      `}</style>
    </main>
  );
}
