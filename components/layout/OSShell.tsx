"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MissionControl } from "@/components/workspaces/MissionControl";
import { SystemsArchive } from "@/components/workspaces/SystemsArchive";
import { Profile } from "@/components/workspaces/Profile";
import { ExperienceLog } from "@/components/workspaces/ExperienceLog";
import { Contact } from "@/components/workspaces/Contact";

// --- KOMPONEN BANTUAN DI LUAR FUNGSI UTAMA ---
// Dipindahkan ke sini agar tidak terre-start (re-mount) saat user pindah tab menu

const SidebarHeader = ({ title, elRef }: { title: string, elRef: any }) => (
  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 px-2 flex items-center gap-2">
    <motion.span
      initial={{ color: "#64748b" }}
      animate={{ color: ["#64748b", "#4ade80", "#4ade80", "#64748b"] }}
      transition={{ duration: 1.5, times: [0, 0.01, 0.8, 1], delay: 5 }} 
      className="flex items-center gap-2"
    >
      <span ref={elRef} className="inline-block leading-none">▼</span>
      <span>{title}</span>
    </motion.span>
  </p>
);

const NavButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-md px-3 py-1.5 text-sm transition-all duration-200 ${
      isActive
        ? "bg-white/10 text-white font-medium pl-4"
        : "text-slate-400 hover:bg-white/5 hover:text-slate-200 hover:pl-4"
    }`}
  >
    {label}
  </button>
);

const MobileNavButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap rounded-md px-4 py-2 text-[10px] font-mono transition-all duration-200 uppercase tracking-wider ${
      isActive
        ? "bg-white/10 text-white border border-white/20"
        : "text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent"
    }`}
  >
    {label}
  </button>
);

// --- FUNGSI UTAMA HALAMAN ---

