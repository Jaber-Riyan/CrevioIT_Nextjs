"use client";

import { CTASection } from "@/components/sections/CTA/CTASection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { PricingSection } from "@/components/sections/Pricing/PricingSection";
import { ServicesSection } from "@/components/sections/Services/ServicesSection";
import { TechnologiesSection } from "@/components/sections/Technologies/TechnologiesSection";
import { WhyChooseSection } from "@/components/sections/WhyChoose/WhyChooseSection";
import { PageHero } from "./PageHero";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, engineering, branding, and launch services under one senior team."
        description="From UI/UX and identity to backend systems, Flutter apps, SaaS platforms, app publishing, and maintenance, Crevio IT handles the complete digital product lifecycle."
      />
      <ServicesSection />
      <TechnologiesSection />
      <WhyChooseSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
