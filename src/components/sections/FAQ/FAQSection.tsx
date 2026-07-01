"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/data/siteData";

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader
          align="left"
          eyebrow="FAQ"
          title="Clear answers before we build."
          description="If your question is not here, send us a message and we will map the best path for your idea."
        />
        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="border border-white/10 bg-white/[0.035]">
                <button
                  type="button"
                  data-cursor
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <span className="text-lg font-black tracking-[-0.03em] text-white">{faq.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-600 text-white">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-400">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
