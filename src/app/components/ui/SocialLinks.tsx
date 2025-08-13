"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

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
    <Tooltip.Provider delayDuration={100}>
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((social) => (
          <Tooltip.Root key={social.name}>
            <Tooltip.Trigger asChild>
              <Link
                href={social.href}
                target="_blank"
                aria-label={social.name}
                className="text-secondary transition-all hover:text-slate-300 hover:scale-110 duration-150"
              >
                {social.icon}
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={5}
                className="z-50 overflow-hidden rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 shadow-md animate-in fade-in-0 zoom-in-95"
              >
                {social.name}
                <Tooltip.Arrow className="fill-slate-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  );
}

