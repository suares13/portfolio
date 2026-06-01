import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/signalis/Layout";
import { DiagnosticBar } from "@/components/signalis/DiagnosticBar";
import portrait from "@/assets/elster-portrait.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "AKTE // ABOUT — Victória Suares" },
      { name: "description", content: "Character dossier for Operator Victória Suares — Red Team / Offensive Security." },
      { property: "og:title", content: "AKTE // ABOUT — Victória Suares" },
      { property: "og:description", content: "Character dossier for Operator Victória Suares." },
    ],
  }),
  component: About,
});

const skills = [
  { name: "Penetration Testing", value: 88, color: "blood" as const },
  { name: "Web Application Security", value: 82, color: "blood" as const },
  { name: "OSINT & Threat Intelligence", value: 78, color: "cyan" as const },
  { name: "Python / Scripting", value: 90, color: "cyan" as const },
  { name: "CTF Challenges", value: 75, color: "blood" as const },
  { name: "MITRE ATT&CK Framework", value: 80, color: "cyan" as const },
];

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
          <div>
            <div className="text-xs font-mono text-muted-foreground">─── DOSSIER ───</div>
            <h1 className="font-display text-4xl md:text-6xl text-bone tracking-widest">
              AKTE NR. <span className="text-blood-bright">LSTR-0413</span>
            </h1>
            <div className="font-mono text-xs text-muted-foreground mt-1">
              個人ファイル · PERSONALAKTE · ЛИЧНОЕ ДЕЛО
            </div>
          </div>
          <div className="stamp text-2xl">VERTRAULICH</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT: identity card */}
          <div className="md:col-span-1 frame p-5 space-y-4">
            <div className="portrait-frame aspect-square relative overflow-hidden border-2" style={{ borderColor: "#cc0000" }}>
              <img
                src={portrait.url}
                alt="Operator LSTR-0413 portrait"
                className="w-full h-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="absolute bottom-2 left-2 font-mono text-xs text-blood-bright z-10">ID:LSTR-0413</div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-muted-foreground z-10">REM-64</div>
            </div>

            <Field k="DESIGNATION" v="Victória Suares" />
            <Field k="SPECIALIZATION" v="Offensive Security / Red Team" />
            <div className="font-mono text-sm">
              <div className="text-blood-bright">▸ STATUS</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 bg-accent dot-blink inline-block" />
                <span className="text-accent">[ACTIVE]</span>
              </div>
            </div>
            <Field k="UNIT" v="FÜHRUNGSKOMMANDO" />
            <Field k="CLEARANCE" v="VERTRAULICH" />
          </div>

          {/* RIGHT: bio + skills */}
          <div className="md:col-span-2 space-y-6">
            <div className="frame p-5">
              <div className="text-blood-bright font-mono text-sm mb-3 flex items-center justify-between">
                <span>▸ BIOGRAPHISCHE NOTIZEN</span>
                <span className="text-muted-foreground text-xs">伝記 / BIO</span>
              </div>
              <p className="font-mono text-bone leading-relaxed text-sm md:text-base">
                Estudante de Engenharia de Software apaixonada por segurança ofensiva e Red Team.
                Quebro sistemas para entender como funcionam e como protegê-los melhor. Meu
                objetivo é atuar como Red Team Operator, simulando adversários reais para fortalecer
                defesas. CTF, pentest e a complexidade dos sistemas são o que me movem.
              </p>
              <blockquote className="mt-5 border-l-2 border-blood-bright pl-4 italic font-mono text-xs md:text-sm text-muted-foreground">
                — "I am LSTR unit. My designation is Elster."
              </blockquote>
            </div>

            <div className="frame p-5">
              <div className="text-blood-bright font-mono text-sm mb-4 flex items-center justify-between">
                <span>▸ SYSTEM DIAGNOSTIC</span>
                <span className="text-muted-foreground text-xs">診断 / SKILLS</span>
              </div>
              <div className="space-y-4">
                {skills.map((s) => (
                  <DiagnosticBar key={s.name} label={s.name} value={s.value} color={s.color} />
                ))}
              </div>
            </div>

            <div className="frame p-5">
              <div className="text-blood-bright font-mono text-sm mb-3 flex items-center justify-between">
                <span>▸ EINSATZPROFILE</span>
                <span className="text-muted-foreground text-xs">CAPACIDADES OPERACIONAIS</span>
              </div>
              <div className="font-mono text-sm space-y-2 leading-relaxed">
                <div className="text-bone">
                  = <span className="text-accent">[TOOL_DEV]</span>: Desenvolvimento de ferramentas táticas, utilitários CLI e automações ofensivas.
                </div>
                <div className="text-bone">
                  = <span className="text-accent">[VULN_RESEARCH]</span>: Análise de arquiteturas, auditoria de segurança e elaboração de pareceres técnicos.
                </div>
                <div className="text-bone">
                  = <span className="text-accent">[THREAT_SIM]</span>: Mapeamento de superfície de ataque, OSINT e emulação de adversários.
                </div>
                <div className="text-bone">
                  = <span className="text-accent">[R&amp;D_INTEL]</span>: Pesquisa técnica aprofundada, redação acadêmica e documentação analítica de sistemas.
                </div>
                <div className="text-bone">
                  = <span className="text-accent">[OPS_MANAGEMENT]</span>: Estruturação de fluxos ágeis (Kanban/Trello), organização de projetos e gestão tática de tarefas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="font-mono text-sm">
      <div className="text-blood-bright">▸ {k}</div>
      <div className="text-bone mt-0.5 break-words">{v}</div>
    </div>
  );
}
