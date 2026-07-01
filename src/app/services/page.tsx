import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Crevio IT services: web design and development, mobile apps, dashboards, branding, and scalable SaaS product engineering.",
};

export default function Page() {
  return <ServicesPage />;
}
