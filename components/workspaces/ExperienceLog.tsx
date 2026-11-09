"use client";

import { motion } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

// Data Sejarah Operasi
const operationHistory = [
  {
    title: "UNDERGRADUATE THESIS PROJECT",
    timeline: "Feb 26 - Jul 26",
    system: "TREFA+ Volunteer Portal",
    impact: "Developed and rigorously evaluated a web system using iterative methodologies, ensuring high usability to streamline volunteer management and boost TREFA dissemination."
  },
  {
    title: "KEMENKEU INTERNSHIP",
    timeline: "Batch 1: Mar 25 - May 25",
    system: "Seril (v1.2–v1.3)",
    // Impact diperbarui dan diringkas sesuai instruksi agar fokus ke sistem VBA & LRA 15 Pemda
    impact: "Developed an Excel VBA application to efficiently consolidate Laporan Realisasi Anggaran (LRA) from 15 regional governments in Lampung into Central Government worksheets."
  },
  {
    title: "MSIB UNILA",
    timeline: "Batch 1: Sep 24 - Jan 25",
    system: "Unila Attendance Web",
    impact: "Built and deployed a functional QR code-based attendance architecture to streamline internal verification, operated seamlessly by on-site engineers."
  }
];

// Data Organisasi
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

export const ExperienceLog = () => {
  const START_DELAY = 1.5; 
  const BEAM_DURATION = 1.5; 
  // Total waktu yang dibutuhkan sampai garis terakhir selesai
  const TOTAL_SEQUENCE_DURATION = operationHistory.length * BEAM_DURATION;

  return (
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
      <div className="border border-white/10 rounded-xl p-4 md:p-6 bg-white/[0.02] space-y-4">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/10 pb-3 mb-2">
          OPERATION HISTORY & IMPACT TREE
        </h3>

        <div className="font-mono">
          {operationHistory.map((op, idx) => {
            // Waktu kapan item ini mulai menyala
            const itemDelay = START_DELAY + (idx * BEAM_DURATION);
            
            // Durasi sisa waktu sampai item terakhir selesai
            const holdDuration = TOTAL_SEQUENCE_DURATION - (idx * BEAM_DURATION);

            return (
              <div key={idx} className="relative">
                
                {/* JUDUL & TITIK (Tetap abu-abu sampai aliran menyentuhnya, lalu hijau PERMANEN) */}
                <motion.div
                  initial={{ color: "#64748b" }}
                  animate={{ color: "#4ade80" }}
                  transition={{ delay: itemDelay, duration: 0.2 }}
                  className="text-xs md:text-sm font-semibold flex items-center gap-2"
                >
                  <motion.span
                    initial={{ backgroundColor: "#475569", boxShadow: "0 0 0px transparent" }} 
                    animate={{ backgroundColor: "#4ade80", boxShadow: "0 0 8px #4ade80" }} 
                    transition={{ delay: itemDelay, duration: 0.2 }}
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                  />
                  <span>{op.title}</span>
                </motion.div>

                {/* GARIS & DETAIL KONTEN */}
                <div className="relative pl-4 ml-[3px] space-y-3 text-xs pt-2 pb-6">
                  
                  {/* Garis Abu-abu Statis (Track/Jalur) */}
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

                  {/* CAHAYA HIJAU BERJALAN (Light Beam) */}
                  <motion.div
                    className="absolute left-0 top-0 w-[1px] bg-green-400 shadow-[0_0_8px_#4ade80]"
                    initial={{ height: "0%", opacity: 1 }}
                    animate={{ 
                      height: ["0%", "100%"], 
                      opacity: [1, 1, 0] // Ditahan nyala (1), baru mati (0) berbarengan di akhir
                    }}
                    transition={{
                      height: {
                        duration: BEAM_DURATION, // Perjalanan turun selalu 1.5 detik
                        delay: itemDelay,
                        ease: "linear"
                      },
                      opacity: {
                        duration: holdDuration, // Dipertahankan menyala sampai garis terakhir kelar
                        delay: itemDelay,
                        times: [0, 0.95, 1], // Bertahan 100% nyala sampai detik-detik terakhir
                        ease: "linear"
                      }
                    }}
                  />

                  {/* 1. TIMELINE OPS + SVG Clock */}
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] mb-1">
                      <span>├─</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>TIMELINE_OPS</span>
                    </div>
                    <p className="text-slate-200 text-xs ml-4">{op.timeline}</p>
                  </div>

                  {/* 2. SYSTEM GENERATED + SVG Code/Terminal */}
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] mb-1">
                      <span>└─</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                      </svg>
                      <span>SYSTEM_GENERATED</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-slate-200 font-semibold text-sm">
                        {op.system}
                      </p>
                      <p className="text-slate-400 text-[10px] md:text-xs mt-1.5 leading-relaxed">
                        {/* ANIMASI WARNA IMPACT: Menunggu cahaya lewat (~1.0 detik setelah cahaya mulai turun) */}
                        <motion.span 
                          initial={{ color: "#64748b" }} // Warna awal slate-500
                          animate={{ color: "#4ade80" }} // Berubah ke green-400
                          transition={{ delay: itemDelay + 1.0, duration: 0.2 }} 
                          className="font-semibold"
                        >
                          IMPACT:
                        </motion.span>{" "}
                        {op.impact}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: TEAMWORK & LEADERSHIP FOUNDATION */}
      <div className="border border-white/10 rounded-xl bg-white/[0.02] p-4 md:p-6">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/10 pb-3 mb-4">
          OPERATION FOUNDATION
        </h3>

        <div className="space-y-3 font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-start justify-between text-xs hover:border-slate-500/50 transition-colors">
              <div>
                <p className="text-slate-200 font-medium">Facilitator (Speaker & Hands-on)</p>
                <p className="text-slate-300 text-[10px] mt-1">Workshop Figma: UI/UX Design</p>
                <p className="text-slate-500 text-[10px] mt-0.5">Himatro Unila</p>
              </div>
              <span className="text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 shrink-0 mt-0.5">
                May 25
              </span>
            </div>

            <div className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-start justify-between text-xs hover:border-slate-500/50 transition-colors">
              <div>
                <p className="text-slate-200 font-medium">Speaker</p>
                <p className="text-slate-300 text-[10px] mt-1">Uxpert: Pelatihan UI/UX Design</p>
                <p className="text-slate-500 text-[10px] mt-0.5">UKM Penelitian Unila</p>
              </div>
              <span className="text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 shrink-0 mt-0.5">
                Oct 26
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {orgLogs.map((org, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-white/10 bg-white/[0.01] flex items-center justify-between text-xs hover:border-slate-500/50 transition-colors"
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
};