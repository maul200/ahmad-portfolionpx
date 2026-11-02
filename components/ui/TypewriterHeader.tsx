"use client";

import { motion } from "framer-motion";

export const TypewriterHeader = ({ text }: { text: string }) => {
  return (
    <p className="text-xs text-slate-500 font-mono tracking-widest">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: index * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};