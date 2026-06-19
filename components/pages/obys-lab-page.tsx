"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { obysLabItems } from "@/components/pages/obys-lab-data";
import { ObysProjectStill } from "@/components/pages/obys-project-still";
import { getRailPresetStyle } from "@/components/pages/obys-rail-preset-vars";

const loopedLabItems = [...obysLabItems, ...obysLabItems, ...obysLabItems];
type LabLanguage = "cn" | "en";

type IndustryIntelligence = {
  services: string[];
  servicesCn: string[];
  subindustries: string[];
  subindustriesCn: string[];
};

const labCopy = {
  cn: {
    work: "作品",
    about: "关于",
    contact: "联系",
    category: "类别",
    service: "服务",
    subindustries: "子行业",
    services: "服务",
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
    subindustries: "Subindustries",
    services: "Services",
    number: "Number",
    vertical: "Vertical",
    horizontal: "Horizontal",
    grid: "Grid",
  },
} satisfies Record<LabLanguage, Record<string, string>>;

const industryIntelligenceBySlug = {
  hospitality: {
    subindustries: ["Luxury Hotel", "Boutique Hotel", "Resort", "Safari Lodge", "Apartment Hotel"],
    subindustriesCn: ["豪华酒店", "精品酒店", "度假村", "Safari 营地", "公寓酒店"],
    services: ["Brand Website", "Booking System", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "预订系统", "咨询系统", "移动端体验"],
  },
  restaurant: {
    subindustries: ["Restaurant", "Cafe", "Bakery", "Fast Food", "Food Factory"],
    subindustriesCn: ["餐厅", "咖啡馆", "烘焙店", "快餐", "食品工厂"],
    services: ["Brand Website", "Menu System", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "菜单系统", "咨询系统", "移动端体验"],
  },
  construction: {
    subindustries: ["Machinery Rental", "Earthworks", "Road Construction", "Bridge Construction", "Mining Contractor"],
    subindustriesCn: ["机械租赁", "土方工程", "道路施工", "桥梁施工", "矿业承包商"],
    services: ["Brand Website", "Project Showcase", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "项目展示", "咨询系统", "移动端体验"],
  },
  mining: {
    subindustries: ["Gold Mining", "Copper Mining", "Processing Plant", "Mining Service", "Equipment Supply"],
    subindustriesCn: ["金矿", "铜矿", "加工厂", "矿业服务", "设备供应"],
    services: ["Brand Website", "Capability Profile", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "能力介绍", "咨询系统", "移动端体验"],
  },
  "import-wholesale": {
    subindustries: ["Building Materials", "Industrial Supply", "Wholesale Market", "Import Company", "Trading Company"],
    subindustriesCn: ["建筑材料", "工业供应", "批发市场", "进口公司", "贸易公司"],
    services: ["Brand Website", "Product Catalog", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "产品目录", "咨询系统", "移动端体验"],
  },
  logistics: {
    subindustries: ["Freight Forwarding", "Customs Clearance", "Warehouse", "Truck Fleet", "Port Service"],
    subindustriesCn: ["货运代理", "清关", "仓储", "卡车车队", "港口服务"],
    services: ["Brand Website", "Service Directory", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "服务目录", "咨询系统", "移动端体验"],
  },
  agriculture: {
    subindustries: ["Farm", "Poultry", "Fishery", "Food Processing", "Agriculture Export"],
    subindustriesCn: ["农场", "家禽养殖", "渔业", "食品加工", "农业出口"],
    services: ["Brand Website", "Export Profile", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "出口介绍", "咨询系统", "移动端体验"],
  },
  "professional-services": {
    subindustries: ["Law Firm", "Accounting", "Consulting", "Education", "Medical Service"],
    subindustriesCn: ["律师事务所", "会计", "咨询", "教育", "医疗服务"],
    services: ["Brand Website", "Service Profile", "Inquiry System", "Mobile Experience"],
    servicesCn: ["品牌网站", "服务介绍", "咨询系统", "移动端体验"],
  },
} satisfies Record<string, IndustryIntelligence>;

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
  const activeIndexRef = useRef(0);
  const activeItem = obysLabItems[activeIndex] ?? obysLabItems[0];
  const copy = labCopy[language];
  const activeTitle = language === "cn" ? activeItem.titleCn : activeItem.title;
  const activeIntelligence =
    industryIntelligenceBySlug[activeItem.slug as keyof typeof industryIntelligenceBySlug] ??
    industryIntelligenceBySlug.hospitality;
  const activeSubindustries =
    language === "cn" ? activeIntelligence.subindustriesCn : activeIntelligence.subindustries;
  const activeServices = language === "cn" ? activeIntelligence.servicesCn : activeIntelligence.services;

  function setActiveIndexSafely(nextIndex: number) {
    if (activeIndexRef.current === nextIndex) {
      return;
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
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

    const isCompactViewport = window.matchMedia("(max-width: 760px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCompactViewport || prefersReducedMotion) {
      setActiveIndexSafely(0);
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

      setActiveIndexSafely(closestIndex);
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
        <Link href="/obys-lab" aria-label="TIIH home">
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
            onMouseEnter={() => setActiveIndexSafely(index)}
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
            <dt>{copy.subindustries}</dt>
            <dd>
              <ol className="obys-lab-intelligence-list">
                {activeSubindustries.map((subindustry, index) => (
                  <li key={subindustry}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{subindustry}</span>
                  </li>
                ))}
              </ol>
            </dd>
          </div>
          <div>
            <dt>{copy.services}</dt>
            <dd>
              <ol className="obys-lab-intelligence-list">
                {activeServices.map((service, index) => (
                  <li key={service}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ol>
            </dd>
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
      <style jsx>{`
        .obys-lab-meta {
          gap: clamp(0.68rem, 1.15vw, 1.15rem);
          transform: translateY(-42%);
        }

        .obys-lab-meta h2 {
          margin-bottom: clamp(0.42rem, 0.9vw, 0.86rem);
        }

        .obys-lab-meta dl {
          gap: clamp(1.05rem, 1.85vw, 1.8rem);
        }

        .obys-lab-meta dl div {
          display: grid;
          gap: clamp(0.42rem, 0.74vw, 0.72rem);
        }

        .obys-lab-meta dt {
          display: block;
          color: rgba(0, 0, 0, 0.34);
          font-size: clamp(0.42rem, 0.5vw, 0.54rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          line-height: 1;
          text-transform: uppercase;
        }

        .obys-lab-meta dl div:nth-child(3) {
          display: none;
        }

        .obys-lab-intelligence-list {
          display: grid;
          gap: clamp(0.28rem, 0.54vw, 0.52rem);
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .obys-lab-intelligence-list li {
          display: grid;
          grid-template-columns: 1.45rem minmax(0, 1fr);
          gap: clamp(0.34rem, 0.54vw, 0.58rem);
          align-items: baseline;
        }

        .obys-lab-intelligence-list span {
          display: block;
          color: rgba(0, 0, 0, 0.78);
          font-size: clamp(0.58rem, 0.72vw, 0.78rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.18;
        }

        .obys-lab-intelligence-list span:first-child {
          color: rgba(0, 0, 0, 0.36);
          font-size: clamp(0.44rem, 0.52vw, 0.56rem);
          letter-spacing: 0.08em;
        }

        @media (max-width: 760px) {
          .obys-lab-meta {
            gap: 0.32rem;
            transform: translateY(-32%);
          }

          .obys-lab-meta h2 {
            margin-bottom: 0.12rem;
          }

          .obys-lab-meta dl {
            gap: 0.5rem;
          }

          .obys-lab-meta dl div {
            gap: 0.24rem;
          }

          .obys-lab-intelligence-list {
            gap: 0.16rem;
          }

          .obys-lab-intelligence-list li {
            grid-template-columns: 1rem minmax(0, 1fr);
            gap: 0.24rem;
          }

          .obys-lab-intelligence-list span {
            font-size: clamp(0.4rem, 1.58vw, 0.52rem);
            line-height: 1.08;
          }

          .obys-lab-intelligence-list span:first-child {
            font-size: clamp(0.34rem, 1.34vw, 0.44rem);
          }
        }
      `}</style>
    </main>
  );
}
