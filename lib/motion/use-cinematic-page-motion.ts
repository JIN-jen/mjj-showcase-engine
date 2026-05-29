"use client";

import { RefObject, useEffect } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/motion/gsap";

export function useCinematicPageMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    ensureGsapPlugins();

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal='section']").forEach((section) => {
        const animatedChildren = section.querySelectorAll<HTMLElement>("[data-reveal]");

        gsap.set(animatedChildren, {
          opacity: 0,
          y: 60,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
          defaults: {
            duration: 0.85,
            ease: "power3.out",
          },
        }).to(animatedChildren, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          clearProps: "opacity,transform",
        });
      });

      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            clipPath: "inset(0 0 100% 0)",
            y: 40,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [rootRef]);
}
