"use client";

import { CTASection } from "@/components/sections/CTA/CTASection";
import { PortfolioSection } from "@/components/sections/Portfolio/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/Testimonials/TestimonialsSection";
import { PageHero } from "./PageHero";

export function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Digital products and brand systems designed to earn attention and trust."
        description="Explore premium placeholder work across websites, mobile apps, dashboards, branding, SaaS platforms, and case studies. Replace these with real Crevio IT projects as assets become available."
      />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
