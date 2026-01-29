import { Projects } from "@/types/projects";

export const ProjectsList: Projects[] = [
  {
    name: "Inkore",
    description: [
      "Gestão de Agenda: Calendário completo para visualizar e gerenciar todos os agendamentos."
      ,
      "Configuração de Serviços: Cadastro de serviços com preços, durações e descrições personalizadas."
      ,
      "Horários de Funcionamento: Definição de horários de trabalho e pausas (almoço, etc.)."
      ,
      "Página de Agendamento Pública: Cada estúdio possui uma página com URL única e amigável (/estudio/nome-do-estudio) para que os clientes possam agendar."
      ,
      "Autenticação Social: Login seguro para os donos de estúdio via contas Google."
      ,
      "Gestão de Assinaturas: Integração com a Stripe para gerenciar planos e pagamentos.",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "TailwindCSS",
        icon: "tailwind",
      },
      {
        name: "Prisma",
        icon: "prisma",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "Stripe",
        icon: "stripe",
      },
      {
        name: "Google OAuth",
        icon: "google",
      },
      {
        name: "Cloudinary",
        icon: "cloudinary",
      },
      
    ],
    post: "https://www.linkedin.com/feed/update/urn:li:activity:7420533368359940096/",
    githubUrl: "https://github.com/gabrielmlemes/Inkore-SAAS",
    deployedUrl: "https://www.inkorestudio.com.br/",
    image: "/public/inkore.jpg",
  },
  {
    name: "FSW Barber",
    description: [
      "Uma plataforma intuitiva, moderna e totalmente responsiva para agendar e gerenciar serviços de barbearias com facilidade!"
      ,
      "Página Home com diversas barbearias e funcionalidades para o usuário."
      ,
      "Página de login com Google."
      ,
      "Página de agendamentos de serviços."
      ,
      "Página detalhada da barbearia com os serviços que ela oferece."
      ,
      "Página de busca."
      ,
      "Ferramentas: Shadcn UI (biblioteca de componentes UI), ESLint (análise de código), Lint-Staged (verificação pré-commit), Husky (automação de validação Git), Google Auth (autenticação via Google)."
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "TailwindCSS",
        icon: "tailwind",
      },
      {
        name: "Prisma",
        icon: "prisma",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "Google OAuth",
        icon: "google",
      },
    ],
    githubUrl: "https://github.com/gabrielmlemes/fsw-barber",
    deployedUrl: "https://fsw-barber-kohl.vercel.app/",
    image: "/projects/fswbarber.jpg",
    post: "",
  },
];

export const SkillsList = [
  
]