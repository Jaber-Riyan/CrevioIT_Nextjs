"use client";

import { Reveal } from "@/components/animations/Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">{eyebrow}</p> : null}
      <h2 className="font-display text-balance text-4xl tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-slate-400 md:text-lg">{description}</p> : null}
    </Reveal>
  );
}
