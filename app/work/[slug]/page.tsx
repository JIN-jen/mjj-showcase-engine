import { SimplePlaceholderPage } from "@/components/pages/simple-placeholder-page";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  return (
    <SimplePlaceholderPage
      eyebrow="[Work Detail Template]"
      title={`${slug} / detail structure reserved.`}
      description="Future full-screen hero media, metadata strip, value narrative, and next-project transition fit inside this page template."
    />
  );
}
