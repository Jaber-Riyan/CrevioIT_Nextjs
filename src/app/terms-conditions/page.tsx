import type { Metadata } from "next";
import { LegalPage } from "@/views/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that guide working with Crevio IT.",
};

export default function Page() {
  return <LegalPage type="terms" />;
}
