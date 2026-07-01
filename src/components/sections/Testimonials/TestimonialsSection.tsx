"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials } from "@/data/siteData";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#05080f] py-24 text-white md:py-32">
      <div className="absolute inset-x-0 top-0 h-[calc(50%+9rem)] bg-blue-600" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-blue-100">Testimonials</p>
          <h2 className="font-display text-balance text-4xl tracking-[-0.04em] text-white md:text-6xl">
            Trusted by teams who value execution.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-blue-100/85 md:text-lg">
            Client quotes are premium placeholders and can be replaced with real Crevio IT testimonials when available.
          </p>
        </Reveal>
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={22}
            slidesPerView={1}
            autoplay={{ delay: 3600, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="premium-swiper pb-14"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="min-h-80 border border-white/10 bg-[#080c14]/96 p-7 shadow-[0_32px_90px_rgba(0,0,0,0.36)] backdrop-blur-xl transition hover:border-blue-500/60">
                  <div className="flex gap-1 text-blue-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-7 text-lg leading-8 text-slate-200">"{item.quote}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-800 text-lg font-black text-white">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-black text-white">{item.name}</h3>
                      <p className="text-sm text-slate-400">{item.role}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{item.company}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
