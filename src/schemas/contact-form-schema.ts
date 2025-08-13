import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Por favor, insira um email válido."),
  message: z.string().min(5, "A mensagem deve ter pelo menos 5 caracteres."),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

