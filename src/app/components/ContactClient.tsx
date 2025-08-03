/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { ContactForm } from "./ui/ContactForm";
import { Position } from "./ui/globe";

// Tipos para as props
interface ContactClientProps {
  globeConfig: any;
  sampleArcs: Position[];
}

// Importação dinâmica do globo, pois ele precisa do ambiente do navegador
const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

// Memoriza o globo para evitar re-renderizações desnecessárias
const MemoizedWorld = memo(World);

export function ContactClient({ globeConfig, sampleArcs }: ContactClientProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Globe Section */}
      <div className="w-full md:w-1/2 lg:w-2/5 h-96 md:h-[30rem] relative">
        <MemoizedWorld data={sampleArcs} globeConfig={globeConfig} />
      </div>

      {/* Form Section */}
      <ContactForm />
    </div>
  );
}

