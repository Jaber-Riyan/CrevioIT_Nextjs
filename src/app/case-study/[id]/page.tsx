import type { Metadata } from "next";
import { CaseStudyPage } from "@/views/CaseStudyPage";
import { portfolioItems } from "@/data/siteData";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = portfolioItems.find((project) => project.id === id) ?? portfolioItems[0];

  return {
    title: `${item.title} — ${item.category} Case Study`,
    description: item.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CaseStudyPage id={id} />;
}
