"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 140, damping: 22, mass: 0.2 });
  const ringY = useSpring(cursorY, { stiffness: 140, damping: 22, mass: 0.2 });

  useEffect(() => {
    const canUse = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUse);
    if (!canUse) return undefined;

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    const over = (event: MouseEvent) => {
      const target = event.target as Element;
      setActive(Boolean(target.closest("a, button, input, textarea, [data-cursor], [data-magnetic]")));
    };
    const down = (event: MouseEvent) => {
      const ripple = { id: Date.now(), x: event.clientX, y: event.clientY };
      setRipples((items) => [...items, ripple]);
      window.setTimeout(() => setRipples((items) => items.filter((item) => item.id !== ripple.id)), 680);
    };
    const magnetic = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("[data-magnetic]");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${x * 0.14}px, ${y * 0.18}px)`;
    };
    const resetMagnetic = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("[data-magnetic]");
      if (target) target.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mousemove", magnetic);
    window.addEventListener("mouseout", resetMagnetic);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", magnetic);
      window.removeEventListener("mouseout", resetMagnetic);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-blue-400 mix-blend-screen shadow-[0_0_20px_rgba(72,113,255,0.95)]"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 border border-blue-400/70 mix-blend-screen"
        animate={{ width: active ? 72 : 34, height: active ? 72 : 34, opacity: active ? 0.85 : 0.55 }}
        transition={{ duration: 0.24 }}
        style={{ x: ringX, y: ringY, boxShadow: "0 0 34px rgba(55,94,255,0.45)" }}
      />
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="pointer-events-none fixed z-[98] h-4 w-4 -translate-x-1/2 -translate-y-1/2 border border-blue-300/80"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ scale: 0.2, opacity: 0.9 }}
          animate={{ scale: 7, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
