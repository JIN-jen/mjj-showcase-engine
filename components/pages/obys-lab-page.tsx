"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { obysLabItems } from "@/components/pages/obys-lab-data";
import { ObysProjectStill } from "@/components/pages/obys-project-still";
import { getRailPresetStyle } from "@/components/pages/obys-rail-preset-vars";

const loopedLabItems = [...obysLabItems, ...obysLabItems, ...obysLabItems];
type LabLanguage = "cn" | "en";

const labCopy = {
  cn: {
    work: "作品",
    about: "关于",
    contact: "联系",
    category: "类别",
    service: "服务",
    number: "编号",
    vertical: "纵向",
    horizontal: "横向",
    grid: "网格",
  },
  en: {
    work: "Work",
    about: "About",
    contact: "Contact",
    category: "Category",
    service: "Service",
    number: "Number",
    vertical: "Vertical",
    horizontal: "Horizontal",
    grid: "Grid",
  },
} satisfies Record<LabLanguage, Record<string, string>>;

function getStoredLanguage(): LabLanguage {
  if (typeof window === "undefined") {
    return "cn";
  }

  return window.localStorage.getItem("tiih-obys-lab-language") === "en" ? "en" : "cn";
}

export function ObysLabPage() {
  const railRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState<LabLanguage>("cn");
  const activeItem = obysLabItems[activeIndex] ?? obysLabItems[0];
  const copy = labCopy[language];
  const activeTitle = language === "cn" ? activeItem.titleCn : activeItem.title;
  const activeCategory = language === "cn" ? activeItem.categoryCn : activeItem.category;
  const activeService = language === "cn" ? activeItem.serviceCn : activeItem.service;

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

    const targets = Array.from(rail.querySelectorAll<HTMLElement>("[data-lab-index]"));
    let frameId = 0;
    let isResetting = false;

    function updateCenterLock() {
      frameId = 0;

      if (!rail) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const lockRange = Math.max(window.innerHeight * 0.28, 180);
      let closestDistance = Number.POSITIVE_INFINITY;
      let closestIndex = 0;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const targetCenter = rect.top + rect.height / 2;
        const distance = Math.abs(targetCenter - viewportCenter);
        const lock = Math.max(0, 1 - distance / lockRange);
        const itemIndex = Number(target.dataset.labIndex ?? 0) % obysLabItems.length;

        target.style.setProperty("--lab-lock", lock.toFixed(3));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = itemIndex;
        }
      });

      targets.forEach((target) => {
        const itemIndex = Number(target.dataset.labIndex ?? 0) % obysLabItems.length;
        target.classList.toggle("is-active", itemIndex === closestIndex);
      });

      setActiveIndex(closestIndex);
    }

    function requestCenterLockUpdate() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateCenterLock);
    }

    function handleScroll() {
      if (!rail || isResetting) {
        return;
      }

      const segmentHeight = rail.scrollHeight / 3;
      const loopPoint = segmentHeight * 2;

      if (rail.scrollTop >= loopPoint) {
        isResetting = true;
        rail.scrollTop -= segmentHeight;
        window.requestAnimationFrame(() => {
          isResetting = false;
          requestCenterLockUpdate();
        });
      }

      requestCenterLockUpdate();
    }

    updateCenterLock();
    rail.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", requestCenterLockUpdate);

    return () => {
      rail.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", requestCenterLockUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <main className="obys-lab-page">
      <header className="obys-lab-header">
        <Link href="/" aria-label="TIIH home">
          TIIH
        </Link>
        <nav aria-label="Obys lab navigation">
          <Link href="/obys-lab">{copy.work}</Link>
          <Link href="/about">{copy.about}</Link>
          <Link href="/contact">{copy.contact}</Link>
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

      <aside className="obys-lab-index" aria-label="Obys lab work index">
        {obysLabItems.map((item, index) => (
          <Link
            key={item.number}
            href={`/obys-lab/work/${item.slug}`}
            className={activeIndex === index ? "is-active" : ""}
          >
            <span>{item.number}</span>
            <span>{language === "cn" ? item.titleCn : item.title}</span>
          </Link>
        ))}
      </aside>

      <section ref={railRef} className="obys-lab-rail" data-lenis-prevent aria-label="Small work image rail">
        {loopedLabItems.map((item, index) => {
          const itemIndex = index % obysLabItems.length;

          return (
            <article
              key={`${item.number}-${index}`}
              data-lab-index={itemIndex}
              className={activeIndex === itemIndex ? "is-active" : ""}
              style={getRailPresetStyle(item.railPreset)}
            >
              <Link href={`/obys-lab/work/${item.slug}`} className="obys-lab-preview">
                <ObysProjectStill item={item} mode="index" frameIndex={index} />
              </Link>
            </article>
          );
        })}
      </section>

      <aside className="obys-lab-meta" aria-live="polite">
        <p>{activeItem.number}</p>
        <h2>{activeTitle}</h2>
        <dl>
          <div>
            <dt>{copy.category}</dt>
            <dd>{activeCategory}</dd>
          </div>
          <div>
            <dt>{copy.service}</dt>
            <dd>{activeService}</dd>
          </div>
          <div>
            <dt>{copy.number}</dt>
            <dd>{activeItem.number}</dd>
          </div>
        </dl>
      </aside>

      <footer className="obys-lab-modes" aria-hidden="true">
        <span>{copy.vertical}</span>
        <span>{copy.horizontal}</span>
        <span>{copy.grid}</span>
      </footer>
    </main>
  );
}
