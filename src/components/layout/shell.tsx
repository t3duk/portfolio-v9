import { cn } from "@/lib/utils";

type SectionPosition = "first" | "middle" | "last" | "single";

export const PageShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-screen grid-cols-[1fr_48px_minmax(0,48rem)_48px_1fr]">
        <div />
        <PatternRail />
        <div className="relative col-start-3">{children}</div>
        <PatternRail />
        <div />
      </div>
    </main>
  );
};

export const PatternRail = () => {
  return (
    <div className="border-[--pattern-fg] border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:color-mix(in_oklab,var(--color-foreground)_7%,transparent)]" />
  );
};

export const ContentBox = ({
  children,
  position = "middle",
  className,
  ...props
}: {
  children?: React.ReactNode;
  position?: SectionPosition;
  className?: string;
  props?: React.HTMLAttributes<HTMLElement>;
}) => {
  return (
    <section
      {...props}
      className={cn(
        "relative px-10 py-8",
        "before:-translate-x-1/2 before:absolute before:left-1/2 before:h-px before:w-screen before:bg-foreground/7",
        "after:-translate-x-1/2 after:absolute after:left-1/2 after:h-px after:w-screen after:bg-foreground/7",
        position === "single" && "before:top-0 after:bottom-0",
        position === "first" && "before:top-0 after:hidden",
        position === "middle" && "before:top-0 after:hidden",
        position === "last" && "before:top-0 after:bottom-0",
        className,
      )}
    >
      {children}
    </section>
  );
};
