export type LocalePair = {
  cn: string;
  en: string;
};

export type TemplateMatrixRecord = {
  id: string;
  slug: string;
  nameCn: string;
  nameEn: string;
  shortNameCn: string;
  shortNameEn: string;
  categoryTagCn: string;
  categoryTagEn: string;
  targetCustomerCn: string;
  targetCustomerEn: string;
  heroTitleCn: string;
  heroTitleEn: string;
  heroSubtitleCn: string;
  heroSubtitleEn: string;
  seoTitleCn: string;
  seoTitleEn: string;
  seoDescriptionCn: string;
  seoDescriptionEn: string;
  keywordsCn: string[];
  keywordsEn: string[];
  cityKeywords: LocalePair[];
  countryKeywords: LocalePair[];
  whatsappTextCn: string;
  whatsappTextEn: string;
  emailSubjectCn: string;
  emailSubjectEn: string;
  visualDirectionCn: string;
  visualDirectionEn: string;
  moduleTagsCn: string[];
  moduleTagsEn: string[];
  posterLayout: string;
  posterTags: string[];
  previewBackground: string;
  imageSrc: string;
  route: string;
  status: "draft" | "ready" | "active";
};

const CITY_KEYWORDS: LocalePair[] = [
  { cn: "坦桑尼亚", en: "Tanzania" },
  { cn: "达累斯萨拉姆", en: "Dar es Salaam" },
  { cn: "阿鲁沙", en: "Arusha" },
  { cn: "姆万扎", en: "Mwanza" },
  { cn: "多多马", en: "Dodoma" },
  { cn: "桑给巴尔", en: "Zanzibar" },
  { cn: "姆贝亚", en: "Mbeya" },
  { cn: "莫罗戈罗", en: "Morogoro" },
  { cn: "坦噶", en: "Tanga" },
  { cn: "乞力马扎罗", en: "Kilimanjaro" },
  { cn: "莫希", en: "Moshi" },
];

const COUNTRY_KEYWORDS: LocalePair[] = [
  { cn: "坦桑尼亚", en: "Tanzania" },
  { cn: "东非", en: "East Africa" },
];

type TemplateInput = {
  categoryTagCn: string;
  categoryTagEn: string;
  heroSubtitleCn: string;
  heroSubtitleEn: string;
  id: string;
  imageSrc: string;
  moduleTagsCn: string[];
  moduleTagsEn: string[];
  nameCn: string;
  nameEn: string;
  posterLayout: string;
  posterTags: string[];
  previewBackground: string;
  shortNameCn: string;
  shortNameEn: string;
  slug: string;
  status?: TemplateMatrixRecord["status"];
  targetCustomerCn: string;
  targetCustomerEn: string;
  visualDirectionCn: string;
  visualDirectionEn: string;
};

function buildKeywordsEn(nameEn: string, targetCustomerEn: string) {
  return [
    nameEn,
    `${nameEn} Tanzania`,
    `${nameEn} Dar es Salaam`,
    `${targetCustomerEn} Website Design`,
    "Website Design",
    "Landing Page",
    "Business Website",
    "Company Website",
  ];
}

function buildKeywordsCn(nameCn: string, targetCustomerCn: string) {
  return [
    nameCn,
    `${nameCn} 坦桑尼亚`,
    `${nameCn} 达累斯萨拉姆`,
    `${targetCustomerCn}网站`,
    "网站建设",
    "独立站",
    "企业官网",
    "落地页",
  ];
}

function buildSeoTitleEn(nameEn: string, targetCustomerEn: string) {
  return `${nameEn} Tanzania | ${targetCustomerEn}`;
}

function buildSeoTitleCn(nameCn: string, targetCustomerCn: string) {
  return `${nameCn}（坦桑尼亚）｜${targetCustomerCn}`;
}

function buildSeoDescriptionEn(nameEn: string, targetCustomerEn: string, visualDirectionEn: string) {
  return `High-converting ${nameEn} for ${targetCustomerEn} in Tanzania. ${visualDirectionEn} Built for WhatsApp leads, quotation requests, and trust-first conversion.`;
}

function buildSeoDescriptionCn(nameCn: string, targetCustomerCn: string, visualDirectionCn: string) {
  return `面向${targetCustomerCn}的高转化${nameCn}，适用于坦桑尼亚市场。${visualDirectionCn} 用于 WhatsApp 咨询、报价提交与信任建立。`;
}

function buildWhatsappTextEn(nameEn: string) {
  return `Hi, I want a ${nameEn} for Tanzania.`;
}

function buildWhatsappTextCn(nameCn: string) {
  return `你好，我想做一个${nameCn}。`;
}

function buildEmailSubjectEn(nameEn: string) {
  return `${nameEn} quotation request`;
}

function buildEmailSubjectCn(nameCn: string) {
  return `${nameCn}报价需求`;
}

