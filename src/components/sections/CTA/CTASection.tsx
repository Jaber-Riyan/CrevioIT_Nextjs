"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-24 text-white md:py-32">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.32em] text-blue-100">Ready to create with Crevio IT?</p>
          <h2 className="font-display mt-5 text-balance text-4xl tracking-[-0.05em] md:text-6xl">Let's start your next digital product.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50/88">
            Share the idea. We will help turn it into a premium plan, interface, and production-ready launch.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink to="/contact" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100 hover:text-blue-600">
              Start Your Project
            </ButtonLink>
            <ButtonLink to="/portfolio" variant="ghost" className="border border-white/20">
              View Our Work
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
