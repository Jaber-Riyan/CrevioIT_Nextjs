"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050914] px-5 py-32 text-white md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(52,93,255,0.28),transparent_30%),linear-gradient(135deg,#0c1430,#050914_55%,#02040a)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-8xl font-black tracking-[-0.08em] text-blue-500 md:text-9xl">404</p>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-6xl">This page drifted out of reality.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">The page you are looking for does not exist or has moved. Let's get you back to Crevio IT.</p>
        <Link href="/" data-magnetic className="mt-9 inline-flex items-center gap-2 bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500">
          <ArrowLeft className="h-4 w-4" /> Back Home
        </Link>
      </div>
    </section>
  );
}
