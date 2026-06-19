import { redirect } from "next/navigation";
import { getLegacyTemplateRedirect } from "@/lib/legacy-template-redirects";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  redirect(getLegacyTemplateRedirect(slug));
}
