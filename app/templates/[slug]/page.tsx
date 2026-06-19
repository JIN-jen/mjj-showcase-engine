import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailReelPage, type IndustryTemplate } from "@/components/pages/work-detail-reel-page";
import {
  getTemplateDetailProject,
  getTemplateMatrix,
  type TemplateDetailProject,
} from "@/data/template-matrix";
import { contactConfig, siteUrl, getEmailHref, getWhatsappHref } from "@/lib/site-config";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function toIndustryTemplate(project: TemplateDetailProject): IndustryTemplate {
  return {
    ...project,
    emailHref: contactConfig.email ? getEmailHref(project.emailSubject) : "",
    frames: project.frames,
    whatsappHref: contactConfig.whatsapp ? getWhatsappHref(project.whatsappText) : "",
  } as IndustryTemplate;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getTemplateDetailProject(slug);

  if (!project) {
    return {};
  }

  return {
    alternates: {
      canonical: `${siteUrl}/templates/${project.slug}`,
    },
    description: project.seoDescription,
    openGraph: {
      description: project.seoDescription,
      images: [
        {
          alt: project.title,
          url: `${siteUrl}${project.imageSrc}`,
        },
      ],
      title: project.seoTitle,
      type: "website",
      url: `${siteUrl}/templates/${project.slug}`,
    },
    title: project.seoTitle,
    twitter: {
      card: "summary_large_image",
      description: project.seoDescription,
      title: project.seoTitle,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getTemplateDetailProject(slug);

  if (!project) {
    notFound();
  }

  const detailProject = toIndustryTemplate(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    description: project.seoDescription,
    name: project.seoTitle,
    url: `${siteUrl}/templates/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkDetailReelPage project={detailProject} />
    </>
  );
}

export function generateStaticParams() {
  return getTemplateMatrix().map((item) => ({
    slug: item.slug,
  }));
}
