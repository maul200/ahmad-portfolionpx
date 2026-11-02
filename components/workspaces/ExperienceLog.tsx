"use client";

import { motion } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

const orgLogs = [
  {
    period: "Feb 24 - Dec 24",
    role: "Head of Department",
    organization: "Kominfo Himatro Unila"
  },
  {
    period: "Feb 23 - Dec 23",
    role: "Department Secretary",
    organization: "Kominfo Himatro Unila"
  }
];

export const ExperienceLog = () => (
  <motion.div
    key="experience-log"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >

    <TypewriterHeader text="ACTIVE WORKSPACE // EXPERIENCE_LOG" />

    {/* SECTION 1: OPERATION HISTORY & IMPACT TREE */}
    <div className="border border-white/10 rounded-xl p-4 md:p-6 bg-white/[0.02] space-y-6">
      <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/10 pb-3">
        OPERATION HISTORY & IMPACT TREE
      </h3>

      <div className="space-y-6 font-mono">
        {/* 1. THESIS PROJECT */}
        <div className="space-y-3">
          <div className="text-green-400 text-xs md:text-sm font-semibold flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>UNDERGRADUATE THESIS PROJECT</span>
          </div>
          <div className="pl-4 border-l border-white/10 space-y-2 text-xs">
            <div>
              <p className="text-slate-500 text-[10px]">├─ TIMELINE_OPS</p>
              <p className="text-slate-200 text-xs">Feb 26 - Jul 26</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px]">└─ SYSTEM_GENERATED</p>
              <p className="text-slate-200 font-semibold text-sm">
                TREFA+ Volunteer Portal
              </p>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                <span className="text-green-400 font-semibold">IMPACT:</span>{" "}
                Developed and rigorously evaluated a web system using iterative
                methodologies, ensuring high usability to streamline volunteer
                management and boost TREFA dissemination.
              </p>
            </div>
          </div>
        </div>

        {/* 2. KEMENKEU INTERNSHIP */}
        <div className="space-y-3">
          <div className="text-green-400 text-xs md:text-sm font-semibold flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>KEMENKEU INTERNSHIP</span>
          </div>
          <div className="pl-4 border-l border-white/10 space-y-2 text-xs">
            <div>
              <p className="text-slate-500 text-[10px]">├─ TIMELINE_OPS</p>
              <p className="text-slate-200 text-xs">Batch 1: Mar 25 - May 25</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px]">└─ SYSTEM_GENERATED</p>
              <p className="text-slate-200 font-semibold text-sm">
                Seril (v1.2–v1.3)
              </p>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                <span className="text-green-400 font-semibold">IMPACT:</span>{" "}
                Consolidated 15 regional government financial reports into
                central worksheets at Kanwil DJPb Prov. Lampung and presented
                key analytics to 40+ officials.
              </p>
            </div>
          </div>
        </div>

        {/* 3. MSIB PROJECT */}
        <div className="space-y-3">
          <div className="text-green-400 text-xs md:text-sm font-semibold flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>MSIB UNILA</span>
          </div>
          <div className="pl-4 border-l border-white/10 space-y-2 text-xs">
            <div>
              <p className="text-slate-500 text-[10px]">├─ TIMELINE_OPS</p>
              <p className="text-slate-200 text-xs">Batch 1: Sep 24 - Jan 25</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px]">└─ SYSTEM_GENERATED</p>
              <p className="text-slate-200 font-semibold text-sm">
                Unila Attendance Web
              </p>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                <span className="text-green-400 font-semibold">IMPACT:</span>{" "}
                Built and deployed a functional QR code-based attendance
                architecture to streamline internal verification, operated
                seamlessly by on-site engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* SECTION 2: TEAMWORK & LEADERSHIP FOUNDATION */}
    <div className="border border-white/10 rounded-xl bg-white/[0.02] p-4 md:p-6">
      <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/10 pb-3 mb-4">
        OPERATION FOUNDATION
      </h3>

      <div className="space-y-3 font-mono">
        {/* Workshop & Pelatihan (Dibagi 2 Kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Kolom 1: Facilitator Himatro */}
          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-start justify-between text-xs">
            <div>
              {/* 1. Judul / Peran */}
              <p className="text-slate-200 font-medium">
                Facilitator (Speaker & Hands-on)
              </p>
              {/* 2. Nama Event (Warna lebih terang / putih slate) */}
              <p className="text-slate-300 text-[10px] mt-1">
                Workshop Figma: UI/UX Design
              </p>
              {/* 3. Penyelenggara (Warna sama persis dengan organisasi di bawah) */}
              <p className="text-slate-500 text-[10px] mt-0.5">Himatro Unila</p>
            </div>
            {/* Tanggal diberi margin atas sedikit agar sejajar dengan baris pertama */}
            <span className="text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 shrink-0 mt-0.5">
              May 25
            </span>
          </div>

          {/* Kolom 2: Pelatihan Uxpert */}
          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-start justify-between text-xs">
            <div>
              {/* 1. Judul / Peran */}
              <p className="text-slate-200 font-medium">Speaker</p>
              {/* 2. Nama Event */}
              <p className="text-slate-300 text-[10px] mt-1">
                Uxpert: Pelatihan UI/UX Design
              </p>
              {/* 3. Penyelenggara */}
              <p className="text-slate-500 text-[10px] mt-0.5">
                UKM Penelitian Unila
              </p>
            </div>
            <span className="text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 shrink-0 mt-0.5">
              Oct 26
            </span>
          </div>
        </div>

        {/* Organisasi (Dibagi 2 Kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {orgLogs.map((org, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-center justify-between text-xs"
            >
              <div>
                <p className="text-slate-200 font-medium">{org.role}</p>
                <p className="text-slate-500 text-[10px] mt-0.5">
                  {org.organization}
                </p>
              </div>
              <span className="text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 shrink-0">
                {org.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);