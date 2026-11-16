import "server-only";
import { cache } from "react";
import { createClient } from "next-sanity";
import type { BlogPost } from "@/content/blog/posts";

function getClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!projectId || !dataset || !token) throw new Error("Falta configurar el acceso al blog en Sanity.");
  // The reader credential is server-only. Studio uses the editor's own Sanity login.
  return createClient({ projectId, dataset, token, apiVersion: "2026-11-06", useCdn: false, perspective: "published" });
}

const filter = '_type == "post" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && defined(slug.current)';
const fields = '"slug": slug.current, title, description, date, category, introduction, body, question, "sections": [], "status": "published"';

// Uncached reads make publish, unpublish and slug changes visible on the next page load.
// React cache only deduplicates requests within one render (metadata + page).
export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  return getClient().fetch(`*[${filter}] | order(date desc, _createdAt desc){${fields}}`, {}, { cache: "no-store" });
});

export const getPublishedPost = cache(async (slug: string): Promise<BlogPost | null> => {
  return getClient().fetch(`*[${filter} && slug.current == $slug][0]{${fields}}`, { slug }, { cache: "no-store" });
});
