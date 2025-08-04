import { Hero } from "./components/Hero";
import dynamic from "next/dynamic";
import { AboutSkeleton } from "./components/ui/AboutSkeleton";
import { ProjectsSkeleton } from "./components/ui/ProjectsSkeleton";
import { ContactSkeleton } from "./components/ui/ContactSkeleton";

const About = dynamic(() => import("./components/About").then((mod) => mod.About), {
  loading: () => <AboutSkeleton />,
});

const Projects = dynamic(
  () => import("./components/Projects").then((mod) => mod.Projects),
  {
    loading: () => <ProjectsSkeleton />,
  }
);

const Contact = dynamic(
  () => import("./components/Contact").then((mod) => mod.Contact),
  {
    loading: () => <ContactSkeleton />,
  }
);

const Page = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="projetos">
        <Projects />
      </section>
      <section id="contato">
        <Contact />
      </section>
    </div>
  );
};

export default Page;