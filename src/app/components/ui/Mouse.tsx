"use client";

import { motion } from "framer-motion";

export function Mouse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.9 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
    >
      <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center items-start p-1">
        <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
      </div>
    </motion.div>
  );
}

