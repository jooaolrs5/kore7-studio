import Image from "next/image";

const styles = `
  .footer-nav-link {
    font-size: 0.85rem;
    color: var(--gray-light);
    font-weight: 300;
    text-decoration: none;
    font-family: var(--font-body);
    transition: color 0.2s ease;
  }
  .footer-nav-link:hover { color: var(--white); }
  .footer-wa-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: var(--gray-mid);
    font-weight: 300;
    text-decoration: none;
    font-family: var(--font-body);
    transition: color 0.2s ease;
  }
  .footer-wa-link:hover { color: var(--gray-light); }
  .footer-credit-link { color: rgba(255,255,255,0.18); text-decoration: none; transition: color 0.2s ease; }
  .footer-credit-link:hover { color: var(--white); }
  @media (max-width: 768px) {
    .footer-grid             { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .footer-grid > div       { text-align: center; }
    .footer-wa-link          { justify-content: center; }
  }
`;

const NAV_LINKS = [
  { label: "Studio",            href: "#sobre" },
  { label: "Diferenciais",      href: "#diferenciais" },
  { label: "Serviços",          href: "#servicos" },
  { label: "Horários",          href: "#horarios" },
  { label: "Aula Experimental", href: "#aula-experimental" },
];

export default function Footer() {
  return (
    <>
      <style>{styles}</style>

      <footer style={{ background: "#080808", borderTop: "1px solid var(--border)", padding: "5rem 0 2.5rem" }}>
        <div className="section-inner">
          <div
            className="footer-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem", marginBottom: 0 }}
          >
            <div>
              <a href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: "0.75rem" }}>
                <Image
                  src="/logo-horizontal.png"
                  alt="KORE7 Studio"
                  width={140}
                  height={28}
                  style={{ height: "28px", width: "auto" }}
                />
              </a>
              <p style={{ fontSize: "0.8rem", color: "var(--gray-mid)", fontWeight: 300, fontFamily: "var(--font-body)", lineHeight: 1.6, marginTop: "0.75rem" }}>
                Studio de Treinamento Personalizado
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "1.5rem" }}>
                Navegação
              </p>
              <nav>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="footer-nav-link">{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "1.5rem" }}>
                Contato
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href="https://wa.me/5598985789534" target="_blank" rel="noopener noreferrer" className="footer-wa-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (98) 98578-9534
                </a>
                <p style={{ fontSize: "0.8rem", color: "var(--gray-mid)", fontWeight: 300, fontFamily: "var(--font-body)", lineHeight: 1.9, marginTop: "0.25rem" }}>
                  Rua Xavier Chaves/da Caema, s/nº<br />
                  Altos do Calhau Center, loja 06<br />
                  São Luís, Maranhão
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: "4rem", paddingTop: "2rem", textAlign: "center", display: "flex", flexDirection: "column", gap: "0.4rem", alignItems: "center" }}>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              © 2026 KORE7 Studio. Todos os direitos reservados.
            </p>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Site desenvolvido por{" "}
              <a href="https://joaosilvacreative.com.br" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
                João Silva Creative
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
