import { motion } from "framer-motion";

export const Contact = () => (
  <motion.div
    key="contact"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >
    <p className="text-xs text-slate-500 font-mono tracking-widest">
      ACTIVE WORKSPACE // COMMS_PROTOCOL
    </p>

    <div className="border border-white/10 rounded-xl bg-white/[0.02] flex-1 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)]" />

      <div className="z-10 w-full max-w-lg space-y-6 md:space-y-8">
        <div className="text-center space-y-3 md:space-y-4">
          <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-300">Establish Connection</h3>
            <p className="text-[10px] md:text-xs font-mono text-slate-500 mt-1 px-4">Select a secure channel to initiate transmission.</p>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          {/* EMAIL */}
          <a href="mailto:ahmadmauluddin173@gmail.com" className="block w-full p-3 md:p-4 border border-white/10 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] hover:border-slate-400 transition-all group flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
              <span className="text-slate-500 group-hover:text-[#EA4335] transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span className="text-slate-300 text-[10px] md:text-sm font-mono truncate">ahmadmauluddin173@gmail.com</span>
            </div>
            <span className="text-[8px] md:text-[10px] font-mono text-slate-600 group-hover:text-slate-400 tracking-wide md:tracking-widest shrink-0">[INITIATE]</span>
          </a>

          {/* LINKEDIN */}
          <a href="https://linkedin.com/in/ahm.mauluddin" target="_blank" rel="noreferrer" className="block w-full p-3 md:p-4 border border-white/10 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] hover:border-slate-400 transition-all group flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
              <span className="text-slate-500 group-hover:text-[#0A66C2] transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              <span className="text-slate-300 text-[10px] md:text-sm font-mono truncate">/in/ahm.mauluddin</span>
            </div>
            <span className="text-[8px] md:text-[10px] font-mono text-slate-600 group-hover:text-slate-400 tracking-wide md:tracking-widest shrink-0">[CONNECT]</span>
          </a>

          {/* WHATSAPP */}
          <a href="https://wa.me/6289524136688" target="_blank" rel="noreferrer" className="block w-full p-3 md:p-4 border border-white/10 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] hover:border-slate-400 transition-all group flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
              <span className="text-slate-500 group-hover:text-[#25D366] transition-colors shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span className="text-slate-300 text-[10px] md:text-sm font-mono truncate">0895-2413-6688</span>
            </div>
            <span className="text-[8px] md:text-[10px] font-mono text-slate-600 group-hover:text-slate-400 tracking-wide md:tracking-widest shrink-0">[PING]</span>
          </a>

          {/* INSTAGRAM */}
          <a href="https://instagram.com/ahm.mauluddin" target="_blank" rel="noreferrer" className="block w-full p-3 md:p-4 border border-white/10 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] hover:border-slate-400 transition-all group flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
              <span className="text-slate-500 group-hover:text-[#E1306C] transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </span>
              <span className="text-slate-300 text-[10px] md:text-sm font-mono truncate">@ahm.mauluddin</span>
            </div>
            <span className="text-[8px] md:text-[10px] font-mono text-slate-600 group-hover:text-slate-400 tracking-wide md:tracking-widest shrink-0">[CONNECT]</span>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);