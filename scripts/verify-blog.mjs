import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { parseEnv } from "node:util";
import { createClient } from "@sanity/client";

const env = { ...parseEnv(readFileSync(".env.local", "utf8")), ...process.env };
const config = { projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: env.NEXT_PUBLIC_SANITY_DATASET, apiVersion: "2026-11-06", useCdn: false };
const writer = createClient({ ...config, token: env.SANITY_API_WRITE_TOKEN });
const reader = createClient({ ...config, token: env.SANITY_API_READ_TOKEN, perspective: "published" });
const anonymous = createClient({ ...config, perspective: "published" });
const marker = `verification-${randomUUID()}`;
const draftId = `drafts.${marker}`;
const draft = { _id: draftId, _type: "post", title: marker, slug: { _type: "slug", current: marker }, date: "2026-11-06", description: marker, category: "Verificación", introduction: marker, body: [], question: marker };

try {
  await writer.create(draft);
  assert.ok(await writer.withConfig({ perspective: "raw" }).getDocument(draftId), "Draft must persist");
  assert.equal(await reader.fetch('count(*[slug.current == $slug])', { slug: marker }), 0, "Published reader must exclude draft");
  assert.equal(await anonymous.fetch('count(*[slug.current == $slug])', { slug: marker }), 0, "Anonymous reader must exclude draft");
  await assert.rejects(() => anonymous.create({ ...draft, _id: `drafts.unauthorized-${marker}` }), /unauthorized|permission|authentication|token|Forbidden/i);
  console.log("PASS: draft persists, excluded from published/anonymous reads, anonymous write denied");

  const base = process.argv[2];
  if (base) {
    for (const [path, expected] of [["/", 200], ["/blog", 200], ["/blog/una-web-tambien-puede-acompanar", 200], [`/blog/${marker}`, 404], ["/admin", 200]]) {
      const response = await fetch(new URL(path, base));
      const html = await response.text();
      assert.equal(response.status, expected, path);
      if (path === "/" || path === "/blog") {
        assert.ok(html.includes("Una web también puede acompañar"), "Published entry must render");
        assert.ok(!html.includes(marker), "Draft content must stay private");
        assert.ok(!html.includes("instagram.com/mama_programadora_"), "Old Instagram link must be absent");
      }
      for (const secret of [env.SANITY_API_READ_TOKEN, env.SANITY_API_WRITE_TOKEN].filter(Boolean)) assert.ok(!html.includes(secret), "Secrets must not appear in HTML");
      if (path === "/admin") assert.ok(html.includes('"noindex, nofollow"'), "Admin must not be indexed");
      console.log(`PASS: ${expected} ${path}`);
    }
  }
} finally {
  // Only this run's disposable verification draft is removed.
  await writer.delete(draftId);
}
