"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/gabrielmlemes",
    icon: <FaGithub size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabrielmlemes/",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5561986626251?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%21",
    icon: <FaWhatsapp size={24} />,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          aria-label={social.name}
          className="text-slate-300 transition-all hover:text-blue-500 hover:scale-105 duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

