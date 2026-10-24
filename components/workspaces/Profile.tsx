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
          <div className="space-y-4 font-mono">
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4">
              <span className="text-slate-500 text-xs">NAME:</span>
              <span className="text-slate-300 text-xs md:text-sm">
                Ahmad Mauluddin
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4">
              <span className="text-slate-500 text-xs">DESIGNATION:</span>
              <span className="text-slate-300 text-xs md:text-sm">
                Software Engineering
              </span>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-2 md:gap-4 items-start">
  {/* Tambahan pt-0.5 biar sejajar sempurna dengan huruf U di sebelahnya */}
  <div className="text-slate-500 text-xs pt-0.5">
    EX-AFFILIATION:
  </div>
  
  {/* -mb-2 adalah kunci utama: menyedot spasi ekstra di mobile agar kotak tidak melar */}
  <div className="text-slate-300 text-xs md:text-sm -mb-2 md:mb-0">
    Universitas Lampung
    {/* Di mobile dipaksa jadi block (turun baris). Di desktop jadi pangkat (align-super) */}
    <span className="block md:inline-block md:align-super text-slate-500 text-[10px] md:ml-0.5 leading-none mt-0.5 md:mt-0">
      (22-26)
    </span>
  </div>
</div>
          </div>
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-white/10 pb-2">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2">
            <div>
              <p className="text-slate-500 font-mono text-xs mb-3">TOOLS</p>
              {/* KEMBALI KE whitespace-nowrap murni agar mengunci lebar minimal div dan tidak melar */}
              <ul className="text-slate-300 font-mono text-xs md:text-sm space-y-2 whitespace-nowrap">
                <li>{">"} Figma</li>
                <li>{">"} Power Designer</li>
                <li>{">"} MySQL</li>
                <li>{">"} Laragon</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-500 font-mono text-xs mb-3">
                RESEARCH & METHOD
              </p>
              {/* KEMBALI KE whitespace-nowrap murni agar mengunci lebar minimal div dan tidak melar */}
              <ul className="text-slate-300 font-mono text-xs md:text-sm space-y-2 whitespace-nowrap">
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