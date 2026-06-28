import type { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  FaCloudflare,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiPrisma } from "react-icons/si";

export type TechStackItem = {
  name: string;
  Icon: IconType;
  iconClassName?: string;
  mobileOnly?: boolean;
};

export const techStack: TechStackItem[] = [
  { name: "NextJS", Icon: RiNextjsFill },
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: BiLogoTypescript },
  { name: "Tailwind", Icon: RiTailwindCssFill },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Redis", Icon: DiRedis, iconClassName: "h-8 w-8" },
  { name: "Bun", Icon: SiBun },
  { name: "Cloudflare", Icon: FaCloudflare, iconClassName: "h-8 w-8" },
  { name: "Docker", Icon: FaDocker },
  { name: "GitHub", Icon: FaGithub, mobileOnly: true },
  { name: "NodeJS", Icon: FaNodeJs, mobileOnly: true },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, mobileOnly: true },
];
