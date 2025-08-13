"use client";
import {
  BoltIcon,
  CodeBracketIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Performance e Otimização",
    description:
      "Aplicações rápidas e eficientes, focadas em proporcionar a melhor experiência para o usuário final, com otimizações de SEO e performance.",
    icon: BoltIcon,
  },
  {
    name: "Código Limpo e Escalável",
    description:
      "Desenvolvimento com as melhores práticas do mercado, garantindo um código legível, manutenível e pronto para crescer junto com o seu negócio.",
    icon: CodeBracketIcon,
  },
  {
    name: "Design Moderno e Responsivo",
    description:
      "Interfaces intuitivas e visualmente agradáveis que se adaptam perfeitamente a qualquer dispositivo, do desktop ao mobile.",
    icon: PaintBrushIcon,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Variants for individual cards
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-30 sm:py-32 min-h-screen w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-x-hidden"
    >
      {/* <Spotlight /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            ref={ref}
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold leading-7 text-blue-500 shadow-2xl"
          >
            Tecnologia & Inovação
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-1 text-3xl font-bold tracking-tight text-secondary sm:text-4xl"
          >
            O que você encontra nos meus projetos
          </motion.p>
        </div>

        <motion.dl
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={textVariants}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold leading-7 text-secondary">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-lg">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base leading-7 text-slate-300">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
