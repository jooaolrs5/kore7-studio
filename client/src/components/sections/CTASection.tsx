import { useScrollReveal } from "@/hooks/useScrollReveal";

const WA_URL =
  "https://wa.me/5598985789534?text=Olá!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita%20no%20KORE7.";

const styles = `
  .cta-btn:hover {
    background: var(--gray-dark) !important;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .cta-section { padding: 6rem 1.5rem !important; }
    .cta-btn     { width: 100% !important; justify-content: center !important; }
  }
`;

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="aula-experimental"
        className="reveal cta-section"
        style={{
          background: "var(--off-white)",
          padding: "10rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: "28px",
                height: "1px",
                background: "var(--gray-dark)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: "var(--gray-dark)",
                fontFamily: "var(--font-body)",
              }}
            >
              Comece hoje
            </span>
            <span
              style={{
                display: "block",
                width: "28px",
                height: "1px",
                background: "var(--gray-dark)",
                flexShrink: 0,
              }}
            />
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase" as const,
              marginBottom: "1.75rem",
            }}
          >
            <span style={{ fontWeight: 300, color: "var(--gray-dark)" }}>
              Experimente{" "}
            </span>
            <span style={{ fontWeight: 900, color: "var(--black)" }}>
              antes de decidir.
            </span>
          </h2>

          {/* Parágrafo */}
          <p
            style={{
              fontSize: "1rem",
              color: "var(--gray-dark)",
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Temos aula experimental sem custo, para você conhecer nosso método,
            estrutura e atendimento antes de decidir. Venha sentir a diferença.
          </p>

          {/* Botão */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--black)",
              color: "var(--off-white)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              padding: "1.1rem 3rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero minha aula gratuita
          </a>

          {/* Nota */}
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--gray-mid)",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              marginTop: "1rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Sem compromisso. 100% gratuito.
          </p>
        </div>
      </section>
    </>
  );
}
