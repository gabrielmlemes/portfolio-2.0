"use client";
import { cn } from "@/utils/tailwind-merge";
import { motion } from "framer-motion";

export function ArrowDown({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className={cn(
        "absolute bottom-5 animate-bounce text-neutral-400/70",
        className
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M12 19L18 13M12 19L6 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
