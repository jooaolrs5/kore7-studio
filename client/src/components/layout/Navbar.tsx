import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Studio",       href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços",     href: "#servicos" },
  { label: "Horários",     href: "#horarios" },
];

const WA_CTA =
  "https://wa.me/5598985789534?text=Olá!%20Quero%20agendar%20minha%20aula%20experimental%20no%20KORE7.";

const styles = `
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
  }
  .navbar.scrolled {
    background: rgba(10, 10, 10, 0.94);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
  .navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: padding 0.35s ease;
  }
  .navbar.scrolled .navbar-inner {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  /* Logo */
  .navbar-logo {
    text-decoration: none;
    font-family: var(--font-title);
    font-weight: 900;
    font-size: 1.4rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--white);
    line-height: 1;
  }
  .navbar-logo-seven {
    color: var(--off-white);
    position: relative;
    display: inline-block;
  }
  .navbar-logo-seven::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: var(--off-white);
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  /* Nav links */
  .navbar-link {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .navbar-link:hover { color: var(--white); }

  /* CTA */
  .navbar-cta {
    display: inline-block;
    background: var(--off-white);
    color: var(--black);
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.7rem 1.5rem;
    border-radius: 2px;
    text-decoration: none;
    transition: background 0.2s ease;
  }
  .navbar-cta:hover { background: var(--white); }

  /* Mobile */
  @media (max-width: 768px) {
    .navbar-inner {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    .navbar.scrolled .navbar-inner {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <nav
        role="navigation"
        aria-label="Navegação principal"
        className={`navbar${scrolled ? " scrolled" : ""}`}
      >
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <a href="/" className="navbar-logo">
            KORE<span className="navbar-logo-seven">7</span>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="navbar-link">
                {label}
              </a>
            ))}

            <a href={WA_CTA} target="_blank" rel="noopener noreferrer" className="navbar-cta">
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
                  width: "22px",
                  height: "1.5px",
                  background: "var(--white)",
                  borderRadius: "1px",
                }}
              />
            ))}
          </button>

        </div>
      </nav>
    </>
  );
}
