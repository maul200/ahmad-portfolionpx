"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

export const Profile = () => {
  const headerText = "ACTIVE WORKSPACE // OPERATOR_PROFILE";
  
  const [statusText, setStatusText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  // State penjaga: bernilai 'true' HANYA JIKA user sudah scroll sampai ke elemen tersebut
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    // Jangan lakukan apa-apa kalau elemen belum masuk layar
    if (!hasStartedTyping) return;

    let isMounted = true;
    
    // WAKTU DIMULAI DARI 2000ms (Detik ke-2 setelah dilihat user)
    const sequence = [
      { char: 'A', time: 2000 },
      { char: 'V', time: 2100 },
      { char: 'A', time: 2200 },
      { char: 'I', time: 2300 },
      { char: 'L', time: 3000 }, // Jeda berpikir sejenak ala manusia
      { char: 'A', time: 3100 },
      { char: 'B', time: 3200 },
      { char: 'L', time: 3300 },
      { char: 'E', time: 3400 },
    ];
    
    const timeouts = sequence.map(({ char, time }, i) => 
      setTimeout(() => {
        if (!isMounted) return;
        setStatusText(prev => prev + char);
        
        // Mematikan kursor permanen tepat setelah huruf terakhir selesai
        if (i === sequence.length - 1) {
          setTimeout(() => {
            if (isMounted) setShowCursor(false);
          }, 300); // Kursor hilang 0.3 detik setelah huruf 'E'
        }
      }, time)
    );

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, [hasStartedTyping]);

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6 relative"
    >
      <TypewriterHeader text="ACTIVE WORKSPACE // OPERATOR_PROFILE" />

      {/* 1. ANIMASI KHUSUS DESKTOP (Tetesan Cat) - Sembunyi di Mobile */}
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
          backgroundColor: "#475569",
          opacity: 0,
        }}
        animate={{
          width: ["0px", "40px", "40px", "40px"],
          height: ["0px", "40px", "40px", "40px"],
          opacity: [0, 1, 1, 0],
          top: ["50%", "50%", "30%", "30%"],
          left: ["50%", "50%", "75%", "75%"],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
        className="z-50 pointer-events-none hidden md:block"
      />

      {/* 2. ANIMASI KHUSUS MOBILE (HUD Scroll Hint) - Sembunyi di Desktop */}
      <div className="fixed bottom-32 right-4 z-50 pointer-events-none flex md:hidden flex-col items-center gap-1 opacity-70">
        <motion.div
          animate={{ y: [20, 0, -20], opacity: [0, 1, 0] }}
          transition={{ repeat: 3, duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-slate-300 text-sm font-bold flex flex-col items-center"
        >
          <span>⌃</span>
          <span className="-mt-2">⌃</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-1"
        >
        </motion.div>
      </div>

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
          
          <div className="w-full aspect-[3/4] rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden relative shrink-0 flex items-center justify-center">
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
            
            {/* 3. SENSOR SCROLL (whileInView) & KURSOR SOLID */}
            {/* onViewportEnter mendeteksi elemen saat disentuh margin bawah layar */}
            <motion.div 
              onViewportEnter={() => setHasStartedTyping(true)}
              viewport={{ once: true, amount: "some" }} 
              className="flex justify-between text-xs font-mono items-center h-4"
            >
              <span className="text-slate-500">STATUS:</span>
              <div className="flex items-center text-green-400 font-bold h-4">
                <span>{statusText}</span>
                {/* Kursor Vertikal Tipis, Solid (tanpa kedip), Hilang otomatis */}
                {showCursor && (
                  <span className="inline-block w-[2px] h-3.5 bg-green-400 ml-0.5" />
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};