"use client";

import { ProjectsList } from "@/types/projects";
import ProjectCard from "./ui/project-card";
import RotatingText from "./ui/rotate-text";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

export function Projects() {
  const featured = ProjectsList.slice(0, 3);

  return (
    <section className="min-h-screen w-full bg-black py-30">
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

      {/* Featured Project Carousel */}
      <div className="mx-auto mt-16 w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="projects-carousel !pb-12" // Add padding-bottom for pagination
        >
          {featured.map((project) => (
            <SwiperSlide key={project.name}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

