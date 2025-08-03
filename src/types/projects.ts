interface Technologies {
  name: string;
  icon: string;
}

export interface Projects {
  name: string;
  description: string;
  technologies: Technologies[];
  githubUrl: string;
  deployedUrl: string;
  image: string;
}

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
      "The Pizza é um sistema de controle de pedidos interativo para pizzarias e restaurantes, desenvolvido para proporcionar uma experiência de usuário fluida e intuitiva.",
    technologies: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Node.js",
        icon: "nodejs",
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
    githubUrl: "https://github.com/gabrielmlemes/fsw-barber",
    deployedUrl: "https://thepizzaweb.vercel.app/dashboard",
    image: "/projects/portfolio-website.jpg",
  },
  {
    name: "Project 3",
    description:
      "Uma plataforma intuitiva, moderna e totalmente responsiva para agendar e gerenciar serviços de barbearias com facilidade!",
    technologies: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "TailwindCSS",
        icon: "tailwind",
      },
    ],
    githubUrl: "https://github.com/gabrielmlemes/fsw-barber",
    deployedUrl: "https://fsw-barber-kohl.vercel.app/",
    image: "/projects/portfolio-website.jpg",
  },
];

