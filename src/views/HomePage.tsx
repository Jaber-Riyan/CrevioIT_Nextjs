"use client";

import { AboutSection } from "@/components/sections/About/AboutSection";
import { BlogSection } from "@/components/sections/Blog/BlogSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";
import { CTASection } from "@/components/sections/CTA/CTASection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { Hero } from "@/components/sections/Hero/Hero";
import { PortfolioSection } from "@/components/sections/Portfolio/PortfolioSection";
import { PricingSection } from "@/components/sections/Pricing/PricingSection";
import { ProcessSection } from "@/components/sections/Process/ProcessSection";
import { ServicesSection } from "@/components/sections/Services/ServicesSection";
import { TechnologiesSection } from "@/components/sections/Technologies/TechnologiesSection";
import { TestimonialsSection } from "@/components/sections/Testimonials/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChoose/WhyChooseSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection compact />
      <WhyChooseSection />
      <PortfolioSection compact />
      <ProcessSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
