import { getTemplatesByIndustry } from "@/data/templates";

export type RailWidthTier = "xs" | "sm" | "md" | "lg" | "xl";

export type RailRatioTier = "square" | "portrait" | "landscape" | "wide";

export type RailOffsetTier = "far-left" | "left" | "center" | "right" | "far-right";

export type RailDepthTier = "near" | "mid" | "far";

export type RailPreset = {
  depthTier: RailDepthTier;
  id: string;
  offsetTier: RailOffsetTier;
  ratioTier: RailRatioTier;
  widthTier: RailWidthTier;
};

export type ObysLabTemplate = {
  descriptionCN: string;
  descriptionEN: string;
  number: string;
  route: string;
  templateHref?: string;
  templateId: string;
  thumbnail: string;
  titleCN: string;
  titleEN: string;
};

export type ObysLabItem = {
  industry: string;
  imageSrc: string;
  location: string;
  number: string;
  railPreset: RailPreset;
  service: string;
  serviceCn: string;
  slug: string;
  templates: ObysLabTemplate[];
  title: string;
  titleCn: string;
  titleCN: string;
  titleEN: string;
  category: string;
  categoryCn: string;
  year: string;
};

function getObysLabTemplates(industry: string): ObysLabTemplate[] {
  return getTemplatesByIndustry(industry).map((template, index) => ({
    descriptionCN: template.description,
    descriptionEN: template.description,
    number: String(index + 1).padStart(2, "0"),
    route: template.route,
    templateHref:
      industry === "Hospitality" && index === 0 ? "/templates/hospitality/luxury-hotel" : undefined,
    templateId: template.templateId,
    thumbnail: template.thumbnail,
    titleCN: template.templateName,
    titleEN: template.templateName,
  }));
}

export const obysLabItems: ObysLabItem[] = [
  {
    slug: "hospitality",
    number: "01",
    title: "Hospitality",
    titleCn: "酒店与旅行",
    titleCN: "酒店与旅行",
    titleEN: "Hospitality",
    category: "Hospitality",
    categoryCn: "酒店与旅行",
    industry: "Hospitality",
    service: "Creative Direction / Web Design / Development",
    serviceCn: "创意指导/网站设计/开发",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/hospitality.svg",
    templates: getObysLabTemplates("Hospitality"),
    railPreset: {
      id: "hospitality",
      widthTier: "sm",
      ratioTier: "square",
      offsetTier: "left",
      depthTier: "far",
    },
  },
  {
    slug: "restaurant",
    number: "02",
    title: "Restaurant",
    titleCn: "餐厅与食品",
    titleCN: "餐厅与食品",
    titleEN: "Restaurant",
    category: "Restaurant",
    categoryCn: "餐厅与食品",
    industry: "Restaurant",
    service: "Web Design/Dev",
    serviceCn: "网站设计/开发",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/food-beverage.svg",
    templates: getObysLabTemplates("Restaurant"),
    railPreset: {
      id: "restaurant",
      widthTier: "lg",
      ratioTier: "portrait",
      offsetTier: "right",
      depthTier: "near",
    },
  },
  {
    slug: "construction",
    number: "03",
    title: "Construction",
    titleCn: "建筑与工程",
    titleCN: "建筑与工程",
    titleEN: "Construction",
    category: "Construction",
    categoryCn: "建筑与工程",
    industry: "Construction",
    service: "Web Design",
    serviceCn: "网站设计",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/construction.svg",
    templates: getObysLabTemplates("Construction"),
    railPreset: {
      id: "construction",
      widthTier: "md",
      ratioTier: "square",
      offsetTier: "center",
      depthTier: "mid",
    },
  },
  {
    slug: "mining",
    number: "04",
    title: "Mining",
    titleCn: "矿业",
    titleCN: "矿业",
    titleEN: "Mining",
    category: "Mining",
    categoryCn: "矿业",
    industry: "Mining",
    service: "Creative Direction, Web Design/Dev",
    serviceCn: "创意指导/网站设计/开发",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/mining-energy.svg",
    templates: getObysLabTemplates("Mining"),
    railPreset: {
      id: "mining",
      widthTier: "md",
      ratioTier: "portrait",
      offsetTier: "left",
      depthTier: "mid",
    },
  },
  {
    slug: "import-wholesale",
    number: "05",
    title: "Import & Wholesale",
    titleCn: "进口与批发",
    titleCN: "进口与批发",
    titleEN: "Import & Wholesale",
    category: "Trading, Wholesale",
    categoryCn: "进口与批发",
    industry: "Import & Wholesale",
    service: "Web Design/Dev, Identity",
    serviceCn: "网站设计/开发/品牌识别",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/import-wholesale.svg",
    templates: getObysLabTemplates("Import & Wholesale"),
    railPreset: {
      id: "import-wholesale",
      widthTier: "xl",
      ratioTier: "wide",
      offsetTier: "right",
      depthTier: "near",
    },
  },
  {
    slug: "logistics",
    number: "06",
    title: "Logistics",
    titleCn: "物流",
    titleCN: "物流",
    titleEN: "Logistics",
    category: "Logistics",
    categoryCn: "物流",
    industry: "Logistics",
    service: "Web Design/Dev",
    serviceCn: "网站设计/开发",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/logistics-auto.svg",
    templates: getObysLabTemplates("Logistics"),
    railPreset: {
      id: "logistics",
      widthTier: "sm",
      ratioTier: "square",
      offsetTier: "left",
      depthTier: "far",
    },
  },
  {
    slug: "agriculture",
    number: "07",
    title: "Agriculture",
    titleCn: "农业与加工",
    titleCN: "农业与加工",
    titleEN: "Agriculture",
    category: "Agriculture, Processing",
    categoryCn: "农业与加工",
    industry: "Agriculture",
    service: "Concept, Web Design/Dev",
    serviceCn: "概念/网站设计/开发",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/agriculture-processing.svg",
    templates: getObysLabTemplates("Agriculture"),
    railPreset: {
      id: "agriculture",
      widthTier: "lg",
      ratioTier: "portrait",
      offsetTier: "right",
      depthTier: "near",
    },
  },
  {
    slug: "professional-services",
    number: "08",
    title: "Professional Services",
    titleCn: "专业服务",
    titleCN: "专业服务",
    titleEN: "Professional Services",
    category: "Professional Services",
    categoryCn: "专业服务",
    industry: "Professional Services",
    service: "Web Design/Dev, Identity",
    serviceCn: "网站设计/开发/品牌识别",
    location: "Tanzania",
    year: "2026",
    imageSrc: "/industry/professional-services.svg",
    templates: getObysLabTemplates("Professional Services"),
    railPreset: {
      id: "professional-services",
      widthTier: "md",
      ratioTier: "square",
      offsetTier: "center",
      depthTier: "mid",
    },
  },
];
