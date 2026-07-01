"use client";

import type { ReactNode } from "react";
import { PremiumCursor } from "@/components/Cursor/PremiumCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useLenis } from "@/hooks/useLenis";

export function AppShell({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <PremiumCursor />
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
