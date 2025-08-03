"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Por favor, insira um email válido."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const messageValue = watch("message");

  // Combine o ref do react-hook-form com o seu ref local
  const combinedMessageRef = useCallback((element: HTMLTextAreaElement) => {
    messageRef.current = element; // Seu ref local
    const { ref } = register("message"); // Obtenha o ref do react-hook-form
    ref(element); // Passe o elemento para o ref do react-hook-form
  }, [register]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = messageRef.current.scrollHeight + "px";
    }
  }, [messageValue]);

  const onSubmit = async (data: ContactFormInputs) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative pb-4"
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-500 dark:text-neutral-400"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={`mt-1 block w-full outline-none bg-transparent border-0 border-b-2 ${
            errors.name
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
          placeholder="Seu nome completo"
        />
        {errors.name && (
          <p className="absolute bottom-0 text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative pb-4"
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-500 dark:text-neutral-400"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`mt-1 block outline-none w-full bg-transparent border-0 border-b-2 ${
            errors.email
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
          placeholder="seu.email@exemplo.com"
        />
        {errors.email && (
          <p className="absolute bottom-0 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative pb-4"
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-500 dark:text-neutral-400"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          rows={1}
          {...register("message", { shouldUnregister: true })} // Adicionado shouldUnregister
          ref={combinedMessageRef}
          className={`mt-1 block w-full bg-transparent outline-none border-0 border-b-2 resize-none overflow-hidden ${
            errors.message
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } focus:ring-0 focus:border-indigo-500 transition-colors py-2 px-1`}
          placeholder="Como posso te ajudar?"
        ></textarea>
        {errors.message && (
          <p className="absolute bottom-0 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiSend />
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
        {status === "success" && (
          <p className="mt-2 text-sm text-green-500">
            Mensagem enviada com sucesso!
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-500">
            Ocorreu um erro ao enviar a mensagem. Tente novamente.
          </p>
        )}
      </motion.div>
    </form>
  );
}