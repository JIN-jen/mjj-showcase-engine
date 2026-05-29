import { PageFrame } from "@/components/layout/page-frame";
import { SiteShell } from "@/components/layout/site-shell";

type SimplePlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SimplePlaceholderPage({
  eyebrow,
  title,
  description,
}: SimplePlaceholderPageProps) {
  return (
    <SiteShell>
      <PageFrame eyebrow={eyebrow} title={title} description={description} />
    </SiteShell>
  );
}
