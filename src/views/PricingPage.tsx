"use client";

import { CTASection } from "@/components/sections/CTA/CTASection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { PricingSection } from "@/components/sections/Pricing/PricingSection";
import { PageHero } from "./PageHero";

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Premium project packages with flexible scope for real business goals."
        description="Start with a focused launch, scale into a full product, or build an enterprise-grade platform with a dedicated Crevio IT team."
      />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
