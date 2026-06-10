import Link from "next/link";
import { ClientIntakeForm } from "@/components/intake/ClientIntakeForm";

type BriefPageProps = {
  searchParams?: Promise<{
    industry?: string | string[];
    template?: string | string[];
  }>;
};

function getSingleParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function BriefPage({ searchParams }: BriefPageProps) {
  const params = await searchParams;
  const initialIndustry = getSingleParam(params?.industry);
  const initialTemplate = getSingleParam(params?.template);

  return (
    <main className="brief-page">
      <header className="brief-page__header">
        <Link href="/obys-lab" aria-label="Back to work">
          TIIH
        </Link>
        <nav aria-label="Brief navigation">
          <Link href="/obys-lab">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <ClientIntakeForm initialIndustry={initialIndustry} initialTemplate={initialTemplate} />

      <style>{`
        .brief-page {
          min-height: 100vh;
          background: #f8f6ef;
          color: #111;
          padding: clamp(5.5rem, 10vh, 8rem) 0 clamp(4rem, 9vh, 7rem);
        }

        .brief-page__header {
          position: fixed;
          left: clamp(1rem, 2.2vw, 2rem);
          right: clamp(1rem, 2.2vw, 2rem);
          top: clamp(0.9rem, 1.6vw, 1.55rem);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #111;
          font-size: clamp(0.56rem, 0.66vw, 0.72rem);
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .brief-page__header a {
          color: inherit;
          text-decoration: none;
        }

        .brief-page__header nav {
          display: flex;
          gap: clamp(0.78rem, 1.4vw, 1.35rem);
        }
      `}</style>
    </main>
  );
}
