import { notFound } from "next/navigation";
import { getWorkDetailProject } from "@/app/work/[slug]/page";
import { obysLabItems } from "@/components/pages/obys-lab-data";
import { ObysLabWorkPage } from "@/components/pages/obys-lab-work-page";
import { WorkDetailReelPage } from "@/components/pages/work-detail-reel-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "hospitality") {
    const project = getWorkDetailProject(slug);

    if (!project) {
      notFound();
    }

    return <WorkDetailReelPage project={project} />;
  }

  const item = obysLabItems.find((labItem) => labItem.slug === slug);

  if (!item) {
    notFound();
  }

  return <ObysLabWorkPage item={item} />;
}
