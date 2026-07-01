import type { Metadata } from "next";
import { LegalPage } from "@/views/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Crevio IT handles information with care and transparency.",
};

export default function Page() {
  return <LegalPage type="privacy" />;
}
