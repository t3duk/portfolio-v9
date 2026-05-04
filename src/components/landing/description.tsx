import { Num } from "gt-next";
import { getAge } from "@/lib/date";
import { ContentBox } from "../layout/shell";

export const Description = () => {
  return (
    <ContentBox className="flex flex-col gap-1" position="last">
      <p className="text-foreground/80">
        I&apos;m a <Num>{getAge(new Date("2009-01-22"))}</Num> year old{" "}
        <span className="text-foreground">Software Engineer</span> from{" "}
        <span className="inline-flex items-baseline gap-1 text-foreground">
          {/** biome-ignore lint/performance/noImgElement: img */}
          <img
            src="https://ted.ac/api/emoji/gb"
            alt="Great Britain flag"
            className="inline-block h-4 w-4 shrink-0 translate-y-0.5"
          />
          Great Britain
        </span>
        . I build useful software with real systems behind it: products, APIs,
        infrastructure, and tools that solve actual problems.
      </p>
    </ContentBox>
  );
};
