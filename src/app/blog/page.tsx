import type { Metadata } from "next";
import { BlogPage } from "@/views/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Crevio IT on premium UI, product strategy, scalable development, app launches, and digital growth.",
};

export default function Page() {
  return <BlogPage />;
}
