import type { Metadata } from "next";
import { PricingPage } from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flexible pricing for Crevio IT engagements — from focused sprints to full-scale product builds.",
};

export default function Page() {
  return <PricingPage />;
}
