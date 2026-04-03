import { useScrollReveal } from "@/hooks/useScrollReveal";

const WA_URL =
  "https://wa.me/5598985789534?text=Olá!%20Quero%20reservar%20um%20horário%20no%20KORE7.";

const styles = `
  .hor-card {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2.5rem;
    transition: var(--transition);
  }
  .hor-card:hover {
    border-color: var(--border-light);
    transform: translateY(-4px);
  }
  .hor-btn:hover {
    background: var(--white) !important;
  }

  @media (max-width: 768px) {
    .hor-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
    .hor-btn  { width: 100% !important; display: block !important; text-align: center !important; }
  }
`;

const TURNOS = [
  {
    titulo: "MANHÃ",
    horarios: ["06h00", "07h00", "08h00", "09h00"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    titulo: "TARDE",
    horarios: ["12h00", "13h00", "15h00", "16h00"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 12a5 5 0 1 1-10 0" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    titulo: "NOITE",
    horarios: ["18h00", "19h00", "20h00", "21h00"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

export default function HorariosSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="horarios"
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
                Agenda
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
                marginBottom: "1.25rem",
                maxWidth: "22ch",
              }}
            >
              Encontre o melhor horário para você.
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                maxWidth: "440px",
                lineHeight: 1.7,
              }}
            >
              De segunda a sexta, com horários agendados das 6h às 20h.
              Turmas com no máximo 6 alunos. Vagas limitadas.
            </p>
          </div>

          {/* Grid 3 colunas */}
          <div
            className="hor-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {TURNOS.map(({ titulo, horarios, icon }) => (
              <div key={titulo} className="hor-card">
                {/* Ícone */}
                <div
                  style={{
                    color: "var(--off-white)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {icon}
                </div>

                {/* Título do turno */}
                <h3
                  style={{
                    fontFamily: "var(--font-title)",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                    color: "var(--white)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {titulo}
                </h3>

                {/* Lista de horários */}
                <ul style={{ margin: 0, padding: 0 }}>
                  {horarios.map((h, i) => (
                    <li
                      key={h}
                      style={{
                        listStyle: "none",
                        fontSize: "1rem",
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        fontFamily: "var(--font-body)",
                        padding: "0.5rem 0",
                        borderBottom:
                          i < horarios.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hor-btn"
              style={{
                display: "inline-block",
                background: "var(--off-white)",
                color: "var(--black)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                padding: "0.9rem 2.5rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
            >
              Reservar meu horário
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
