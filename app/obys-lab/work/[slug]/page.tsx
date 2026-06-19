import { redirect } from "next/navigation";
import { getLegacyTemplateRedirect } from "@/lib/legacy-template-redirects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  redirect(getLegacyTemplateRedirect(slug));
}
