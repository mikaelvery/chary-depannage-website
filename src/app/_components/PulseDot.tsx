
// ── 1. Dot seul (réutilisable partout)
export function PulseDot({ color = "green" }: { color?: "green" | "orange" }) {
  return (
    <span
      className={`
        inline-block rounded-full shrink-0
        ${color === "green"
          ? "bg-[#4ADE80] animate-pulse-green"
          : "bg-[#F4500A] animate-pulse-orange"}
      `}
      style={{ width: 8, height: 8 }}
      aria-hidden="true"
    />
  );
}

// ── 2. Badge complet "Disponible 6j/7"
export function AvailabilityBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 text-[#FF6B2B] text-[12px] font-medium uppercase tracking-[0.05em]"
      style={{
        background: "rgba(244,80,10,0.12)",
        border: "1px solid rgba(244,80,10,0.25)",
        padding: "7px 16px",
        borderRadius: "100px",
      }}
    >
      <PulseDot color="green" />
      <span>Disponible 6j/7 — Metz &amp; 50km</span>
    </div>
  );
}