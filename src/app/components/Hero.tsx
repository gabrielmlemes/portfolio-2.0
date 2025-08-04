"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { Mouse } from "./ui/Mouse";

export function Hero() {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center rounded-md relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 via-neutral-400 to-neutral-700"
      >
        Gabriel Lemes
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-full max-w-2/3 h-28 sm:h-40 relative"
      >
        {/* Gradients */}
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="xs:max-w-fit  rounded-bl-[100px] overflow-hidden rounded-br-[100px] md:w-full lg:w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </motion.div>
      <Mouse />
    </section>
  );
}

