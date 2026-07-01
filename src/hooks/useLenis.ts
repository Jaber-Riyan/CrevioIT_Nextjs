import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function scrollToHash(hash: string, attempts = 90) {
  const target = hash ? document.querySelector(hash) : null;

  if (target) {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -90 });
    } else {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  // The target may not be mounted yet (e.g. mid page transition) — retry briefly.
  if (attempts > 0) {
    requestAnimationFrame(() => scrollToHash(hash, attempts - 1));
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
