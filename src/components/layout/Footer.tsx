"use client";

import { ArrowUpRight, Code2, Globe2, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";
import { navItems, services } from "@/data/siteData";
import { Logo } from "./Logo";

const socialLinks = [
  { label: "Studio", icon: Globe2 },
  { label: "Network", icon: Share2 },
  { label: "Community", icon: MessageCircle },
  { label: "Code", icon: Code2 },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05080f]">
      {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" /> */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-400">
              Crevio IT is a full-service digital agency turning ambitious ideas into refined brands, websites, apps, dashboards, and scalable SaaS products.
            </p>
            <Link href="/contact" data-magnetic className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {navItems.slice(0, 6).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">Services</h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.slice(0, 8).map((service) => (
                <Link key={service.title} href="/services" className="text-sm text-slate-400 transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">Social</h3>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="https://example.com"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Crevio IT. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
