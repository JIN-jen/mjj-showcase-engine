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

export type ObysLabItem = {
  slug: string;
  number: string;
  title: string;
  titleCn: string;
  category: string;
  categoryCn: string;
  service: string;
  serviceCn: string;
  imageSrc: string;
  railPreset: RailPreset;
};

export const obysLabItems: ObysLabItem[] = [
  {
    slug: "hospitality",
    number: "01",
    title: "Hospitality",
    titleCn: "酒店与旅行",
    category: "Hospitality",
    categoryCn: "酒店与旅行",
    service: "Web Design/Dev",
    serviceCn: "网站设计/开发",
    imageSrc: "/industry/hospitality.svg",
    railPreset: {
      id: "hospitality",
      widthTier: "sm",
      ratioTier: "square",
      offsetTier: "left",
      depthTier: "far",
    },
  },
  {
    slug: "food-beverage",
    number: "02",
    title: "Food & Beverage",
    titleCn: "餐饮与食品",
    category: "Food, Beverage",
    categoryCn: "餐饮与食品",
    service: "Web Design/Dev",
    serviceCn: "网站设计/开发",
    imageSrc: "/industry/food-beverage.svg",
    railPreset: {
      id: "food-beverage",
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
    category: "Construction",
    categoryCn: "建筑与工程",
    service: "Web Design",
    serviceCn: "网站设计",
    imageSrc: "/industry/construction.svg",
    railPreset: {
      id: "construction",
      widthTier: "md",
      ratioTier: "square",
      offsetTier: "center",
      depthTier: "mid",
    },
  },
  {
    slug: "mining-energy",
    number: "04",
    title: "Mining & Energy",
    titleCn: "矿业与能源",
    category: "Mining, Energy",
    categoryCn: "矿业与能源",
    service: "Creative Direction, Web Design/Dev",
    serviceCn: "创意指导/网站设计/开发",
    imageSrc: "/industry/mining-energy.svg",
    railPreset: {
      id: "mining-energy",
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
    category: "Trading, Wholesale",
    categoryCn: "进口与批发",
    service: "Web Design/Dev, Identity",
    serviceCn: "网站设计/开发/品牌识别",
    imageSrc: "/industry/import-wholesale.svg",
    railPreset: {
      id: "import-wholesale",
      widthTier: "xl",
      ratioTier: "wide",
      offsetTier: "right",
      depthTier: "near",
    },
  },
  {
    slug: "logistics-auto",
    number: "06",
    title: "Logistics & Auto",
    titleCn: "物流与汽车",
    category: "Logistics, Automotive",
    categoryCn: "物流与汽车",
    service: "Web Design/Dev",
    serviceCn: "网站设计/开发",
    imageSrc: "/industry/logistics-auto.svg",
    railPreset: {
      id: "logistics-auto",
      widthTier: "sm",
      ratioTier: "square",
      offsetTier: "left",
      depthTier: "far",
    },
  },
  {
    slug: "agriculture-processing",
    number: "07",
    title: "Agriculture",
    titleCn: "农业与加工",
    category: "Agriculture, Processing",
    categoryCn: "农业与加工",
    service: "Concept, Web Design/Dev",
    serviceCn: "概念/网站设计/开发",
    imageSrc: "/industry/agriculture-processing.svg",
    railPreset: {
      id: "agriculture-processing",
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
    category: "Professional Services",
    categoryCn: "专业服务",
    service: "Web Design/Dev, Identity",
    serviceCn: "网站设计/开发/品牌识别",
    imageSrc: "/industry/professional-services.svg",
    railPreset: {
      id: "professional-services",
      widthTier: "md",
      ratioTier: "square",
      offsetTier: "center",
      depthTier: "mid",
    },
  },
];
