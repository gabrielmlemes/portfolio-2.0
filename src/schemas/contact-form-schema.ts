import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Por favor, insira seu nome."),
  email: z.email("Por favor, insira um email válido."),
  message: z.string().min(1, "Por favor, insira sua mensagem."),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

