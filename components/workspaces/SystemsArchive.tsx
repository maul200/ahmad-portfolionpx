import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const systemRecords = [
  {
    id: "PJT-01",
    name: "Trefa+ Volunteer Web",
    client: "Kanwil DJPb Prov. Lampung",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    status: "DEPLOYED",
    url: "https://relawantrefa.com",
    urlLabel: "relawantrefa.com",
    logs: "Developed volunteer management portal using Iterative-Incremental method over a 17-week cycle. Integrated gamification features and evaluated usability via SUS & UEQ-S."
  },
  {
    id: "PJT-02",
    name: "Unila Attendance Web",
    client: "UPA TIK Universitas Lampung",
    tech: ["Laravel", "Tailwind CSS", "Kanban"],
    status: "STABLE",
    url: null,
    logs: "Developed front-end for internal attendance website based on UI/UX specs in a 3-month period. Managed workflows using Taiga Kanban and controlled code versions with GitHub."
  },
  {
    id: "PJT-03",
    name: "Seril (Sistem Terintegrasi LKPD Lampung)",
    client: "Kanwil DJPb Prov. Lampung",
    tech: ["Visual Basic for Application", "Macro"],
    status: "STABLE",
    url: null,
    logs: "Enhanced Excel VBA-based reporting system (v1.2–v1.3) to consolidate LRA from 15 regional governments into Central Govt worksheets. Successfully disseminated to 40+ treasury officials."
  }
];

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
      <p className="text-xs text-slate-500 font-mono tracking-widest">
        ACTIVE WORKSPACE // SYSTEMS_ARCHIVE
      </p>

      <div className="border border-white/10 rounded-xl bg-white/[0.02] flex-1 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10 bg-white/[0.01]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Project Records
          </h3>
        </div>

        <div className="flex-1 p-3 md:p-4 space-y-3">
          {systemRecords.map((record) => {
            const isExpanded = expandedId === record.id;
            return (
              <div
                key={record.id}
                className={`border rounded-lg transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-slate-500/50 bg-white/[0.05]"
                    : "border-white/10 hover:border-white/20 bg-white/[0.01]"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : record.id)}
                  className="w-full text-left p-3 md:p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 md:gap-4"
                >
                  <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                    <span className="text-[10px] md:text-xs font-mono text-slate-500 shrink-0">
                      [{record.id}]
                    </span>
                    <span className="text-xs md:text-sm font-medium text-slate-200 truncate">
                      {record.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    {/* Mengubah kata DEPLOYED menjadi URL saat div terbuka */}
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
                      <span className="text-[8px] md:text-[10px] font-mono px-1.5 md:px-2 py-0.5 md:py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                        {record.status}
                      </span>
                    )}
                    <span className="text-slate-500 text-[10px] md:text-xs w-4 text-center">
                      {isExpanded ? "▲" : "▼"}
                    </span>
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
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};