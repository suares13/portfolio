import { useEffect, useState } from "react";

const LINES = [
  "AEON SYSTEM v2.4 // BOOTING...",
  "> MOUNTING MEMORY MODULES........ [OK]",
  "> INITIALIZING REPLIKA INTERFACE.. [OK]",
  "> LOADING AKTE: SUARES_V.......... [OK]",
  "> CHECKING CLEARANCE.............. [VERTRAULICH]",
  "> ACCESS GRANTED.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, LINES[i]]);
      i++;
      if (i >= LINES.length) {
        clearInterval(id);
        setTimeout(onDone, 500);
      }
    }, 280);

    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl font-mono text-bone text-sm md:text-base">
        <div className="text-blood-bright mb-4 flex items-center gap-2">
          <span className="warn-stripes inline-block h-3 w-12" />
          <span>▲ KLASSIFIZIERT ▲</span>
          <span className="warn-stripes inline-block h-3 w-12" />
        </div>
        {shown.map((l, i) => (
          <div key={i} className="fade-glitch">
            <span className="text-accent">{">"}</span> {l}
          </div>
        ))}
        <div className="mt-4 text-blood-bright cursor-blink" />
      </div>
    </div>
  );
}
