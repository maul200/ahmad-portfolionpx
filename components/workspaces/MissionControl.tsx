import { motion } from "framer-motion";

export const MissionControl = () => (
  <motion.div
    key="mission-control"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >
    <p className="text-xs text-slate-500 font-mono tracking-widest">
      ACTIVE WORKSPACE // MISSION_CONTROL
    </p>

    {/* Row Atas: Status & Mission */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
      {/* Current Status */}
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

      {/* Mission Directive */}
      <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] flex flex-col justify-center">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">
          Mission Directive
        </h3>
        <p className="text-sm md:text-base font-mono text-slate-200 leading-relaxed">
          Developing web systems that improve operations, reporting, and decision-making.
        </p>
      </div>
    </div>

    {/* Row Bawah: Satu Kotak Penuh untuk Core Stack + Metrik Highlight di Header */}
    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] flex flex-col justify-center">
      
      {/* Header Bar: Rata Kiri & Rata Kanan */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
          Core Stack Environment
        </h3>

        {/* Highlight Pill Badge Rata Kanan */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>3+ SYSTEMS DEVELOPED</span>
        </div>
      </div>

      {/* Grid 4 Kolom di Area Penuh */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Next.js */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
          <img src="/nextjs.png" alt="Next.js" className="w-5 h-5 object-contain shrink-0" />
          <span className="text-xs font-mono text-slate-200">Next.js</span>
        </div>

        {/* Laravel */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
          <img src="/laravel.webp" alt="Laravel" className="w-5 h-5 object-contain shrink-0" />
          <span className="text-xs font-mono text-slate-200">Laravel</span>
        </div>

        {/* PHP */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
          <img src="/php.png" alt="PHP" className="w-5 h-5 object-contain shrink-0" />
          <span className="text-xs font-mono text-slate-200">PHP</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
          <img src="/tailwind.png" alt="Tailwind CSS" className="w-5 h-5 object-contain shrink-0" />
          <span className="text-xs font-mono text-slate-200">Tailwind</span>
        </div>
      </div>

    </div>
  </motion.div>
);