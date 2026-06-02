"use client";

import { Description } from "@/components/landing/description";
import { Header } from "@/components/landing/header";
import { ContentBox, PageShell } from "@/components/layout/shell";
import { Tech } from "@/components/landing/tech";

export default function Home() {
  return (
    <PageShell>
      <ContentBox position="first" className="h-12 sm:h-16 md:h-24" />
      <Header />
      <Description />
      <Tech />
      {/** biome-ignore lint/performance/noImgElement: img */}
      <img
        src="/signature.png"
        className="mx-auto my-16 w-20"
        alt="Signature"
        width={128}
        height={128}
      />
    </PageShell>
  );
}
