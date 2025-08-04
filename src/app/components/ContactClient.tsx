"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ui/ContactForm";

export function ContactClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full max-w-xl mx-auto bg-[var(--background)] backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800" // Ajustado para ocupar a largura total e centralizar
    >
      <ContactForm />
    </motion.div>
  );
}

