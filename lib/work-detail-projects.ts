import type { IndustryTemplate, TemplateFrame } from "@/components/pages/work-detail-reel-page";

const frameTypes: TemplateFrame["type"][] = ["cover", "interface", "signal", "detail"];

function makeCases(): TemplateFrame[] {
  return Array.from({ length: 5 }, (_, index) => ({
    title: `Case ${String(index + 1).padStart(2, "0")}`,
    titleZh: `案例 ${String(index + 1).padStart(2, "0")}`,
    copy: "",
    copyZh: "",
    type: frameTypes[index] ?? "interface",
  }));
}

function makeHospitalityCases(): TemplateFrame[] {
  return [
    {
      title: "Luxury Hotel",
      titleZh: "豪华酒店",
      copy: "",
      copyZh: "",
      type: "cover",
    },
    {
      title: "Boutique Hotel",
      titleZh: "精品酒店",
      copy: "",
      copyZh: "",
      type: "interface",
    },
    {
      title: "Beach Resort",
      titleZh: "海滨度假村",
      copy: "",
      copyZh: "",
      type: "signal",
    },
    {
      title: "Safari Lodge",
      titleZh: "野奢营地",
      copy: "",
      copyZh: "",
      type: "detail",
    },
    {
      title: "Apartment Hotel",
      titleZh: "服务式公寓",
      copy: "",
      copyZh: "",
      type: "mobile",
    },
    {
      title: "Restaurant / Bar",
      titleZh: "餐厅 / 酒吧",
      copy: "",
      copyZh: "",
      type: "result",
    },
  ];
}

const industryTemplates: IndustryTemplate[] = [
  {
    slug: "hospitality",
    number: "01",
    title: "Hospitality",
    titleZh: "酒店与旅行",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "Creative Direction / Web Design / Development",
    serviceZh: "创意指导 / 网站设计 / 开发",
    industry: "Hospitality",
    industryZh: "酒店与旅行",
    year: "2026",
    description: "Six compact case directions for Tanzania hospitality websites.",
    descriptionZh: "六组适用于坦桑尼亚酒店与旅行网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(206,199,184,0.9) 42%, rgba(128,145,132,0.72) 100%)",
    frames: makeHospitalityCases(),
  },
  {
    slug: "food-beverage",
    number: "02",
    title: "Food & Beverage",
    titleZh: "餐饮与食品",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Food",
    industryZh: "餐饮",
    year: "2026",
    description: "Five compact case directions for Tanzania food and beverage websites.",
    descriptionZh: "五组适用于坦桑尼亚餐饮与食品网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(214,196,174,0.92) 44%, rgba(142,97,75,0.7) 100%)",
    frames: makeCases(),
  },
  {
    slug: "construction",
    number: "03",
    title: "Construction",
    titleZh: "建筑与工程",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Construction",
    industryZh: "建筑",
    year: "2026",
    description: "Five compact case directions for Tanzania construction websites.",
    descriptionZh: "五组适用于坦桑尼亚建筑与工程网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(196,193,187,0.92) 40%, rgba(104,102,94,0.74) 100%)",
    frames: makeCases(),
  },
  {
    slug: "mining-energy",
    number: "04",
    title: "Mining & Energy",
    titleZh: "矿业与能源",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Mining",
    industryZh: "矿业",
    year: "2026",
    description: "Five compact case directions for Tanzania mining and energy websites.",
    descriptionZh: "五组适用于坦桑尼亚矿业与能源网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(190,195,191,0.92) 42%, rgba(86,103,112,0.72) 100%)",
    frames: makeCases(),
  },
  {
    slug: "import-wholesale",
    number: "05",
    title: "Import & Wholesale",
    titleZh: "进口与批发",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Trading",
    industryZh: "贸易",
    year: "2026",
    description: "Five compact case directions for Tanzania import and wholesale websites.",
    descriptionZh: "五组适用于坦桑尼亚进口与批发网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(204,202,192,0.92) 42%, rgba(118,126,146,0.7) 100%)",
    frames: makeCases(),
  },
  {
    slug: "logistics-auto",
    number: "06",
    title: "Logistics & Auto",
    titleZh: "物流与汽车",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Logistics",
    industryZh: "物流",
    year: "2026",
    description: "Five compact case directions for Tanzania logistics and auto websites.",
    descriptionZh: "五组适用于坦桑尼亚物流与汽车网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(193,200,201,0.92) 40%, rgba(92,118,128,0.72) 100%)",
    frames: makeCases(),
  },
  {
    slug: "agriculture-processing",
    number: "07",
    title: "Agriculture",
    titleZh: "农业与加工",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Agriculture",
    industryZh: "农业",
    year: "2026",
    description: "Five compact case directions for Tanzania agriculture and processing websites.",
    descriptionZh: "五组适用于坦桑尼亚农业与加工网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(199,205,184,0.92) 42%, rgba(98,126,88,0.68) 100%)",
    frames: makeCases(),
  },
  {
    slug: "professional-services",
    number: "08",
    title: "Professional Services",
    titleZh: "专业服务",
    category: "Business Website Template",
    categoryZh: "商业网站模板",
    service: "UI / UX / Development",
    serviceZh: "UI / UX / 开发",
    industry: "Services",
    industryZh: "服务",
    year: "2026",
    description: "Five compact case directions for Tanzania professional service websites.",
    descriptionZh: "五组适用于坦桑尼亚专业服务网站的案例方向。",
    previewBackground:
      "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(205,202,197,0.92) 42%, rgba(126,116,142,0.68) 100%)",
    frames: makeCases(),
  },
];

export function getWorkDetailProject(slug: string) {
  return industryTemplates.find((item) => item.slug === slug);
}
