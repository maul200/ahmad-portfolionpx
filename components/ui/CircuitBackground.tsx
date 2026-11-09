"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const circuitPaths = [
  // Dari Kiri ke Tengah
  { id: "p1", d: "M -50 300 H 200 L 350 450 H 550" }, 
  { id: "p3", d: "M -50 150 H 150 L 300 300 H 550" }, 
  { id: "p5", d: "M -50 800 H 150 L 300 650 H 550" }, 
  
  // Dari Kanan ke Tengah
  { id: "p6", d: "M 1970 200 H 1600 L 1400 400 H 1350" }, 
  { id: "p4", d: "M 1700 -50 V 250 L 1500 450 H 1350" }, 
  { id: "p10", d: "M 1970 800 H 1700 L 1550 650 H 1350" }, 
  { id: "p11", d: "M 1970 950 H 1500 L 1350 800 V 700" }, 
  
  // Dari Atas ke Tengah
  { id: "p7", d: "M 400 -50 V 100 L 550 250 V 350" }, 
  { id: "p9", d: "M 1500 -50 V 150 L 1350 300 V 400" }, 
  
  // Dari Bawah ke Tengah
  { id: "p2", d: "M 1300 1150 V 950 L 1100 750 H 950" }, 
  { id: "p8", d: "M 1700 1150 V 950 L 1500 750 H 1350" }, 
  { id: "p12", d: "M 200 1150 V 950 L 400 750 H 550" }, 
];

export const CircuitBackground = () => {
  const [activeLines, setActiveLines] = useState<Array<{ uid: string; d: string; duration: number; hasDot: boolean }>>([]);

  useEffect(() => {
    let isMounted = true;

    const spawnLine = () => {
      if (!isMounted) return;
      
      const randomPath = circuitPaths[Math.floor(Math.random() * circuitPaths.length)].d;
      const uid = Math.random().toString(36).substring(2, 9);
      const duration = 2.5 + Math.random() * 2.5; 
      
      const hasDot = Math.random() > 0.4;

      setActiveLines((prev) => [...prev, { uid, d: randomPath, duration, hasDot }]);

      setTimeout(() => {
        if (isMounted) {
          setActiveLines((prev) => prev.filter((line) => line.uid !== uid));
        }
      }, duration * 1000 + 200);
    };

    spawnLine();
    setTimeout(spawnLine, 600);
    setTimeout(spawnLine, 1200);

    const interval = setInterval(() => {
      spawnLine();
      if (Math.random() > 0.5) setTimeout(spawnLine, 500); 
    }, 1200);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] bg-[#020617] overflow-hidden pointer-events-none">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.15)_0%,transparent_100%)]" />
      
      <svg
        className="w-full h-full opacity-80"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatePresence>
          {activeLines.map((line) => (
            <g key={line.uid}>
              
              <motion.path
                d={line.d}
                stroke="#4ade80" 
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                style={{ filter: "drop-shadow(0 0 4px rgba(74,222,128,0.6))" }} // Glow diturunkan
                initial={{ pathLength: 0, opacity: 0 }} 
                animate={{
                  pathLength: 1, 
                  opacity: [0, 0.65, 0.65, 0], // Maksimal opacity 0.65 (tidak terlalu nyala)
                }}
                transition={{
                  pathLength: { duration: line.duration, ease: "easeInOut" },
                  opacity: { duration: line.duration, times: [0, 0.05, 0.9, 1] },
                }}
                exit={{ opacity: 0 }}
              />

              {line.hasDot && (
                <motion.path
                  d={line.d}
                  stroke="#4ade80"
                  strokeWidth="7" 
                  strokeLinecap="round"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 6px rgba(74,222,128,0.8))" }} // Glow titik sedikit lebih kalem
                  initial={{ pathLength: 0.02, pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathOffset: 1, 
                    opacity: [0, 0.85, 0.85, 0], // Maksimal opacity 0.85 
                  }}
                  transition={{
                    pathOffset: { duration: line.duration, ease: "easeInOut" }, 
                    opacity: { duration: line.duration, times: [0, 0.05, 0.9, 1] },
                  }}
                  exit={{ opacity: 0 }}
                />
              )}

            </g>
          ))}
        </AnimatePresence>
      </svg>
    </div>
  );
};