"use client";
import { motion } from "framer-motion";
import { NavItems } from "@/utils/navbar-items";

export default function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="fixed left-1/2 -translate-1/2 top-13 w-fit z-50 "
    >
      <div className="flex-grow flex justify-center px-4">
        <nav
          className="w-full max-w-xs flex h-18 justify-center items-center backdrop-blur-md shadow-md rounded-xl px-4 py-2 bg-black/20"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul className="w-full flex space-x-4 justify-around items-center">
            {NavItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex flex-col items-center justify-center text-center font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 p-2 rounded-lg"
                  aria-label={item.name}
                >
                  {item.icon}
                  <span className="text-xs">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

