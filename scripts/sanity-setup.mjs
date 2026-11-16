import { readFileSync } from "node:fs";
import { parseEnv } from "node:util";

const env = { ...parseEnv(readFileSync(".env.local", "utf8")), ...process.env };
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
const token = env.SANITY_API_WRITE_TOKEN;
if (!projectId || !dataset || !token) throw new Error("Missing Sanity configuration");

async function request(path, { method = "GET", body, anonymous = false, projectHost = false } = {}) {
  const host = projectHost ? `${projectId}.api.sanity.io` : "api.sanity.io";
  const response = await fetch(`https://${host}/v2026-11-06/${path}`, {
    method,
    headers: { ...(anonymous ? {} : { Authorization: `Bearer ${token}` }), "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`Sanity ${method} ${path.split("?")[0]}: ${response.status}`);
  return response.json();
}

const command = process.argv[2];
if (command === "inspect") {
  for (const resource of [""]) {
    const result = await request(`projects/${projectId}${resource}`);
    if (resource === "") {
      console.log({ projectId: result.id, name: result.displayName, members: result.members });
      for (const member of result.members.filter((member) => !member.isRobot)) {
        const user = await request(`users/${member.id}`);
        console.log({ humanMember: { id: member.id, name: user.displayName, email: user.email } });
      }
    }
    else console.log({ resource, result });
  }
} else if (command === "configure") {
  const existing = await request(`projects/${projectId}/cors`);
  for (const origin of ["https://tidy-studio.vercel.app", "http://localhost:3000"]) {
    if (!existing.some((entry) => entry.origin === origin && entry.allowCredentials)) {
      await request(`projects/${projectId}/cors`, { method: "POST", body: { origin, allowCredentials: true } });
    }
    console.log(`Studio origin configured: ${origin}`);
  }
} else if (command === "seed") {
  const { getPublishedPosts } = await import("../content/blog/posts.ts");
  const mutations = getPublishedPosts().map((post) => {
    let key = 0;
    const block = (text, style) => ({ _type: "block", _key: `block-${key++}`, style, markDefs: [], children: [{ _type: "span", _key: "text", text, marks: [] }] });
    const body = post.sections.flatMap((section) => [block(section.title, "h2"), ...section.paragraphs.map((p) => block(p, "normal"))]);
    return { createIfNotExists: { _id: `post-${post.slug}`, _type: "post", title: post.title, slug: { _type: "slug", current: post.slug }, description: post.description, date: post.date, category: post.category, introduction: post.introduction, body, question: post.question } };
  });
  const result = await request(`data/mutate/${dataset}`, { method: "POST", projectHost: true, body: { mutations } });
  console.log({ seededDocuments: result.results.map(({ id, documentId }) => id ?? documentId) });
} else {
  throw new Error("Use inspect, configure or seed");
}
