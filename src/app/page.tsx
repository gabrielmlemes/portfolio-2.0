import { Suspense } from "react";
import { Hero } from "./components/Hero";
import dynamic from "next/dynamic";
import { AboutSkeleton } from "./components/ui/AboutSkeleton";
import { ProjectsSkeleton } from "./components/ui/ProjectsSkeleton";
import { ContactSkeleton } from "./components/ui/ContactSkeleton";

const About = dynamic(() => import("./components/About").then((mod) => mod.About));
const Projects = dynamic(() => import("./components/Projects").then((mod) => mod.Projects));
const Contact = dynamic(() => import("./components/Contact").then((mod) => mod.Contact));

const Page = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
      </section>
      <section id="projetos">
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
      </section>
      <section id="contato">
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </section>
    </div>
  );
};

export default Page;