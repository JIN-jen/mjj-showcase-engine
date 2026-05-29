"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/motion/gsap";

export function HomeLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setHidden(true),
    });

    timeline
      .fromTo(
        "[data-loader-line]",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.7, stagger: 0.08 },
      )
      .fromTo(
        "[data-loader-copy]",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8 },
        "-=0.45",
      )
      .to(".tiih-loader", {
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.25,
      });

    return () => {
      timeline.kill();
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="tiih-loader fixed inset-0 z-50 flex items-end bg-black">
      <div className="cinematic-container flex min-h-screen w-full flex-col justify-between py-8">
        <div className="space-y-3">
          <div data-loader-line className="h-px w-full bg-white/20" />
          <div data-loader-line className="h-px w-3/4 bg-[var(--glow-strong)]" />
        </div>
        <div className="space-y-4 overflow-hidden pb-8">
          <p data-loader-copy className="eyebrow">
            [Loader / Industrial Boot Sequence Placeholder]
          </p>
          <p
            data-loader-copy
            className="display-heading max-w-5xl text-[clamp(3.5rem,10vw,9rem)]"
          >
            TIIH
          </p>
        </div>
      </div>
    </div>
  );
}
