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
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }
  .navbar-logo img {
    height: 30px;
    width: auto;
    display: block;
  }
  .navbar.scrolled .navbar-logo img {
    height: 26px;
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

  /* Hamburger lines */
  .hamburger-line {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--white);
    border-radius: 1px;
    transition: transform 0.25s ease, opacity 0.25s ease;
    transform-origin: center;
  }
  .hamburger-open .hamburger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger-open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger-open .hamburger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* Mobile drawer */
  .mobile-menu {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 49;
    background: rgba(8, 8, 8, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    opacity: 0;
    transform: translateY(-12px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .mobile-menu.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }
  .mobile-menu-link {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--gray-light);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .mobile-menu-link:hover { color: var(--white); }
  .mobile-menu-cta {
    margin-top: 1rem;
    display: inline-block;
    background: var(--off-white);
    color: var(--black);
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.9rem 2.5rem;
    border-radius: 2px;
    text-decoration: none;
  }

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
          <a href="/" className="navbar-logo" style={{ zIndex: 51, position: "relative" }}>
            <img src="/logo-horizontal.png" alt="KORE7 Studio" />
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
            className={`md:hidden hamburger-btn${menuOpen ? " hamburger-open" : ""}`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              background: "none",
              border: "none",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              cursor: "pointer",
              zIndex: 51,
              position: "relative",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="hamburger-line" />
            ))}
          </button>

        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="mobile-menu-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          href={WA_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          Aula Grátis
        </a>
      </div>
    </>
  );
}
