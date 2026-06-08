import type { ObysLabItem } from "@/components/pages/obys-lab-data";

type ObysProjectStillProps = {
  frameIndex?: number;
  item: ObysLabItem;
  mode: "index" | "detail";
};

export function ObysProjectStill({ frameIndex = 0, item, mode }: ObysProjectStillProps) {
  const frame = (frameIndex % 6) + 1;

  return (
    <div
      className={`obys-project-still obys-project-still--${mode} obys-project-still--${item.slug} obys-project-still--frame-${frame}`}
      aria-hidden="true"
    >
      <div className="obys-project-still__desktop-layer desktop-layer">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="obys-project-still__mobile-layer mobile-layer">
        <span />
        <span />
        <span />
      </div>
      <div className="obys-project-still__fragment-layer fragment-layer">
        <span />
        <span />
      </div>
      <div className="obys-project-still__support-layer support-layer">
        <b>{item.number}</b>
        <strong>{item.title}</strong>
        <span>{item.category}</span>
      </div>
    </div>
  );
}
