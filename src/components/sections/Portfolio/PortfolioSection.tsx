"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { categories as category, portfolioItems } from "@/data/siteData";

const categories = category

type PortfolioSectionProps = {
  compact?: boolean;
};

export function PortfolioSection({ compact = false }: PortfolioSectionProps) {
  const [active, setActive] = useState("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const filtered = useMemo(
    () => portfolioItems.filter((item) => active === "All" || item.category === active).slice(0, compact ? 6 : portfolioItems.length),
    [active, compact]
  );

  const scrollBy = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * slider.clientWidth, behavior: "smooth" });
  };

  const filterButtonClass = (category: string) =>
    `px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
      active === category ? "bg-white text-blue-600" : "border border-white/15 bg-slate-950/30 text-white hover:border-white/40"
    }`;

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
          {/* Mobile: horizontal slider showing ~2 categories at a time with arrows */}
          <div className="mt-10 flex items-center gap-2 sm:hidden">
            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => scrollBy(-1)}
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/25 bg-slate-950/30 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div
              ref={sliderRef}
              className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`shrink-0 basis-[calc(50%-0.375rem)] snap-start px-2! text-[10px]! tracking-[0.12em]! ${filterButtonClass(category)}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next categories"
              onClick={() => scrollBy(1)}
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/25 bg-slate-950/30 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          {/* Larger screens: wrapped filter row */}
          <div className="mt-10 hidden flex-wrap justify-center gap-3 sm:flex">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                data-cursor
                onClick={() => setActive(category)}
                className={filterButtonClass(category)}
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-72 overflow-hidden bg-[#0a0f1a]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <span className="bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-600">{item.category}</span>
                      <span className="text-xs font-bold text-white/80">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{item.title}</h3>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-blue-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {compact && portfolioItems.length > 6 && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-blue-600"
            >
              See More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
