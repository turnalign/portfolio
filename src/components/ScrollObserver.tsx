"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const HERO_DURATION = 1250;
    const startTime = Date.now();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, HERO_DURATION - elapsed);
            const el = entry.target as HTMLElement;
            if (remaining > 0) {
              el.style.transitionDelay = `${remaining}ms`;
            }
            el.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}