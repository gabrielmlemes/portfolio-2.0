import { ProjectsList } from "@/types/projects";
import RotatingText from "./ui/rotate-text";
import ProjectCard from "./ui/project-card";
import { ContainerScroll } from "./ui/scroll-container-animation";

export function Projects() {
  const featured = ProjectsList.slice(0, 3);

  return (
    <section className="min-h-screen w-full bg-black pt-14">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold leading-7 text-indigo-600 dark:text-indigo-400">
              Soluções
              <RotatingText
                texts={["rápidas", "modernas", "criativas", "performáticas"]}
                mainClassName="px-2 sm:px-3 bg-indigo-600 py-0.5 sm:py-1 md:py-2 rounded-lg text-2xl font-bold text-white"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
              />
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Projetos em Destaque
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Uma seleção de projetos que demonstram minhas habilidades em criar
              soluções robustas e com foco no usuário.
            </p>
          </div>
        }
      >
        {/* Featured Project */}
        <ProjectCard project={featured[0]} />
      </ContainerScroll>
    </section>
  );
}

