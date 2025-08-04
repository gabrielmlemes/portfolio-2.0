"use client";
import React, { Suspense, lazy } from "react";
import { LoaderOne } from "./ui/loader"; // Importar o LoaderOne

const LazyContactClient = lazy(() =>
  import("./ContactClient").then((module) => ({
    default: module.ContactClient,
  }))
);

export function Contact() {
  return (
    <section className="w-full py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 mt-2">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>
        <Suspense fallback={<LoaderOne />}>
          <LazyContactClient />
        </Suspense>
      </div>
    </section>
  );
}

