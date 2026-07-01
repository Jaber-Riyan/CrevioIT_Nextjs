"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/siteData";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Working Process"
          title="A calm path from idea to launch."
          description="Our process keeps creativity focused, engineering predictable, and every decision connected to the outcome your business needs."
        />
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-white/10 to-blue-500/0 lg:left-1/2" />
          <div className="grid gap-8">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -36 : 36, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid gap-5 pl-14 lg:grid-cols-2 lg:pl-0 ${isEven ? "" : "lg:text-right"}`}
                >
                  <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center bg-blue-600 text-sm font-black shadow-[0_0_34px_rgba(53,94,255,0.5)] lg:left-1/2 lg:-translate-x-1/2">
                    {index + 1}
                  </div>
                  <div className={isEven ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}>
                    <div className="border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-blue-500/60 hover:bg-blue-600/10">
                      <h3 className="text-2xl font-black tracking-[-0.04em]">{step.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
