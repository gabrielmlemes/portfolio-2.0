"use client";
import { motion } from "framer-motion";
import { NavItems } from "@/utils/navbar-items";
import Link from "next/link";

export default function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-6"
    >
      <nav
        className="mx-auto flex h-16 max-w-sm items-center justify-center rounded-full border border-white/10 bg-black/30 p-2 shadow-lg backdrop-blur-md"
        role="navigation"
        aria-label="Menu principal"
      >
        <ul className="flex w-full items-center justify-around">
          {NavItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 text-center text-slate-300 transition-colors hover:text-white"
                aria-label={item.name}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

