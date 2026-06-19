import type { MetadataRoute } from "next";
import { getTemplateMatrix } from "@/data/template-matrix";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const templates = getTemplateMatrix().map((item) => ({
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
    priority: 0.8,
    url: `${siteUrl}${item.route}`,
  }));

  return [
    {
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 1,
      url: `${siteUrl}/`,
    },
    ...templates,
  ];
}
