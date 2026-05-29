type PageFrameProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageFrame({ eyebrow, title, description }: PageFrameProps) {
  return (
    <section className="section-frame min-h-[calc(100vh-4.5rem)]">
      <div className="cinematic-container section-spacing flex min-h-[calc(100vh-4.5rem)] flex-col justify-end gap-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="statement-heading max-w-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-7 text-ink-muted">{description}</p>
      </div>
    </section>
  );
}
