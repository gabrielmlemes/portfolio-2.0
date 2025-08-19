'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mx-auto max-w-2xl text-center">
      <motion.h2
        id="about-heading"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={animationVariants}
        className="text-lg font-semibold leading-7 text-blue-400"
      >
        Tecnologia & Inovação
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={animationVariants}
        className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        O que você encontra nos meus projetos
      </motion.p>
    </div>
  );
}
