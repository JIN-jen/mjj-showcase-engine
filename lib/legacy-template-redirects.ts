export const legacyTemplateRedirects: Record<string, string> = {
  agriculture: "/",
  construction: "/templates/construction-company-website-tanzania",
  hospitality: "/templates/luxury-hotel-website-tanzania",
  "import-wholesale": "/templates/wholesale-store-website-tanzania",
  logistics: "/templates/logistics-customs-clearance-website-tanzania",
  mining: "/templates/construction-machinery-earthwork-website-tanzania",
  "professional-services": "/templates/law-firm-website-tanzania",
  restaurant: "/templates/chinese-restaurant-website-tanzania",
};

export function getLegacyTemplateRedirect(slug: string) {
  return legacyTemplateRedirects[slug] ?? "/";
}
