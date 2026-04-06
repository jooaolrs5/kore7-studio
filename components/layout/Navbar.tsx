"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Studio",       href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços",     href: "#servicos" },
  { label: "Horários",     href: "#horarios" },
];

const WA_CTA =
  "https://wa.me/5598985789534?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20experimental%20no%20KORE7.";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Estilos ───────────────────────────────── */}
      <style>{`
        /* Barra superior */
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background .35s ease, border-color .35s ease, backdrop-filter .35s ease;
        }
        .nav-bar.is-scrolled {
          background: rgba(10,10,10,.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: padding .35s ease;
        }
        .nav-bar.is-scrolled .nav-inner {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        /* Links desktop */
        .nav-links {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          font-family: var(--font-body);
          font-size: .75rem;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color .2s ease;
        }
        .nav-link:hover { color: var(--white); }
        .nav-cta {
          display: inline-block;
          background: var(--off-white);
          color: var(--black);
          font-family: var(--font-body);
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: .7rem 1.5rem;
          border-radius: 2px;
          text-decoration: none;
          transition: background .2s ease;
        }
        .nav-cta:hover { background: var(--white); }

        /* Botão hambúrguer */
        .nav-burger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .nav-burger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--white);
          border-radius: 1px;
          transition: transform .3s ease, opacity .2s ease;
          transform-origin: center;
        }
        .nav-burger-line:nth-child(2) { width: 14px; }

        /* Breakpoint desktop */
        @media (min-width: 768px) {
          .nav-links  { display: flex; }
          .nav-burger { display: none; }
        }
        @media (max-width: 768px) {
          .nav-inner { padding-left: 1.25rem; padding-right: 1.25rem; }
        }

        /* ── Drawer ──────────────────────────────── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,.55);
          opacity: 0;
          pointer-events: none;
          transition: opacity .35s ease;
        }
        .drawer-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          z-index: 201;
          width: min(360px, 88vw);
          background: #0e0e0e;
          border-left: 1px solid rgba(255,255,255,.07);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform .4s cubic-bezier(.16,1,.3,1);
          overflow: hidden;
        }
        .drawer.is-open {
          transform: translateX(0);
        }

        /* Cabeçalho do drawer */
        .drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.75rem;
          border-bottom: 1px solid rgba(255,255,255,.06);
          flex-shrink: 0;
        }

        /* Botão fechar */
        .drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 2px;
          cursor: pointer;
          color: var(--white);
          transition: background .2s ease;
          flex-shrink: 0;
        }
        .drawer-close:hover { background: rgba(255,255,255,.12); }

        /* Itens de navegação */
        .drawer-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding: .5rem 0;
        }
        .drawer-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.1rem 1.75rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.04);
          transition: background .15s ease;
        }
        .drawer-item:hover { background: rgba(255,255,255,.03); }
        .drawer-item:last-child { border-bottom: none; }
        .drawer-item-num {
          font-family: var(--font-title);
          font-size: .65rem;
          font-weight: 700;
          color: rgba(255,255,255,.2);
          letter-spacing: .1em;
          width: 1.5rem;
          flex-shrink: 0;
        }
        .drawer-item-label {
          font-family: var(--font-title);
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -.02em;
          text-transform: uppercase;
          color: rgba(240,237,232,.75);
          transition: color .15s ease;
        }
        .drawer-item:hover .drawer-item-label { color: var(--off-white); }

        /* Rodapé do drawer */
        .drawer-foot {
          padding: 1.75rem;
          border-top: 1px solid rgba(255,255,255,.06);
          flex-shrink: 0;
        }
        .drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          width: 100%;
          background: var(--off-white);
          color: var(--black);
          font-family: var(--font-body);
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: 1rem;
          border-radius: 2px;
          text-decoration: none;
          transition: background .2s ease;
        }
        .drawer-cta:hover { background: var(--white); }
      `}</style>

      {/* ── Barra de navegação ──────────────────── */}
      <nav
        aria-label="Navegação principal"
        className={`nav-bar${scrolled ? " is-scrolled" : ""}`}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo-horizontal.png"
              alt="KORE7 Studio"
              width={150}
              height={30}
              style={{ height: scrolled ? "26px" : "30px", width: "auto", transition: "height .35s ease" }}
              priority
            />
          </a>

          {/* Links desktop */}
          <div className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
            <a href={WA_CTA} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Aula Grátis
            </a>
          </div>

          {/* Hambúrguer mobile */}
          <button
            className="nav-burger"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>
      </nav>

      {/* ── Overlay ─────────────────────────────── */}
      <div
        className={`drawer-overlay${menuOpen ? " is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Drawer lateral ──────────────────────── */}
      <aside
        className={`drawer${menuOpen ? " is-open" : ""}`}
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Cabeçalho */}
        <div className="drawer-head">
          <Image
            src="/logo-horizontal.png"
            alt="KORE7 Studio"
            width={120}
            height={24}
            style={{ height: "24px", width: "auto" }}
          />
          <button className="drawer-close" onClick={close} aria-label="Fechar menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Itens */}
        <nav className="drawer-nav">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a key={label} href={href} className="drawer-item" onClick={close}>
              <span className="drawer-item-num">0{i + 1}</span>
              <span className="drawer-item-label">{label}</span>
            </a>
          ))}
        </nav>

        {/* Rodapé CTA */}
        <div className="drawer-foot">
          <a href={WA_CTA} target="_blank" rel="noopener noreferrer" className="drawer-cta" onClick={close}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar aula grátis
          </a>
        </div>
      </aside>
    </>
  );
}
