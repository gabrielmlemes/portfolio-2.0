"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Por favor, insira um email válido."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: { [key: string]: string } = {};
      for (const issue of result.error.issues) {
        newErrors[issue.path[0]] = issue.message;
      }
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("loading");

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Substitua pelo seu Service ID
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Substitua pela sua Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 lg:w-2/5 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-800"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative pb-4" // Add relative positioning and padding
        >
          <label htmlFor="name" className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full bg-transparent border-0 border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
            placeholder="Seu nome completo"
          />
          {errors.name && <p className="absolute bottom-0 text-xs text-red-500">{errors.name}</p>}
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative pb-4" // Add relative positioning and padding
        >
          <label htmlFor="email" className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
            placeholder="seu.email@exemplo.com"
          />
          {errors.email && <p className="absolute bottom-0 text-xs text-red-500">{errors.email}</p>}
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative pb-4" // Add relative positioning and padding
        >
          <label htmlFor="message" className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full bg-transparent border-0 border-b-2 ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
            placeholder="Como posso te ajudar?"
          ></textarea>
          {errors.message && <p className="absolute bottom-0 text-xs text-red-500">{errors.message}</p>}
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSend />
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          {status === 'success' && <p className="mt-2 text-sm text-green-500">Mensagem enviada com sucesso!</p>}
          {status === 'error' && !errors.name && !errors.email && !errors.message && <p className="mt-2 text-sm text-red-500">Ocorreu um erro ao enviar a mensagem. Tente novamente.</p>}
        </motion.div>
      </form>
    </motion.div>
  );
}
