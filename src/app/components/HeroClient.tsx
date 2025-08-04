"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

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
      <motion.h1
        variants={itemVariants}
        className="text-6xl leading-16 font-bold tracking-tight text-transparent sm:text-7xl bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text drop-shadow-md"
      >
        Gabriel Lemes
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg"
      >
        Desenvolvedor Frontend
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-6 flex justify-center sm:mt-8"
      >
        <Link
          href="#projetos"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:bg-indigo-700 sm:px-6 sm:py-3 sm:text-base"
        >
          Ver Projetos
          <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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
          className="text-slate-500 transition-colors hover:text-indigo-400"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gabrielmlemes/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-slate-500 transition-colors hover:text-indigo-400"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://wa.me/5561986626251?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%21"
          target="_blank"
          aria-label="WhatsApp"
          className="text-slate-500 transition-colors hover:text-indigo-400"
        >
          <FaWhatsapp size={24} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
