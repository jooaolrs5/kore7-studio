import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KORE7 Studio | Treinamento Personalizado em São Luís - MA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          position: "relative",
        }}
      >
        {/* Barra superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#f0ede8",
          }}
        />

        {/* Marca decorativa */}
        <div
          style={{
            position: "absolute",
            right: "-0.02em",
            top: "50%",
            fontSize: "380px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            lineHeight: 1,
            transform: "translateY(-50%)",
          }}
        >
          7
        </div>

        {/* Conteúdo central */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ width: "36px", height: "1px", background: "#b8b5b0" }} />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#b8b5b0",
              }}
            >
              Studio Premium · São Luís, MA
            </span>
            <div style={{ width: "36px", height: "1px", background: "#b8b5b0" }} />
          </div>

          {/* Nome */}
          <div
            style={{
              fontSize: "120px",
              fontWeight: 900,
              color: "#f8f7f5",
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              lineHeight: 0.9,
            }}
          >
            KORE7
          </div>

          <div
            style={{
              width: "80px",
              height: "1px",
              background: "#3d3d3d",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#b8b5b0",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            Treine com estratégia. Evolua com acompanhamento real.
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "16px",
              background: "#f0ede8",
              color: "#0a0a0a",
              padding: "14px 40px",
              borderRadius: "2px",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Aula Experimental Gratuita
          </div>
        </div>

        {/* URL rodapé */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "14px",
            color: "#3d3d3d",
            letterSpacing: "0.15em",
          }}
        >
          kore7studio.com.br
        </div>

        {/* Barra inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#f0ede8",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
