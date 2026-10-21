"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MissionControl } from "@/components/workspaces/MissionControl";
import { SystemsArchive } from "@/components/workspaces/SystemsArchive";
import { Profile } from "@/components/workspaces/Profile";
import { ExperienceLog } from "@/components/workspaces/ExperienceLog";
import { Contact } from "@/components/workspaces/Contact";

export function OSShell() {
  const [activeTab, setActiveTab] = useState("mission-control");

  // Tombol navigasi untuk Sidebar Desktop
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

  // Tombol navigasi untuk Taskbar Mobile
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
    <section className="min-h-screen flex items-center justify-center p-2 md:p-4">
      <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Bar OS */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-white/[0.02] shrink-0">
          <div className="text-xs font-mono text-slate-400 font-semibold tracking-widest">
            AM.OS <span className="text-slate-600 font-normal">v1.0.0</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-mono tracking-widest text-slate-400 hidden md:inline">
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        {/* Perubahan Layout Utama: Flex Column untuk Mobile, Grid untuk Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] h-[72vh] min-h-[575px]">
          
          {/* Sidebar Explorer (Hanya tampil di layar besar / lg) */}
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
          </aside>

          {/* Dynamic Workspace */}
          {/* Tambahan: flex-1 agar di mobile mengambil sisa ruang vertikal */}
          <main className="flex-1 p-5 md:p-8 lg:p-10 bg-black/20 overflow-y-auto custom-scrollbar relative">
            <AnimatePresence mode="wait">
              {activeTab === "mission-control" && <MissionControl />}
              {activeTab === "systems-archive" && <SystemsArchive />}
              {activeTab === "profile" && <Profile />}
              {activeTab === "experience-log" && <ExperienceLog />}
              {activeTab === "contact" && <Contact />}
            </AnimatePresence>
          </main>

          {/* Taskbar Bottom (Hanya tampil di layar kecil / mobile) */}
          <nav className="lg:hidden flex items-center gap-2 p-3 border-t border-white/10 bg-white/[0.02] overflow-x-auto custom-scrollbar shrink-0">
            <MobileNavButton id="mission-control" label="Mission" />
            <MobileNavButton id="profile" label="Profile" />
            <MobileNavButton id="systems-archive" label="Systems" />
            <MobileNavButton id="experience-log" label="Logs" />
            <MobileNavButton id="contact" label="Comms" />
          </nav>

        </div>
      </div>
    </section>
  );
}