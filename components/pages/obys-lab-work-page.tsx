"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ObysBracket } from "@/components/pages/obys-bracket";
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
    service: "服务",
    case: "案例",
  },
  en: {
    work: "Work",
    about: "About",
    back: "Back",
    category: "Category",
    service: "Service",
    case: "Case",
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

      <ObysBracket className="obys-lab-detail-bracket" />

      <section ref={railRef} className="obys-lab-detail-rail" aria-label={`${title} case image stream`}>
        {caseFrames.map((frame, index) => (
          <article
            key={frame}
            data-detail-frame={frame}
            className={`obys-lab-detail-frame obys-lab-detail-frame--${index + 1}`}
          >
            <div>
              <ObysProjectStill item={item} mode="detail" frameIndex={index} />
            </div>
          </article>
        ))}
      </section>

      <footer className="obys-lab-detail-footer">
        <span>{copy.case} {caseFrames[activeFrame]}</span>
        <Link href="/obys-lab">{copy.work}</Link>
      </footer>
    </main>
  );
}
