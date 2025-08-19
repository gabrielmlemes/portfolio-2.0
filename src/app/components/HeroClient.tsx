"use client";

import { motion, Variants, MotionProps } from "framer-motion";
import Link from "next/link";
import { SocialLinks } from "./ui/SocialLinks";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HoverBorderGradient } from "./ui/button";
import { TextAnimate } from "./ui/blur-text-animation";

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
      <TextAnimate
        animation="blurIn"
        as="h1"
        duration={0.2}
        once={true}
        by="character"
        className="text-4xl font-bold sm:text-7xl text-secondary"
      >
        Gabriel Lemes
      </TextAnimate>

      <TextAnimate
        animation="blurIn"
        as="p"
        duration={0.2}
        once={true}
        by="character"
        delay={0.2}
        className="max-w-2xl sm:text-lg lg:text-xl text-secondary"
      >
        Software Developer
      </TextAnimate>

      <AnimatedItem className="flex justify-center">
        <Link href="#projetos">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black cursor-pointer text-slate-200 flex items-center justify-center gap-2"
          >
            Ver Projetos
            <HiOutlineArrowRight />
          </HoverBorderGradient>
        </Link>
      </AnimatedItem>

      <AnimatedItem className="flex items-center justify-center">
        <SocialLinks />
      </AnimatedItem>
    </motion.div>
  );
}

