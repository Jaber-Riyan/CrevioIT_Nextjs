"use client";

import { legalUpdated } from "@/data/siteData";
import { PageHero } from "./PageHero";

type LegalPageProps = {
  type: "privacy" | "terms";
};

export function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === "privacy";

  return (
    <>
      <PageHero
        eyebrow={isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
        title={isPrivacy ? "How Crevio IT handles information with care and transparency." : "The terms that guide working with Crevio IT."}
        description={isPrivacy ? "This placeholder policy outlines how a premium agency website can communicate privacy expectations." : "This placeholder terms page outlines general conditions for website visitors and project inquiries."}
      />
      <section className="bg-[#05080f] py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-300">{legalUpdated}</p>
          <div className="mt-8 space-y-8 text-slate-300">
            {(isPrivacy
              ? [
                  ["Information we collect", "Crevio IT may collect information you provide through contact forms, project inquiries, email communication, and analytics tools used to improve website performance."],
                  ["How information is used", "We use information to respond to inquiries, understand project needs, improve our website, and deliver relevant communication about requested services."],
                  ["Data care", "We aim to use reasonable safeguards and never sell personal information. Replace this placeholder with legal advice before publishing."],
                ]
              : [
                  ["Website use", "By browsing this website, you agree to use it responsibly and not interfere with its performance, security, or content."],
                  ["Project inquiries", "Submitting a form does not create a client relationship. Scope, deliverables, pricing, and timelines are confirmed through a written agreement."],
                  ["Placeholder notice", "This legal content is provided as a replaceable placeholder and should be reviewed by a qualified professional before launch."],
                ]
            ).map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-white/[0.035] p-7">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{title}</h2>
                <p className="mt-4 leading-8">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
