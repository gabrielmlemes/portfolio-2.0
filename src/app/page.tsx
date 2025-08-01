import { About } from "./components/About";
import { Hero } from "./components/Hero";

const Page = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="projetos">{/* <Hero /> */}</section>
      <section id="contato">{/* <Hero /> */}</section>
    </div>
  );
};

export default Page;
