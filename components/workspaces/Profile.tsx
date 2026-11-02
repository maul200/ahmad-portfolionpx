import { motion } from "framer-motion";

export const Profile = () => {
  const headerText = "ACTIVE WORKSPACE // OPERATOR_PROFILE";

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6 relative" // relative ditambahkan untuk acuan z-index
    >
      {/* ANIMASI MESIN TIK */}
      <p className="text-xs text-slate-500 font-mono tracking-widest">
        {headerText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.01, delay: index * 0.04 }}
          >
            {char}
          </motion.span>
        ))}
      </p>

      {/* TITIK ABU-ABU MELAYANG (THE DROP) */}
      {/* Berawal dari tengah layar (fixed), lalu terbang ke area foto profil (relative kanan atas) */}
      <motion.div
        initial={{
          position: "fixed",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          width: "0px",
          height: "0px",
          borderRadius: "100%",
          backgroundColor: "#475569", // slate-600
          opacity: 0,
        }}
        animate={{
          width: ["0px", "40px", "40px", "40px"], // Muncul membesar
          height: ["0px", "40px", "40px", "40px"],
          opacity: [0, 1, 1, 0], // Menghilang saat sampai di tujuan
          // Koordinat akan terbang menuju posisi kotak foto. (Angka ini disimulasikan sebagai titik tengah wadah foto)
          top: ["50%", "50%", "30%", "30%"],
          left: ["50%", "50%", "75%", "75%"],
        }}
        transition={{
          duration: 1.5, // Durasi terbang lebih lambat/santai
          times: [0, 0.2, 0.8, 1], // Mengatur ritme: Muncul(0.2) -> Diam -> Terbang(0.8) -> Hilang(1)
          ease: "easeInOut",
        }}
        className="z-50 pointer-events-none"
      />

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
                <div className="text-slate-500 text-xs pt-0.5">EX-AFFILIATION:</div>
                <div className="text-slate-300 text-xs md:text-sm -mb-2 md:mb-0">
                  Universitas Lampung
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
          
          {/* Wadah foto diberi background gelap sebagai kanvas kosong sebelum cat menyebar */}
          <div className="w-full aspect-[3/4] rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden relative shrink-0 flex items-center justify-center">
            
            {/* ANIMASI FOTO MENYEBAR (THE SPLASH) */}
            {/* Delay diatur 1.4 detik, tepat saat "The Drop" mendarat dan menghilang */}
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
              className="w-full h-full"
            >
              <img
                src="/fotoprofil.jpeg"
                alt="Ahmad Mauluddin"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          
          </div>

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
};