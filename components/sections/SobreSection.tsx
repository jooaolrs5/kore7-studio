"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WA_URL =
  "https://wa.me/5598985789534?text=Quero%20saber%20mais%20sobre%20o%20KORE7.";

const styles = `
  .sobre-label-line {
    display: block;
    width: 28px;
    height: 1px;
    background: var(--gray-light);
    flex-shrink: 0;
  }
  .sobre-btn:hover { background: var(--white) !important; }
  .sobre-copy strong { color: var(--white); font-weight: 600; }
  @media (max-width: 768px) {
    .sobre-section     { padding-top: 5rem !important; padding-bottom: 5rem !important; }
    .sobre-grid        { grid-template-columns: 1fr !important; gap: 3rem !important; }
    .sobre-visual-wrap { margin-top: 0; }
    .sobre-cards       { flex-direction: row !important; top: -1rem !important; right: -0.5rem !important; gap: 0.5rem !important; }
    .sobre-btn         { width: 100% !important; text-align: center !important; display: block !important; }
  }
`;

export default function SobreSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{styles}</style>

      <section
        ref={ref}
        id="sobre"
        className="reveal sobre-section"
        style={{ padding: "10rem 0", background: "var(--bg-primary)" }}
      >
        <div className="section-inner">
          <div
            className="sobre-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.5rem" }}>
                <span className="sobre-label-line" />
                <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--gray-light)", fontFamily: "var(--font-body)" }}>
                  Sobre o Studio
                </span>
              </div>

              <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", textTransform: "uppercase" as const, color: "var(--white)", marginBottom: "2.5rem", maxWidth: "16ch" }}>
                Mais que treino. Um acompanhamento completo.
              </h2>

              <div className="sobre-copy" style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem", marginBottom: "3rem" }}>
                {[
                  <>Nosso Studio nasceu com um propósito claro: entregar{" "}<strong>resultado real, atendimento próximo</strong> e uma experiência exclusiva.</>,
                  <>Trabalhamos com horários agendados, turmas reduzidas, acompanhamento profissional e{" "}<strong>metodologia própria de treinamento integrado</strong>, combinando condicionamento, mobilidade e prevenção de lesões.</>,
                  <><strong>Garantimos sua segurança e evolução constante.</strong></>,
                  <>Somos um espaço de treinamento personalizado, pensado para quem quer fugir de academia lotada e busca{" "}<strong>acompanhamento próximo, personalizado, estratégico e de alta qualidade</strong>.</>,
                  <>Caso exista qualquer necessidade específica, lesão ou limitação, todo o processo será conduzido com segurança e acompanhamento especializado. Nosso compromisso é cuidar de cada detalhe para que você evolua de forma consistente e sustentável —{" "}<strong>seja emagrecimento, hipertrofia, performance ou saúde</strong>.</>,
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, fontWeight: 300 }}>
                    {text}
                  </p>
                ))}
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-btn"
                style={{ display: "inline-block", background: "var(--off-white)", color: "var(--black)", fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "2px", textDecoration: "none", transition: "background 0.2s ease" }}
              >
                Falar com o studio
              </a>
            </div>

            <div className="sobre-visual-wrap" style={{ position: "relative" }}>
              <div
                className="sobre-cards"
                style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", zIndex: 10, display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}
              >
                {[
                  { number: "4", label: "máx. por turma" },
                  { number: "1:1", label: "atenção individual" },
                ].map(({ number, label }) => (
                  <div key={label} style={{ background: "var(--gray-dark)", border: "1px solid var(--border-light)", padding: "1rem 1.5rem", borderRadius: "2px" }}>
                    <div style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: "1.8rem", lineHeight: 1, color: "var(--off-white)", marginBottom: "0.25rem" }}>{number}</div>
                    <div style={{ fontSize: "0.62rem", fontFamily: "var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--gray-mid)" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)", aspectRatio: "4/5", borderRadius: "2px", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src="/logo-icon.png"
                  alt=""
                  aria-hidden="true"
                  width={120}
                  height={120}
                  style={{ opacity: 0.18, userSelect: "none", position: "relative", zIndex: 1, height: "auto" }}
                />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", zIndex: 3 }}>
                  <p style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1.3rem", textTransform: "uppercase" as const, color: "var(--white)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                    Resultados reais com acompanhamento real.
                  </p>
                  <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-body)", color: "var(--gray-light)" }}>
                    — Metodologia KORE7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
