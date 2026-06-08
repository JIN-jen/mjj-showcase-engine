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
      <div className="obys-project-still__photo" />
      <div className="obys-project-still__screen">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="obys-project-still__mast">
        <b>{item.number}</b>
        <strong>{item.title}</strong>
      </div>
      <div className="obys-project-still__caption">
        <span>{item.category}</span>
        <span>{item.service}</span>
      </div>
    </div>
  );
}
