import Link from "next/link";

export default function PostNotFound() {
  return <main id="contenido" className="wrap blog-main blog-invitation"><p className="eyebrow">NOTA NO ENCONTRADA</p><h1>Sigamos leyendo.</h1><p>Esta entrada no está disponible. Puedes encontrar las notas publicadas en el blog.</p><Link className="text-link" href="/blog">Volver al blog <span aria-hidden="true">↗</span></Link></main>;
}
