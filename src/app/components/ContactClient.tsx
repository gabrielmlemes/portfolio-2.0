/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion"; // Importar motion
import { ContactForm } from "./ui/ContactForm";
import { Position } from "./ui/globe";
import { LoaderOne } from "./ui/loader"; // Importar o LoaderOne

// Tipos para as props
interface ContactClientProps {
  globeConfig: any;
  sampleArcs: Position[];
}

// Importação dinâmica do globo, com fallback de carregamento
const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="w-full md:w-1/2 lg:w-2/5 h-96 md:h-[30rem] relative flex items-center justify-center">
      <LoaderOne />
    </div>
  ), // Usar o LoaderOne como fallback, com as mesmas dimensões do globo
});

// Memoriza o globo para evitar re-renderizações desnecessárias
const MemoizedWorld = memo(World);

export function ContactClient({ globeConfig, sampleArcs }: ContactClientProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Globe Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 lg:w-2/5 h-96 md:h-[30rem] relative"
      >
        <MemoizedWorld data={sampleArcs} globeConfig={globeConfig} />
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 lg:w-2/5 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800" // Adicionadas as classes de estilo aqui
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}