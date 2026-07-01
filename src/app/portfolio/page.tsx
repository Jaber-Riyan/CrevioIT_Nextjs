import type { Metadata } from "next";
import { PortfolioPage } from "@/views/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse selected work by Crevio IT — websites, apps, dashboards, branding, and SaaS products, each polished and conversion-focused.",
};

export default function Page() {
  return <PortfolioPage />;
}
