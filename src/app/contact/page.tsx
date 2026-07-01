import type { Metadata } from "next";
import { ContactPage } from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Crevio IT. Tell us about your brand, website, app, dashboard, or SaaS product and let's build it together.",
};

export default function Page() {
  return <ContactPage />;
}
