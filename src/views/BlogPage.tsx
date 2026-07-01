"use client";

import { BlogSection } from "@/components/sections/Blog/BlogSection";
import { CTASection } from "@/components/sections/CTA/CTASection";
import { PageHero } from "./PageHero";

export function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Thinking on product design, digital launches, and premium execution."
        description="Explore practical insights from Crevio IT on UI/UX, branding, frontend, backend, Flutter apps, SaaS, dashboards, and app publishing."
      />
      <BlogSection />
      <CTASection />
    </>
  );
}
