import Link from "next/link";
import { getPublishedPosts } from "@/lib/blog";
import type { BlogPost } from "@/content/blog/posts";

export default async function HomeBlogSection() {
  let latestPost: BlogPost | undefined;
  try {
    latestPost = (await getPublishedPosts())[0];
  } catch {
    console.error("No se pudo cargar la última entrada del blog en la portada.");
  }

  return <section id="blog" className="section wrap home-blog" aria-labelledby="home-blog-title">
    <div><p className="eyebrow">03 / NOTAS CON SENTIDO</p><h2 id="home-blog-title">Una pausa para<br /><span>aprender y crear.</span></h2><p>Mi mirada desde la educación sobre la tecnología y los sitios web para profesionales independientes. Un cuaderno para compartir los lunes.</p><Link className="text-link" href="/blog">Explora el blog <span aria-hidden="true">↗</span></Link></div>
    {latestPost ? <article><p className="eyebrow">LA NOTA MÁS RECIENTE</p><h3><Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link></h3><p>{latestPost.description}</p><Link className="text-link" href={`/blog/${latestPost.slug}`}>Leer la entrada <span aria-hidden="true">↗</span></Link></article> : <article><p className="eyebrow">UN CUADERNO ABIERTO</p><h3>Ideas para mirar tu web con otros ojos.</h3><p>En el blog encontrarás las notas publicadas sobre educación, aprendizaje y tecnología cercana.</p><Link className="text-link" href="/blog">Ir a las notas <span aria-hidden="true">↗</span></Link></article>}
  </section>;
}
