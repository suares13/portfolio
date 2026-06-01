import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/signalis/Layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "PROJEKTARCHIV // Projects — Victória Suares" },
      { name: "description", content: "Classified project archive — offensive security and red team tooling." },
      { property: "og:title", content: "PROJEKTARCHIV // Projects" },
      { property: "og:description", content: "Classified project archive." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    code: "01",
    name: "cra-guardian",
    tags: ["Python", "CLI", "Compliance"],
    desc: "CLI tool para geração de SBOM e auditoria de conformidade com o EU Cyber Resilience Act (CRA) e Digital CE Marking.",
    url: "https://github.com/suares13/cra-guardian",
  },
  {
    code: "02",
    name: "PurpleTeam_Simulator",
    tags: ["Python", "Flask", "HTML", "MITRE ATT&CK"],
    desc: "Simulador interativo de Purple Team com emulação de adversários via MITRE ATT&CK, validação de regras SIEM em tempo real e relatórios de forense digital com SHA-256.",
    url: "https://github.com/suares13/PurpleTeam_Simulator",
  },
  {
    code: "03",
    name: "risk-manager",
    tags: ["Python", "Streamlit", "MAGERIT"],
    desc: "Dashboard de gestão de riscos baseado na metodologia MAGERIT para análise de ativos, ameaças e riscos.",
    url: "https://github.com/suares13/risk-manager",
  },
  {
    code: "04",
    name: "cti-mapper",
    tags: ["Python", "CLI", "Threat Intel"],
    desc: "CLI tool para mapeamento de ameaças cibernéticas usando MITRE ATT&CK, Pain Pyramid e Cyber Kill Chain.",
    url: "https://github.com/suares13/cti-mapper",
  },
  {
    code: "05",
    name: "ScarletScanner",
    tags: ["Python", "Red Team", "Networking"],
    desc: "Port Scanner em Python para estudos de Red Team e análise de redes.",
    url: "https://github.com/suares13/ScarletScanner",
  },
  {
    code: "06",
    name: "privacy-policy-auditor",
    tags: ["Python", "CLI", "GDPR", "Privacy"],
    desc: "CLI tool para auditar e pontuar políticas de privacidade do mundo real com base nos princípios do GDPR e direitos dos usuários.",
    url: "https://github.com/suares13/privacy-policy-auditor",
  },
];

function Projects() {
  const researchProject = {
    code: "07",
    name: "Parecer Técnico: Vulnerabilidades SS7",
    tags: ["Research", "Telecomunicações", "Offensive Security"],
    desc: "Análise técnica independente de vulnerabilidades em redes móveis (SS7/Diameter), vetores de ataque como SIM Swap e Downgrade, com plano executivo de mitigação. Elaborado como consultora independente de segurança.",
    footer: "CONSULTORA: Victória Suares — Teresina, PI — 2026",
  };
  const total = projects.length + 1;
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <div className="text-xs font-mono text-muted-foreground">─── ARCHIV ───</div>
          <h1 className="font-display text-4xl md:text-6xl tracking-widest text-bone">
            《项目档案》 <span className="text-blood-bright">PROJEKTARCHIV</span>
          </h1>
          <div className="font-mono text-xs text-muted-foreground mt-1">
            プロジェクト · {total} AKTEN GEFUNDEN
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 project-grid">
          {projects.map((p) => (
            <a
              key={p.code}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="frame red-glow glitch-hover p-5 block transition-all relative group project-card"
            >
              <div className="absolute top-3 right-3 stamp text-sm">AKTE</div>

              <div className="font-mono text-xs text-blood-bright tracking-widest">
                PROJEKT {p.code}
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-bone mt-1 tracking-wider group-hover:text-blood-bright transition-colors">
                {p.name}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-0.5 border border-accent/60 text-accent bg-accent/5"
                  >
                    [{t}]
                  </span>
                ))}
              </div>

              <p className="mt-4 font-mono text-sm text-bone/90 leading-relaxed">{p.desc}</p>

              <div className="mt-5 border-t border-blood/40 pt-3 flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">CLR: VERTRAULICH</span>
                <span className="text-blood-bright group-hover:text-bone">
                  ZUGRIFF GEWÄHREN →
                </span>
              </div>
            </a>
          ))}

          {/* Research card — cyan accent, no link */}
          <div
            className="frame glitch-hover p-5 block relative group project-card"
            style={{ borderColor: "#00ffcc" }}
          >
            <div
              className="absolute top-3 right-3 text-sm font-display tracking-widest px-2 py-0.5 border-2"
              style={{ borderColor: "#00ffcc", color: "#00ffcc", transform: "rotate(-6deg)" }}
            >
              RESEARCH
            </div>

            <div className="font-mono text-xs tracking-widest" style={{ color: "#00ffcc" }}>
              PROJEKT {researchProject.code}
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-bone mt-1 tracking-wider">
              {researchProject.name}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {researchProject.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 border border-accent/60 text-accent bg-accent/5"
                >
                  [{t}]
                </span>
              ))}
            </div>

            <p className="mt-4 font-mono text-sm text-bone/90 leading-relaxed">
              {researchProject.desc}
            </p>

            <div
              className="mt-5 border-t pt-3 font-mono text-[11px]"
              style={{ borderColor: "rgba(0,255,204,0.4)", color: "#00ffcc" }}
            >
              {researchProject.footer}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
