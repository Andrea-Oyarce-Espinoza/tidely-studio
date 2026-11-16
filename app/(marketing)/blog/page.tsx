import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, readingMinutes } from "@/content/blog/posts";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notas con sentido · Blog de Tidy Studio",
  description: "Educación, aprendizaje y sitios web para profesionales independientes. Un cuaderno de Andrea Oyarce, licenciada en educación y desarrolladora web.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <main id="contenido" className="wrap blog-main">
    <section className="blog-hero" aria-labelledby="blog-title">
      <div><p className="eyebrow">EL BLOG DE TIDY STUDIO</p><h1 id="blog-title">Notas con<br /><span>sentido.</span></h1><p className="blog-lead">Educación, personas y una web que acompañe lo que haces.</p><p className="blog-intro">Soy Andrea, licenciada en educación y desarrolladora web. Este es mi cuaderno para pensar cómo la tecnología puede cuidar los detalles de tu trabajo y la experiencia de quienes llegan a ti.</p></div>
      <aside className="blog-notebook"><span className="eyebrow">UNA CITA CON LAS IDEAS</span><span className="blog-flower" aria-hidden="true">✳</span><p>Los lunes,<br /><em>aprendemos algo.</em></p><span>Una pausa para mirar tu proyecto<br />con curiosidad y cuidado.</span></aside>
    </section>
    <section className="blog-entries" aria-labelledby="entries-title"><div className="blog-section-heading"><h2 id="entries-title">Para leer con calma</h2><span>Por Andrea Oyarce</span></div>
      {posts.length === 0 && <p>Este cuaderno está preparando sus primeras notas. Pronto habrá algo nuevo para leer con calma.</p>}
      <div className="blog-grid">{posts.map((post, index) => <article className="blog-card" key={post.slug}><div className="blog-card-art" aria-hidden="true"><span>CUADERNO / {String(index + 1).padStart(2, "0")}</span><p>Escuchar.<br />Comprender.<br /><em>Crear.</em></p><span>EDUCACIÓN + DESARROLLO WEB</span></div><div className="blog-card-copy"><p className="eyebrow">{post.category}</p><p className="blog-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time> · {readingMinutes(post)} min de lectura</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Leer la entrada <span aria-hidden="true">↗</span><span className="sr-only">: {post.title}</span></Link></div></article>)}</div>
    </section>
    <section className="blog-invitation"><p className="eyebrow">TU TRABAJO, TU MANERA</p><h2>¿Y si tu web entendiera<br /><span>lo que necesitas?</span></h2><p>Un calendario, un espacio privado, un panel o un documento que hoy preparas a mano. Me gustaría conocer qué te ayudaría en tu día a día.</p><a className="text-link" href="https://www.instagram.com/tidy_studio_dev/">Cuéntame tu idea <span aria-hidden="true">↗</span></a></section>
  </main>;
}
