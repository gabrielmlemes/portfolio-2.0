import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectCardRootProps {
  children: ReactNode;
}

export function ProjectCardRoot({ children }: ProjectCardRootProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.article
      className="flex flex-col items-start justify-between"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.article>
  );
}