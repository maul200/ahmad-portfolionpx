"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MissionControl } from "@/components/workspaces/MissionControl";
import { SystemsArchive } from "@/components/workspaces/SystemsArchive";
import { Profile } from "@/components/workspaces/Profile";
import { ExperienceLog } from "@/components/workspaces/ExperienceLog";
import { Contact } from "@/components/workspaces/Contact";

// --- KOMPONEN BANTUAN DI LUAR FUNGSI UTAMA ---

const SidebarHeader = ({
  title,
  isSectionActive,
  delay,
}: {
  title: string;
  isSectionActive: boolean;
  delay: number;
}) => (
  <motion.p
    initial={{ opacity: 0, x: -6 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
    className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2.5 px-2 flex items-center gap-2"
  >
    <motion.span
      initial={{ rotate: -90, color: "#64748b" }}
      animate={{
        rotate: 0,
        color: isSectionActive
          ? ["#64748b", "#4ade80", "#4ade80"]
          : ["#64748b", "#4ade80", "#64748b"],
      }}
      transition={{
        rotate: { type: "spring", stiffness: 320, damping: 22, delay },
        color: { duration: 0.8, times: [0, 0.35, 1], delay },
      }}
      className="inline-block leading-none text-[9px]"
    >
      ▼
    </motion.span>
    <span className={isSectionActive ? "text-slate-300 transition-colors" : "transition-colors"}>
      {title}
    </span>
  </motion.p>
);

const NavButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative w-full text-left rounded-md px-3 py-1.5 text-sm transition-colors duration-200 flex items-center justify-between group ${
      isActive
        ? "text-white font-medium"
        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
    }`}
  >
    {isActive && (
      <motion.span
        layoutId="desktop-nav-active-bg"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="absolute inset-0 rounded-md bg-white/[0.08] border border-white/10"
      />
    )}

    {isActive && (
      <motion.span
        layoutId="desktop-nav-active-bar"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"
      />
    )}

    <span
      className={`relative z-10 transition-transform duration-200 ${
        isActive ? "translate-x-1" : "group-hover:translate-x-1"
      }`}
    >
      {label}
    </span>

    <span
      className={`relative z-10 text-[10px] font-mono transition-all duration-200 ${
        isActive
          ? "text-green-400 opacity-100 translate-x-0"
          : "text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
      }`}
    >
      ▸
    </span>
  </button>
);

const MobileNavButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative whitespace-nowrap rounded-md px-4 py-2 text-[10px] font-mono transition-colors duration-200 uppercase tracking-wider ${
      isActive
        ? "text-white"
        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
    }`}
  >
    {isActive && (
      <motion.span
        layoutId="mobile-nav-active-bg"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="absolute inset-0 rounded-md bg-white/10 border border-white/20"
      />
    )}
    {isActive && (
      <motion.span
        layoutId="mobile-nav-active-bar"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="absolute top-0 left-2.5 right-2.5 h-[1.5px] rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]"
      />
    )}
    <span className="relative z-10">{label}</span>
  </button>
);

// --- FUNGSI UTAMA HALAMAN ---

