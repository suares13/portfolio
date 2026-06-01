import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/signalis/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "ÜBERTRAGUNG // Contact — Victória Suares" },
      { name: "description", content: "Open transmission channels to operator Victória Suares." },
      { property: "og:title", content: "ÜBERTRAGUNG // Contact" },
      { property: "og:description", content: "Open transmission channels." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    code: "KANAL A",
    name: "REPOSITÓRIO // GITHUB",
    handle: "@suares13",
    url: "https://github.com/suares13",
  },
  {
    code: "KANAL B",
    name: "TRANSMISSÃO // EMAIL",
    handle: "vtsuares@gmail.com",
    url: "mailto:vtsuares@gmail.com",
  },
  {
    code: "KANAL C",
    name: "REDE // LINKEDIN",
    handle: "victoria-suares",
    url: "https://www.linkedin.com/in/victoria-suares",
  },
];

function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <div className="text-xs font-mono text-muted-foreground">─── REM-64 RECEIVER ───</div>
          <h1 className="font-display text-4xl md:text-6xl tracking-widest text-blood-bright">
            ÜBERTRAGUNG INITIIERT
          </h1>
          <div className="font-mono text-xs text-muted-foreground mt-1">
            送信 · TRANSMISSION OPEN · ПЕРЕДАЧА
          </div>
        </div>

        {/* terminal panel */}
        <div className="frame p-5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 font-mono text-[10px] leading-tight text-blood-bright p-4 select-none whitespace-pre-wrap">
            {Array.from({ length: 18 })
              .map(
                (_, i) =>
                  `KANAL A :: SIGNAL ${(0x1a + i).toString(16).toUpperCase()} :: 機密 :: 0x${(0x7f2c + i * 13).toString(16).toUpperCase()} :: STABLE :: AEON-${i} :: HANDSHAKE_OK ::`,
              )
              .join("\n")}
          </div>

          <div className="relative z-10 font-mono text-xs text-accent flex items-center justify-between mb-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent dot-blink inline-block" />
              LINK ESTABLISHED
            </span>
            <span>FREQ: 64.13 MHz</span>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-4">
            {channels.map((c) => (
              <a
                key={c.code}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="frame red-glow glitch-hover p-4 block bg-black/60"
              >
                <div className="font-mono text-[11px] text-blood-bright tracking-widest flex items-center gap-2">
                  <span className="radar-ping" aria-hidden="true" />
                  ▸ {c.code}
                </div>
                <div className="font-display text-2xl mt-1 text-bone tracking-wider">
                  {c.name}
                </div>
                <div className="font-mono text-sm text-accent mt-2 break-all">{c.handle}</div>
                <div className="mt-4 border-t border-blood/40 pt-2 font-mono text-xs text-blood-bright">
                  TRANSMITIR →
                </div>
              </a>
            ))}
          </div>

          <div className="relative z-10 mt-6 border-t border-blood/40 pt-3 font-mono text-xs text-muted-foreground flex justify-between flex-wrap gap-2">
            <span>SIGNAL A1 :: STABLE</span>
            <span>機密 KLASSIFIZIERT 機密</span>
            <span className="cursor-blink">END_OF_LINE</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
