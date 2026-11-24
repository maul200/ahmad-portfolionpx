"use client";

import { TypewriterHeader } from "@/components/ui/TypewriterHeader";
import { motion, Variants } from "framer-motion";

const coreStacks = [
  {
    name: "Next.js",
    icon: "/nextjs.png",
    orderClass: "sm:order-1",
  },
  {
    name: "React",
    icon: "/react.png",
    orderClass: "sm:order-4",
  },
  {
    name: "Laravel",
    icon: "/laravel.webp",
    orderClass: "sm:order-2",
  },
  {
    name: "PHP",
    icon: "/php.png",
    orderClass: "sm:order-5",
  },
  {
    name: "TypeScript",
    icon: "/typescript.png",
    orderClass: "sm:order-3",
  },
  {
    name: "Tailwind",
    icon: "/tailwind.png",
    orderClass: "sm:order-6",
  },
];

const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
    },
  },
};

const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.05,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const scanlineVariants: Variants = {
  hidden: {
    left: "0%",
    opacity: 0,
  },
  visible: {
    left: ["0%", "100%"],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1.05,
      ease: [0.4, 0, 0.2, 1],
      opacity: {
        duration: 1.05,
        times: [0, 0.1, 0.85, 1],
      },
    },
  },
};

const iconPopVariants: Variants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: [0.4, 1.25, 1],
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: 0.52,
    },
  },
};

export const MissionControl = () => (
  <motion.div
    key="mission-control"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >
    <TypewriterHeader text="ACTIVE WORKSPACE // MISSION_CONTROL" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
      <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">
          Current Status
        </h3>
        <ul className="space-y-3 text-sm font-mono">
          <li className="flex justify-between items-center">
            <span className="text-slate-400">State</span>
            <span className="text-green-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              ACTIVE
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-slate-400">Location</span>
            <span className="text-slate-200">Indonesia</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-slate-400">Role</span>
            <span className="text-slate-200">Web Developer</span>
          </li>
        </ul>
      </div>

      <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] flex flex-col justify-center">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">
          Mission Directive
        </h3>
        <p className="text-sm md:text-base font-mono text-slate-200 leading-relaxed">
          Developing web systems that improve operations, reporting, and
          decision-making.
        </p>
      </div>
    </div>

    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] flex flex-col justify-center">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
          Core Stack Environment
        </h3>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>3+ SYSTEMS DEVELOPED</span>
        </div>
      </div>

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {coreStacks.map((stack) => (
          <motion.div
            key={stack.name}
            variants={cardRevealVariants}
            style={{ willChange: "clip-path, opacity" }}
            className={`${stack.orderClass} relative overflow-hidden min-w-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors`}
          >
            <motion.span
              variants={scanlineVariants}
              className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-green-400 shadow-[0_0_8px_#4ade80]"
            />

            <motion.img
              src={stack.icon}
              alt={stack.name}
              variants={iconPopVariants}
              className="w-5 h-5 object-contain shrink-0"
            />

            <span className="text-xs font-mono text-slate-200 truncate">
              {stack.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>
);