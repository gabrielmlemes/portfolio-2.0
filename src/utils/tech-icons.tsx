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
  nextjs: <SiNextdotjs className="w-5 h-5" />,
  typescript: <SiTypescript className="w-5 h-5 text-blue-600" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-cyan-500" />,
  prisma: <SiPrisma className="w-5 h-5 text-white" />,
  postgresql: <SiPostgresql className="w-5 h-5 text-blue-400" />,
  react: <SiReact className="w-5 h-5 text-cyan-500" />,
  nodejs: <SiNodedotjs className="w-5 h-5 text-green-600" />,
  express: <SiExpress className="w-5 h-5 text-white" />,
  mongodb: <SiMongodb className="w-5 h-5 text-green-600" />,
};

