"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MissionControl } from "@/components/workspaces/MissionControl";
import { SystemsArchive } from "@/components/workspaces/SystemsArchive";
import { Profile } from "@/components/workspaces/Profile";
import { ExperienceLog } from "@/components/workspaces/ExperienceLog";
import { Contact } from "@/components/workspaces/Contact";

export function OSShell() {
  const [activeTab, setActiveTab] = useState("mission-control");
  const navRef = useRef<HTMLElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  
  // State untuk CV Modal & Titik Koordinat Kemunculannya
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [cvOrigin, setCvOrigin] = useState({ x: 0, y: 0 });

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

  // FUNGSI BARU: Mengambil koordinat tombol yang ditekan (Desktop / Mobile sama-sama pakai ini)
  const handleOpenCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Menghitung jarak dari tengah layar (karena modal kita berada tepat di tengah)
    const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
    
    setCvOrigin({ x: startX, y: startY });
    setIsCVOpen(true);
  };

  const NavButton = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`w-full text-left rounded-md px-3 py-1.5 text-sm transition-all duration-200 ${
          isActive
            ? "bg-white/10 text-white font-medium pl-4"
            : "text-slate-400 hover:bg-white/5 hover:text-slate-200 hover:pl-4"
        }`}
      >
        {label}
      </button>
    );
  };

  const MobileNavButton = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`whitespace-nowrap rounded-md px-4 py-2 text-[10px] font-mono transition-all duration-200 uppercase tracking-wider ${
          isActive
            ? "bg-white/10 text-white border border-white/20"
            : "text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-2 md:p-4 relative">
        <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
          
          {/* Top Bar OS */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-white/[0.02] shrink-0">
            <div className="text-xs font-mono text-slate-400 font-semibold tracking-widest">
              AM.OS <span className="text-slate-600 font-normal">v1.0.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-slate-400 hidden md:inline">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] h-[72vh] min-h-[575px]">
            
            {/* Sidebar Explorer */}
            <aside className="hidden lg:flex border-r border-white/10 p-4 flex-col gap-6 bg-white/[0.01] overflow-y-auto custom-scrollbar">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 px-2 flex items-center gap-2">
                  <span className="text-slate-600">▼</span> Core
                </p>
                <div className="space-y-0.5">
                  <NavButton id="mission-control" label="Mission Control" />
                  <NavButton id="profile" label="Profile" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 px-2 flex items-center gap-2">
                  <span className="text-slate-600">▼</span> Records
                </p>
                <div className="space-y-0.5">
                  <NavButton id="systems-archive" label="Systems Archive" />
                  <NavButton id="experience-log" label="Experience Log" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 px-2 flex items-center gap-2">
                  <span className="text-slate-600">▼</span> External
                </p>
                <div className="space-y-0.5">
                  <NavButton id="contact" label="Contact Link" />
                </div>
              </div>

              {/* Tombol View CV (Desktop) */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <button
                  onClick={handleOpenCV} // Menggunakan fungsi handle OpenCV
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
              <nav 
                ref={navRef}
                onScroll={checkScroll}
                className="flex items-center gap-2 p-3 overflow-x-auto custom-scrollbar relative z-10"
              >
                <MobileNavButton id="mission-control" label="Mission" />
                <MobileNavButton id="profile" label="Profile" />
                <MobileNavButton id="systems-archive" label="Systems" />
                <MobileNavButton id="experience-log" label="Logs" />
                <MobileNavButton id="contact" label="Comms" />
                
                {/* Tombol CV (Mobile) */}
                <button
                  onClick={handleOpenCV} // Menggunakan fungsi handle OpenCV
                  className="whitespace-nowrap rounded-md px-4 py-2 text-[10px] font-mono transition-all duration-200 uppercase tracking-wider text-green-400 hover:bg-white/5 border border-green-400/30"
                >
                  View CV
                </button>
                <div className="min-w-[4px] shrink-0" />
              </nav>

              <div 
                className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-20 flex items-center justify-end pr-2 transition-opacity duration-300 ${
                  showScrollHint ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-slate-500 text-sm animate-pulse">»</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAY CV - TITIK MUNCUL DINAMIS */}
      <AnimatePresence>
        {isCVOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCVOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setIsCVOpen(false)} 
              className="fixed top-6 right-6 z-[120] text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono bg-black/50 hover:bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md transition-all shadow-xl"
            >
              <span className="uppercase tracking-widest hidden md:inline">Close</span> ✕
            </motion.button>

            {/* Animasi Dinamis Berdasarkan Koordinat Tombol Asli (cvOrigin) */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.1,
                x: cvOrigin.x, // Menyedot dari titik X tombol
                y: cvOrigin.y, // Menyedot dari titik Y tombol
                rotateY: 45, 
                rotateX: 15,
                clipPath: "circle(0% at 50% 50%)" 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: 0, 
                y: 0, 
                rotateY: 0, 
                rotateX: 0,
                clipPath: "circle(150% at 50% 50%)" 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.1,
                x: cvOrigin.x, // Kembali ke titik X tombol
                y: cvOrigin.y, // Kembali ke titik Y tombol
                rotateY: 45, 
                rotateX: 15,
                clipPath: "circle(0% at 50% 50%)" 
              }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 120, 
                mass: 0.8 
              }}
              className="relative z-10 w-full max-w-5xl max-h-screen pointer-events-auto flex items-center justify-center overflow-auto custom-scrollbar p-2"
            >
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center w-full my-auto">
                <img 
                  src="/cv01.jpg" 
                  alt="CV Page 1" 
                  className="w-full md:w-[48%] h-auto object-contain rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-white" 
                />
                <img 
                  src="/cv02.jpg" 
                  alt="CV Page 2" 
                  className="w-full md:w-[48%] h-auto object-contain rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-white" 
                />
              </div>
            </motion.div>
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}