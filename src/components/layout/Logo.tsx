"use client";

import Link from "next/link";

const logoUrl = "/crevio-logo.svg";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="Crevio home" className={`group inline-flex items-center ${className}`}>
      <img src={logoUrl} alt="Crevio" className="h-4 w-auto select-none md:h-6" draggable={false} />
    </Link>
  );
}
