import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaCloudflare, FaDocker, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiPrisma } from "react-icons/si";
import { ContentBox } from "../layout/shell";

export const Tech = () => {
  return (
    <ContentBox
      className="flex flex-row divide-x divide-foreground/7 px-0 py-0"
      position="last"
    >
      <TechIcon>
        <RiNextjsFill className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <FaReact className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <BiLogoTypescript className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <RiTailwindCssFill className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <SiPrisma className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <DiRedis className="h-8 w-8 text-foreground" />
      </TechIcon>
      <TechIcon>
        <SiBun className="h-6 w-6 text-foreground" />
      </TechIcon>
      <TechIcon>
        <FaCloudflare className="h-8 w-8 text-foreground" />
      </TechIcon>
      <TechIcon>
        <FaDocker className="h-6 w-6 text-foreground" />
      </TechIcon>
    </ContentBox>
  );
};

const TechIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex aspect-square w-full items-center justify-center">
      {children}
    </div>
  );
};
