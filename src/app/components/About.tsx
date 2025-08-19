import { AboutTitle } from "./about/AboutTitle";
import { FaqSection } from "./about/FaqSection";
import { FeaturesSection } from "./about/FeaturesSection";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 w-full flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AboutTitle />
        <FeaturesSection />
        <FaqSection />
      </div>
    </section>
  );
}