export function OSShell() {
  const [activeTab, setActiveTab] = useState("mission-control");
  const navRef = useRef<HTMLElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [cvOrigin, setCvOrigin] = useState({ x: 0, y: 0 });

  const coreRef = useRef<HTMLSpanElement>(null);
  const recordsRef = useRef<HTMLSpanElement>(null);
  const externalRef = useRef<HTMLSpanElement>(null);
  const [animPoints, setAnimPoints] = useState<any>(null);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = navRef.current;
      setShowScrollHint(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  useEffect(() => {
    const getPoints = () => {
      if (window.innerWidth >= 1024) {
        setAnimPoints({
          core: coreRef.current?.getBoundingClientRect(),
          records: recordsRef.current?.getBoundingClientRect(),
          external: externalRef.current?.getBoundingClientRect(),
          w: window.innerWidth,
          h: window.innerHeight
        });
      } else {
        setAnimPoints(null);
      }
    };
    
    const timeoutId = setTimeout(getPoints, 100);
    window.addEventListener('resize', getPoints);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', getPoints);
    };
  }, []);

  const handleOpenCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
    setCvOrigin({ x: startX, y: startY });
    setIsCVOpen(true);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-2 md:p-4 relative">
        <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative z-10">
          
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-white/[0.02] shrink-0">
            <div className="flex items-center gap-2">
              <div className="text-xs font-mono text-slate-400 font-semibold tracking-widest">
                AM.OS <span className="text-slate-600 font-normal">v1.0.0</span>
              </div>
              <div className="md:hidden h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse ml-1" />
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-slate-400">
                  SYSTEM ONLINE
                </span>
              </div>
              <button
                onClick={handleOpenCV}
                className="lg:hidden whitespace-nowrap rounded px-3 py-1.5 text-[9px] md:text-[10px] font-mono transition-all duration-200 uppercase tracking-widest text-green-400 bg-green-400/10 hover:bg-green-400/20 border border-green-400/30 shadow-[0_0_10px_rgba(74,222,128,0.1)]"
              >
                View CV
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] h-[72vh] min-h-[575px]">
            
            {/* Sidebar Explorer Desktop */}
            <aside className="hidden lg:flex border-r border-white/10 p-4 flex-col gap-6 bg-white/[0.01] overflow-y-auto custom-scrollbar">
              <div>
                <SidebarHeader title="Core" elRef={coreRef} />
                <div className="space-y-0.5">
                  <NavButton label="Mission Control" isActive={activeTab === "mission-control"} onClick={() => setActiveTab("mission-control")} />
                  <NavButton label="Profile" isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
                </div>
              </div>

              <div>
                <SidebarHeader title="Records" elRef={recordsRef} />
                <div className="space-y-0.5">
                  <NavButton label="Systems Archive" isActive={activeTab === "systems-archive"} onClick={() => setActiveTab("systems-archive")} />
                  <NavButton label="Experience Log" isActive={activeTab === "experience-log"} onClick={() => setActiveTab("experience-log")} />
                </div>
              </div>

              <div>
                <SidebarHeader title="External" elRef={externalRef} />
                <div className="space-y-0.5">
                  <NavButton label="Contact Link" isActive={activeTab === "contact"} onClick={() => setActiveTab("contact")} />
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <button
                  onClick={handleOpenCV}
                  className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md px-3 py-2 text-xs font-mono text-slate-300 transition-all group relative overflow-hidden"
                >
                  <span className="relative z-10">VIEW_CV</span>
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-300">↗</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </button>
              </div>
            </aside>

            {/* Dynamic Workspace */}
            <main className="flex-1 p-5 md:p-8 lg:p-10 bg-black/20 overflow-y-auto custom-scrollbar relative">
              <AnimatePresence mode="wait">
                {activeTab === "mission-control" && <MissionControl />}
                {activeTab === "systems-archive" && <SystemsArchive />}
                {activeTab === "profile" && <Profile />}
                {activeTab === "experience-log" && <ExperienceLog />}
                {activeTab === "contact" && <Contact />}
              </AnimatePresence>
            </main>

            {/* Taskbar Bottom Mobile */}
            <div className="lg:hidden relative border-t border-white/10 bg-[#050505] overflow-hidden shrink-0">
              <nav ref={navRef} onScroll={checkScroll} className="flex items-center gap-2 p-3 overflow-x-auto custom-scrollbar relative z-10">
                <MobileNavButton label="Mission" isActive={activeTab === "mission-control"} onClick={() => setActiveTab("mission-control")} />
                <MobileNavButton label="Profile" isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
                <MobileNavButton label="Systems" isActive={activeTab === "systems-archive"} onClick={() => setActiveTab("systems-archive")} />
                <MobileNavButton label="Logs" isActive={activeTab === "experience-log"} onClick={() => setActiveTab("experience-log")} />
                <MobileNavButton label="Comms" isActive={activeTab === "contact"} onClick={() => setActiveTab("contact")} />
                <div className="min-w-[4px] shrink-0" />
              </nav>
              <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-20 flex items-center justify-end pr-2 transition-opacity duration-300 ${showScrollHint ? "opacity-100" : "opacity-0"}`}>
                <span className="text-slate-500 text-sm animate-pulse">»</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EFEK SERPIHAN SEGITIGA BEBAS MENGELILINGI LAYAR DESKTOP --- */}
      {animPoints && (
        <div className="fixed inset-0 pointer-events-none z-[50] hidden lg:block overflow-hidden">
          
          {/* Segitiga Menu CORE */}
          {animPoints.core && (
            <motion.div
              className="absolute text-slate-400 font-mono text-[10px] leading-none"
              initial={{ x: animPoints.w * 0.9, y: animPoints.h * 0.1, rotate: 0, scale: 3, opacity: 0 }}
              animate={{
                x: [animPoints.w * 0.9, animPoints.w * 0.5, animPoints.w * 0.8, animPoints.core.left], 
                y: [animPoints.h * 0.1, animPoints.h * 0.8, animPoints.h * 0.5, animPoints.core.top],
                rotate: [0, 360, -720, 1080],
                scale: [3, 4, 1.5, 1],
                opacity: [0, 1, 1, 1, 0] 
              }}
              transition={{ 
                default: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 5, times: [0, 0.05, 0.99, 1] } 
              }}
            >
              ▼
            </motion.div>
          )}

          {/* Segitiga Menu RECORDS */}
          {animPoints.records && (
            <motion.div
              className="absolute text-slate-400 font-mono text-[10px] leading-none"
              initial={{ x: animPoints.w * 0.1, y: animPoints.h * 0.9, rotate: 0, scale: 3, opacity: 0 }}
              animate={{
                x: [animPoints.w * 0.1, animPoints.w * 0.6, animPoints.w * 0.3, animPoints.records.left], 
                y: [animPoints.h * 0.9, animPoints.h * 0.2, animPoints.h * 0.7, animPoints.records.top],
                rotate: [0, -360, 720, -1080],
                scale: [3, 5, 2, 1],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ 
                default: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 5, times: [0, 0.05, 0.99, 1] } 
              }}
            >
              ▼
            </motion.div>
          )}

          {/* Segitiga Menu EXTERNAL */}
          {animPoints.external && (
            <motion.div
              className="absolute text-slate-400 font-mono text-[10px] leading-none"
              initial={{ x: animPoints.w * 0.8, y: animPoints.h * 0.9, rotate: 0, scale: 3, opacity: 0 }}
              animate={{
                x: [animPoints.w * 0.8, animPoints.w * 0.2, animPoints.w * 0.5, animPoints.external.left], 
                y: [animPoints.h * 0.9, animPoints.h * 0.5, animPoints.h * 0.1, animPoints.external.top],
                rotate: [0, 720, -360, 720],
                scale: [3, 2, 4, 1],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ 
                default: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 5, times: [0, 0.05, 0.99, 1] } 
              }}
            >
              ▼
            </motion.div>
          )}
        </div>
      )}

      {/* OVERLAY CV - TITIK MUNCUL DINAMIS */}
      <AnimatePresence>
        {isCVOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCVOpen(false)} className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer" />
            <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} onClick={() => setIsCVOpen(false)} className="fixed top-6 right-6 z-[120] text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono bg-black/50 hover:bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md transition-all shadow-xl">
              <span className="uppercase tracking-widest hidden md:inline">Close</span> ✕
            </motion.button>
            <motion.div initial={{ opacity: 0, scale: 0.1, x: cvOrigin.x, y: cvOrigin.y, rotateY: 45, rotateX: 15, clipPath: "circle(0% at 50% 50%)" }} animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotateY: 0, rotateX: 0, clipPath: "circle(150% at 50% 50%)" }} exit={{ opacity: 0, scale: 0.1, x: cvOrigin.x, y: cvOrigin.y, rotateY: 45, rotateX: 15, clipPath: "circle(0% at 50% 50%)" }} transition={{ type: "spring", damping: 25, stiffness: 120, mass: 0.8 }} className="relative z-10 w-full max-w-5xl max-h-screen pointer-events-auto flex items-center justify-center overflow-auto custom-scrollbar p-2">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center w-full my-auto">
                <img src="/cv01.jpg" alt="CV Page 1" className="w-full md:w-[48%] h-auto object-contain rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-white" />
                <img src="/cv02.jpg" alt="CV Page 2" className="w-full md:w-[48%] h-auto object-contain rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-white" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}