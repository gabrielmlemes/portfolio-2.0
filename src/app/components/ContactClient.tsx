/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ui/ContactForm";

export function ContactClient() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Form Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-xl bg-white dark:bg-[var(--background)] backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800" // Ajustado para ocupar a largura total e centralizar
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}