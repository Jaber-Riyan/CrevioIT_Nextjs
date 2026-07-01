"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/data/siteData";

export function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden bg-[#070a11] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Latest Articles"
            title="Insights for founders and teams."
            description="Practical writing on premium UI, product strategy, scalable development, app launches, and digital growth."
          />
          <Reveal delay={0.12}>
            <Link href="/blog" data-magnetic className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white">
              Read all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link href="/blog" className="group block h-full border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-600/10">
                <div className="mb-8 h-48 bg-[linear-gradient(135deg,#11205a,#05080f)] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">{post.category}</p>
                  <div className="mt-14 h-px bg-white/20" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <span className="h-8 bg-blue-500" />
                    <span className="h-8 bg-white/[0.08]" />
                    <span className="h-8 bg-white/[0.08]" />
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{post.date}</p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-300">
                  Read article <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
