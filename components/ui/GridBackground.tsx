export function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}