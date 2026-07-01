"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/siteData";

type ServicesSectionProps = {
  compact?: boolean;
};

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <section id="services" className="relative overflow-hidden bg-[#070a11] py-24 text-white md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Services"
          title="From concept to shipped product."
          description="Choose Crevio IT for a complete delivery team or a focused specialist layer that fits inside your roadmap."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUpItem}
                data-cursor
                className="group relative min-h-64 bg-[#080c14] p-7 transition duration-500 hover:bg-[#0c1224]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-8 top-0 h-px bg-blue-400" />
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
                </div>
                <div className="relative flex h-14 w-14 items-center justify-center bg-white/[0.06] text-blue-300 transition duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_34px_rgba(60,99,255,0.52)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative mt-9 text-2xl font-black tracking-[-0.04em] text-white">{service.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                <span className="absolute bottom-7 left-7 h-px w-12 bg-blue-500/80 transition duration-500 group-hover:w-24" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
