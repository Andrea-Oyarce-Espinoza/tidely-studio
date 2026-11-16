"use client";

export default function BlogError({ reset }: { reset: () => void }) {
  return <main id="contenido" className="wrap blog-main blog-invitation"><h1>Volvamos a intentarlo.</h1><p>No pudimos cargar las notas en este momento.</p><button type="button" className="button" onClick={reset}>Volver a cargar</button></main>;
}
