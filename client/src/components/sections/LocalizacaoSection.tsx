import { useScrollReveal } from "@/hooks/useScrollReveal";

const MAPS_URL =
  "https://maps.google.com/?q=Rua+Xavier+Chaves+Altos+do+Calhau+Center+loja+06+São+Luís+MA";
const WA_URL =
  "https://wa.me/5598985789534?text=Quero%20saber%20mais%20sobre%20o%20KORE7.";

const styles = `
  .loc-btn-ghost:hover {
    border-color: var(--off-white) !important;
    background: rgba(255,255,255,0.04) !important;
  }
  .loc-btn-primary:hover {
    background: var(--white) !important;
  }
  .loc-maps-link:hover {
    color: var(--white) !important;
  }

  @media (max-width: 768px) {
    .loc-grid  { grid-template-columns: 1fr !important; }
    .loc-map   { height: 280px !important; }
    .loc-btns  { flex-direction: column !important; }
    .loc-btn-ghost,
    .loc-btn-primary { width: 100% !important; justify-content: center !important; }
  }
`;

export default function LocalizacaoSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="localizacao"
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
                Onde estamos
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
              }}
            >
              Fácil de encontrar.
            </h2>
          </div>

          {/* Grid 2 colunas */}
          <div
            className="loc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            {/* Coluna esquerda — dados */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "1.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* Endereço */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ color: "var(--off-white)", flexShrink: 0, marginTop: "2px" }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Rua Xavier Chaves/da Caema, s/nº
                    <br />
                    Altos do Calhau Center, loja 06
                    <br />
                    Bairro Altos do Calhau — São Luís, MA
                  </p>
                </div>

                {/* WhatsApp */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    style={{ color: "var(--off-white)", flexShrink: 0, marginTop: "2px" }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a
                    href="https://wa.me/5598985789534"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                      lineHeight: 1.8,
                    }}
                  >
                    (98) 98578-9534
                  </a>
                </div>

                {/* Horário */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ color: "var(--off-white)", flexShrink: 0, marginTop: "2px" }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Segunda a sexta
                    <br />
                    Horários agendados das 6h às 20h
                  </p>
                </div>
              </div>

              {/* Botões */}
              <div
                className="loc-btns"
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}
              >
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-btn-ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "var(--white)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    padding: "0.85rem 1.75rem",
                    borderRadius: "2px",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                >
                  Como chegar
                </a>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "var(--off-white)",
                    color: "var(--black)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    padding: "0.85rem 1.75rem",
                    borderRadius: "2px",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Coluna direita — placeholder mapa */}
            <div
              className="loc-map"
              style={{
                width: "100%",
                height: "400px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                borderRadius: "2px",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ color: "var(--gray-mid)" }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span
                style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--gray-light)",
                  letterSpacing: "0.05em",
                }}
              >
                São Luís, MA
              </span>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="loc-maps-link"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--off-white)",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s ease",
                }}
              >
                Abrir no Google Maps ↗
              </a>
              {/* TODO: substituir por <iframe> do Google Maps embed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
