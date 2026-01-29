"use client";

import { motion, Variants, MotionProps } from "framer-motion";
import Link from "next/link";
import { SocialLinks } from "./ui/SocialLinks";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HoverBorderGradient } from "./ui/hero-button";

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
      duration: 1.0,
      ease: "easeOut",
    },
  },
};

interface AnimatedItemProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedItem = ({ children, className, ...props }: AnimatedItemProps) => (
  <motion.div variants={itemVariants} className={className} {...props}>
    {children}
  </motion.div>
);

export function HeroClient() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedItem>
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-sm sm:text-8xl">
          Gabriel Lemes
        </h1>
      </AnimatedItem>

      <AnimatedItem>
        <p className="max-w-2xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent sm:text-lg lg:text-3xl">
          Desenvolvedor de Software
        </p>
      </AnimatedItem>

      <AnimatedItem className="flex justify-center">
        <Link href="#projetos">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex cursor-pointer text-lg items-center justify-center gap-2 bg-black bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
          >
            Ver projetos
            <HiOutlineArrowRight className="text-slate-400" />
          </HoverBorderGradient>
        </Link>
      </AnimatedItem>

      <AnimatedItem>
        <SocialLinks />
      </AnimatedItem>
    </motion.div>
  );
}

