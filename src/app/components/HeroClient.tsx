"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AnimatedShinyText } from "./ui/shiny-text";
import { HoverBorderGradient } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HeroClient() {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>
        <AnimatedShinyText className="text-6xl font-bold sm:text-7xl">
          Gabriel Lemes
        </AnimatedShinyText>
      </motion.h1>

      <motion.p className="mt-4 max-w-2xl sm:text-lg lg:text-xl">
        <AnimatedShinyText>Desenvolvedor Frontend</AnimatedShinyText>
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-6 flex justify-center sm:mt-8"
      >
        <Link href="#projetos">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center justify-center gap-2"
          >
            Ver Projetos
            <HiOutlineArrowRight />
          </HoverBorderGradient>
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-6 flex items-center justify-center gap-6 sm:mt-8"
      >
        <Link
          href="https://github.com/gabrielmlemes"
          target="_blank"
          aria-label="GitHub"
          className="text-slate-300 transition-colors hover:text-blue-400"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gabrielmlemes/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-slate-300 transition-colors hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://wa.me/5561986626251?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%21"
          target="_blank"
          aria-label="WhatsApp"
          className="text-slate-300 transition-colors hover:text-blue-400"
        >
          <FaWhatsapp size={24} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
