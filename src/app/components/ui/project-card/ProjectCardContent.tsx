import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectCardContentProps {
  children: ReactNode;
}

export function ProjectCardContent({ children }: ProjectCardContentProps) {
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="max-w-xl"
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}