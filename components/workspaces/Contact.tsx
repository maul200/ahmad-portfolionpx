"use client";

import { motion } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

// Data kontak dipisah agar kode tidak membengkak dan mudah dianimasikan serentak
const contactList = [
  {
    id: "email",
    href: "mailto:ahmadmauluddin173@gmail.com",
    text: "ahmadmauluddin173@gmail.com",
    label: "[INITIATE]",
    color: "#EA4335", // Merah Google
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/ahmadmauluddin",
    text: "/in/ahmadmauluddin",
    label: "[CONNECT]",
    color: "#0A66C2", // Biru LinkedIn
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: "whatsapp",
    href: "https://wa.me/6289524136688",
    text: "0895-2413-6688",
    label: "[PING]",
    color: "#25D366", // Hijau WA
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    id: "instagram",
    href: "https://instagram.com/ahm.mauluddin",
    text: "@ahm.mauluddin",
    label: "[CONNECT]",
    color: "#E1306C", // Pink/Merah IG
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
];

export const Contact = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6"
    >
      <TypewriterHeader text="ACTIVE WORKSPACE // COMMS_PROTOCOL" />
      
      <div className="border border-white/10 rounded-xl bg-white/[0.02] flex-1 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)]" />

        <div className="z-10 w-full max-w-lg space-y-6 md:space-y-8 relative">
          
          {/* BAGIAN ATAS: WIFI & MAGIC WAND PARTICLES */}
          <div className="text-center space-y-3 md:space-y-4 relative">
            
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-slate-500 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Outer Arc (Sinyal Terluar) - Nyala ke-4 */}
                <motion.path 
                  d="M1.42 9a16 16 0 0 1 21.16 0" 
                  animate={{ stroke: ["#64748b", "#ffffff", "#ffffff", "#64748b"] }} 
                  transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1], delay: 2.4 }} 
                />
                {/* Middle Arc (Sinyal Tengah) - Nyala ke-3 */}
                <motion.path 
                  d="M5 12.55a11 11 0 0 1 14.08 0" 
                  animate={{ stroke: ["#64748b", "#ffffff", "#ffffff", "#64748b"] }} 
                  transition={{ duration: 3.3, times: [0, 0.15, 0.85, 1], delay: 1.6 }} 
                />
                {/* Inner Arc (Sinyal Dalam) - Nyala ke-2 */}
                <motion.path 
                  d="M8.53 16.11a6 6 0 0 1 6.95 0" 
                  animate={{ stroke: ["#64748b", "#ffffff", "#ffffff", "#64748b"] }} 
                  transition={{ duration: 4.1, times: [0, 0.1, 0.9, 1], delay: 0.8 }} 
                />
                {/* Dot (Titik Bawah) - Nyala ke-1 */}
                <motion.line 
                  x1="12" y1="20" x2="12.01" y2="20" 
                  animate={{ stroke: ["#64748b", "#ffffff", "#ffffff", "#64748b"] }} 
                  transition={{ duration: 4.9, times: [0, 0.1, 0.9, 1], delay: 0 }} 
                />
              </svg>

              {/* MAGIC WAND PARTICLES (Terbang setelah 3 detik wifi menyala) */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]"
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0],
                    x: [0, (i % 2 === 0 ? -40 : 40) * (i + 1)], // Terbang menyebar ke kiri/kanan
                    y: [0, 80 + (i * 40)] // Terbang ke bawah menuju kotak kontak
                  }}
                  transition={{ delay: 3, duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-300">
                Establish Connection
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-slate-500 mt-1 px-4">
                Select a secure channel to initiate transmission.
              </p>
            </div>
          </div>

          {/* BAGIAN BAWAH: KOTAK KONTAK & EFEK LAMPU JALAN */}
          <div className="space-y-2 md:space-y-3 relative">
            {contactList.map((contact, index) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.id !== "email" ? "_blank" : undefined}
                rel={contact.id !== "email" ? "noreferrer" : undefined}
                // Group & styling bawaan Anda tetap utuh!
                className="block w-full p-3 md:p-4 border border-white/10 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] hover:border-slate-400 transition-all group flex items-center justify-between gap-2 relative overflow-hidden"
              >
                
                {/* --- ANIMASI LAMPU BERJALAN (SCANNER BEAM) --- */}
                {/* Lampu Atas: Bergerak dari Kiri ke Kanan */}
                <motion.div
                  className="absolute top-0 w-[40%] h-[2px] blur-[1px]"
                  style={{ backgroundColor: contact.color }}
                  initial={{ left: "-50%", opacity: 0 }}
                  animate={{ left: "110%", opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 3.5, duration: 1.5, ease: "easeInOut" }} // Dimulai tepat setelah partikel sampai
                />
                {/* Lampu Bawah: Bergerak dari Kiri ke Kanan */}
                <motion.div
                  className="absolute bottom-0 w-[40%] h-[2px] blur-[1px]"
                  style={{ backgroundColor: contact.color }}
                  initial={{ left: "-50%", opacity: 0 }}
                  animate={{ left: "110%", opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 3.5, duration: 1.5, ease: "easeInOut" }}
                />
                {/* ------------------------------------------- */}

                <div className="flex items-center gap-3 md:gap-4 overflow-hidden relative z-10">
                  <span
                    className="text-slate-500 transition-colors shrink-0"
                    // Memanfaatkan warna dinamis saat hover bawaan Tailwind via Inline Style Helper
                    style={{ '--hover-color': contact.color } as React.CSSProperties}
                  >
                    <div className="group-hover:[color:var(--hover-color)] transition-colors">
                      {contact.icon}
                    </div>
                  </span>
                  <span className="text-slate-300 text-[10px] md:text-sm font-mono truncate">
                    {contact.text}
                  </span>
                </div>
                <span className="text-[8px] md:text-[10px] font-mono text-slate-600 group-hover:text-slate-400 tracking-wide md:tracking-widest shrink-0 relative z-10">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};