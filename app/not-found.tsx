import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <p
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: 900,
            fontSize: "6rem",
            lineHeight: 1,
            color: "rgba(255,255,255,0.06)",
            marginBottom: "1rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--white)",
            marginBottom: "1rem",
          }}
        >
          Página não encontrada
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "var(--off-white)",
            color: "var(--black)",
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.9rem 2.5rem",
            borderRadius: "2px",
            textDecoration: "none",
          }}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
