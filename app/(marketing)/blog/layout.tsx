import Link from "next/link";
import "./blog.css";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header blog-header wrap">
      <Link className="wordmark" href="/" aria-label="Tidy Studio, inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></Link>
      <nav aria-label="Navegación principal"><Link href="/#enfoque">Mi enfoque</Link><Link href="/#sobre-mi">Sobre mí</Link><Link href="/blog" aria-current="location">Blog</Link></nav>
      <a className="header-contact" href="https://www.instagram.com/tidy_studio_dev/">Conversemos <span aria-hidden="true">↗</span></a>
    </header>
    {children}
  </>;
}
