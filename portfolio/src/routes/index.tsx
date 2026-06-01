import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/signalis/Layout";
import { Typewriter } from "@/components/signalis/Typewriter";
import { useEffect, useState } from "react";
import { disableSound } from "@/lib/boot-sound";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VICTÓRIA SUARES // AEON SYSTEM" },
      { name: "description", content: "Offensive Security Operator — Red Team portfolio." },
      { property: "og:title", content: "VICTÓRIA SUARES // AEON SYSTEM" },
      { property: "og:description", content: "Offensive Security Operator — Red Team portfolio." },
    ],
  }),
  component: Cover,
});

function Cover() {
  const [step, setStep] = useState(0);
  const lines = [
    "INICIANDO SISTEMA...",
    "IDENTIDADE VERIFICADA...",
    "BEM-VINDO(A), OPERADOR(A).", 
  ];

  useEffect(() => {
    if (step >= lines.length) {
      disableSound();
    }
  }, [step, lines.length]);



  return (
    <Layout>
      <section className="min-h-screen relative px-4 py-10 md:py-16">
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 text-xs font-mono text-blood-bright/80">
          ▲ AEON SYSTEM v2.4
        </div>
        <div className="absolute top-4 right-4 text-xs font-mono text-blood-bright/80">
          KLASSIFIZIERT ▲
        </div>
        <div className="absolute bottom-4 left-4 text-xs font-mono text-muted-foreground">
          KANAL A · 0x7F2C
        </div>
        <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground">
          SIGNAL A1 // STABLE
        </div>
        <div className="mx-auto max-w-5xl flex flex-col items-center justify-center text-center pt-16 md:pt-24">
          <div className="mb-3 text-xs md:text-sm font-mono text-muted-foreground tracking-[0.3em]">
            ─── AKTE NR. LSTR-0413 ───
          </div>

          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl tracking-wider glitch leading-none">
            VICTÓRIA SUARES
          </h1>

          <div className="mt-4 text-blood-bright font-mono text-sm md:text-lg tracking-widest">
            FÜHRUNGSKOMMANDO // OFFENSIVE SECURITY
          </div>

          <div className="mt-2 text-muted-foreground font-mono text-xs md:text-sm">
            指揮官 · ОПЕРАТОР · OPERADORA
          </div>

          <div className="mt-10 min-h-[7rem] font-mono text-sm md:text-base text-bone">
            {lines.slice(0, step + 1).map((l, i) => (
              <div key={i} className="fade-glitch">
                {i === step ? (
                  <Typewriter
                    text={l}
                    sound
                    onDone={() => setStep((s) => Math.min(s + 1, lines.length))}
                    cursor={i === lines.length - 1}
                  />
                ) : (
                  <span>{l}</span>
                )}
              </div>
            ))}
          </div>

          {step >= lines.length && (
            <>
              <div className="text-center text-red-800/60 mb-6 animate-pulse text-sm tracking-widest">
                ▼ SCROLL
              </div>
              <Link
                to="/about"
                className="fade-glitch inline-block font-display text-2xl md:text-3xl px-8 py-3 border border-blood-bright text-blood-bright red-glow glitch-hover"
              >
                ▶ 《开始》 ENTER SYSTEM
              </Link>
            </>
          )}

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono text-muted-foreground w-full max-w-3xl">
            {[
              ["MEM", "1024K OK"],
              ["NET", "ENCRYPTED"],
              ["LOC", "NOWHERE"],
              ["CLR", "VERTRAULICH"],
            ].map(([k, v]) => (
              <div key={k} className="frame px-3 py-2">
                <span className="text-blood-bright">{k}:</span> {v}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
