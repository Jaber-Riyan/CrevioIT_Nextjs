"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { strengths } from "@/data/siteData";

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-blue-500/10" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Why Choose Crevio IT"
          title="Premium thinking, precise delivery."
          description="We design for the user, engineer for scale, and communicate with the clarity modern business leaders expect."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid gap-6 lg:grid-cols-4"
        >
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUpItem} className="relative">
                <div className="group h-full border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-600/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-blue-400">0{index + 1}</span>
                    <div className="flex h-12 w-12 items-center justify-center bg-[#0d1425] text-blue-300 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
