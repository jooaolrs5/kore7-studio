import { useScrollReveal } from "@/hooks/useScrollReveal";

const styles = `
  .dif-card {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2.5rem;
    transition: var(--transition);
    position: relative;
  }
  .dif-card:hover {
    border-color: var(--border-light);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    .dif-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    .dif-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;

const DIFERENCIAIS = [
  {
    title: "TURMAS REDUZIDAS",
    description:
      "Máximo de 4 alunos por turma. Atenção real, sem fila, sem se perder na multidão.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "TREINO PERSONALIZADO",
    description:
      "Metodologia própria de treinamento integrado: condicionamento, mobilidade e prevenção de lesões.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: "PREVENÇÃO DE LESÕES",
    description:
      "Lesão ou limitação? Aqui o processo é conduzido com segurança e acompanhamento especializado.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "ACOMPANHAMENTO PRÓXIMO",
    description:
      "Do primeiro dia ao seu melhor resultado. Evolução consistente, sustentável e com propósito.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function DiferenciaisSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="diferenciais"
        className="reveal section-padding"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="section-inner">
          {/* Header */}
          <div style={{ marginBottom: "4rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "1px",
                  background: "var(--gray-light)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: "var(--gray-light)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Por que o KORE7
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-title)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                textTransform: "uppercase" as const,
                color: "var(--white)",
                maxWidth: "18ch",
              }}
            >
              O que nos torna{" "}
              <span style={{ color: "var(--off-white)" }}>diferentes.</span>
            </h2>
          </div>

          {/* Grid */}
          <div
            className="dif-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {DIFERENCIAIS.map(({ title, description, icon }) => (
              <div key={title} className="dif-card">
                {/* Ícone */}
                <div
                  style={{
                    color: "var(--off-white)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {icon}
                </div>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: "var(--font-title)",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: "var(--white)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>

                {/* Descrição */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
