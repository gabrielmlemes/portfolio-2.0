import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardLinksProps {
  deployedUrl: string;
  githubUrl: string;
}

export function ProjectCardLinks({ deployedUrl, githubUrl }: ProjectCardLinksProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 mt-4"
      variants={textVariants}
    >
      <Link
        href={deployedUrl}
        target="_blank"
        className=" text-slate-300 hover:text-indigo-400 flex items-center space-x-2 transition-colors"
      >
        <FaExternalLinkAlt className="w-4 h-4 mr-2" />
        Visitar Projeto
      </Link>
      <Link
        href={githubUrl}
        target="_blank"
        className="text-slate-300 hover:text-indigo-400 flex items-center space-x-2 transition-colors"
      >
        <FaGithub className="w-4 h-4 mr-2" />
        Repositório
      </Link>
    </motion.div>
  );
}