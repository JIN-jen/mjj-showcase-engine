"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./luxury-hotel.module.css";

const assetBase = "/template-assets/hospitality/luxury-hotel";

const demoImages = {
  aboutInterior: `${assetBase}/about-interior.png`,
  aboutMapLocation: `${assetBase}/about-map-location.png`,
  galleryLiving: `${assetBase}/gallery-living.png`,
  heroEstate: `${assetBase}/hero-estate.png`,
  mobileHeroEstate: `${assetBase}/mobile-hero-estate.png`,
  mobileVillaOne: `${assetBase}/mobile-villa-one.png`,
  proposalDetail: `${assetBase}/proposal-detail.png`,
  restaurantInterior: `${assetBase}/restaurant-interior.png`,
  serviceFood: `${assetBase}/service-food.png`,
  suiteRoom: `${assetBase}/suite-room.png`,
};

type Lang = "en" | "zh";

const copy = {
  en: {
    nav: {
      brand: "TIIH Hospitality",
      rooms: "Rooms",
      booking: "Booking",
      gallery: "Gallery",
      proposal: "Proposal",
      request: "Request Proposal",
    },
    hero: {
      eyebrow: "Luxury hotel template",
      title: "Tanzania Hospitality",
      meta: "Website Solutions / Direct Booking / Guest Experience",
    },
    intro: {
      label: "01 / Introduction",
      title: "Digital excellence for hotels, resorts, safari lodges and boutique stays across East Africa.",
      body: "A high-end hospitality website system built from the Stitch master template: architectural photography, serif editorial type, direct booking logic, and restrained conversion paths.",
      cta: "Start Project Brief",
    },
    rooms: {
      label: "02 / Rooms",
      title: "Specialized Solutions",
      items: [
        ["Safari Lodge", "Digital immersion / direct bookings"],
        ["Beach Resort", "Visual storytelling / guest experience"],
        ["Boutique Hotel", "Editorial rooms / urban stay"],
      ],
    },
    booking: {
      label: "03 / Booking Experience",
      title: "Online Booking System",
      availability: "Availability",
      arrival: "Arrival",
      guests: "Guests",
      cta: "Check Dates",
    },
    gallery: {
      label: "04 / Restaurant, Bar & Gallery",
      title: "Photography, dining and guest experience are treated as one editorial system.",
      marketingTitle: "SEO & Marketing",
      marketingBody: "High-value acquisition for rooms, dining, and experience-led travel.",
      guestTitle: "Guest Experience Optimization",
      guestBody: "Service touchpoints translated into a calm, premium digital journey.",
    },
    mobile: {
      label: "05 / Mobile Preview",
      title: "Accommodation browsing designed for mobile guests.",
    },
    about: {
      label: "06 / About",
      title: "Brand story, coordinates and principles for a quiet luxury hotel presence.",
      location: "Location",
      locationValue: "Zanzibar / Serengeti / Arusha",
      coordinates: "Coordinates",
      coordinatesValue: "06° 09' S / 39° 11' E",
    },
    location: {
      label: "07 / Location",
      title: "Local context for East African hospitality.",
      body: "Designed for hotels, resorts and lodges that need digital presence rooted in local context.",
      location: "Location",
      locationValue: "Zanzibar / Serengeti / Arusha",
      coordinates: "Coordinates",
      coordinatesValue: "06° 09' S / 39° 11' E",
    },
    principles: [
      ["01", "Architectural Silence", "Generous whitespace, precise type, and image-led hotel storytelling."],
      ["02", "Direct Booking", "A clear booking path designed to reduce friction before inquiry."],
      ["03", "Guest Experience", "Rooms, dining, gallery, and mobile states treated as one coherent system."],
    ],
    proposal: {
      title: "Request a Website Proposal",
      body: "For bespoke hotel websites, booking flows, and hospitality content systems.",
      firstName: "First Name",
      email: "Email Address",
      type: "Inquiry Type",
      message: "Message",
      submit: "Submit Inquiry",
      contact: "Contact",
      location: "Dar es Salaam / Zanzibar / Arusha",
    },
    starter: {
      label: "Project Starter CTA",
      title: "Prepare your logo, images, company name, contact details and business intro.",
      body: "Keep the template view clean. Use this CTA area to start the brief, check delivery time, request a quote and reach us on WhatsApp or Email.",
      summary: "Start Project Brief / Delivery 3-5 days",
      delivery: "Delivery: 3-5 days",
      quote: "GET QUOTE",
      whatsapp: "WhatsApp",
      email: "EMAIL",
      start: "START PROJECT BRIEF",
      materials: "Project materials",
    },
  },
  zh: {
    nav: {
      brand: "TIIH 酒店模板",
      rooms: "房型",
      booking: "预订",
      gallery: "图库",
      proposal: "提案",
      request: "咨询方案",
    },
    hero: {
      eyebrow: "高端酒店网站模板",
      title: "坦桑尼亚酒店体验",
      meta: "网站方案 / 直订系统 / 宾客体验",
    },
    intro: {
      label: "01 / 项目介绍",
      title: "面向东非酒店、度假村、Safari Lodge 与精品住宿的高端数字体验。",
      body: "基于 Stitch 酒店母模板提炼的高端酒店网站系统：建筑摄影、衬线标题、直接预订路径，以及克制而清晰的转化设计。",
      cta: "开始提交资料",
    },
    rooms: {
      label: "02 / 房型",
      title: "专属酒店方案",
      items: [
        ["Safari Lodge", "沉浸式展示 / 直接预订"],
        ["Beach Resort", "视觉叙事 / 宾客体验"],
        ["Boutique Hotel", "编辑式房型 / 城市住宿"],
      ],
    },
    booking: {
      label: "03 / 预订体验",
      title: "在线预订系统",
      availability: "可订状态",
      arrival: "抵达日期",
      guests: "入住人数",
      cta: "查询日期",
    },
    gallery: {
      label: "04 / 餐厅、酒吧与图库",
      title: "摄影、餐饮与宾客体验被整合成统一的编辑式视觉系统。",
      marketingTitle: "SEO 与营销",
      marketingBody: "面向客房、餐饮和体验型旅行的高价值获客路径。",
      guestTitle: "宾客体验优化",
      guestBody: "将服务触点转化为安静、高级、连贯的数字旅程。",
    },
    mobile: {
      label: "05 / 移动端预览",
      title: "为移动端住客设计的住宿浏览体验。",
    },
    about: {
      label: "06 / 品牌故事",
      title: "以品牌故事、坐标与设计原则，建立安静而高级的酒店数字存在感。",
      location: "位置",
      locationValue: "桑给巴尔 / 塞伦盖蒂 / 阿鲁沙",
      coordinates: "坐标",
      coordinatesValue: "南纬 06°09' / 东经 39°11'",
    },
    location: {
      label: "07 / 地理位置",
      title: "扎根东非酒店场景的本地语境。",
      body: "为酒店、度假村与 Lodge 打造与本地环境、目的地体验和品牌故事相连的数字存在感。",
      location: "位置",
      locationValue: "桑给巴尔 / 塞伦盖蒂 / 阿鲁沙",
      coordinates: "坐标",
      coordinatesValue: "南纬 06°09' / 东经 39°11'",
    },
    principles: [
      ["01", "建筑式安静", "充足留白、精确字体层级，以及以图片驱动的酒店叙事。"],
      ["02", "直接预订", "清晰的预订路径，减少咨询前的决策阻力。"],
      ["03", "宾客体验", "房型、餐饮、图库和移动端状态被统一为完整系统。"],
    ],
    proposal: {
      title: "申请网站方案",
      body: "适用于定制酒店网站、预订流程和酒店内容系统。",
      firstName: "姓名",
      email: "邮箱地址",
      type: "咨询类型",
      message: "留言内容",
      submit: "提交咨询",
      contact: "联系方式",
      location: "达累斯萨拉姆 / 桑给巴尔 / 阿鲁沙",
    },
    starter: {
      label: "Project Starter CTA",
      title: "请准备 Logo、图片、公司名称、联系方式和业务介绍。",
      body: "保持模板页面的展示干净，把项目资料、交付周期、获取报价和 WhatsApp / Email 联系方式统一放到 CTA 区域。",
      summary: "开始提交资料 / 3-5天交付",
      delivery: "交付周期：3-5 天",
      quote: "获取报价",
      whatsapp: "WhatsApp",
      email: "邮箱",
      start: "开始提交资料",
      materials: "项目资料",
    },
  },
} satisfies Record<Lang, unknown>;

export default function LuxuryHotelTemplatePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const briefHref = `/brief?industry=hospitality&template=luxury-hotel&lang=${lang}`;

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <nav className={styles.nav} aria-label="Hospitality demo navigation">
          <Link href="/obys-lab/work/hospitality">{t.nav.brand}</Link>
          <div className={styles.navLinks}>
            <a href="#rooms">{t.nav.rooms}</a>
            <a href="#booking">{t.nav.booking}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#proposal">{t.nav.proposal}</a>
          </div>
          <div className={styles.navActions}>
            <a className={styles.proposalLink} href="#proposal">
              {t.nav.request}
            </a>
            <div className={styles.langSwitch} aria-label="Language switcher">
              <button aria-pressed={lang === "zh"} type="button" onClick={() => setLang("zh")}>
                CN
              </button>
              <button aria-pressed={lang === "en"} type="button" onClick={() => setLang("en")}>
                EN
              </button>
            </div>
          </div>
        </nav>

        <section className={styles.hero}>
          <Image src={demoImages.heroEstate} alt="" priority fill sizes="100vw" />
          <div>
            <p>{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <span>{t.hero.meta}</span>
          </div>
        </section>

        <section className={styles.intro}>
          <p>{t.intro.label}</p>
            <h2>{t.intro.title}</h2>
            <div>
              <p>{t.intro.body}</p>
              <Link href={briefHref}>{t.intro.cta}</Link>
            </div>
          </section>

        <section id="rooms" className={styles.rooms}>
          <header>
            <h2>{t.rooms.title}</h2>
            <p>{t.rooms.label}</p>
          </header>
          <div>
            {t.rooms.items.map(([title, label], index) => (
              <article key={title}>
                <div>
                  <Image
                    src={
                      index === 0
                        ? demoImages.suiteRoom
                        : index === 1
                          ? demoImages.mobileVillaOne
                          : demoImages.aboutInterior
                    }
                    alt=""
                    fill
                    sizes="(min-width: 900px) 28vw, 88vw"
                  />
                </div>
                <span>{label}</span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="booking" className={styles.booking}>
          <div>
            <p>{t.booking.label}</p>
            <h2>{t.booking.title}</h2>
            <span>{t.booking.availability}</span>
            <span>{t.booking.arrival}</span>
            <span>{t.booking.guests}</span>
            <button type="button">{t.booking.cta}</button>
          </div>
          <figure>
            <Image src={demoImages.restaurantInterior} alt="" fill sizes="(min-width: 900px) 70vw, 100vw" />
          </figure>
        </section>

        <section id="gallery" className={styles.gallery}>
          <header>
            <p>{t.gallery.label}</p>
            <h2>{t.gallery.title}</h2>
          </header>
          <div>
            <figure>
              <Image src={demoImages.serviceFood} alt="" fill sizes="(min-width: 900px) 42vw, 90vw" />
            </figure>
            <aside>
              <figure>
                <Image src={demoImages.galleryLiving} alt="" fill sizes="(min-width: 900px) 24vw, 90vw" />
              </figure>
              <section>
                <h3>{t.gallery.marketingTitle}</h3>
                <p>{t.gallery.marketingBody}</p>
              </section>
              <section>
                <h3>{t.gallery.guestTitle}</h3>
                <p>{t.gallery.guestBody}</p>
              </section>
            </aside>
          </div>
        </section>

        <section className={styles.mobile}>
          <div>
            <p>{t.mobile.label}</p>
            <h2>{t.mobile.title}</h2>
          </div>
          <figure>
            <Image src={demoImages.mobileHeroEstate} alt="" fill sizes="360px" />
          </figure>
        </section>

        <section className={styles.about}>
          <figure>
            <Image src={demoImages.aboutInterior} alt="" fill sizes="(min-width: 900px) 38vw, 90vw" />
          </figure>
          <div>
            <p>{t.about.label}</p>
            <h2>{t.about.title}</h2>
            <dl>
              <div>
                <dt>{t.about.location}</dt>
                <dd>{t.about.locationValue}</dd>
              </div>
              <div>
                <dt>{t.about.coordinates}</dt>
                <dd>{t.about.coordinatesValue}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.location}>
          <div>
            <p>{t.location.label}</p>
            <h2>{t.location.title}</h2>
            <span>{t.location.body}</span>
            <dl>
              <div>
                <dt>{t.location.location}</dt>
                <dd>{t.location.locationValue}</dd>
              </div>
              <div>
                <dt>{t.location.coordinates}</dt>
                <dd>{t.location.coordinatesValue}</dd>
              </div>
            </dl>
          </div>
          <figure>
            <Image src={demoImages.aboutMapLocation} alt="" fill sizes="(min-width: 900px) 46vw, 90vw" />
          </figure>
        </section>

        <section className={styles.principles}>
          {t.principles.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section id="proposal" className={styles.proposal}>
          <header>
            <h2>{t.proposal.title}</h2>
            <p>{t.proposal.body}</p>
          </header>
          <div>
            <form>
              <label>
                {t.proposal.firstName}
                <span />
              </label>
              <label>
                {t.proposal.email}
                <span />
              </label>
              <label>
                {t.proposal.type}
                <span />
              </label>
              <label>
                {t.proposal.message}
                <span />
              </label>
              <Link href={briefHref}>{t.proposal.submit}</Link>
            </form>
            <aside>
              <p>{t.proposal.contact}</p>
              <a href="mailto:concierge@tiih.example">concierge@tiih.example</a>
              <span>{t.proposal.location}</span>
              <figure>
                <Image src={demoImages.proposalDetail} alt="" fill sizes="(min-width: 900px) 30vw, 90vw" />
              </figure>
            </aside>
          </div>
        </section>
      </div>

      <section className={styles.launchProjectBar} aria-label="Start project entry">
        <div>
          <p>{t.starter.label}</p>
          <h2>{lang === "zh" ? "开始你的项目" : "Start your project"}</h2>
        </div>
        <Link className={styles.launchProjectButton} href={briefHref}>
          {lang === "zh" ? "开始提交资料" : "Start Project"}
        </Link>
      </section>
    </main>
  );
}
