"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
};

const styles = {
  primary:
    "bg-blue-600 text-white shadow-[0_0_36px_rgba(52,93,255,0.45)] hover:bg-blue-500 hover:shadow-[0_0_54px_rgba(52,93,255,0.6)]",
  secondary:
    "border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:border-blue-400/60 hover:bg-white/[0.1]",
  ghost: "text-white/78 hover:text-white",
};

export function ButtonLink({ to, children, variant = "primary", icon = true, className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      href={to}
      data-magnetic
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-tight transition duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </Link>
  );
}
