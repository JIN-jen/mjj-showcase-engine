import { notFound, redirect } from "next/navigation";
import {
  WorkDetailReelPage,
} from "@/components/pages/work-detail-reel-page";
import { getWorkDetailProject } from "@/lib/work-detail-projects";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  if (slug === "hospitality") {
    redirect("/obys-lab/work/hospitality");
  }

  const project = getWorkDetailProject(slug);

  if (!project) {
    notFound();
  }

  return <WorkDetailReelPage project={project} />;
}
