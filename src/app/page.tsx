import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

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
