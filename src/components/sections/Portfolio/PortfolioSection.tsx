"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { portfolioItems } from "@/data/siteData";

const categories = ["All", "Website", "Mobile App", "Dashboard", "Branding", "SaaS", "Case Studies"];

type PortfolioSectionProps = {
  compact?: boolean;
};

export function PortfolioSection({ compact = false }: PortfolioSectionProps) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => portfolioItems.filter((item) => active === "All" || item.category === active).slice(0, compact ? 4 : portfolioItems.length),
    [active, compact]
  );

  return (
    <section className="relative overflow-hidden bg-[#070a11] pb-24 text-white md:pb-32">
      {/* Blue zone = header + filters + exactly one card-image height, so the first
          row of thumbnails is always covered regardless of how many cards are filtered. */}
      <div className="bg-blue-600 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-blue-100">Portfolio</p>
            <h2 className="font-display text-balance text-4xl tracking-[-0.04em] text-white md:text-6xl">
              Selected work, distinct and polished.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-blue-100/85 md:text-lg">
              Browse premium placeholder case studies that show the type of websites, apps, dashboards, branding, and SaaS products Crevio IT creates.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                data-cursor
                onClick={() => setActive(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                  active === category ? "bg-white text-blue-600" : "border border-white/15 bg-slate-950/30 text-white hover:border-white/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-14 h-72" aria-hidden />
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-72 max-w-7xl px-5 md:px-8">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 36, filter: "blur(16px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden border border-white/10 bg-[#080c14]"
              >
                <Link href={`/case-study/${item.id}`} className="block">
                  <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${item.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.34),transparent_18%),linear-gradient(135deg,rgba(0,0,0,0.05),rgba(0,0,0,0.55))]" />
                    <motion.div
                      className="absolute left-8 top-10 w-[78%] border border-white/15 bg-[#050914]/85 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                      whileHover={{ y: -10, rotate: -1 }}
                    >
                      <div className="h-24 bg-white/[0.08]" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <span className="h-12 bg-blue-400/80" />
                        <span className="h-12 bg-white/[0.08]" />
                        <span className="h-12 bg-white/[0.08]" />
                      </div>
                    </motion.div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <span className="bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-600">{item.category}</span>
                      <span className="text-xs font-bold text-white/80">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{item.title}</h3>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-blue-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                    <p className="mt-6 text-sm font-bold text-blue-300">{item.metrics}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
