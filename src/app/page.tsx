import { LocaleSelector, Num, T } from "gt-next";
import { Header } from "@/components/landing/header";
import { ContentBox, PageShell } from "@/components/layout/shell";
import { getAge } from "@/lib/date";
import { Description } from "@/components/landing/description";

export default function Home() {
  return (
    <PageShell>
      <T>
        <ContentBox position="first" className="h-12 sm:h-16 md:h-24" />
        <Header />
        <Description />
        <ContentBox position="last"></ContentBox>
      </T>
    </PageShell>
  );
}
