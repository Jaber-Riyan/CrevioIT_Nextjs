"use client";

import { ContactSection } from "@/components/sections/Contact/ContactSection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { PageHero } from "./PageHero";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell Crevio IT about the idea you want to turn into reality."
        description="Share your project goals, budget range, timeline, or early concept. We will help identify the clearest path to a premium digital launch."
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
