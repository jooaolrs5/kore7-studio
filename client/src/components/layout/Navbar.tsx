import { WHATSAPP_NUMBER } from "@/const";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Studio",       href: "#studio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços",     href: "#servicos" },
  { label: "Horários",     href: "#horarios" },
];

const WA_CTA = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Quero%20agendar%20minha%20aula%20experimental%20no%20KORE7.`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: scrolled ? "0.9rem 2.5rem" : "1.4rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "padding 0.3s ease",
        }}
      >
        {/* ── Logo ── */}
        <a href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-title)",
              fontWeight: 900,
              fontSize: "1.5rem",
              letterSpacing: "0.12em",
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            KORE<span style={{ color: "var(--accent)" }}>7</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,245,240,0.6)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,240,0.6)")}
            >
              {label}
            </a>
          ))}

          {/* CTA */}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--black)",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.65rem 1.5rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Aula Grátis
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden"
          aria-label="Abrir menu"
          style={{
            background: "none",
            border: "none",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--white)",
                borderRadius: "1px",
              }}
            />
          ))}
        </button>
      </div>
    </nav>
  );
}
