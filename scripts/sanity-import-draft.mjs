import { readFileSync } from "node:fs";
import { parseEnv } from "node:util";
import { createClient } from "@sanity/client";

// Local editorial helper. No public HTTP endpoint and no publication capability.
const file = process.argv[2];
if (!file) throw new Error("Uso: node scripts/sanity-import-draft.mjs archivo.json");
const post = JSON.parse(readFileSync(file, "utf8"));
for (const field of ["title", "slug", "description", "date", "category", "introduction", "question"]) {
  if (typeof post[field] !== "string" || !post[field].trim()) throw new Error(`Campo requerido: ${field}`);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) throw new Error("Slug inválido");
if (!Array.isArray(post.sections) || post.sections.length === 0) throw new Error("Se requieren secciones");
let index = 0;
const block = (text, style = "normal") => {
  if (typeof text !== "string" || !text.trim()) throw new Error("Texto de sección inválido");
  return { _type: "block", _key: `block-${index++}`, style, markDefs: [], children: [{ _type: "span", _key: "text", text, marks: [] }] };
};
const body = post.sections.flatMap((section) => {
  if (!Array.isArray(section.paragraphs)) throw new Error("Párrafos inválidos");
  return [block(section.title, "h2"), ...section.paragraphs.map((p) => block(p))];
});
const env = { ...parseEnv(readFileSync(".env.local", "utf8")), ...process.env };
if (!env.SANITY_API_WRITE_TOKEN) throw new Error("Falta la credencial local de Sanity. No pegarla en el chat.");
const client = createClient({ projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: env.NEXT_PUBLIC_SANITY_DATASET, token: env.SANITY_API_WRITE_TOKEN, apiVersion: "2026-11-06", useCdn: false });
const id = `post-${post.slug}`;
if (await client.getDocument(id)) throw new Error("Ya existe una entrada publicada con ese slug. No se modifica.");
await client.createIfNotExists({ _id: `drafts.${id}`, _type: "post", title: post.title, slug: { _type: "slug", current: post.slug }, description: post.description, date: post.date, category: post.category, introduction: post.introduction, body, question: post.question });
console.log(`Borrador disponible para revisión: https://tidy-studio.vercel.app/admin/structure/todasMisEntradas;${id}`);
