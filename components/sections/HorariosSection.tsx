"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const WA_URL =
  "https://wa.me/5598985789534?text=Ol%C3%A1!%20Quero%20reservar%20um%20hor%C3%A1rio%20no%20KORE7.";

const styles = `
  .hor-chip {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(255,255,255,0.1); border-radius: 100px;
    font-family: var(--font-title); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.04em;
    color: var(--text-secondary); transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease; cursor: default;
  }
  .hor-chip:hover { border-color: var(--off-white); color: var(--off-white); background: rgba(240,237,232,0.05); }
  .hor-divider { width: 1px; background: rgba(255,255,255,0.07); align-self: stretch; }
  .hor-cta-btn:hover { background: var(--white) !important; }
  @media (max-width: 900px) {
    .hor-panel   { flex-direction: column !important; }
    .hor-divider { width: 100% !important; height: 1px !important; align-self: auto !important; }
  }
  @media (max-width: 768px) {
    .hor-cta-btn { width: 100% !important; justify-content: center !important; }
    .hor-turno-col { padding: 1.75rem 1.25rem !important; gap: 1.25rem !important; }
  }
`;

const TURNOS = [
  {
    titulo: "Manhã", range: "06h – 09h",
    horarios: ["06h00", "07h00", "08h00", "09h00"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    titulo: "Tarde", range: "14h – 17h",
    horarios: ["14h00", "15h00", "16h00", "17h00"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 12a5 5 0 1 1-10 0" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    titulo: "Noite", range: "18h – 20h",
    horarios: ["18h00", "19h00", "20h00"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <section ref={ref} id="horarios" className="reveal section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="section-inner">
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "var(--gray-light)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--gray-light)", fontFamily: "var(--font-body)" }}>Agenda</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", textTransform: "uppercase" as const, color: "var(--white)", maxWidth: "22ch" }}>
                Encontre o melhor horário{" "}
                <span style={{ color: "var(--gray-mid)", fontWeight: 300 }}>para você.</span>
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 1.2rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", flexShrink: 0 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-secondary)" }}>Seg – Sex</span>
              </div>
            </div>
          </div>

          <div className="hor-panel" style={{ display: "flex", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", marginBottom: "2.5rem", overflow: "hidden" }}>
            {TURNOS.map(({ titulo, range, horarios, icon }, idx) => (
              <div key={titulo} style={{ display: "contents" }}>
                {idx > 0 && <div className="hor-divider" />}
                <div className="hor-turno-col" style={{ flex: 1, padding: "2.5rem", display: "flex", flexDirection: "column" as const, gap: "1.75rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem", color: "var(--gray-light)" }}>
                      {icon}
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>{titulo}</span>
                    </div>
                    <p style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1 }}>{range}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                    {horarios.map(h => <span key={h} className="hor-chip">{h}</span>)}
                  </div>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--gray-light)", textDecoration: "none", transition: "color 0.2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--off-white)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-light)")}
                  >
                    Reservar vaga
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "1.5rem" }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
              Turmas com no máximo 4 alunos por sessão.<br />Vagas limitadas — garanta o seu horário.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hor-cta-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--off-white)", color: "var(--black)", fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "0.9rem 2rem", borderRadius: "2px", textDecoration: "none", transition: "background 0.2s ease", whiteSpace: "nowrap" as const }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar meu horário
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