function buildTemplate(input: TemplateInput): TemplateMatrixRecord {
  return {
    ...input,
    cityKeywords: CITY_KEYWORDS,
    countryKeywords: COUNTRY_KEYWORDS,
    heroTitleCn: input.nameCn,
    heroTitleEn: input.nameEn,
    seoTitleCn: buildSeoTitleCn(input.nameCn, input.targetCustomerCn),
    seoTitleEn: buildSeoTitleEn(input.nameEn, input.targetCustomerEn),
    seoDescriptionCn: buildSeoDescriptionCn(input.nameCn, input.targetCustomerCn, input.visualDirectionCn),
    seoDescriptionEn: buildSeoDescriptionEn(input.nameEn, input.targetCustomerEn, input.visualDirectionEn),
    keywordsCn: buildKeywordsCn(input.nameCn, input.targetCustomerCn),
    keywordsEn: buildKeywordsEn(input.nameEn, input.targetCustomerEn),
    whatsappTextCn: buildWhatsappTextCn(input.nameCn),
    whatsappTextEn: buildWhatsappTextEn(input.nameEn),
    emailSubjectCn: buildEmailSubjectCn(input.nameCn),
    emailSubjectEn: buildEmailSubjectEn(input.nameEn),
    route: `/templates/${input.slug}`,
    status: input.status ?? "ready",
  };
}

const categoryColor = {
  hospitality: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(206,199,184,0.9) 42%, rgba(128,145,132,0.72) 100%)",
  food: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(214,196,174,0.92) 44%, rgba(142,97,75,0.7) 100%)",
  construction: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(196,193,187,0.92) 40%, rgba(104,102,94,0.74) 100%)",
  materials: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(204,202,192,0.92) 42%, rgba(118,126,146,0.7) 100%)",
  auto: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(193,200,201,0.92) 40%, rgba(92,118,128,0.72) 100%)",
  services: "linear-gradient(135deg, rgba(246,244,238,1) 0%, rgba(205,202,197,0.92) 42%, rgba(126,116,142,0.68) 100%)",
} as const;

const posterTags = {
  hospitality: ["Luxury Stay", "Suite", "Booking"],
  food: ["Menu", "Dining", "Reservation"],
  construction: ["Blueprint", "Project", "Build"],
  materials: ["Supply", "Inventory", "Quote"],
  auto: ["Service", "Parts", "Fleet"],
  services: ["Trust", "Lead", "Consultation"],
} as const;

const moduleTags = {
  hospitalityCn: ["房型展示", "套餐", "地图", "WhatsApp", "评价", "预订入口"],
  hospitalityEn: ["Rooms", "Packages", "Map", "WhatsApp", "Reviews", "Booking CTA"],
  foodCn: ["菜单", "招牌菜", "门店", "外卖", "WhatsApp", "地图"],
  foodEn: ["Menu", "Signature Dishes", "Location", "Delivery", "WhatsApp", "Map"],
  constructionCn: ["项目案例", "资质证书", "设备能力", "服务范围", "询价表单", "WhatsApp"],
  constructionEn: ["Projects", "Certifications", "Equipment", "Scope", "Quote Form", "WhatsApp"],
  materialsCn: ["产品目录", "库存", "配送范围", "报价", "联系", "WhatsApp"],
  materialsEn: ["Catalog", "Stock", "Delivery Area", "Quotation", "Contact", "WhatsApp"],
  autoCn: ["产品/服务", "门店位置", "报价", "WhatsApp", "工作时间", "地图"],
  autoEn: ["Products / Services", "Location", "Quotation", "WhatsApp", "Hours", "Map"],
  servicesCn: ["业务范围", "资质", "案例", "咨询", "WhatsApp", "邮箱"],
  servicesEn: ["Services", "Credentials", "Cases", "Consultation", "WhatsApp", "Email"],
} as const;

