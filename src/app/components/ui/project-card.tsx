"use client";

import { memo } from "react";
import { Projects } from "@/types/projects";
import { techIconsMap } from "@/utils/tech-icons";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/utils/tailwind-merge";

interface ProjectCardProps {
  project: Projects;
  className?: string;
}

const ProjectCard = memo(function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative mt-9 lg:mt-6 flex h-full w-full flex-col overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-slate-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative h-60 w-full overflow-hidden md:h-64">
        <Image
          src={project.image}
          alt={`Thumbnail do projeto ${project.name}`}
          fill
          quality={100}
          className="object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex-1">
          {/* Header: Title and Tech Icons */}
          <header className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-50">{project.name}</h3>
            <div className="flex flex-shrink-0 items-center gap-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-full bg-slate-800 p-2.5 text-white transition-colors hover:bg-slate-700"
                  title={tech.name}
                >
                  {techIconsMap[tech.icon]}
                </span>
              ))}
            </div>
          </header>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-base text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Footer: Links */}
        <footer className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href={project.deployedUrl}
            target="_blank"
            className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            <FaExternalLinkAlt />
            Visitar Projeto
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-700 px-5 py-3 text-base font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            <FaGithub />
            Repositório
          </Link>
        </footer>
      </div>
    </article>
  );
});

export default ProjectCard;

