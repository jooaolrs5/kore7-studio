import { useScrollReveal } from "@/hooks/useScrollReveal";

const styles = `
  .srv-card {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    transition: var(--transition);
  }
  .srv-card:hover {
    border-color: var(--border-light);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    .srv-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
  }
`;

const SERVICOS = [
  {
    ordinal: "01",
    title: "AVALIAÇÃO FÍSICA",
    description:
      "Ponto de partida de todo aluno KORE7. Entendemos seu histórico, objetivos e condição atual para montar a melhor estratégia.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    ordinal: "02",
    title: "TREINO EM TURMA REDUZIDA",
    description:
      "Máximo 6 alunos por turma com acompanhamento profissional em cada sessão. O melhor dos dois mundos: grupo e atenção individual.",
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
    ordinal: "03",
    title: "PERSONAL TRAINER",
    description:
      "Sessão 1:1 com acompanhamento exclusivo. Ideal para quem tem objetivos específicos, lesões ou quer acelerar resultados.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5" />
        <path d="M5 10h4l1 5h4l1-5h4" />
        <rect x="3" y="8" width="3" height="5" rx="1" />
        <rect x="18" y="8" width="3" height="5" rx="1" />
      </svg>
    ),
  },
  {
    ordinal: "04",
    title: "CONSULTORIA ONLINE",
    description:
      "Treinamento e orientação à distância, com acompanhamento próximo e metodologia KORE7 onde você estiver.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function ServicosSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="servicos"
        className="reveal section-padding"
        style={{ background: "var(--bg-primary)" }}
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
                O que oferecemos
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
              Serviços para cada{" "}
              <span style={{ color: "var(--off-white)" }}>objetivo.</span>
            </h2>
          </div>

          {/* Grid */}
          <div
            className="srv-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICOS.map(({ ordinal, title, description, icon }) => (
              <div key={title} className="srv-card">
                {/* Número ordinal decorativo */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontFamily: "var(--font-title)",
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "rgba(240,237,232,0.06)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {ordinal}
                </span>

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
