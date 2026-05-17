"use client";

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
import { SiBun, SiPostgresql, SiPrisma } from "react-icons/si";
import { useWebHaptics } from "web-haptics/react";
import { ContentBox } from "../layout/shell";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { usePlaySound } from "../ui/sensory-ui/config/use-play-sound";

export const Tech = () => {
  const { play } = usePlaySound({ sound: "interaction.subtle" });
  const { trigger } = useWebHaptics();

  return (
    <ContentBox
      className="grid grid-cols-4 gap-px bg-foreground/7 px-0 py-0 sm:grid-cols-6 md:grid-cols-9"
      position="last"
    >
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <RiNextjsFill className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          NextJS
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <FaReact className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          React
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <BiLogoTypescript className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Typescript
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <RiTailwindCssFill className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Tailwind
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <SiPrisma className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Prisma
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <DiRedis className="h-8 w-8 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Redis
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <SiBun className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Bun
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <FaCloudflare className="h-8 w-8 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Cloudflare
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        onOpenChange={() => {
          trigger([{ duration: 15 }]);
          play();
        }}
        openDelay={10}
        closeDelay={100}
      >
        <HoverCardTrigger>
          <TechIcon>
            <FaDocker className="h-6 w-6 text-foreground" />
          </TechIcon>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-max rounded-none bg-background px-3 py-2 text-xs"
        >
          Docker
        </HoverCardContent>
      </HoverCard>
      <div className="md:hidden">
        <HoverCard
          onOpenChange={() => {
            trigger([{ duration: 15 }]);
            play();
          }}
          openDelay={10}
          closeDelay={100}
        >
          <HoverCardTrigger>
            <TechIcon className="md:hidden">
              <FaGithub className="h-6 w-6 text-foreground" />
            </TechIcon>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="w-max rounded-none bg-background px-3 py-2 text-xs"
          >
            GitHub
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="md:hidden">
        <HoverCard
          onOpenChange={() => {
            trigger([{ duration: 15 }]);
            play();
          }}
          openDelay={10}
          closeDelay={100}
        >
          <HoverCardTrigger>
            <TechIcon className="md:hidden">
              <FaNodeJs className="h-6 w-6 text-foreground" />
            </TechIcon>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="w-max rounded-none bg-background px-3 py-2 text-xs"
          >
            NodeJS
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="md:hidden">
        <HoverCard
          onOpenChange={() => {
            trigger([{ duration: 15 }]);
            play();
          }}
          openDelay={10}
          closeDelay={100}
        >
          <HoverCardTrigger>
            <TechIcon className="md:hidden">
              <BiLogoPostgresql className="h-6 w-6 text-foreground" />
            </TechIcon>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="w-max rounded-none bg-background px-3 py-2 text-xs"
          >
            PostgreSQL
          </HoverCardContent>
        </HoverCard>
      </div>
    </ContentBox>
  );
};

const TechIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex aspect-square w-full items-center justify-center bg-background ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
