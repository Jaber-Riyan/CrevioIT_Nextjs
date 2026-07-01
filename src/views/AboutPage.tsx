"use client";

import { AboutSection } from "@/components/sections/About/AboutSection";
import { CTASection } from "@/components/sections/CTA/CTASection";
import { ProcessSection } from "@/components/sections/Process/ProcessSection";
import { TestimonialsSection } from "@/components/sections/Testimonials/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChoose/WhyChooseSection";
import { PageHero } from "./PageHero";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Crevio IT"
        title="A premium digital agency built around clarity, craft, and launch momentum."
        description="Crevio IT partners with founders, startups, and growing teams to create brands, websites, applications, dashboards, and SaaS products that feel considered at every touchpoint."
      />
      <AboutSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
