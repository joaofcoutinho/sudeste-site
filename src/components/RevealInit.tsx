"use client";

import { useEffect } from "react";

/**
 * Scroll reveal — geometry-based (matches the original app.js behaviour).
 * Adds `.in` to any `.reveal` element once it enters the viewport.
 */
export default function RevealInit() {
  useEffect(() => {
    const revealCheck = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -40) el.classList.add("in");
      });
    };

    revealCheck();
    window.addEventListener("scroll", revealCheck, { passive: true });
    window.addEventListener("resize", revealCheck);
    window.addEventListener("load", revealCheck);

    // failsafe ticks: guarantee content shows even where scroll never fires
    let n = 0;
    const iv = setInterval(() => {
      revealCheck();
      if (++n > 16) clearInterval(iv);
    }, 200);

    return () => {
      window.removeEventListener("scroll", revealCheck);
      window.removeEventListener("resize", revealCheck);
      window.removeEventListener("load", revealCheck);
      clearInterval(iv);
    };
  }, []);

  return null;
}
