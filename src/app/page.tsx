"use client";

import { T } from "gt-next";
import Image from "next/image";
import { Description } from "@/components/landing/description";
import { Header } from "@/components/landing/header";
import { ContentBox, PageShell } from "@/components/layout/shell";

export default function Home() {
  return (
    <PageShell>
      <T>
        <ContentBox position="first" className="h-12 sm:h-16 md:h-24" />
        <Header />
        <Description />
        <Image
          src="/signature.png"
          className="mx-auto my-16 w-24"
          alt="Signature"
          width={128}
          height={128}
        />
      </T>
    </PageShell>
  );
}
