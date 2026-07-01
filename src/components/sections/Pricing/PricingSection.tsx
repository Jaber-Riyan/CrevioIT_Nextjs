"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/data/siteData";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#070a11] py-24 text-white md:py-32">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/12 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Starting points for premium work."
          description="Every engagement is scoped around your product, timeline, and growth priorities. Use these packages as a starting guide."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={`group relative border p-8 transition duration-500 hover:-translate-y-3 ${
                plan.featured
                  ? "border-blue-500 bg-blue-600 shadow-[0_0_80px_rgba(50,90,255,0.36)]"
                  : "border-white/10 bg-white/[0.035] hover:border-blue-500/70 hover:bg-blue-600/10"
              }`}
            >
              {plan.featured ? <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-blue-100">Most requested</p> : null}
              <h3 className="text-2xl font-black tracking-[-0.04em]">{plan.name}</h3>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? "text-blue-50/86" : "text-slate-400"}`}>{plan.description}</p>
              <div className="mt-8 text-5xl font-black tracking-[-0.06em]">{plan.price}</div>
              <div className="mt-8 grid gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`h-5 w-5 ${plan.featured ? "text-white" : "text-blue-400"}`} />
                    <span className={plan.featured ? "text-white" : "text-slate-300"}>{feature}</span>
                  </div>
                ))}
              </div>
              <ButtonLink to="/contact" variant={plan.featured ? "secondary" : "primary"} className="mt-9 w-full">
                Request Proposal
              </ButtonLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
