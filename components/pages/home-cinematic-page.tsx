"use client";

import { useRef } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { CinematicSection } from "@/components/sections/cinematic-section";
import { HomeLoader } from "@/components/sections/home-loader";
import { useCinematicPageMotion } from "@/lib/motion/use-cinematic-page-motion";

const cards = {
  liveProjects: [
    "[Project Placeholder / Future Case Study]",
    "[Project Placeholder / Video Block]",
    "[Project Placeholder / Landing Page Detail]",
  ],
  templates: [
    "[Template Placeholder / Construction]",
    "[Template Placeholder / Hospitality]",
    "[Template Placeholder / Industrial Supply]",
  ],
  tools: [
    "[Tool Placeholder / Future Interface]",
    "[Tool Placeholder / System Entry Point]",
    "[Tool Placeholder / Operator Utility]",
  ],
};

export function HomeCinematicPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useCinematicPageMotion(pageRef);

  return (
    <SiteShell>
      <HomeLoader />
      <div ref={pageRef}>
        <CinematicSection
          id="hero"
          eyebrow="[Loader / Hero]"
          title="TIIH"
          statement="[Hero headline placeholder]"
          description="Cinematic front-door structure reserved for TIIH identity reveal, future hero statement, and initial system prompt."
          aside={[
            "Future WebGL layer placeholder",
            "Future particle engine placeholder",
            "Hero media placeholder",
          ]}
          accentLabel="[Scroll to enter]"
          hero
        />

        <CinematicSection
          id="identity"
          eyebrow="[About / Identity]"
          title="Identity"
          statement="[Founder context / brand identity placeholder]"
          description="Reserved for the Jin and TIIH identity layer. This section keeps the editorial pacing and split-layout logic without injecting fake biographical copy."
          aside={[
            "Personal narrative placeholder",
            "Brand definition placeholder",
            "Bilingual support placeholder",
          ]}
        />

        <CinematicSection
          id="projects"
          eyebrow="[Live Projects]"
          title="Projects"
          statement="[Project showcase placeholder]"
          description="Reserved for real work only. Cards, motion states, media reveals, and future route connections exist here as structural placeholders."
          cards={cards.liveProjects}
          accentLabel="[Future case-study transitions]"
        />

        <CinematicSection
          id="templates"
          eyebrow="[Industry Templates]"
          title="Templates"
          statement="[Industry template placeholder]"
          description="Reserved for reusable vertical landing-page structures. Grid pacing and hover surfaces are prepared without introducing fake sectors or fabricated outcomes."
          cards={cards.templates}
          accentLabel="[Future template routes]"
        />

        <CinematicSection
          id="ecosystem"
          eyebrow="[Tool Ecosystem]"
          title="Tools"
          statement="[Tool ecosystem placeholder]"
          description="Reserved for system entry points, product previews, and future operator tools. The surface language is restrained and modular so the ecosystem can scale."
          cards={cards.tools}
          accentLabel="[Future tool landing pages]"
        />

        <CinematicSection
          id="vision"
          eyebrow="[Vision]"
          title="Vision"
          statement="[Industrial intelligence vision placeholder]"
          description="Reserved for a large-format ideological statement and future atmospheric layer. ScrollTrigger pacing and visual breathing room are already in place."
          aside={[
            "Future cinematic beam layer",
            "Future map / landscape media placeholder",
            "Future statement sequence placeholder",
          ]}
        />

        <CinematicSection
          id="contact"
          eyebrow="[Contact / Enter the System]"
          title="Enter"
          statement="[Contact gateway placeholder]"
          description="Reserved for direct actions only: email, WhatsApp, access request, or a minimal form. The final section stays declarative and sparse."
          aside={[
            "Future contact actions placeholder",
            "Future CTA routing placeholder",
            "Future language toggle placeholder",
          ]}
          accentLabel="[System access pending]"
        />
      </div>
    </SiteShell>
  );
}
