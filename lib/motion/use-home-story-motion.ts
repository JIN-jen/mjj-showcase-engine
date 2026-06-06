"use client";

import { RefObject, useEffect } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/motion/gsap";

export function useHomeStoryMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    ensureGsapPlugins();

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-home-hero]");
      const revealGroups = gsap.utils.toArray<HTMLElement>("[data-home-reveal]");
      const visualPlanes = gsap.utils.toArray<HTMLElement>("[data-home-visual]");
      const workItems = gsap.utils.toArray<HTMLElement>("[data-home-work]");
      const capabilityItems = gsap.utils.toArray<HTMLElement>("[data-home-capability]");

      gsap.set(heroItems, { opacity: 0, y: 48 });
      gsap.timeline({ defaults: { duration: 0.95, ease: "power3.out" } }).to(
        heroItems,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          clearProps: "opacity,transform",
        },
      );

      revealGroups.forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>("[data-home-item]");

        if (children.length === 0) {
          return;
        }

        gsap.set(children, { opacity: 0, y: 56 });
        gsap.to(children, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 72%",
            once: true,
          },
          clearProps: "opacity,transform",
        });
      });

      visualPlanes.forEach((plane) => {
        const media = plane.querySelector<HTMLElement>("[data-home-media]");

        gsap.fromTo(
          plane,
          { clipPath: "inset(18% 0 18% 0)" },
          {
            clipPath: "inset(0% 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: plane,
              start: "top 92%",
              end: "bottom 45%",
              scrub: 0.8,
            },
          },
        );

        if (media) {
          gsap.fromTo(
            media,
            { yPercent: -6, scale: 1.08 },
            {
              yPercent: 6,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: plane,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.9,
              },
            },
          );
        }
      });

      workItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 70,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
              once: true,
            },
            delay: index * 0.04,
            clearProps: "opacity,transform",
          },
        );
      });

      capabilityItems.forEach((item) => {
        const line = item.querySelector<HTMLElement>("[data-home-capability-line]");

        gsap.fromTo(
          item,
          { opacity: 0.28, x: -28 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
            clearProps: "opacity,transform",
          },
        );

        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                once: true,
              },
              clearProps: "transform",
            },
          );
        }
      });
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [rootRef]);
}
