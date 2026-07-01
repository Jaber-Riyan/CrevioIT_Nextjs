"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { ArrowDown, Activity, CheckCircle2, TrendingUp, Wifi } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { scrollToHash } from "@/hooks/useLenis";
import { heroStats } from "@/data/siteData";

type Token = { text: string; className?: string };

const codeLines: Token[][] = [
  [
    { text: "import", className: "text-fuchsia-400" },
    { text: " { build } ", className: "text-slate-200" },
    { text: "from", className: "text-fuchsia-400" },
    { text: " 'crevioit'", className: "text-emerald-300" },
  ],
  [],
  [
    { text: "export", className: "text-fuchsia-400" },
    { text: " async function ", className: "text-slate-200" },
    { text: "launch", className: "text-blue-300" },
    { text: "(idea) {", className: "text-slate-400" },
  ],
  [
    { text: "  const", className: "text-fuchsia-400" },
    { text: " product = ", className: "text-slate-200" },
    { text: "await", className: "text-fuchsia-400" },
    { text: " build({", className: "text-slate-400" },
  ],
  [
    { text: "    design:", className: "text-sky-300" },
    { text: " 'premium',", className: "text-emerald-300" },
  ],
  [
    { text: "    stack:", className: "text-sky-300" },
    { text: " ['React.js', 'Next.js', 'Node.js', 'PostgreSQL'],", className: "text-emerald-300" },
  ],
  [
    { text: "    ship:", className: "text-sky-300" },
    { text: " true,", className: "text-amber-300" },
  ],
  [{ text: "  })", className: "text-slate-400" }],
  [
    { text: "  return", className: "text-fuchsia-400" },
    { text: " product.", className: "text-slate-200" },
    { text: "deploy", className: "text-blue-300" },
    { text: "()", className: "text-slate-400" },
  ],
  [{ text: "}", className: "text-slate-400" }],
];

const logLines = ["▸ compiling modules", "▸ optimizing assets", "✓ build passing", "▸ deploying to edge"];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const visualX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const visualY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const phoneX = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const phoneY = useTransform(smoothY, [-0.5, 0.5], [-10, 16]);
  const dashX = useTransform(smoothX, [-0.5, 0.5], [-26, 26]);
  const dashY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const [entered, setEntered] = useState(false);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050914] pt-32 text-white md:pt-36"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseEnter={() => setEntered(true)}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(42,75,255,0.26),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(33,92,255,0.18),transparent_24%),linear-gradient(135deg,#0d1430_0%,#050914_45%,#02040a_100%)]" />
      <motion.div
        className="absolute -left-40 top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-700/18 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 -z-10 h-72"
        initial={{ y: 180 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 pb-12 pt-4 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-blue-300"
          >
            Crevio IT / Where Ideas Become Reality.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(18px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-4xl text-balance text-5xl tracking-[-0.05em] text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            We Transform Ideas Into Digital Reality.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 md:text-xl"
          >
            Crevio blends strategy, design, and engineering to launch premium websites, mobile apps, SaaS products, dashboards, and brands that move businesses forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink to="/contact">Start Your Project</ButtonLink>
            <ButtonLink to="/portfolio" variant="secondary">
              View Our Work
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="relative aspect-[5/4] w-full">
            {/* Shape 1 — big: running code editor */}
            <motion.div
              style={{ x: visualX, y: visualY }}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-12 top-0 w-[82%] overflow-hidden rounded-xl border border-white/12 bg-[#070b16]/95 shadow-[0_50px_130px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">launch.ts</span>
              </div>
              <div className="relative h-[208px] overflow-hidden px-4 py-4 font-mono text-[11px] leading-[1.7] sm:text-xs">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  {[...codeLines, ...codeLines].map((line, index) => (
                    <div key={index} className="flex gap-3 whitespace-pre">
                      <span className="w-4 select-none text-right text-slate-600">{(index % codeLines.length) + 1}</span>
                      <span>
                        {line.length === 0 ? " " : line.map((token, tokenIndex) => (
                          <span key={tokenIndex} className={token.className}>
                            {token.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#070b16] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#070b16] to-transparent" />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-blue-600/10 px-4 py-2.5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  build passing
                </div>
                <div className="relative h-3 w-24 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 flex items-center gap-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {[...logLines, ...logLines].map((log, index) => (
                      <span key={index}>{log}</span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Shape 2 — modern app preview */}
            {/* <motion.div
              style={{ x: phoneX, y: phoneY }}
              initial={{ opacity: 0, y: 70, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 0.95, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 left-0 w-[34%] min-w-[140px] overflow-hidden rounded-[1.6rem] border-[7px] border-slate-900 bg-[#050914] shadow-[0_36px_100px_rgba(0,0,0,0.7)]"
            >
              <div className="relative h-[252px] overflow-hidden bg-[linear-gradient(165deg,#16224f,#050914_60%)] p-4">
                <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/25" />
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">Crevio App</p>
                  <Wifi className="h-3 w-3 text-blue-300" />
                </div>
                <h4 className="mt-3 text-lg font-black leading-tight tracking-[-0.05em]">Build. Ship. Grow.</h4>
                <motion.div
                  className="relative mt-4 h-20 overflow-hidden rounded-lg bg-blue-600"
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)]"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-white">
                    <TrendingUp className="h-3.5 w-3.5" /> +24% this week
                  </div>
                </motion.div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((cell) => (
                    <motion.span
                      key={cell}
                      className="h-9 rounded-md bg-white/[0.08]"
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: cell * 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div> */}

            {/* Shape 3 — live dashboard */}
            <motion.div
              style={{ x: dashX, y: dashY }}
              initial={{ opacity: 0, x: 60, y: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.62 },
                x: { duration: 0.8, delay: 0.62 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-4 right-10 w-[58%] min-w-[210px] overflow-hidden rounded-xl border border-white/12 bg-white/[0.07] p-5 shadow-[0_36px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-blue-300" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">Live Analytics</span>
                </div>
                <span className="bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white">Live</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <p className="text-3xl font-black tracking-[-0.06em]">
                  {entered ? <CountUp end={94} duration={2.6} enableScrollSpy /> : 94}%
                </p>
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-300">
                  <TrendingUp className="h-3 w-3" /> launch ready
                </span>
              </div>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[52, 74, 40, 88, 60, 96, 70].map((height, index) => (
                  <motion.span
                    key={index}
                    className="w-full rounded-sm bg-gradient-to-t from-blue-600 to-blue-400"
                    initial={{ height: "8%" }}
                    animate={{ height: [`${Math.max(height - 22, 12)}%`, `${height}%`, `${Math.max(height - 22, 12)}%`] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[10px] text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" /> 12 deploys today
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.42 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-40"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-white/20 pt-8 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
                {entered ? <CountUp end={stat.value} duration={2.4} enableScrollSpy /> : stat.value}
                {stat.suffix}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <a
        href="#about"
        data-cursor
        onClick={(event) => {
          event.preventDefault();
          scrollToHash("#about");
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-100/80 md:flex"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
