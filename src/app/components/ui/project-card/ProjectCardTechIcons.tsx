import { motion } from "framer-motion";
import { techIconsMap } from "@/utils/tech-icons";
import { Projects } from "@/types/projects";

interface ProjectCardTechIconsProps {
  technologies: Projects["technologies"];
}

export function ProjectCardTechIcons({
  technologies,
}: ProjectCardTechIconsProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="mt-6 flex flex-wrap items-center gap-2 text-xs"
      variants={textVariants}
    >
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className="relative z-10 rounded-full bg-slate-200  p-2 hover:bg-slate-500 transition-colors"
          title={tech.name}
        >
          {techIconsMap[tech.icon]}
        </span>
      ))}
    </motion.div>
  );
}

