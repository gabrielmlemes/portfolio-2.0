"use client";
import {
  BoltIcon,
  CodeBracketIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { Spotlight } from "./ui/spotlight";
import { motion } from "motion/react";

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
  return (
    <section className="py-24 sm:py-32 min-h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Spotlight />
      </motion.div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-bold leading-7 text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-2">
            Tecnologia & Inovação
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            O que você encontra nos meus projetos
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

