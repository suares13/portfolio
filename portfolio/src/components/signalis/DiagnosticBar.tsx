import { useEffect, useState } from "react";

export function DiagnosticBar({ label, value, color = "blood" }: { label: string; value: number; color?: "blood" | "cyan" }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setV(value), 150);
    return () => clearTimeout(id);
  }, [value]);

  const barColor = color === "cyan" ? "var(--cyan-signal)" : "var(--blood-bright)";

  return (
    <div className="font-mono text-sm">
      <div className="flex justify-between mb-1 text-bone">
        <span>▸ {label}</span>
        <span style={{ color: barColor }}>{value}%</span>
      </div>
      <div className="h-3 border border-blood/60 bg-black relative overflow-hidden">
        <div
          className="h-full transition-all duration-[1200ms] ease-out"
          style={{
            width: `${v}%`,
            background: `repeating-linear-gradient(90deg, ${barColor} 0 6px, transparent 6px 8px)`,
            boxShadow: `0 0 8px ${barColor}`,
          }}
        />
      </div>
    </div>
  );
}
