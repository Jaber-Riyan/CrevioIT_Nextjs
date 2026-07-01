import type { Metadata } from "next";
import { AboutPage } from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Crevio IT — a full-service digital agency crafting refined brands, websites, apps, dashboards, and scalable SaaS products.",
};

export default function Page() {
  return <AboutPage />;
}
