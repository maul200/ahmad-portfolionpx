"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypewriterHeader } from "@/components/ui/TypewriterHeader";

const BinaryPhotoReveal = ({ src, alt }: { src: string; alt: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 240;
    const height = 320;
    canvas.width = width;
    canvas.height = height;

    const cellSize = 10; // Ukuran tiap kotak piksel (24 kolom x 32 baris = 768 blok)
    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);
    const totalCells = cols * rows;

    let animationFrameId: number;
    let isCancelled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      if (isCancelled) return;

      // 1. Ambil sampel warna asli foto menggunakan canvas sementara
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      // Hitung crop agar proporsi foto (object-cover) sama persis dengan <img>
      const imgAspect = img.width / img.height;
      const boxAspect = width / height;
      let drawW = width;
      let drawH = height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgAspect > boxAspect) {
        drawW = height * imgAspect;
        offsetX = -(drawW - width) / 2;
      } else {
        drawH = width / imgAspect;
        offsetY = -(drawH - height) / 2;
      }

      tempCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
      const imageData = tempCtx.getImageData(0, 0, width, height).data;

      // Simpan warna RGB asli & bit (0/1) untuk setiap koordinat sel
      const cells = Array.from({ length: totalCells }, (_, idx) => {
        const r = Math.floor(idx / cols);
        const c = idx % cols;
        const sampleX = Math.min(width - 1, c * cellSize + Math.floor(cellSize / 2));
        const sampleY = Math.min(height - 1, r * cellSize + Math.floor(cellSize / 2));
        const pixelIndex = (sampleY * width + sampleX) * 4;

        return {
          r,
          c,
          color: `rgb(${imageData[pixelIndex]}, ${imageData[pixelIndex + 1]}, ${imageData[pixelIndex + 2]})`,
          bit: Math.random() > 0.5 ? "1" : "0",
        };
      });

      const startTime = performance.now();
      const initialBlankDelay = 500; // 0.5 detik awal panel benar-benar kosong
      const scanDuration = 3200; // 3.2 detik berjalan santai per baris dari atas ke bawah
      const bitToColorDelay = 350; // Jeda 0.35 detik dari angka 0/1 berubah menjadi warna solid

      const render = (now: number) => {
        if (isCancelled) return;
        const elapsed = now - startTime;

        // Bersihkan layar menjadi panel kosong gelap
        ctx.fillStyle = "#0A0A0A";
        ctx.fillRect(0, 0, width, height);

        // Fase 1: Panel kosong di awal
        if (elapsed < initialBlankDelay) {
          animationFrameId = requestAnimationFrame(render);
          return;
        }

        const activeTime = elapsed - initialBlankDelay;
        // Hitung sampai indeks sel ke berapa cursor sudah berjalan (kiri->kanan, atas->bawah)
        const currentHead = Math.min(
          totalCells,
          Math.floor((activeTime / scanDuration) * totalCells)
        );

        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        let allSettled = true;

        for (let i = 0; i < currentHead; i++) {
          const cell = cells[i];
          const cellSpawnTime = (i / totalCells) * scanDuration;
          const cellAge = activeTime - cellSpawnTime;

          const x = cell.c * cellSize;
          const y = cell.r * cellSize;

          if (cellAge < bitToColorDelay) {
            // Tahap A: Muncul angka 0 atau 1 sesuai warna asli piksel foto
            allSettled = false;
            ctx.fillStyle = cell.color;
            ctx.fillText(cell.bit, x + cellSize / 2, y + cellSize / 2);
          } else {
            // Tahap B: Berubah menjadi titik/blok warna asli gambar
            ctx.fillStyle = cell.color;
            ctx.fillRect(x, y, cellSize, cellSize);
          }
        }

        if (currentHead < totalCells || !allSettled) {
          animationFrameId = requestAnimationFrame(render);
        } else {
          // Beri jeda halus 200ms sebelum melepas canvas agar foto tajam muncul mulus
          setTimeout(() => {
            if (!isCancelled) setIsDone(true);
          }, 200);
        }
      };

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, [src]);

  return (
    <div className="w-full aspect-[3/4] rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden relative shrink-0 flex items-center justify-center">
      {/* Foto Asli (muncul halus setelah canvas selesai merender seluruh baris) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isDone ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Canvas Animasi Biner Berwarna per Baris */}
      {!isDone && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      )}
    </div>
  );
};

export const Profile = () => {
  const [statusText, setStatusText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    if (!hasStartedTyping) return;

    let isMounted = true;

    // Waktu ketik status disesuaikan agar tidak terburu-buru
    const sequence = [
      { char: "A", time: 2000 },
      { char: "V", time: 2100 },
      { char: "A", time: 2200 },
      { char: "I", time: 2300 },
      { char: "L", time: 3000 },
      { char: "A", time: 3100 },
      { char: "B", time: 3200 },
      { char: "L", time: 3300 },
      { char: "E", time: 3400 },
    ];

    const timeouts = sequence.map(({ char, time }, i) =>
      setTimeout(() => {
        if (!isMounted) return;
        setStatusText((prev) => prev + char);

        if (i === sequence.length - 1) {
          setTimeout(() => {
            if (isMounted) setShowCursor(false);
          }, 300);
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

      {/* ANIMASI KHUSUS MOBILE (HUD Scroll Hint) */}
      <div className="fixed bottom-32 right-4 z-50 pointer-events-none flex md:hidden flex-col items-center gap-1 opacity-70">
        <motion.div
          animate={{ y: [20, 0, -20], opacity: [0, 1, 0] }}
          transition={{ repeat: 3, duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-slate-300 text-sm font-bold flex flex-col items-center"
        >
          <span>⌃</span>
          <span className="-mt-2">⌃</span>
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
                <div className="text-slate-500 text-xs pt-0.5">
                  EX-AFFILIATION:
                </div>
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
                  <li>{">"} HeidiSQL</li>
                  <li>{">"} Taiga</li>
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
          
          {/* Foto dengan Efek Biner Warna Asli per Baris */}
          <BinaryPhotoReveal src="/fotoprofil.jpeg" alt="Ahmad Mauluddin" />

          <div className="flex-1 flex flex-col justify-center my-4">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="w-full space-y-2 shrink-0">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">FIELD:</span>
              <span className="text-slate-300">INFORMATICS</span>
            </div>

            <motion.div
              onViewportEnter={() => setHasStartedTyping(true)}
              viewport={{ once: true, amount: "some" }}
              className="flex justify-between text-xs font-mono items-center h-4"
            >
              <span className="text-slate-500">STATUS:</span>
              <div className="flex items-center text-green-400 font-bold h-4">
                <span>{statusText}</span>
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