export const templateMatrix: TemplateMatrixRecord[] = [
  buildTemplate({
    id: "tmpl-hospitality-01",
    slug: "luxury-hotel-website-tanzania",
    nameCn: "豪华酒店网站",
    nameEn: "Luxury Hotel Website",
    shortNameCn: "豪华酒店",
    shortNameEn: "Luxury Hotel",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "五星级酒店 / 高端酒店老板",
    targetCustomerEn: "Luxury hotel owner",
    heroSubtitleCn: "适合高端房型、品牌形象与直接预订转化。",
    heroSubtitleEn: "Built for premium rooms, prestige branding, and direct booking conversion.",
    visualDirectionCn: "编辑感强，留白充足，强调房型与空间质感。",
    visualDirectionEn: "Editorial, spacious, and room-first with premium visual breathing room.",
    imageSrc: "/posters/hospitality/luxury-hotel.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-hospitality-02",
    slug: "boutique-hotel-website-tanzania",
    nameCn: "精品酒店网站",
    nameEn: "Boutique Hotel Website",
    shortNameCn: "精品酒店",
    shortNameEn: "Boutique Hotel",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "城市精品酒店 / 设计酒店老板",
    targetCustomerEn: "Boutique hotel owner",
    heroSubtitleCn: "适合设计感房间、品牌故事与高端咨询转化。",
    heroSubtitleEn: "Designed for atmospheric rooms, brand storytelling, and premium enquiries.",
    visualDirectionCn: "低调奢华，强调材质、灯光与场景氛围。",
    visualDirectionEn: "Quiet luxury with emphasis on materiality, lighting, and atmosphere.",
    imageSrc: "/posters/hospitality/boutique-hotel.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-hospitality-03",
    slug: "safari-lodge-website-tanzania",
    nameCn: "Safari Lodge 网站",
    nameEn: "Safari Lodge Website",
    shortNameCn: "Safari Lodge",
    shortNameEn: "Safari Lodge",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "野奢营地 / Safari Lodge 老板",
    targetCustomerEn: "Safari lodge owner",
    heroSubtitleCn: "适合野奢营地、行程展示与 WhatsApp 询单。",
    heroSubtitleEn: "Built for wilderness stays, itineraries, and WhatsApp enquiries.",
    visualDirectionCn: "自然、层次感强、强调景观与营地体验。",
    visualDirectionEn: "Natural, layered, and experience-led with landscape emphasis.",
    imageSrc: "/posters/hospitality/safari-lodge.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-hospitality-04",
    slug: "beach-resort-website-tanzania",
    nameCn: "海滨度假村网站",
    nameEn: "Beach Resort Website",
    shortNameCn: "海滨度假村",
    shortNameEn: "Beach Resort",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "海边度假村 / 海景酒店老板",
    targetCustomerEn: "Beach resort owner",
    heroSubtitleCn: "适合海景、套餐、活动与预订入口。",
    heroSubtitleEn: "Built for sea views, packages, experiences, and booking CTA.",
    visualDirectionCn: "明亮、松弛、带有海岸线呼吸感。",
    visualDirectionEn: "Bright, relaxed, and coastal with a leisure-first rhythm.",
    imageSrc: "/posters/hospitality/resort.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-hospitality-05",
    slug: "serviced-apartment-website-tanzania",
    nameCn: "服务式公寓网站",
    nameEn: "Serviced Apartment Website",
    shortNameCn: "服务式公寓",
    shortNameEn: "Serviced Apartment",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "长租公寓 / 服务式公寓老板",
    targetCustomerEn: "Serviced apartment owner",
    heroSubtitleCn: "适合长住客户、房间详情与 WhatsApp 咨询。",
    heroSubtitleEn: "Built for long-stay guests, room detail, and WhatsApp enquiries.",
    visualDirectionCn: "干净克制，偏居住属性与长期停留。",
    visualDirectionEn: "Clean, calm, and residential with a long-stay rhythm.",
    imageSrc: "/posters/hospitality/apartment-hotel.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-hospitality-06",
    slug: "business-hotel-website-tanzania",
    nameCn: "商务酒店网站",
    nameEn: "Business Hotel Website",
    shortNameCn: "商务酒店",
    shortNameEn: "Business Hotel",
    categoryTagCn: "酒店与旅行",
    categoryTagEn: "Hospitality & Travel",
    targetCustomerCn: "商务酒店 / 城市酒店老板",
    targetCustomerEn: "Business hotel owner",
    heroSubtitleCn: "适合商旅客源、会议设施与直接询价。",
    heroSubtitleEn: "Built for business travellers, meeting facilities, and direct enquiries.",
    visualDirectionCn: "高效、稳重、适合城市商务场景。",
    visualDirectionEn: "Efficient, confident, and built for urban business travel.",
    imageSrc: "/posters/hospitality/resort.png",
    posterLayout: "collage",
    posterTags: [...posterTags.hospitality],
    previewBackground: categoryColor.hospitality,
    moduleTagsCn: [...moduleTags.hospitalityCn],
    moduleTagsEn: [...moduleTags.hospitalityEn],
  }),
  buildTemplate({
    id: "tmpl-food-01",
    slug: "chinese-restaurant-website-tanzania",
    nameCn: "中餐馆网站",
    nameEn: "Chinese Restaurant Website",
    shortNameCn: "中餐馆",
    shortNameEn: "Chinese Restaurant",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "中餐馆老板 / 华人餐饮老板",
    targetCustomerEn: "Chinese restaurant owner",
    heroSubtitleCn: "适合菜单、招牌菜、门店和 WhatsApp 订位。",
    heroSubtitleEn: "Built for menus, signature dishes, branches, and WhatsApp reservations.",
    visualDirectionCn: "热闹但精致，强调菜品与门店真实感。",
    visualDirectionEn: "Warm, premium, and food-first with a strong appetite appeal.",
    imageSrc: "/posters/restaurant/fine-dining-restaurant.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-food-02",
    slug: "hotpot-restaurant-website-tanzania",
    nameCn: "火锅店网站",
    nameEn: "Hotpot Restaurant Website",
    shortNameCn: "火锅店",
    shortNameEn: "Hotpot Restaurant",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "火锅店 / 餐饮连锁老板",
    targetCustomerEn: "Hotpot restaurant owner",
    heroSubtitleCn: "适合套餐、锅底、食材和到店转化。",
    heroSubtitleEn: "Built for set menus, broth options, ingredients, and dine-in conversion.",
    visualDirectionCn: "高热度、强调锅气与社交聚餐场景。",
    visualDirectionEn: "High-energy, social, and built around shared dining moments.",
    imageSrc: "/posters/restaurant/fast-casual-restaurant.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-food-03",
    slug: "bbq-restaurant-website-tanzania",
    nameCn: "烧烤餐厅网站",
    nameEn: "BBQ Restaurant Website",
    shortNameCn: "烧烤餐厅",
    shortNameEn: "BBQ Restaurant",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "烧烤店 / 烤肉店老板",
    targetCustomerEn: "BBQ restaurant owner",
    heroSubtitleCn: "适合菜品、酒水、夜间氛围和订位。",
    heroSubtitleEn: "Built for dishes, drinks, nightlife atmosphere, and reservations.",
    visualDirectionCn: "夜色、烟火气与氛围感并重。",
    visualDirectionEn: "Evening atmosphere with bold food photography and nightlife energy.",
    imageSrc: "/posters/restaurant/rooftop-bar-lounge.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-food-04",
    slug: "seafood-restaurant-website-tanzania",
    nameCn: "海鲜餐厅网站",
    nameEn: "Seafood Restaurant Website",
    shortNameCn: "海鲜餐厅",
    shortNameEn: "Seafood Restaurant",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "海鲜餐厅 / 特色餐饮老板",
    targetCustomerEn: "Seafood restaurant owner",
    heroSubtitleCn: "适合鲜活海鲜、套餐和高客单价转化。",
    heroSubtitleEn: "Built for fresh seafood, premium packages, and high-ticket conversion.",
    visualDirectionCn: "清爽、高级、突出食材新鲜度。",
    visualDirectionEn: "Fresh, premium, and ingredient-led with a clean presentation.",
    imageSrc: "/posters/restaurant/fine-dining-restaurant.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-food-05",
    slug: "bakery-cafe-website-tanzania",
    nameCn: "烘焙咖啡店网站",
    nameEn: "Bakery Cafe Website",
    shortNameCn: "烘焙咖啡店",
    shortNameEn: "Bakery Cafe",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "烘焙店 / 咖啡馆老板",
    targetCustomerEn: "Bakery cafe owner",
    heroSubtitleCn: "适合门店、产品展示、预订与外卖。",
    heroSubtitleEn: "Built for storefront appeal, product display, booking, and takeaway.",
    visualDirectionCn: "轻盈、明亮、注重陈列和日常消费场景。",
    visualDirectionEn: "Light, bright, and product-led for everyday brand appeal.",
    imageSrc: "/posters/restaurant/modern-cafe.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-food-06",
    slug: "dessert-shop-website-tanzania",
    nameCn: "甜品店网站",
    nameEn: "Dessert Shop Website",
    shortNameCn: "甜品店",
    shortNameEn: "Dessert Shop",
    categoryTagCn: "餐饮与食品",
    categoryTagEn: "Food & Beverage",
    targetCustomerCn: "甜品店 / 饮品店老板",
    targetCustomerEn: "Dessert shop owner",
    heroSubtitleCn: "适合饮品、甜品、活动和社媒转化。",
    heroSubtitleEn: "Built for desserts, drinks, events, and social conversion.",
    visualDirectionCn: "更年轻、更社交化、适合拍照传播。",
    visualDirectionEn: "Youthful, social, and designed for shareable visuals.",
    imageSrc: "/posters/restaurant/bubble-tea-dessert-brand.png",
    posterLayout: "menu",
    posterTags: [...posterTags.food],
    previewBackground: categoryColor.food,
    moduleTagsCn: [...moduleTags.foodCn],
    moduleTagsEn: [...moduleTags.foodEn],
  }),
  buildTemplate({
    id: "tmpl-construction-01",
    slug: "construction-company-website-tanzania",
    nameCn: "建筑公司网站",
    nameEn: "Construction Company Website",
    shortNameCn: "建筑公司",
    shortNameEn: "Construction Company",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "总包 / 建筑公司老板",
    targetCustomerEn: "Construction company owner",
    heroSubtitleCn: "适合项目集锦、资质、团队和询价。",
    heroSubtitleEn: "Built for project portfolios, certifications, teams, and enquiries.",
    visualDirectionCn: "稳重、专业、强调规模与可信度。",
    visualDirectionEn: "Serious, professional, and trust-led with strong project credibility.",
    imageSrc: "/posters/construction/premium-construction.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-construction-02",
    slug: "road-contractor-website-tanzania",
    nameCn: "道路施工承包商网站",
    nameEn: "Road Contractor Website",
    shortNameCn: "道路承包商",
    shortNameEn: "Road Contractor",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "道路施工 / 市政承包商",
    targetCustomerEn: "Road contractor",
    heroSubtitleCn: "适合道路项目、设备能力与招标询单。",
    heroSubtitleEn: "Built for road projects, equipment capability, and tender enquiries.",
    visualDirectionCn: "线性、工业化、偏工程现场感。",
    visualDirectionEn: "Linear, industrial, and focused on site delivery.",
    imageSrc: "/posters/construction/road-construction.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-construction-03",
    slug: "earthworks-contractor-website-tanzania",
    nameCn: "土方承包商网站",
    nameEn: "Earthworks Contractor Website",
    shortNameCn: "土方承包商",
    shortNameEn: "Earthworks Contractor",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "土方 / 场平 / 挖填工程老板",
    targetCustomerEn: "Earthworks contractor",
    heroSubtitleCn: "适合土方能力、设备清单和项目沟通。",
    heroSubtitleEn: "Built for earthworks capability, equipment list, and project communication.",
    visualDirectionCn: "重机械、场地感与施工能力展示。",
    visualDirectionEn: "Heavy machinery, site scale, and capability-first presentation.",
    imageSrc: "/posters/construction/earthworks-contractor.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-construction-04",
    slug: "bridge-infrastructure-website-tanzania",
    nameCn: "桥梁基础设施网站",
    nameEn: "Bridge Infrastructure Website",
    shortNameCn: "桥梁基础设施",
    shortNameEn: "Bridge Infrastructure",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "桥梁 / 基础设施承包商",
    targetCustomerEn: "Bridge infrastructure contractor",
    heroSubtitleCn: "适合桥梁项目、质量体系和大型招标。",
    heroSubtitleEn: "Built for bridge projects, quality systems, and large tenders.",
    visualDirectionCn: "大体量、结构化、强调工程等级。",
    visualDirectionEn: "Large-scale, structured, and built for infrastructure trust.",
    imageSrc: "/posters/construction/bridge-infrastructure.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-construction-05",
    slug: "construction-machinery-earthwork-website-tanzania",
    nameCn: "工程机械与土方网站",
    nameEn: "Construction Machinery & Earthwork Website",
    shortNameCn: "工程机械与土方",
    shortNameEn: "Construction Machinery & Earthwork",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "工程机械与土方一体化老板",
    targetCustomerEn: "Construction machinery and earthwork owner",
    heroSubtitleCn: "适合机械清单、能力说明与快速报价。",
    heroSubtitleEn: "Built for machinery lists, capability statements, and quick quotes.",
    visualDirectionCn: "机械化、功能导向、强调交付速度。",
    visualDirectionEn: "Mechanical, functional, and optimized for quick lead capture.",
    imageSrc: "/posters/construction/industrial-construction.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-construction-06",
    slug: "concrete-batching-plant-website-tanzania",
    nameCn: "混凝土搅拌站网站",
    nameEn: "Concrete Batching Plant Website",
    shortNameCn: "混凝土搅拌站",
    shortNameEn: "Concrete Batching Plant",
    categoryTagCn: "建筑与工程",
    categoryTagEn: "Construction & Civil",
    targetCustomerCn: "搅拌站 / 混凝土供应商",
    targetCustomerEn: "Concrete batching plant owner",
    heroSubtitleCn: "适合供应能力、产能、项目覆盖与询价。",
    heroSubtitleEn: "Built for supply capacity, production output, coverage, and enquiries.",
    visualDirectionCn: "工业化、实用主义、强调产能与稳定供应。",
    visualDirectionEn: "Industrial, practical, and built around production scale.",
    imageSrc: "/posters/construction/industrial-construction.png",
    posterLayout: "blueprint",
    posterTags: [...posterTags.construction],
    previewBackground: categoryColor.construction,
    moduleTagsCn: [...moduleTags.constructionCn],
    moduleTagsEn: [...moduleTags.constructionEn],
  }),
  buildTemplate({
    id: "tmpl-materials-01",
    slug: "tile-shop-website-tanzania",
    nameCn: "瓷砖店网站",
    nameEn: "Tile Shop Website",
    shortNameCn: "瓷砖店",
    shortNameEn: "Tile Shop",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "瓷砖店 / 建材店老板",
    targetCustomerEn: "Tile shop owner",
    heroSubtitleCn: "适合产品目录、铺贴案例和报价转化。",
    heroSubtitleEn: "Built for product catalogs, installation examples, and quote conversion.",
    visualDirectionCn: "纹理感强、适合展示材质与花色。",
    visualDirectionEn: "Texture-driven with strong material and finish presentation.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-materials-02",
    slug: "building-materials-shop-website-tanzania",
    nameCn: "建材店网站",
    nameEn: "Building Materials Shop Website",
    shortNameCn: "建材店",
    shortNameEn: "Building Materials Shop",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "建材店 / 综合建材老板",
    targetCustomerEn: "Building materials shop owner",
    heroSubtitleCn: "适合库存、品类、区域配送和报价。",
    heroSubtitleEn: "Built for inventory, categories, delivery coverage, and quotations.",
    visualDirectionCn: "货架感强、信息量大、强调供货能力。",
    visualDirectionEn: "Stock-led, information-rich, and supply-first.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-materials-03",
    slug: "hardware-shop-website-tanzania",
    nameCn: "五金店网站",
    nameEn: "Hardware Shop Website",
    shortNameCn: "五金店",
    shortNameEn: "Hardware Shop",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "五金店 / 工具店老板",
    targetCustomerEn: "Hardware shop owner",
    heroSubtitleCn: "适合工具、配件、库存和询单。",
    heroSubtitleEn: "Built for tools, accessories, inventory, and quote requests.",
    visualDirectionCn: "高密度陈列、强调产品覆盖面。",
    visualDirectionEn: "Dense merchandising with a broad product footprint.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-materials-04",
    slug: "steel-rebar-supplier-website-tanzania",
    nameCn: "钢材与钢筋供应网站",
    nameEn: "Steel & Rebar Supplier Website",
    shortNameCn: "钢材钢筋供应",
    shortNameEn: "Steel & Rebar Supplier",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "钢材 / 钢筋供应商老板",
    targetCustomerEn: "Steel and rebar supplier",
    heroSubtitleCn: "适合规格表、库存、配送和工程询价。",
    heroSubtitleEn: "Built for specs, stock, delivery, and project enquiries.",
    visualDirectionCn: "工业感强，强调吨位、规格与稳定供货。",
    visualDirectionEn: "Industrial, specification-driven, and supply reliable.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-materials-05",
    slug: "sanitary-ware-shop-website-tanzania",
    nameCn: "洁具卫浴店网站",
    nameEn: "Sanitary Ware Shop Website",
    shortNameCn: "卫浴店",
    shortNameEn: "Sanitary Ware Shop",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "卫浴店 / 家装卖场老板",
    targetCustomerEn: "Sanitary ware shop owner",
    heroSubtitleCn: "适合花洒、马桶、洗手盆和套餐报价。",
    heroSubtitleEn: "Built for showers, toilets, basins, and package quotations.",
    visualDirectionCn: "干净、明亮、注重家装陈列。",
    visualDirectionEn: "Clean, bright, and showroom-oriented.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-materials-06",
    slug: "paint-waterproofing-shop-website-tanzania",
    nameCn: "油漆防水店网站",
    nameEn: "Paint & Waterproofing Shop Website",
    shortNameCn: "油漆防水店",
    shortNameEn: "Paint & Waterproofing Shop",
    categoryTagCn: "建材与家居供应",
    categoryTagEn: "Building Materials & Supply",
    targetCustomerCn: "油漆 / 防水材料老板",
    targetCustomerEn: "Paint and waterproofing shop owner",
    heroSubtitleCn: "适合色卡、产品规格、施工建议和报价。",
    heroSubtitleEn: "Built for color charts, product specs, application guidance, and quotes.",
    visualDirectionCn: "强调颜色层次、表面处理和施工感。",
    visualDirectionEn: "Focused on color, surface treatment, and practical application.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.materials],
    previewBackground: categoryColor.materials,
    moduleTagsCn: [...moduleTags.materialsCn],
    moduleTagsEn: [...moduleTags.materialsEn],
  }),
  buildTemplate({
    id: "tmpl-auto-01",
    slug: "tyre-shop-website-tanzania",
    nameCn: "轮胎店网站",
    nameEn: "Tyre Shop Website",
    shortNameCn: "轮胎店",
    shortNameEn: "Tyre Shop",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "轮胎店 / 轮胎批发老板",
    targetCustomerEn: "Tyre shop owner",
    heroSubtitleCn: "适合轮胎型号、安装服务和快速询价。",
    heroSubtitleEn: "Built for tyre sizes, fitting services, and quick enquiries.",
    visualDirectionCn: "快速、强烈、偏门店转化。",
    visualDirectionEn: "Fast, bold, and conversion-first for roadside demand.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-auto-02",
    slug: "auto-parts-website-tanzania",
    nameCn: "汽配店网站",
    nameEn: "Auto Parts Website",
    shortNameCn: "汽配店",
    shortNameEn: "Auto Parts",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "汽配店 / 汽车配件老板",
    targetCustomerEn: "Auto parts shop owner",
    heroSubtitleCn: "适合车型配件、库存查询和 B2B 询价。",
    heroSubtitleEn: "Built for vehicle parts, stock lookup, and B2B quotations.",
    visualDirectionCn: "高密度产品陈列、强调匹配和库存。",
    visualDirectionEn: "Dense product display with stock and fitment emphasis.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-auto-03",
    slug: "garage-repair-shop-website-tanzania",
    nameCn: "汽车修理厂网站",
    nameEn: "Garage Repair Shop Website",
    shortNameCn: "汽车修理厂",
    shortNameEn: "Garage Repair Shop",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "修理厂 / 维修站老板",
    targetCustomerEn: "Garage owner",
    heroSubtitleCn: "适合维修服务、工位展示与到店预约。",
    heroSubtitleEn: "Built for service lists, workshop photos, and booking enquiries.",
    visualDirectionCn: "实用、可信、突出维修能力。",
    visualDirectionEn: "Practical, trusted, and workshop capability-led.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-auto-04",
    slug: "car-wash-website-tanzania",
    nameCn: "洗车店网站",
    nameEn: "Car Wash Website",
    shortNameCn: "洗车店",
    shortNameEn: "Car Wash",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "洗车店 / 汽车美容店老板",
    targetCustomerEn: "Car wash owner",
    heroSubtitleCn: "适合套餐、会员、位置和 WhatsApp 转化。",
    heroSubtitleEn: "Built for packages, memberships, location, and WhatsApp conversion.",
    visualDirectionCn: "轻快、洁净、强调服务效率。",
    visualDirectionEn: "Clean, speedy, and service-efficient.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-auto-05",
    slug: "battery-shop-website-tanzania",
    nameCn: "电瓶店网站",
    nameEn: "Battery Shop Website",
    shortNameCn: "电瓶店",
    shortNameEn: "Battery Shop",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "电瓶店 / 电器配件老板",
    targetCustomerEn: "Battery shop owner",
    heroSubtitleCn: "适合产品型号、安装服务和快速报价。",
    heroSubtitleEn: "Built for product models, installation service, and quick quotes.",
    visualDirectionCn: "高响应、高信任、偏即时成交。",
    visualDirectionEn: "Responsive, trust-first, and built for immediate conversion.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-auto-06",
    slug: "lubricant-shop-website-tanzania",
    nameCn: "润滑油店网站",
    nameEn: "Lubricant Shop Website",
    shortNameCn: "润滑油店",
    shortNameEn: "Lubricant Shop",
    categoryTagCn: "汽修与车务",
    categoryTagEn: "Auto & Mobility",
    targetCustomerCn: "润滑油 / 油品经销老板",
    targetCustomerEn: "Lubricant shop owner",
    heroSubtitleCn: "适合品牌代理、产品规格和批发询单。",
    heroSubtitleEn: "Built for brand agency, product specs, and wholesale enquiries.",
    visualDirectionCn: "专业、稳定、强调品牌与油品等级。",
    visualDirectionEn: "Professional, stable, and product-grade focused.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.auto],
    previewBackground: categoryColor.auto,
    moduleTagsCn: [...moduleTags.autoCn],
    moduleTagsEn: [...moduleTags.autoEn],
  }),
  buildTemplate({
    id: "tmpl-services-01",
    slug: "logistics-customs-clearance-website-tanzania",
    nameCn: "物流清关公司网站",
    nameEn: "Logistics & Customs Clearance Website",
    shortNameCn: "物流清关公司",
    shortNameEn: "Logistics & Customs Clearance",
    categoryTagCn: "贸易与商务服务",
    categoryTagEn: "Trade & Business Services",
    targetCustomerCn: "清关公司 / 物流服务老板",
    targetCustomerEn: "Logistics and customs clearance owner",
    heroSubtitleCn: "适合清关流程、服务范围和快速询单。",
    heroSubtitleEn: "Built for clearance workflow, service scope, and lead generation.",
    visualDirectionCn: "强调效率、流程与可信赖操作。",
    visualDirectionEn: "Process-led, efficient, and trust-heavy.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
  buildTemplate({
    id: "tmpl-services-02",
    slug: "freight-forwarder-website-tanzania",
    nameCn: "货运代理网站",
    nameEn: "Freight Forwarder Website",
    shortNameCn: "货运代理",
    shortNameEn: "Freight Forwarder",
    categoryTagCn: "贸易与商务服务",
    categoryTagEn: "Trade & Business Services",
    targetCustomerCn: "货代 / 订舱老板",
    targetCustomerEn: "Freight forwarder",
    heroSubtitleCn: "适合运输路线、报价单与企业询单。",
    heroSubtitleEn: "Built for shipping lanes, quotations, and B2B enquiries.",
    visualDirectionCn: "航线感、网络感、强调跨境能力。",
    visualDirectionEn: "Route-driven, networked, and cross-border ready.",
    imageSrc: "/posters/logistics.png",
    posterLayout: "route",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
  buildTemplate({
    id: "tmpl-services-03",
    slug: "import-shop-website-tanzania",
    nameCn: "进口商店网站",
    nameEn: "Import Shop Website",
    shortNameCn: "进口商店",
    shortNameEn: "Import Shop",
    categoryTagCn: "贸易与商务服务",
    categoryTagEn: "Trade & Business Services",
    targetCustomerCn: "进口店 / 采购老板",
    targetCustomerEn: "Import shop owner",
    heroSubtitleCn: "适合货源、到港、库存和 WhatsApp 咨询。",
    heroSubtitleEn: "Built for sourcing, arrival, stock, and WhatsApp enquiries.",
    visualDirectionCn: "产品导向、强调到货与供应稳定性。",
    visualDirectionEn: "Product-led with a strong supply and inventory story.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
  buildTemplate({
    id: "tmpl-services-04",
    slug: "wholesale-store-website-tanzania",
    nameCn: "批发店网站",
    nameEn: "Wholesale Store Website",
    shortNameCn: "批发店",
    shortNameEn: "Wholesale Store",
    categoryTagCn: "贸易与商务服务",
    categoryTagEn: "Trade & Business Services",
    targetCustomerCn: "批发店 / 采购批发老板",
    targetCustomerEn: "Wholesale store owner",
    heroSubtitleCn: "适合品类目录、采购价与批量询单。",
    heroSubtitleEn: "Built for catalog breadth, wholesale pricing, and bulk enquiries.",
    visualDirectionCn: "货架感、目录感、信息层级清晰。",
    visualDirectionEn: "Catalog-led with clear inventory hierarchy.",
    imageSrc: "/posters/wholesale.png",
    posterLayout: "catalog",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
  buildTemplate({
    id: "tmpl-services-05",
    slug: "law-firm-website-tanzania",
    nameCn: "律师事务所网站",
    nameEn: "Law Firm Website",
    shortNameCn: "律师事务所",
    shortNameEn: "Law Firm",
    categoryTagCn: "法律与专业服务",
    categoryTagEn: "Professional Services",
    targetCustomerCn: "律师事务所 / 法律顾问老板",
    targetCustomerEn: "Law firm partner",
    heroSubtitleCn: "适合法律专业度、团队信任与咨询转化。",
    heroSubtitleEn: "Built for legal credibility, team trust, and consultation conversion.",
    visualDirectionCn: "克制、权威、强调专业判断。",
    visualDirectionEn: "Restrained, authoritative, and credibility-first.",
    imageSrc: "/posters/services.png",
    posterLayout: "editorial",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
  buildTemplate({
    id: "tmpl-services-06",
    slug: "accounting-tax-website-tanzania",
    nameCn: "会计税务网站",
    nameEn: "Accounting & Tax Website",
    shortNameCn: "会计税务",
    shortNameEn: "Accounting & Tax",
    categoryTagCn: "法律与专业服务",
    categoryTagEn: "Professional Services",
    targetCustomerCn: "会计 / 税务 / 财务顾问老板",
    targetCustomerEn: "Accounting and tax advisor",
    heroSubtitleCn: "适合报税、记账、咨询套餐和企业询单。",
    heroSubtitleEn: "Built for filing, bookkeeping, packages, and corporate enquiries.",
    visualDirectionCn: "稳健、可信、偏企业服务感。",
    visualDirectionEn: "Stable, trustworthy, and corporate-service oriented.",
    imageSrc: "/posters/services.png",
    posterLayout: "editorial",
    posterTags: [...posterTags.services],
    previewBackground: categoryColor.services,
    moduleTagsCn: [...moduleTags.servicesCn],
    moduleTagsEn: [...moduleTags.servicesEn],
  }),
];

export function getTemplateMatrix() {
  return templateMatrix;
}

export function getTemplateMatrixItem(slug: string) {
  return templateMatrix.find((item) => item.slug === slug);
}

export function getTemplateMatrixRoutes() {
  return templateMatrix.map((item) => item.route);
}

export type TemplateDetailProject = {
  cityKeywords: LocalePair[];
  countryKeywords: LocalePair[];
  category: string;
  categoryZh: string;
  description: string;
  descriptionZh: string;
  emailHref: string;
  emailSubject: string;
  imageSrc: string;
  frames: Array<{
    copy: string;
    copyZh: string;
    title: string;
    titleZh: string;
    type: "cover" | "interface" | "workflow" | "signal" | "mobile" | "detail" | "result";
  }>;
  heroSubtitle: string;
  heroSubtitleZh: string;
  keywords: string[];
  keywordsZh: string[];
  moduleTags: string[];
  moduleTagsZh: string[];
  number: string;
  previewBackground: string;
  route: string;
  seoDescription: string;
  seoDescriptionZh: string;
  seoTitle: string;
  seoTitleZh: string;
  service: string;
  serviceZh: string;
  industry: string;
  industryZh: string;
  slug: string;
  targetCustomer: string;
  targetCustomerZh: string;
  title: string;
  titleZh: string;
  visualDirection: string;
  visualDirectionZh: string;
  whatsappHref: string;
  whatsappText: string;
  whatsappTextZh: string;
  year: string;
};

function makeFrames(item: TemplateMatrixRecord): TemplateDetailProject["frames"] {
  return [
    {
      title: item.shortNameEn,
      titleZh: item.shortNameCn,
      copy: item.heroSubtitleEn,
      copyZh: item.heroSubtitleCn,
      type: "cover",
    },
    {
      title: "Target Customer",
      titleZh: "目标客户",
      copy: item.targetCustomerEn,
      copyZh: item.targetCustomerCn,
      type: "interface",
    },
    {
      title: "SEO Keywords",
      titleZh: "SEO 关键词",
      copy: item.keywordsEn.slice(0, 4).join(" / "),
      copyZh: item.keywordsCn.slice(0, 4).join(" / "),
      type: "signal",
    },
    {
      title: "Visual Direction",
      titleZh: "视觉方向",
      copy: item.visualDirectionEn,
      copyZh: item.visualDirectionCn,
      type: "detail",
    },
    {
      title: "Modules",
      titleZh: "页面模块",
      copy: item.moduleTagsEn.join(" / "),
      copyZh: item.moduleTagsCn.join(" / "),
      type: "mobile",
    },
    {
      title: "WhatsApp / Email CTA",
      titleZh: "联系转化 CTA",
      copy: item.whatsappTextEn,
      copyZh: item.whatsappTextCn,
      type: "result",
    },
  ];
}

export function getTemplateDetailProject(slug: string): TemplateDetailProject | undefined {
  const item = getTemplateMatrixItem(slug);

  if (!item) {
    return undefined;
  }

  return {
    cityKeywords: item.cityKeywords,
    countryKeywords: item.countryKeywords,
    category: item.categoryTagEn,
    categoryZh: item.categoryTagCn,
    description: item.seoDescriptionEn,
    descriptionZh: item.seoDescriptionCn,
    emailHref: "#",
    emailSubject: item.emailSubjectEn,
    imageSrc: item.imageSrc,
    frames: makeFrames(item),
    heroSubtitle: item.heroSubtitleEn,
    heroSubtitleZh: item.heroSubtitleCn,
    keywords: item.keywordsEn,
    keywordsZh: item.keywordsCn,
    moduleTags: item.moduleTagsEn,
    moduleTagsZh: item.moduleTagsCn,
    number: item.id.slice(-2),
    previewBackground: item.previewBackground,
    route: item.route,
    seoDescription: item.seoDescriptionEn,
    seoDescriptionZh: item.seoDescriptionCn,
    seoTitle: item.seoTitleEn,
    seoTitleZh: item.seoTitleCn,
    service: "SEO / Web Design / Development",
    serviceZh: "SEO / 网站设计 / 开发",
    industry: item.categoryTagEn,
    industryZh: item.categoryTagCn,
    slug: item.slug,
    targetCustomer: item.targetCustomerEn,
    targetCustomerZh: item.targetCustomerCn,
    title: item.nameEn,
    titleZh: item.nameCn,
    visualDirection: item.visualDirectionEn,
    visualDirectionZh: item.visualDirectionCn,
    whatsappHref: "#",
    whatsappText: item.whatsappTextEn,
    whatsappTextZh: item.whatsappTextCn,
    year: "2026",
  };
}
