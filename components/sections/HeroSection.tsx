const WA_URL =
  "https://wa.me/5598985789534?text=Olá!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita%20no%20KORE7.";

const STATS = [
  { prefix: "",  number: "4",    suffix: "",  label: "Máx. por turma" },
  { prefix: "",  number: "1:1",  suffix: "",  label: "Atenção individual" },
  { prefix: "",  number: "100",  suffix: "%", label: "Personalizado" },
];

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .hero-label  { animation: fadeUp 0.8s ease both; animation-delay: 0.1s; }
  .hero-title  { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; animation-delay: 0.2s; }
  .hero-sub    { animation: fadeUp 0.8s ease both; animation-delay: 0.35s; }
  .hero-btns   { animation: fadeUp 0.8s ease both; animation-delay: 0.5s; }
  .hero-stats  { animation: fadeIn 1s   ease both; animation-delay: 0.8s; }
  .hero-deco   { animation: fadeIn 1.5s ease both; animation-delay: 1s; }

  .hero-btn-primary:hover {
    background: var(--white) !important;
    transform: translateY(-2px);
  }
  .hero-btn-ghost:hover {
    border-color: rgba(255,255,255,0.5) !important;
    background: rgba(255,255,255,0.04) !important;
  }

  .hero-stat-sep {
    width: 1px;
    align-self: stretch;
    background: rgba(255,255,255,0.1);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .hero-section   { padding: 6rem 0 3rem !important; }
    .hero-content   { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .hero-title-text { font-size: 2.8rem !important; line-height: 1.0 !important; }
    .hero-deco      { font-size: 55vw !important; }
    .hero-stats-row { flex-direction: row !important; }
    .hero-stat-sep  { display: block !important; margin: 0 1.25rem !important; }
    .hero-stat-num  { font-size: 1.6rem !important; }
    .hero-stat-label { font-size: 0.6rem !important; letter-spacing: 0.08em !important; }
    .hero-btns      { flex-direction: column !important; }
    .hero-btn-primary,
    .hero-btn-ghost { width: 100% !important; justify-content: center !important; }
  }

  @media (max-width: 480px) {
    .hero-title-text { font-size: 2.2rem !important; }
    .hero-section    { padding: 6rem 0 3rem !important; }
  }
`;

export default function HeroSection() {
  return (
    <>
      <style>{styles}</style>

      <section
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 0 5rem",
          background: "#0a0a0a",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          overflow: "hidden",
        }}
      >
        {/* Vignette */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(10,10,10,0.8) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Decorative "7" */}
        <span
          aria-hidden="true"
          className="hero-deco"
          style={{
            position: "absolute",
            right: "-0.02em",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "32vw",
            fontFamily: "var(--font-title)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
            zIndex: 0,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          7
        </span>

        {/* Content */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2.5rem",
            width: "100%",
          }}
        >
          {/* Label */}
          <div
            className="hero-label"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: "36px",
                height: "1px",
                background: "var(--off-white)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: "var(--gray-light)",
              }}
            >
              Studio Premium · São Luís, MA
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-title hero-title-text"
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              textTransform: "uppercase" as const,
              marginBottom: "1.75rem",
            }}
          >
            <span style={{ display: "block", color: "var(--white)", fontWeight: 900 }}>
              Treine com estratégia.
            </span>
            <span style={{ display: "block", color: "var(--gray-light)", fontWeight: 300 }}>
              Evolua com
            </span>
            <span style={{ display: "block", color: "var(--off-white)", fontWeight: 900 }}>
              acompanhamento real.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="hero-sub"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              fontWeight: 300,
              color: "var(--text-muted)",
              maxWidth: "480px",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Studio de treinamento personalizado com acompanhamento próximo,
            turmas reduzidas e metodologia exclusiva.
          </p>

          {/* Botões */}
          <div
            className="hero-btns"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}
          >
            {/* Primário */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--off-white)",
                color: "var(--black)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                padding: "0.9rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar aula experimental
            </a>

            {/* Ghost */}
            <a
              href="#sobre"
              className="hero-btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "var(--white)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                padding: "0.9rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              Conhecer o studio
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ marginTop: "4rem" }}>
            <div
              className="hero-stats-row"
              style={{ display: "flex", flexDirection: "row" as const, alignItems: "center", justifyContent: "center" }}
            >
              {STATS.map(({ prefix, number, suffix, label }, i) => (
                <div key={label} style={{ display: "contents" }}>
                  {i > 0 && (
                    <div
                      className="hero-stat-sep"
                      style={{ margin: "0 2rem" }}
                    />
                  )}
                  <div>
                    <div
                      className="hero-stat-num"
                      style={{
                        fontFamily: "var(--font-title)",
                        fontWeight: 900,
                        fontSize: "2.2rem",
                        lineHeight: 1,
                        color: "var(--off-white)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {prefix}{number}{suffix}
                    </div>
                    <div
                      className="hero-stat-label"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "var(--gray-mid)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
