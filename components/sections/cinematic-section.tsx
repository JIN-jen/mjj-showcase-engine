type CinematicSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  statement: string;
  description: string;
  aside?: string[];
  cards?: string[];
  accentLabel?: string;
  hero?: boolean;
};

export function CinematicSection({
  id,
  eyebrow,
  title,
  statement,
  description,
  aside,
  cards,
  accentLabel,
  hero = false,
}: CinematicSectionProps) {
  return (
    <section
      id={id}
      data-reveal="section"
      className="section-frame min-h-screen bg-transparent"
    >
      <div className="cinematic-container section-spacing flex min-h-screen flex-col justify-between gap-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
          <div className="space-y-8">
            <div className="space-y-5" data-reveal="copy">
              <p className="eyebrow">{eyebrow}</p>
              <div className="overflow-hidden">
                <h2 className={hero ? "display-heading" : "statement-heading"}>{title}</h2>
              </div>
              <div className="max-w-5xl overflow-hidden">
                <p className="statement-heading text-balance text-ink/92">{statement}</p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-ink-muted">{description}</p>
            </div>

            {cards ? (
              <div
                data-reveal="cards"
                className="meta-grid grid-cols-1 md:grid-cols-3"
              >
                {cards.map((card) => (
                  <div
                    key={card}
                    className="glow-panel flex min-h-48 flex-col justify-between gap-8 p-6"
                  >
                    <p className="eyebrow">[Reserved Surface]</p>
                    <p className="text-lg leading-7 text-ink">{card}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="glow-panel mask-reveal min-h-64 p-6" data-reveal="panel">
              <p className="eyebrow">[Atmosphere / Media Reserve]</p>
              <div className="mt-8 space-y-4 text-sm leading-6 text-ink-muted">
                {aside?.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>

            {accentLabel ? (
              <div className="space-y-3" data-reveal="accent">
                <div className="glow-line" />
                <p className="eyebrow text-ink">{accentLabel}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
