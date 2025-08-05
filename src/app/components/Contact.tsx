"use client";
import React, { Suspense, lazy } from "react";
import { LoaderOne } from "./ui/loader"; // Importar o LoaderOne
import TrueFocus from "./ui/focus-text";
import { motion } from "framer-motion";

const LazyContactClient = lazy(() =>
  import("./ContactClient").then((module) => ({
    default: module.ContactClient,
  }))
);

export function Contact() {
  return (
    <section className="w-full py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-12"
        >
          <TrueFocus
            sentence="Foco na qualidade"
            manualMode={false}
            blurAmount={5}
            borderColor="#155DFC"
            animationDuration={1}
            pauseBetweenAnimations={0.7}
          />
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 mt-3">
            Estou sempre aberto a novas oportunidades e colaborações. Vamos
            trabalhar juntos?
          </p>
        </motion.div>
        <Suspense fallback={<LoaderOne />}>
          <LazyContactClient />
        </Suspense>
      </div>
    </section>
  );
}

