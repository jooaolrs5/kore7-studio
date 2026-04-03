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
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease, width 0.3s ease;
    transform-origin: center;
  }
  .hamburger-line:nth-child(2) { width: 14px; }
  .hamburger-open .hamburger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger-open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger-open .hamburger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* Overlay */
  .mobile-overlay {
    position: fixed;
    inset: 0;
    z-index: 48;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }
  .mobile-overlay.open {
    opacity: 1;
    pointer-events: all;
  }

  /* Side drawer */
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 49;
    width: min(360px, 88vw);
    background: #0e0e0e;
    border-left: 1px solid rgba(255,255,255,0.07);
    display: flex;
    flex-direction: column;
    padding: 0;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    overflow: hidden;
  }
  .mobile-menu.open {
    transform: translateX(0);
  }

  /* Drawer header */
  .mobile-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.75rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    flex-shrink: 0;
  }

  /* Nav items */
  .mobile-menu-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    overflow-y: auto;
  }
  .mobile-menu-item {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.1rem 1.75rem;
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    transition: background 0.15s ease;
  }
  .mobile-menu-item:hover { background: rgba(255,255,255,0.03); }
  .mobile-menu-item:last-child { border-bottom: none; }
  .mobile-menu-item-num {
    font-family: var(--font-title);
    font-size: 0.65rem;
    font-weight: 700;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.1em;
    flex-shrink: 0;
    width: 1.5rem;
  }
  .mobile-menu-item-label {
    font-family: var(--font-title);
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: rgba(240,237,232,0.75);
    transition: color 0.15s ease;
  }
  .mobile-menu-item:hover .mobile-menu-item-label { color: var(--off-white); }

  /* Drawer footer */
  .mobile-menu-footer {
    padding: 1.75rem;
    border-top: 1px solid rgba(255,255,255,0.06);
    flex-shrink: 0;
  }
  .mobile-menu-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: var(--off-white);
    color: var(--black);
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 2px;
    text-decoration: none;
    transition: background 0.2s ease;
  }
  .mobile-menu-cta:hover { background: var(--white); }

  /* Close button */
  .mobile-close-btn {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 2px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  .mobile-close-btn:hover { background: rgba(255,255,255,0.1); }

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

      {/* ── Overlay ── */}
      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Side drawer ── */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        {/* Header */}
        <div className="mobile-menu-header">
          <img src="/logo-horizontal.png" alt="KORE7 Studio" style={{ height: "24px", width: "auto" }} />
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Fechar menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-menu-nav">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a key={label} href={href} className="mobile-menu-item" onClick={closeMenu}>
              <span className="mobile-menu-item-num">0{i + 1}</span>
              <span className="mobile-menu-item-label">{label}</span>
            </a>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="mobile-menu-footer">
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-cta"
            onClick={closeMenu}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar aula grátis
          </a>
        </div>
      </div>
    </>
  );
}
