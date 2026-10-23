import { motion } from "framer-motion";

export const Profile = () => (
  <motion.div
    key="profile"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >
    <p className="text-xs text-slate-500 font-mono tracking-widest">
      ACTIVE WORKSPACE // OPERATOR_PROFILE
    </p>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 flex-1">
      {/* Kolom Kiri: Matriks Identitas & Kompetensi */}
      <div className="space-y-6">
        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-white/10 pb-2">
            Identity Matrix
          </h3>
          <div className="space-y-4 font-mono text-xs md:text-sm">
            {/* Lebar kolom kiri dikurangi jadi 120px di mobile agar kolom kanan lebih lega */}
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4">
              <span className="text-slate-500">NAME:</span>
              <span className="text-slate-300">Ahmad Mauluddin</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4">
              <span className="text-slate-500">DESIGNATION:</span>
              <span className="text-slate-300">Software Engineering</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4">
              <span className="text-slate-500">EX-AFFILIATION:</span>
              <span className="text-slate-300">
                Universitas Lampung <sup className="text-slate-500 text-[10px] ml-0.5">(22-26)</sup>
              </span>
            </div>
          </div>
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-white/10 pb-2">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <p className="text-slate-500 font-mono text-xs mb-3">TOOLS</p>
              <ul className="text-slate-300 font-mono text-xs md:text-sm space-y-2">
                <li>{">"} Figma</li>
                <li>{">"} Power Designer</li>
                <li>{">"} MySQL</li>
                <li>{">"} Laragon</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-500 font-mono text-xs mb-3">RESEARCH & METHOD</p>
              <ul className="text-slate-300 font-mono text-xs md:text-sm space-y-2">
                <li>{">"} Data Structure</li>
                <li>{">"} Database Modeling</li>
                <li>{">"} Usability Heuristics</li>
                <li>{">"} Agile & Iterative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Foto Profil & Metadata */}
      <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02] flex flex-col justify-between text-center relative overflow-hidden">
        <div className="w-full aspect-[3/4] rounded-lg border border-white/10 overflow-hidden bg-black/40 relative shrink-0">
          <img
            src="/fotoprofil.jpeg"
            alt="Ahmad Mauluddin"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Pembatas berada tepat di tengah area antara foto dan teks */}
        <div className="flex-1 flex flex-col justify-center my-4">
          <div className="w-full border-t border-white/10" />
        </div>

        <div className="w-full space-y-2 shrink-0">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-500">FIELD:</span>
            <span className="text-slate-300">INFORMATICS</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-500">STATUS:</span>
            <span className="text-green-400">AVAILABLE</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);