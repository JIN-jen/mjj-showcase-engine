import { notFound } from "next/navigation";
import { obysLabItems } from "@/components/pages/obys-lab-data";
import { ObysLabWorkPage } from "@/components/pages/obys-lab-work-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const item = obysLabItems.find((labItem) => labItem.slug === slug);

  if (!item) {
    notFound();
  }

  return <ObysLabWorkPage item={item} />;
}
