import { GridBackground } from "@/components/ui/GridBackground";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { OSShell } from "@/components/layout/OSShell";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--portfolio-background)] text-[var(--portfolio-text)]">
      <GridBackground />
      <MouseGlow />

      <div className="relative z-10">
        <OSShell />
      </div>
    </main>
  );
}