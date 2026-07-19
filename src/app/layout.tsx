import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crevio.example.com"),
  title: {
    default: "Crevio IT — Premium Digital Agency",
    template: "%s | Crevio IT",
  },
  description:
    "Crevio IT is a full-service digital agency turning ambitious ideas into refined brands, websites, apps, dashboards, and scalable SaaS products.",
  openGraph: {
    type: "website",
    siteName: "Crevio IT",
    title: "Crevio IT — Premium Digital Agency",
    description:
      "Refined brands, websites, apps, dashboards, and scalable SaaS products, built by Crevio IT.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <link rel="icon" href="/crevio-logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
