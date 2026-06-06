"use client";

import { RefObject, useEffect } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/motion/gsap";

type SetActiveSlug = (slug: string) => void;

export function useProjectIndexMotion(
  rootRef: RefObject<HTMLElement | null>,
  setActiveSlug: SetActiveSlug,
) {
  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    ensureGsapPlugins();

    const context = gsap.context(() => {
      const cleanupCallbacks: Array<() => void> = [];
      const introItems = gsap.utils.toArray<HTMLElement>("[data-index-reveal='intro']");
      const outroItems = gsap.utils.toArray<HTMLElement>("[data-index-reveal='outro']");
      const previewPanel = document.querySelector<HTMLElement>(".project-preview-panel");
      const previewMedia = document.querySelector<HTMLElement>(".project-preview-media");
      const rows = gsap.utils.toArray<HTMLElement>("[data-project-row]");
      const previewTitle = document.querySelector<HTMLElement>("[data-preview-title]");
      const marquees = gsap.utils.toArray<HTMLElement>("[data-marquee]");

      gsap.set(introItems, { opacity: 0, y: 36 });
      gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } }).to(introItems, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        clearProps: "opacity,transform",
      });

      gsap.set(rows, { opacity: 0, y: 34 });
      gsap.to(rows, {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.86,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rows[0],
          start: "top 92%",
          once: true,
        },
        clearProps: "opacity,transform",
      });

      rows.forEach((row) => {
        const slug = row.dataset.projectSlug;

        if (!slug) {
          return;
        }

        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSlug(slug),
          onEnterBack: () => setActiveSlug(slug),
        });

        const handleEnter = () => {
          gsap.to(row, {
            x: 14,
            duration: 0.32,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(row, {
            x: 0,
            duration: 0.32,
            ease: "power3.out",
          });
        };

        row.addEventListener("mouseenter", handleEnter);
        row.addEventListener("mouseleave", handleLeave);
        cleanupCallbacks.push(() => {
          row.removeEventListener("mouseenter", handleEnter);
          row.removeEventListener("mouseleave", handleLeave);
        });
      });

      marquees.forEach((marquee, index) => {
        const direction = marquee.dataset.marquee === "reverse" ? -1 : 1;
        const distance = index === 0 ? 180 : 260;
        gsap.to(marquee, {
          x: direction * distance,
          ease: "none",
          scrollTrigger: {
            trigger: marquee,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      if (previewPanel && previewMedia) {
        const setX = gsap.quickTo(previewMedia, "x", {
          duration: 0.55,
          ease: "power3.out",
        });
        const setY = gsap.quickTo(previewMedia, "y", {
          duration: 0.55,
          ease: "power3.out",
        });

        const movePreview = (event: PointerEvent) => {
          const bounds = previewPanel.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 22;
          const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 22;
          setX(x);
          setY(y);
        };

        const resetPreview = () => {
          setX(0);
          setY(0);
        };

        previewPanel.addEventListener("pointermove", movePreview);
        previewPanel.addEventListener("pointerleave", resetPreview);
        cleanupCallbacks.push(() => {
          previewPanel.removeEventListener("pointermove", movePreview);
          previewPanel.removeEventListener("pointerleave", resetPreview);
        });

        ScrollTrigger.create({
          trigger: previewPanel,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          animation: gsap.fromTo(
            previewMedia,
            { scale: 1.06 },
            { scale: 1, ease: "none" },
          ),
        });

        if (previewTitle) {
          ScrollTrigger.create({
            trigger: previewPanel,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            animation: gsap.fromTo(
              previewTitle,
              { y: 18 },
              { y: -10, ease: "none" },
            ),
          });
        }
      }

      gsap.set(outroItems, { opacity: 0, y: 40 });
      gsap.to(outroItems, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: outroItems[0],
          start: "top 84%",
          once: true,
        },
        clearProps: "opacity,transform",
      });

      return () => {
        cleanupCallbacks.forEach((callback) => callback());
      };
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [rootRef, setActiveSlug]);
}
