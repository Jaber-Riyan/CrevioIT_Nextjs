"use client";

import CountUp from "react-countup";
import { Award, Compass, Eye, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const aboutStats = [
  { value: 7, suffix: "+", label: "years creating digital products" },
  { value: 120, suffix: "+", label: "projects designed and launched" },
  { value: 18, suffix: "+", label: "industries served globally" },
];

const pillars = [
  { title: "Mission", description: "Turn ambitious ideas into digital products that look premium, perform fast, and create business momentum.", icon: Compass },
  { title: "Vision", description: "Become the trusted creative technology partner for founders and teams shaping tomorrow's digital experiences.", icon: Eye },
  { title: "Experience", description: "A senior team covering strategy, branding, UI/UX, frontend, backend, Flutter, SaaS, and launch operations.", icon: Award },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="About Crevio IT"
              title="A digital agency for premium execution."
              description="Crevio IT helps businesses transform early concepts, existing products, and growth ambitions into polished digital experiences. We combine strategic clarity with detailed design and scalable engineering so every launch feels confident."
            />
            <Reveal delay={0.14} className="mt-10 grid gap-5 sm:grid-cols-3">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="border-l border-blue-500/70 pl-5">
                  <p className="text-4xl font-black tracking-[-0.05em]">
                    <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy />
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal direction="left" className="relative">
            <div className="absolute -inset-6 bg-blue-600/20 blur-3xl" />
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-7 shadow-[0_40px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute right-7 top-7 flex h-16 w-16 items-center justify-center bg-blue-600 text-white shadow-[0_0_40px_rgba(53,94,255,0.62)]">
                <Rocket className="h-8 w-8" />
              </div>
              <div className="h-52 bg-[linear-gradient(135deg,#142050,#05080f)] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">Strategy to launch</p>
                <h3 className="mt-8 max-w-sm text-4xl font-black tracking-[-0.05em]">One team for the complete digital product journey.</h3>
              </div>
              <div className="mt-5 grid gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="group flex gap-5 border border-white/10 bg-[#070b13] p-5 transition hover:border-blue-500/60 hover:bg-blue-600/10">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-600/16 text-blue-300 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white">{pillar.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{pillar.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
