"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { technologies } from "@/data/siteData";

export function TechnologiesSection() {
  const marquee = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden bg-[#070a11] py-24 text-white md:py-32">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/14 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Technologies"
          title="Modern stacks that move fast and scale."
          description="Crevio IT selects proven tools around your goals, team, budget, and roadmap instead of forcing one-size-fits-all solutions."
        />
        <div className="mt-14 overflow-hidden border-y border-white/10 py-5">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: [0, -900] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {marquee.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={`${tech.name}-${index}`} className="flex items-center gap-3 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
                    <Icon className="h-4 w-4" style={{ color: tech.color }} />
                  </span>
                  {tech.name}
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group flex min-h-44 flex-col items-center justify-center bg-[#080c14] p-6 text-center transition hover:bg-blue-600 border border-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition group-hover:scale-110">
                  <Icon className="h-7 w-7" style={{ color: tech.color }} />
                </div>
                <h3 className="mt-5 text-lg font-black">{tech.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500 group-hover:text-blue-100">Production stack</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
