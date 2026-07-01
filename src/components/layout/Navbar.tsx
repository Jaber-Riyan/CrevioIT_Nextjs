"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/siteData";
import { scrollToHash } from "@/hooks/useLenis";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The App Router keeps the hash out of `pathname`; track it separately.
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isItemActive = (href: string) => {
    if (href.includes("#")) {
      return pathname === "/" && hash === `#${href.split("#")[1]}`;
    }
    if (href === "/") {
      return pathname === "/" && !hash;
    }
    return pathname === href;
  };

  const handleNav = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    setOpen(false);

    if (!href.includes("#")) {
      // Home: scroll up to the hero when already on the home page.
      if (href === "/" && pathname === "/") {
        scrollToHash("#hero");
      } else {
        router.push(href);
      }
      return;
    }

    const targetHash = `#${href.split("#")[1]}`;
    // Keep the URL in sync with the section either way.
    router.push(`/${targetHash}`);
    setHash(targetHash);
    // Already on the home page: scroll now (layout is stable). Coming from
    // another route, ScrollToTop handles the scroll once the page has mounted.
    if (pathname === "/") {
      scrollToHash(targetHash);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition duration-500 md:px-5 ${
          scrolled
            ? "border border-white/10 bg-slate-950/70 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNav(event, item.href)}
              className="relative px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              {isItemActive(item.href) ? (
                <motion.span
                  layoutId="active-menu"
                  className="absolute inset-x-2 bottom-0 h-px bg-blue-500 shadow-[0_0_18px_rgba(59,101,255,0.95)]"
                />
              ) : null}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink to="/contact" className="px-5 py-2.5">
            Start Project
          </ButtonLink>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          data-cursor
          className="inline-flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl border border-white/10 bg-slate-950/92 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.52)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <a
                    href={item.href}
                    onClick={(event) => handleNav(event, item.href)}
                    className={`block px-4 py-3 text-lg font-semibold transition ${
                      isItemActive(item.href) ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
            <ButtonLink to="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Start Your Project
            </ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
