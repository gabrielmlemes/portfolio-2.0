import {
  EnvelopeIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const NavItems = [
  { name: "Início", href: "#inicio", icon: <HomeIcon className="w-6 h-6" /> },
  { name: "Sobre", href: "#sobre", icon: <UserIcon className="w-6 h-6" /> },
  {
    name: "Projetos",
    href: "#projetos",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    name: "Contato",
    href: "#contato",
    icon: <EnvelopeIcon className="w-6 h-6" />,
  },
];

