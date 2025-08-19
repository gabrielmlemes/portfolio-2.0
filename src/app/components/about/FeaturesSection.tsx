'use client';

import { motion } from 'framer-motion';
import { features } from '@/utils/about-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  return (
    <motion.dl
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.name}
          variants={itemVariants}
          className="group relative pl-16"
        >
          <dt className="text-lg font-semibold leading-7 text-white">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 transition-colors duration-300 group-hover:bg-blue-500">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            {feature.name}
          </dt>
          <dd className="mt-2 text-base leading-7 text-slate-400">
            {feature.description}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
