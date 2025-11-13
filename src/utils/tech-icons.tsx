import { JSX } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const techIconsMap: Record<string, JSX.Element> = {
  nextjs: <SiNextdotjs className="size-5" />,
  typescript: <SiTypescript className="size-5 text-blue-600" />,
  tailwind: <SiTailwindcss className="size-5 text-cyan-500" />,
  prisma: <SiPrisma className="size-5 text-black" />,
  postgresql: <SiPostgresql className="size-5 text-blue-600" />,
  react: <SiReact className="size-5 text-cyan-500" />,
  nodejs: <SiNodedotjs className="size-5 text-green-600" />,
  express: <SiExpress className="size-5 text-black" />,
  mongodb: <SiMongodb className="size-5 text-green-600" />,
};

