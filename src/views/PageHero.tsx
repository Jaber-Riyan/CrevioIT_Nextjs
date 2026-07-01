"use client";

import { Reveal } from "@/components/animations/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050914] px-5 pb-20 pt-36 text-white md:px-8 md:pb-28 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(52,93,255,0.28),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(53,93,255,0.18),transparent_24%),linear-gradient(135deg,#0c1430,#050914_52%,#02040a)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-blue-300">{eyebrow}</p>
          <h1 className="font-display mt-5 text-balance text-5xl tracking-[-0.05em] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
