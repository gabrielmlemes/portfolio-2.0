'use client';

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../ui/ContactForm";

export function ContactFormWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full max-w-xl mx-auto bg-background/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800"
    >
      <ContactForm />
    </motion.div>
  );
}
