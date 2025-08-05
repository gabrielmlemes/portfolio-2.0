"use client";

import { memo } from "react";
import { Projects as ProjectType } from "@/types/projects";
import { ProjectCard } from "./project-card/";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCardComponent = memo(function ProjectCardComponent({ project }: ProjectCardProps) {
  return (
    <ProjectCard.Root>
      <ProjectCard.Image src={project.image} alt={`Thumbnail do projeto ${project.name}`} />
      <ProjectCard.Content>
        <ProjectCard.TechIcons technologies={project.technologies} />
        <ProjectCard.Info name={project.name} description={project.description} />
        <ProjectCard.Links deployedUrl={project.deployedUrl} githubUrl={project.githubUrl} />
      </ProjectCard.Content>
    </ProjectCard.Root>
  );
});

export default ProjectCardComponent;