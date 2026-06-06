export type ProjectIndexItem = {
  slug: string;
  number: string;
  title: string;
  category: string;
  service: string;
  status: string;
  previewLabel: string;
  previewBackground: string;
  offset: "none" | "sm" | "md";
};

export const projectIndexItems: ProjectIndexItem[] = [
  {
    slug: "tiih-intelligence-terminal",
    number: "01",
    title: "TIIH Intelligence Terminal",
    category: "Platform",
    service: "System Interface",
    status: "2026 / Active",
    previewLabel: "Terminal preview surface reserved for future live interface media.",
    previewBackground:
      "linear-gradient(135deg, rgba(16,16,16,1) 0%, rgba(34,34,34,1) 34%, rgba(98,109,125,0.9) 100%)",
    offset: "none",
  },
  {
    slug: "tz-helper-erp",
    number: "02",
    title: "TZ Helper ERP",
    category: "Operations",
    service: "ERP Layer",
    status: "2026 / Placeholder",
    previewLabel: "ERP preview surface reserved for future workflow boards and operational states.",
    previewBackground:
      "linear-gradient(135deg, rgba(11,11,11,1) 0%, rgba(30,30,30,1) 38%, rgba(123,102,92,0.82) 100%)",
    offset: "sm",
  },
  {
    slug: "ai-landing-page-system",
    number: "03",
    title: "AI Landing Page System",
    category: "Service",
    service: "Delivery System",
    status: "2026 / Placeholder",
    previewLabel: "Landing-system preview surface reserved for future conversion-page media.",
    previewBackground:
      "linear-gradient(135deg, rgba(8,8,8,1) 0%, rgba(22,22,22,1) 40%, rgba(176,196,222,0.85) 100%)",
    offset: "md",
  },
  {
    slug: "construction-company-showcase",
    number: "04",
    title: "Construction Company Showcase",
    category: "Portfolio",
    service: "Brand Website",
    status: "2026 / Placeholder",
    previewLabel: "Construction showcase preview surface reserved for future project photography and layout states.",
    previewBackground:
      "linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(20,20,20,1) 35%, rgba(93,86,73,0.92) 100%)",
    offset: "none",
  },
  {
    slug: "hotel-landing-page-template",
    number: "05",
    title: "Hotel Landing Page Template",
    category: "Template",
    service: "Hospitality",
    status: "2026 / Placeholder",
    previewLabel: "Hospitality preview surface reserved for future stills, room media, and booking-entry states.",
    previewBackground:
      "linear-gradient(135deg, rgba(14,14,14,1) 0%, rgba(26,26,26,1) 42%, rgba(121,128,138,0.86) 100%)",
    offset: "sm",
  },
  {
    slug: "parts-quote-ocr-tool",
    number: "06",
    title: "Parts Quote OCR Tool",
    category: "Utility",
    service: "AI Extraction",
    status: "2026 / Placeholder",
    previewLabel: "OCR preview surface reserved for future document, parsing, and quoting interface states.",
    previewBackground:
      "linear-gradient(135deg, rgba(9,9,9,1) 0%, rgba(19,19,19,1) 45%, rgba(124,115,98,0.82) 100%)",
    offset: "md",
  },
  {
    slug: "industrial-signal-dashboard",
    number: "07",
    title: "Industrial Signal Dashboard",
    category: "Intelligence",
    service: "Monitoring Layer",
    status: "2026 / Placeholder",
    previewLabel: "Signal-dashboard preview surface reserved for future chart, map, and system-glow overlays.",
    previewBackground:
      "linear-gradient(135deg, rgba(7,7,7,1) 0%, rgba(18,18,18,1) 34%, rgba(88,107,131,0.88) 100%)",
    offset: "none",
  },
  {
    slug: "machinery-rental-system",
    number: "08",
    title: "Machinery Rental System",
    category: "Operations",
    service: "Booking Layer",
    status: "2026 / Placeholder",
    previewLabel: "Rental-system preview surface reserved for future fleet, booking, and dispatch media states.",
    previewBackground:
      "linear-gradient(135deg, rgba(9,9,9,1) 0%, rgba(22,22,22,1) 35%, rgba(140,120,92,0.82) 100%)",
    offset: "sm",
  },
  {
    slug: "tanzania-business-leads",
    number: "09",
    title: "Tanzania Business Leads",
    category: "Intelligence",
    service: "Data Workflow",
    status: "2026 / Placeholder",
    previewLabel: "Business-leads preview surface reserved for future lead capture, enrichment, and archive states.",
    previewBackground:
      "linear-gradient(135deg, rgba(8,8,8,1) 0%, rgba(18,18,18,1) 36%, rgba(98,120,106,0.84) 100%)",
    offset: "md",
  },
  {
    slug: "ai-media-workflow",
    number: "10",
    title: "AI Media Workflow",
    category: "Media",
    service: "Production System",
    status: "2026 / Placeholder",
    previewLabel: "Media-workflow preview surface reserved for future shot lists, assets, and publishing sequences.",
    previewBackground:
      "linear-gradient(135deg, rgba(11,11,11,1) 0%, rgba(25,25,25,1) 36%, rgba(119,116,136,0.82) 100%)",
    offset: "none",
  },
];
