import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Scanlines } from "./Scanlines";
import { Crosshair } from "./Crosshair";
import { BootSequence } from "./BootSequence";

const NAV = [
  { to: "/", cn: "《开始》", label: "BEGIN" },
  { to: "/about", cn: "《关于》", label: "ABOUT" },
  { to: "/projects", cn: "《项目》", label: "PROJECTS" },
  { to: "/contact", cn: "《联系》", label: "CONTACT" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [booted, setBooted] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("aeon-booted")) setBooted(true);
  }, []);

  const handleBoot = () => {
    sessionStorage.setItem("aeon-booted", "1");
    setBooted(true);
  };

  return (
    <div className="min-h-screen bg-background text-bone crt-flicker noise-bg relative">
      <Scanlines />
      <Crosshair />
      {!booted && <BootSequence onDone={handleBoot} />}

      {/* TOP BAR */}
      <header className="border-b border-blood/40 bg-black/70 backdrop-blur-sm relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3 text-blood-bright">
            <span className="warn-stripes inline-block h-2 w-8" />
            <span>▲ AEON SYSTEM v2.4</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <span>機密 · KLASSIFIZIERT · 機密</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <span className="h-2 w-2 bg-accent dot-blink inline-block" />
            <span>LINK ESTABLISHED</span>
          </div>
        </div>
      </header>

      {/* NAV */}
      <nav className="border-b border-blood/40 bg-ash/40 relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap gap-1 md:gap-2 font-display text-lg md:text-2xl">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`glitch-hover px-3 py-1 border tracking-widest transition-colors ${
                  active
                    ? "border-blood-bright text-blood-bright bg-blood/10"
                    : "border-transparent text-bone hover:text-blood-bright"
                }`}
              >
                <span className="text-muted-foreground text-base mr-1">{n.cn}</span>
                {active && <span className="text-blood-bright">▶ </span>}
                {n.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <main key={pathname} className="boot-in relative z-10">{children}</main>

      <footer className="border-t border-blood/40 mt-12 py-4 text-center text-xs font-mono text-muted-foreground relative z-10">
        <div>機密 · FIM DA TRANSMISSÃO — SIGNALIS SYSTEM — © VICTÓRIA SUARES · 機密</div>
      </footer>
    </div>
  );
}
