"use client";

import { T } from "gt-next";
import { ContactMe } from "@/components/contact-me";
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
        <p className="flex flex-row items-center justify-center gap-x-1 p-4 text-center text-muted text-xs">
          <span>&copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span>Copyright ted.ac Services. All rights reserved.</span>
        </p>
      </T>
    </PageShell>
  );
}
