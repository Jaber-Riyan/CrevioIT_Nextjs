"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/hooks/useLenis";

export function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const routeChanged = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    // App Router keeps the hash in the URL but not in `pathname`; read it directly.
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    if (hash) {
      // After a route change, wait for the page transition to finish and the
      // layout (and Lenis dimensions) to settle before scrolling to the section.
      if (routeChanged) {
        const timer = window.setTimeout(() => scrollToHash(hash), 600);
        return () => window.clearTimeout(timer);
      }
      scrollToHash(hash);
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
