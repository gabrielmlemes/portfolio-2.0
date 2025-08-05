import { motion } from "framer-motion";

interface ProjectCardInfoProps {
  name: string;
  description: string;
}

export function ProjectCardInfo({ name, description }: ProjectCardInfoProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={textVariants}>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}