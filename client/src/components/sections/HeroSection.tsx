import { WHATSAPP_NUMBER } from "@/const";

const WA_CTA = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Quero%20agendar%20minha%20aula%20experimental%20no%20KORE7.`;

const STATS = [
  { prefix: "+", number: "200", suffix: "",  label: "Alunos ativos" },
  { prefix: "",  number: "8",   suffix: "+", label: "Anos de experiência" },
  { prefix: "",  number: "98",  suffix: "%", label: "Taxa de satisfação" },
];

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .hero-label    { animation: fadeUp  0.9s ease both; animation-delay: 0.1s; }
  .hero-title    { animation: fadeUp  0.9s ease both; animation-delay: 0.25s; }
  .hero-sub      { animation: fadeUp  0.9s ease both; animation-delay: 0.4s; }
  .hero-btns     { animation: fadeUp  0.9s ease both; animation-delay: 0.55s; }
  .hero-stats    { animation: fadeIn  1.2s ease both; animation-delay: 0.8s; }
  .hero-deco     { animation: fadeIn  1.2s ease both; animation-delay: 0.8s; }

  .hero-btn-ghost:hover {
    border-color: rgba(255,255,255,0.6) !important;
    color: var(--white) !important;
  }
  .hero-btn-primary:hover { opacity: 0.88; }

  @media (max-width: 768px) {
    .hero-title-text  { font-size: 3.2rem !important; }
    .hero-deco        { font-size: 50vw !important; }
    .hero-stats-row   { flex-direction: row !important; gap: 2rem !important; }
    .hero-section     { padding: 6rem 0 3rem !important; }
    .hero-content     { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .hero-btns        { flex-direction: column !important; }
    .hero-btn-primary,
    .hero-btn-ghost   { width: 100% !important; justify-content: center !important; }
  }

  @media (max-width: 480px) {
    .hero-title-text { font-size: 2.5rem !important; }
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
          padding: "8rem 0 4rem",
          background: "#0a0a0a",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 70% at 60% 50%, rgba(248,247,245,0.03), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
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
            fontSize: "30vw",
            fontFamily: "var(--font-title)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            pointerEvents: "none",
            zIndex: 1,
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
                width: "32px",
                height: "1px",
                background: "var(--off-white)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "var(--off-white)",
              }}
            >
              Studio Premium · São Luís
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-title hero-title-text"
            style={{
              fontFamily: "var(--font-title)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--white)",
              maxWidth: "14ch",
              marginBottom: "1.75rem",
            }}
          >
            Treine com{" "}
            <span style={{ color: "var(--off-white)" }}>estratégia.</span>
            <br />
            Evolua com acompanhamento real.
          </h1>

          {/* Subtítulo */}
          <p
            className="hero-sub"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "rgba(245,245,240,0.6)",
              maxWidth: "520px",
              lineHeight: 1.6,
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
              href={WA_CTA}
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
                padding: "0.85rem 1.75rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
            >
              {/* WhatsApp icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
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
                border: "1px solid rgba(255,255,255,0.25)",
                color: "var(--white)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                padding: "0.85rem 1.75rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
            >
              Conhecer o studio
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{ marginTop: "4rem" }}
          >
            <div
              className="hero-stats-row"
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" as const }}>
                {STATS.map(({ prefix, number, suffix, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "var(--font-title)",
                        fontWeight: 900,
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: "var(--white)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {prefix && <span style={{ color: "var(--off-white)" }}>{prefix}</span>}
                      {number}
                      {suffix && <span style={{ color: "var(--off-white)" }}>{suffix}</span>}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        color: "rgba(245,245,240,0.5)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
