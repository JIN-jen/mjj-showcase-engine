"use client";

import type { ProjectIndexItem } from "@/lib/site-data/project-index";

type ProjectPreviewPanelProps = {
  project: ProjectIndexItem;
};

export function ProjectPreviewPanel({ project }: ProjectPreviewPanelProps) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div
        className="project-preview-panel glow-panel relative min-h-[34rem] overflow-hidden p-4 md:p-5"
        data-index-reveal="preview"
      >
        <div
          className="project-preview-media absolute inset-0 opacity-95"
          style={{
            background: project.previewBackground,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(176,196,222,0.22),transparent_34%)]" />

        <div className="relative z-10 flex min-h-[32rem] flex-col justify-between">
          <div className="space-y-4">
            <p className="eyebrow text-white/80">[Featured Preview]</p>
            <div className="overflow-hidden">
              <p
                className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-[-0.06em] text-white"
                data-preview-title
              >
                {project.title}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 border-t border-white/14 pt-4">
              <div>
                <p className="eyebrow text-white/60">[Category]</p>
                <p className="mt-2 text-sm text-white/88">{project.category}</p>
              </div>
              <div>
                <p className="eyebrow text-white/60">[Service]</p>
                <p className="mt-2 text-sm text-white/88">{project.service}</p>
              </div>
              <div>
                <p className="eyebrow text-white/60">[State]</p>
                <p className="mt-2 text-sm text-white/88">{project.status}</p>
              </div>
              <div>
                <p className="eyebrow text-white/60">[Route]</p>
                <p className="mt-2 text-sm text-white/88">/work/{project.slug}</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="eyebrow text-white/60">[Preview Surface]</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
                {project.previewLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
