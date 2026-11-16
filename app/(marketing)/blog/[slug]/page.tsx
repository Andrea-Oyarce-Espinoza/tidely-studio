import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, readingMinutes } from "@/content/blog/posts";
import { getPublishedPost } from "@/lib/blog";
import BlogBody from "@/components/blog-body";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return { title: `${post.title} · Tidy Studio`, description: post.description, openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date, authors: ["Andrea Oyarce"] } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return <main id="contenido" className="wrap blog-main">
    <article className="blog-article">
      <Link className="text-link blog-back" href="/blog"><span aria-hidden="true">←</span> Todas las notas</Link>
      <header><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="blog-meta">Andrea Oyarce · <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {readingMinutes(post)} min de lectura</p><p className="blog-article-lead">{post.introduction}</p></header>
      <div className="blog-prose">{post.body && <BlogBody body={post.body} />}</div>
      <aside className="blog-question"><p className="eyebrow">ME GUSTARÍA LEERTE</p><h2>{post.question}</h2><a className="text-link" href="https://www.instagram.com/tidy_studio_dev/">Conversemos en Instagram <span aria-hidden="true">↗</span></a></aside>
      <footer className="blog-author"><span className="blog-author-mark" aria-hidden="true">ao.</span><div><p>Escrito por Andrea Oyarce</p><p>Licenciada en educación y desarrolladora web. Me apasiona crear espacios digitales con sentido humano, pensados para las personas y su forma de aprender.</p><Link className="text-link" href="/#sobre-mi">Más sobre mí <span aria-hidden="true">↗</span></Link></div></footer>
    </article>
  </main>;
}
