'use client';

import { motion } from 'framer-motion';
import TrueFocus from '../ui/focus-text';

export function ContactTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center mb-12"
    >
      <TrueFocus
        sentence="Foco em qualidade"
        manualMode={false}
        blurAmount={5}
        borderColor="#155DFC"
        animationDuration={1}
        pauseBetweenAnimations={0.7}
      />
      <p className="text-base md:text-lg text-slate-400 mt-3">
        Estou sempre aberto a novas oportunidades e colaborações. Vamos
        trabalhar juntos?
      </p>
    </motion.div>
  );
}
