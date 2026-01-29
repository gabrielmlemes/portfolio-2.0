"use client";

import RotatingText from "./ui/rotate-text";
import { WobbleCardDone } from "@/app/components/projects/WobbleCardsDone";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Projects() {
  return (
    <section id="projetos" className="min-h-screen w-full py-30 px-4">
      <div className="mx-auto max-w-4xl text-center px-4">
        <h2 className="flex items-center justify-center gap-2 text-2xl lg:text-5xl font-bold leading-7 text-white">
          Soluções
          <RotatingText
            texts={["modernas", "criativas", "completas"]}
            mainClassName="px-2 sm:px-3 bg-blue-600 py-0.5 sm:py-1 md:py-2 rounded-lg text-2xl lg:text-5xl font-bold text-white"
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
        <p className="my-6 text-lg lg:text-xl leading-6 text-slate-300 dark:text-slate-300">
          Uma seleção de projetos que demonstram minha capacidade de entregar aplicações reais, completas e de alta qualidade, sempre com foco no usuário e nas necessidades do negócio.
        </p>
      </div>

      <WobbleCardDone />

      {/* <div className="flex items-center justify-center mt-14">
        <Button size="lg" variant="outline">Ver mais projetos</Button>
      </div> */}
    </section>
  );
}

