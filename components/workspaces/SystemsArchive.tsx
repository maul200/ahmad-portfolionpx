"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

const systemRecords = [
  {
    id: "PJT-01",
    role: "FULLSTACK",
    name: "Trefa+ Volunteer Web",
    client: "Kanwil DJPb Prov. Lampung",
    tech: ["Laravel", "Tailwind CSS", "Cloudinary"],
    status: "DEPLOYED",
    url: "https://relawantrefa.com",
    urlLabel: "relawantrefa.com",
    logs: "Developed volunteer management portal using Iterative-Incremental method over a 17-week cycle. Integrated gamification features and evaluated usability via SUS & UEQ-S."
  },
  {
    id: "PJT-02",
    role: "FRONTEND",
    name: "Unila Attendance Web",
    client: "UPA TIK Universitas Lampung",
    tech: ["Laravel", "Tailwind CSS", "Kanban"],
    status: "INTERNAL",
    url: null,
    logs: "Developed front-end for internal attendance website based on UI/UX specs in a 3-month period. Managed workflows using Taiga Kanban and controlled code versions with GitHub."
  },
  {
    id: "PJT-03",
    role: "TEAM",
    name: "Seril (Sistem Terintegrasi LKPD Lampung)",
    client: "Kanwil DJPb Prov. Lampung",
    tech: ["Visual Basic for Application", "Macro"],
    status: "INTERNAL",
    url: null,
    logs: "Enhanced Excel VBA-based reporting system (v1.2–v1.3) to consolidate LRA from 15 regional governments into Central Govt worksheets. Successfully disseminated to 40+ treasury officials."
  },
  {
    id: "PJT-04",
    role: "THIS SYSTEM",
    name: "AM.OS Portfolio",
    client: "Personal Project",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    status: "DEPLOYED",
    url: null,
    logs: "Architected an interactive OS-inspired developer portfolio featuring dynamic SVG circuit data streams, viewport-triggered micro-interactions, and responsive workspaces."
  },
  {
    id: "PJT-05",
    role: "FULLSTACK",
    name: "WMI Company Profile Web",
    client: "Wahana Mitra Indonesia Group",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    status: "IN PROGRESS",
    url: null,
    logs: "Coming soon."
  }
];

const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case "INTERNAL":
      return "bg-slate-500/10 text-slate-300 border-slate-500/20";
    case "IN PROGRESS":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    default:
      return "bg-green-500/10 text-green-400 border-green-500/20";
  }
};

export const SystemsArchive = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <motion.div
      key="systems-archive"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6"
    >
      <TypewriterHeader text="ACTIVE WORKSPACE // SYSTEMS_ARCHIVE" />

      <div className="border border-white/10 rounded-xl bg-white/[0.02] flex-1 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10 bg-white/[0.01]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Project Records
          </h3>
        </div>

        <div className="flex-1 p-3 md:p-4 space-y-3 overflow-hidden">
          {systemRecords.map((record, idx) => {
            const isExpanded = expandedId === record.id;
            // Urutan terbalik: PJT-05 (index terakhir) jatuh pertama, PJT-01 mendarat paling atas
            const reverseIdx = systemRecords.length - 1 - idx;
            const dropDelay = 0.2 + reverseIdx * 0.22;

            return (
              <motion.div
                key={record.id}
                initial={{
                  opacity: 0,
                  y: -85,
                  boxShadow: "0 0 0px rgba(74, 222, 128, 0)",
                }}
                animate={{
                  opacity: [0, 1, 1, 1],
                  y: [-85, 0, -2.5, 0],
                  boxShadow: [
                    "0 0 0px rgba(74, 222, 128, 0)",
                    "0 4px 14px rgba(74, 222, 128, 0.16)",
                    "0 1px 4px rgba(74, 222, 128, 0.06)",
                    "0 0 0px rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{
                  duration: 0.46,
                  delay: dropDelay,
                  times: [0, 0.72, 0.86, 1],
                  ease: ["easeIn", "easeOut", "easeIn"],
                }}
                className={`border rounded-lg transition-colors duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-slate-500/50 bg-white/[0.05]"
                    : "border-white/10 hover:border-white/20 bg-white/[0.01]"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : record.id)}
                  className={`w-full text-left p-3 md:p-4 flex items-center justify-between gap-x-2 md:gap-x-4 ${
                    isExpanded ? "flex-wrap sm:flex-nowrap gap-y-2" : ""
                  }`}
                >
                  <span className="order-1 text-[10px] md:text-xs font-mono text-slate-500 shrink-0">
                    [{isExpanded ? record.role : record.id}]
                  </span>

                  <span
                    className={`text-xs md:text-sm font-medium text-slate-200 ${
                      isExpanded
                        ? "order-3 w-full sm:order-2 sm:w-auto sm:flex-1 sm:min-w-0 leading-snug"
                        : "order-2 flex-1 min-w-0 truncate"
                    }`}
                  >
                    {record.name}
                  </span>

                  <div
                    className={`flex items-center gap-2 md:gap-3 shrink-0 ${
                      isExpanded ? "order-2 sm:order-3" : "order-3"
                    }`}
                  >
                    {isExpanded && record.url ? (
                      <a
                        href={record.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[9px] md:text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/20 text-green-300 border border-green-500/40 hover:bg-green-500/30 transition-all flex items-center gap-1"
                      >
                        <span>{record.urlLabel}</span>
                        <span className="text-[8px]">↗</span>
                      </a>
                    ) : (
                      <span
                        className={`text-[8px] md:text-[10px] font-mono px-1.5 md:px-2 py-0.5 md:py-1 rounded border ${getStatusBadgeStyle(
                          record.status
                        )}`}
                      >
                        {record.status}
                      </span>
                    )}

                    <motion.span
                      initial={{ color: "#64748b" }}
                      animate={{ color: ["#64748b", "#4ade80", "#64748b"] }}
                      transition={{ duration: 1, repeat: 2, delay: 1.5 }}
                      className="text-[10px] md:text-xs w-4 text-center"
                    >
                      {isExpanded ? "▲" : "▼"}
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-3 md:px-4 pb-3 md:pb-4 pt-2 border-t border-white/10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] md:text-xs font-mono mb-4">
                          <div>
                            <p className="text-slate-500 mb-1">CLIENT_ORG:</p>
                            <p className="text-slate-300">{record.client}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 mb-1">TECH_STACK:</p>
                            <div className="flex gap-1.5 flex-wrap">
                              {record.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/40 rounded p-3 border border-white/5 text-slate-400 text-[10px] md:text-xs font-mono leading-relaxed">
                          <span className="text-slate-500 mr-2">
                            {">"} EXECUTE_SUMMARY:
                          </span>
                          {record.logs}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};