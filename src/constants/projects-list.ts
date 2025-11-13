import { Projects } from "@/types/projects";

export const ProjectsList: Projects[] = [
  {
    name: "Barber SASS",
    description:
      "Uma plataforma intuitiva, moderna e totalmente responsiva para agendar e gerenciar serviços de barbearias com facilidade!",
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
    ],
    githubUrl: "https://github.com/gabrielmlemes/fsw-barber",
    deployedUrl: "https://fsw-barber-kohl.vercel.app/",
    image: "/projects/fswbarber.jpg",
  },
  {
    name: "The Pizza",
    description:
      "The Pizza é um sistema de controle de pedidos interativo para pizzarias e restaurantes, desenvolvido para proporcionar uma experiência de usuário fluida.",
    technologies: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Express",
        icon: "express",
      },
      {
        name: "TailwindCSS",
        icon: "tailwind",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "Prisma",
        icon: "prisma",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
    ],
    githubUrl: "https://github.com/gabrielmlemes/pizzaria-frontend",
    deployedUrl: "https://thepizzaweb.vercel.app/",
    image: "/projects/thepizzajpg.jpg",
  },
  {
    name: "Dev Controle",
    description:
      "Uma plataforma moderna e intuitiva, projetada para que o os usuários possam cadastrar clientes e organizar chamados de forma prática e eficiente.",
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
        name: "MongoDB",
        icon: "mongodb",
      },
    ],
    githubUrl: "https://github.com/gabrielmlemes/devcontrole",
    deployedUrl: "https://mydevcontrole.vercel.app/",
    image: "/projects/devcontrole.jpg",
  },
];

