import Link from "next/link";
import LegalNavigation from "./legal-navigation";

export default function SiteFooter() {
  return (
    <footer className="footer-shell wrap">
      <div className="site-footer">
        <Link className="wordmark" href="/" aria-label="Tidy Studio, inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></Link>
        <p>Un espacio digital. Una persona detrás.</p>
        <span>Andrea Oyarce · Chile</span>
      </div>
      <div className="footer-legal">
        <p>© {new Date().getFullYear()} Tidy Studio · Andrea Oyarce. Los derechos de cada proyecto pertenecen a sus respectivos titulares.</p>
        <LegalNavigation label="Información legal" />
        <p className="footer-disclaimer">Este sitio es un portafolio personal e informativo de desarrollo web. Los proyectos muestran trabajos realizados; no constituyen una oferta vinculante ni garantizan resultados. No se realizan contrataciones, pagos ni reservas desde este sitio.</p>
      </div>
    </footer>
  );
}
