import assert from "node:assert/strict";
const base = process.argv[2];
if (!base) throw new Error("Indica la URL del sitio");
for (const [path, status] of [["/", 200], ["/blog", 200], ["/blog/una-web-tambien-puede-acompanar", 200], ["/admin", 200], ["/blog/nota-inexistente-de-verificacion", 404]]) {
  const response = await fetch(new URL(path, base));
  const html = await response.text();
  assert.equal(response.status, status, path);
  if (path === "/") {
    assert.ok(html.includes('id="blog"'), "El blog debe tener una sección permanente en portada");
    assert.ok(html.includes('href="/blog"'), "La portada debe enlazar al blog");
    assert.ok(html.includes('href="https://franciavarubin.cl"'), "Debe enlazar al dominio actual de Francia Academy");
    assert.ok(!html.includes("francia-academy.vercel.app"), "No debe aparecer el dominio anterior");
    assert.ok(!html.includes("tidy-growth-lab.vercel.app") && !html.includes("Herramienta gratis"), "La herramienta retirada no debe aparecer");
    assert.ok(html.indexOf('id="proyectos"') < html.indexOf('id="blog"'), "El blog debe estar después de proyectos");
    assert.ok(html.indexOf('id="blog"') < html.indexOf('id="process-title"'), "El blog debe estar antes del proceso");
  }
  if (path === "/blog") assert.ok(html.includes("Tu web también explica"), "Debe mostrar la entrada publicada del 9 de noviembre");
  if (path === "/admin") assert.ok(html.includes("noindex, nofollow"), "El panel debe excluirse del índice");
  console.log("PASS", status, path);
}
