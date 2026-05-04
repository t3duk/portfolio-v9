import { ContentBox } from "../layout/shell";

export const Header = () => {
  return (
    <ContentBox className="flex flex-col gap-1" position="middle">
      <h1 className="flex flex-row items-baseline gap-3 tracking-tight">
        <span className="font-extrabold font-mono text-4xl md:text-5xl">
          Ted
        </span>
        <span className="font-medium font-mono text-2xl text-muted-foreground md:text-3xl">
          Brine
        </span>
      </h1>
      <p className="font-medium text-muted-foreground/80">Software Engineer</p>
    </ContentBox>
  );
};
