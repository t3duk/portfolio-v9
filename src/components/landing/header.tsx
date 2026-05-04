import { LetsConnect } from "../contact-me";
import { ContentBox } from "../layout/shell";

export const Header = () => {
  return (
    <ContentBox
      className="flex flex-row items-end justify-between"
      position="middle"
    >
      <div className="flex flex-col gap-1">
        <h1 className="flex flex-row items-baseline gap-2 tracking-tight">
          <span className="font-extrabold font-mono text-4xl md:text-5xl">
            Ted
          </span>
          <span className="font-medium font-mono text-3xl text-muted-foreground md:text-4xl">
            Brine
          </span>
        </h1>
        <p className="font-medium text-muted-foreground/80">
          Software Engineer
        </p>
      </div>
      <div className="hidden flex-row items-center gap-4 sm:flex">
        <LetsConnect />
      </div>
    </ContentBox>
  );
};
