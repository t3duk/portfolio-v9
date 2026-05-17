import Link from "next/link";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LetsConnect } from "../contact-me";
import { ContentBox } from "../layout/shell";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <ContentBox
      className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0"
      position="middle"
    >
      <div className="flex flex-row items-center gap-4">
        {/** biome-ignore lint/performance/noImgElement: img */}
        <img
          alt="Figure"
          className="h-22 w-18 rounded-2xl object-cover"
          src="/figure.jpg"
        />
        <div className="flex flex-col gap-1">
          <h1 className="flex flex-row items-baseline gap-2 tracking-tight">
            <span className="font-extrabold font-mono text-4xl md:text-5xl">
              Ted
            </span>
            <span className="font-medium font-mono text-4xl text-muted-foreground md:text-5xl">
              Brine
            </span>
          </h1>
          <p className="font-medium text-muted-foreground/80">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="flex-row items-center gap-1">
        <Button asChild={true} className="" variant="ghost" size="icon">
          <Link
            href="https://x.com/tedbrine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Link>
        </Button>
        <Button asChild={true} className="" variant="ghost" size="icon">
          <Link
            href="https://linkedin.com/in/tedbrine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </Button>
        <LetsConnect />
      </div>
    </ContentBox>
  );
};
