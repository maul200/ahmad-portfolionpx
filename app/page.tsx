import {CircuitBackground } from "@/components/ui/CircuitBackground";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { OSShell } from "@/components/layout/OSShell";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--portfolio-text)] relative overflow-hidden">
      <CircuitBackground />
      <MouseGlow />

      <div className="relative z-10">
        <OSShell />
      </div>
    </main>
  );
}