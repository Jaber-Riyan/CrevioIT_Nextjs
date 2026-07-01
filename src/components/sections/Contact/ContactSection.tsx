"use client";

import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Have an idea ready for reality?"
            description="Tell us what you are building, where you are stuck, or what needs to launch. Crevio IT will help shape the next move."
          />
          <Reveal delay={0.12} className="mt-10 grid gap-4">
            <div className="flex gap-4 border border-white/10 bg-white/[0.035] p-5">
              <Mail className="h-6 w-6 text-blue-300" />
              <div>
                <p className="font-bold">crevioit@gmail.com</p>
                <p className="text-sm text-slate-400">Project inquiries and partnerships</p>
              </div>
            </div>
            {/* <div className="flex gap-4 border border-white/10 bg-white/[0.035] p-5">
              <PhoneCall className="h-6 w-6 text-blue-300" />
              <div>
                <p className="font-bold">+88013XXXXXXXX</p>
                <p className="text-sm text-slate-400">Placeholder phone number</p>
              </div>
            </div> */}
            <div className="flex gap-4 border border-white/10 bg-white/[0.035] p-5">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div>
                <p className="font-bold">Remote-first studio</p>
                <p className="text-sm text-slate-400">Serving founders and teams worldwide</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal direction="left">
          <form className="border border-white/10 bg-white/[0.045] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white">
                Name
                <input className="border border-white/10 bg-[#080c14] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white">
                Email
                <input type="email" className="border border-white/10 bg-[#080c14] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
                Project Type
                <select className="border border-white/10 bg-[#080c14] px-4 py-4 text-white outline-none transition focus:border-blue-500">
                  <option>Website Design & Development</option>
                  <option>Mobile App Development</option>
                  <option>SaaS Product</option>
                  <option>Brand Identity</option>
                  <option>Admin Dashboard</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
                Message
                <textarea className="min-h-36 border border-white/10 bg-[#080c14] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500" placeholder="Tell us about the idea, timeline, and goals." />
              </label>
            </div>
            <button
              type="submit"
              data-magnetic
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-[0_0_45px_rgba(52,93,255,0.45)] transition hover:bg-blue-500"
            >
              Send Project Brief <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
