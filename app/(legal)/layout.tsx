import Link from "next/link";
import LegalNavigation from "@/components/legal-navigation";

export default function LegalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#contenido-legal">Saltar al contenido</a>
      <header className="legal-header wrap">
        <Link className="wordmark" href="/" aria-label="Tidy Studio, inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></Link>
        <Link className="text-link" href="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
      </header>
      <main className="legal-main wrap" id="contenido-legal">
        <aside className="legal-aside"><p className="eyebrow">CON CLARIDAD Y CERCANÍA</p><LegalNavigation label="Documentos legales" /></aside>
        <article className="legal-content">{children}</article>
      </main>
    </>
  );
}