export function OSShell() {
  const [activeTab, setActiveTab] = useState("mission-control");
  const navRef = useRef<HTMLElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const [isCVOpen, setIsCVOpen] = useState(false);
  const [cvOrigin, setCvOrigin] = useState({ x: 0, y: 0 });

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = navRef.current;
      setShowScrollHint(
        scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 5
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleOpenCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
    setCvOrigin({ x: startX, y: startY });
    setIsCVOpen(true);
  };

  const isCoreActive = activeTab === "mission-control" || activeTab === "profile";
  const isRecordsActive =
    activeTab === "systems-archive" || activeTab === "experience-log";
  const isExternalActive = activeTab === "contact";

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-2 md:p-4 relative">
        <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative z-10">
          {/* Top Status Bar */}
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
                <SidebarHeader
                  title="Core"
                  isSectionActive={isCoreActive}
                  delay={0.15}
                />
                <div className="space-y-1">
                  <NavButton
                    label="Mission Control"
                    isActive={activeTab === "mission-control"}
                    onClick={() => setActiveTab("mission-control")}
                  />
                  <NavButton
                    label="Profile"
                    isActive={activeTab === "profile"}
                    onClick={() => setActiveTab("profile")}
                  />
                </div>
              </div>

              <div>
                <SidebarHeader
                  title="Records"
                  isSectionActive={isRecordsActive}
                  delay={0.35}
                />
                <div className="space-y-1">
                  <NavButton
                    label="Systems Archive"
                    isActive={activeTab === "systems-archive"}
                    onClick={() => setActiveTab("systems-archive")}
                  />
                  <NavButton
                    label="Experience Log"
                    isActive={activeTab === "experience-log"}
                    onClick={() => setActiveTab("experience-log")}
                  />
                </div>
              </div>

              <div>
                <SidebarHeader
                  title="External"
                  isSectionActive={isExternalActive}
                  delay={0.55}
                />
                <div className="space-y-1">
                  <NavButton
                    label="Contact Link"
                    isActive={activeTab === "contact"}
                    onClick={() => setActiveTab("contact")}
                  />
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <button
                  onClick={handleOpenCV}
                  className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md px-3 py-2 text-xs font-mono text-slate-300 transition-all group relative overflow-hidden"
                >
                  <span className="relative z-10">VIEW_CV</span>
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-300">
                    ↗
                  </span>
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
                <MobileNavButton
                  label="Mission"
                  isActive={activeTab === "mission-control"}
                  onClick={() => setActiveTab("mission-control")}
                />
                <MobileNavButton
                  label="Profile"
                  isActive={activeTab === "profile"}
                  onClick={() => setActiveTab("profile")}
                />
                <MobileNavButton
                  label="Systems"
                  isActive={activeTab === "systems-archive"}
                  onClick={() => setActiveTab("systems-archive")}
                />
                <MobileNavButton
                  label="Logs"
                  isActive={activeTab === "experience-log"}
                  onClick={() => setActiveTab("experience-log")}
                />
                <MobileNavButton
                  label="Comms"
                  isActive={activeTab === "contact"}
                  onClick={() => setActiveTab("contact")}
                />
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

      {/* OVERLAY CV - EFEK KERTAS TERLIPAT (3D BI-FOLD UNFOLD) */}
      <AnimatePresence>
        {isCVOpen && (
          <div
            style={{ perspective: 1600 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCVOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.button
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsCVOpen(false)}
              className="fixed top-6 right-6 z-[120] text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono bg-black/60 hover:bg-black/85 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md transition-all shadow-xl"
            >
              <span className="uppercase tracking-widest hidden md:inline">
                Close
              </span>{" "}
              ✕
            </motion.button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.06,
                x: cvOrigin.x,
                y: cvOrigin.y,
                rotateZ: -10,
                rotateX: 28,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotateZ: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.04,
                x: cvOrigin.x,
                y: cvOrigin.y,
                rotateZ: -8,
                rotateX: 24,
                transition: { duration: 0.34, ease: [0.4, 0, 1, 1] },
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative z-10 w-full max-w-5xl max-h-screen pointer-events-auto flex items-center justify-center overflow-auto custom-scrollbar p-2"
            >
              <div
                style={{ perspective: 1400 }}
                className="flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center w-full my-auto"
              >
                {/* Lembar Kiri (Terbuka dari lipatan tengah ke kiri) */}
                <motion.div
                  initial={{ rotateY: -78, skewY: 3 }}
                  animate={{ rotateY: 0, skewY: 0 }}
                  exit={{
                    rotateY: -82,
                    skewY: 3,
                    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
                  }}
                  transition={{
                    duration: 0.52,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: "right center",
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-full md:w-[48%] rounded shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/10 bg-white overflow-hidden"
                >
                  <img
                    src="/cv01.jpg"
                    alt="CV Page 1"
                    className="w-full h-auto object-contain block"
                  />
                  {/* Bayangan lipatan tengah yang memudar saat kertas rata */}
                  <motion.div
                    initial={{ opacity: 0.65 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0.65, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/50 via-black/15 to-transparent"
                  />
                </motion.div>

                {/* Lembar Kanan (Terbuka dari lipatan tengah ke kanan) */}
                <motion.div
                  initial={{ rotateY: 78, skewY: -3 }}
                  animate={{ rotateY: 0, skewY: 0 }}
                  exit={{
                    rotateY: 82,
                    skewY: -3,
                    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
                  }}
                  transition={{
                    duration: 0.52,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-full md:w-[48%] rounded shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/10 bg-white overflow-hidden"
                >
                  <img
                    src="/cv02.jpg"
                    alt="CV Page 2"
                    className="w-full h-auto object-contain block"
                  />
                  {/* Bayangan lipatan tengah yang memudar saat kertas rata */}
                  <motion.div
                    initial={{ opacity: 0.65 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0.65, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/50 via-black/15 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}