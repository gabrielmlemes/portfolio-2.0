"use client";

import { memo } from "react";
import { Projects } from "@/types/projects";
import { techIconsMap } from "@/utils/tech-icons";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Projects;
}

const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Renderiza o card do projeto com a imagem, tecnologias, nome, descrição e links
  return (
    <motion.article
      className="flex flex-col items-start justify-between"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="relative w-full overflow-hidden rounded-2xl group">
        <Image
          src={project.image}
          alt={`Thumbnail do projeto ${project.name}`}
          width={800}
          height={600}
          className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
      </div>

      <motion.div
        className="max-w-xl"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Tech Icons */}
        <motion.div
          className="mt-6 flex flex-wrap items-center gap-2 text-xs"
          variants={textVariants}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="relative z-10 rounded-full bg-slate-100 dark:bg-slate-800 p-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={tech.name}
            >
              {techIconsMap[tech.icon]}
            </span>
          ))}
        </motion.div>

        {/* Project Info */}
        <motion.div variants={textContainerVariants}>
          <motion.h3
            className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white"
            variants={textVariants}
          >
            {project.name}
          </motion.h3>
          <motion.p
            className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
            variants={textVariants}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 mt-4"
            variants={textVariants}
          >
            <Link
              href={project.deployedUrl}
              target="_blank"
              className=" text-slate-300 hover:text-indigo-400 flex items-center space-x-2 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4 mr-2" />
              Visitar Projeto
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-slate-300 hover:text-indigo-400 flex items-center space-x-2 transition-colors"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Repositório
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
});

export default ProjectCard;
