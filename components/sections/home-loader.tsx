"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/motion/gsap";

export function HomeLoader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setHidden(true),
    });
    const counter = { value: 0 };

    timeline
      .set("[data-loader-curtain]", {
        scaleY: 0,
        transformOrigin: "bottom center",
      })
      .to(counter, {
        value: 100,
        duration: 1.45,
        ease: "power2.out",
        onUpdate: () => setProgress(Math.round(counter.value)),
      }, 0)
      .fromTo(
        "[data-loader-kicker]",
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.55 },
        0.08,
      )
      .fromTo(
        "[data-loader-copy]",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.08 },
        0.2,
      )
      .fromTo(
        "[data-loader-line]",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.7, stagger: 0.08 },
        0.55,
      )
      .to(
        "[data-loader-copy]",
        {
          yPercent: -115,
          stagger: 0.05,
          duration: 0.5,
          ease: "power4.in",
        },
        1.15,
      )
      .to(
        "[data-loader-kicker], [data-loader-line], [data-loader-percent]",
        {
          opacity: 0,
          duration: 0.25,
        },
        1.2,
      )
      .to(
        "[data-loader-curtain]",
        {
          scaleY: 1,
          duration: 0.48,
          ease: "power4.inOut",
        },
        1.18,
      )
      .to(".tiih-loader", {
        autoAlpha: 0,
        duration: 0.12,
      });

    return () => {
      timeline.kill();
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="tiih-loader fixed inset-0 z-50 bg-black">
      <div data-loader-curtain className="absolute inset-0 bg-[#030303]" />
      <div className="cinematic-container flex min-h-screen w-full flex-col justify-between py-6 md:py-8">
        <div className="flex items-center justify-between">
          <p data-loader-kicker className="eyebrow text-white/68">
            [Loader / Boot Sequence]
          </p>
          <p data-loader-percent className="eyebrow text-white/68">
            {String(progress).padStart(2, "0")}%
          </p>
        </div>
        <div className="space-y-4 overflow-hidden">
          <p
            data-loader-percent
            className="loader-counter text-[clamp(4.5rem,15vw,14rem)] leading-none tracking-[-0.08em] text-white/16"
          >
            {String(progress).padStart(2, "0")}
          </p>
          <div className="space-y-1">
            <p
              data-loader-copy
              className="display-heading max-w-5xl text-[clamp(4rem,12vw,10rem)]"
            >
              TIIH
            </p>
            <p
              data-loader-copy
              className="text-[clamp(1.6rem,3vw,3rem)] leading-[0.92] tracking-[-0.05em] text-white/90"
            >
              Industrial intelligence
            </p>
            <p
              data-loader-copy
              className="text-[clamp(1.15rem,2vw,1.7rem)] leading-[0.98] tracking-[-0.04em] text-white/58"
            >
              Construction. Systems. Business.
            </p>
          </div>
        </div>
        <div className="space-y-3 pb-1">
          <div data-loader-line className="h-px w-full bg-white/16" />
          <div data-loader-line className="h-px w-2/3 bg-[var(--glow-strong)]" />
        </div>
      </div>
    </div>
  );
}
