"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { CTASection } from "@/components/sections/CTA/CTASection";
import { PortfolioSection } from "@/components/sections/Portfolio/PortfolioSection";
import { portfolioItems } from "@/data/siteData";

export function CaseStudyPage({ id }: { id: string }) {
  const item = portfolioItems.find((project) => project.id === id) ?? portfolioItems[0];

  return (
    <>
      <section className="relative overflow-hidden bg-[#050914] px-5 pb-20 pt-36 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(52,93,255,0.28),transparent_28%),linear-gradient(135deg,#0c1430,#050914_58%,#02040a)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/portfolio" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-blue-300">{item.category} Case Study</p>
              <h1 className="mt-5 text-balance text-5xl font-black tracking-[-0.06em] md:text-7xl">{item.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{item.description}</p>
            </Reveal>
            <Reveal direction="left">
              <div className={`h-96 bg-gradient-to-br ${item.accent} p-8 shadow-[0_40px_120px_rgba(0,0,0,0.5)]`}>
                <div className="h-full border border-white/15 bg-[#050914]/80 p-6 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200">Result</p>
                  <p className="mt-5 text-5xl font-black tracking-[-0.06em]">{item.metrics}</p>
                  <div className="mt-10 grid grid-cols-3 gap-3">
                    <span className="h-24 bg-blue-500" />
                    <span className="h-24 bg-white/[0.08]" />
                    <span className="h-24 bg-white/[0.08]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-[#05080f] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-3">
          {[
            ["Challenge", "The product needed a more premium, credible user experience without slowing down the business roadmap."],
            ["Solution", "Crevio IT reshaped the information architecture, interface system, conversion journey, and launch stack around measurable outcomes."],
            ["Result", "The final experience improved trust, clarified user actions, and gave the client a scalable foundation for future growth."],
          ].map(([title, text]) => (
            <Reveal key={title}>
              <article className="h-full border border-white/10 bg-white/[0.035] p-7">
                <CheckCircle2 className="h-8 w-8 text-blue-300" />
                <h2 className="mt-7 text-2xl font-black tracking-[-0.04em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <PortfolioSection compact />
      <CTASection />
    </>
  );
}
