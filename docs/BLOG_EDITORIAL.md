# Notas con sentido · Blog de Tidy Studio

Acuerdo con Andrea, 6 de noviembre de 2026: preparar un borrador cada lunes a las 09:00, zona America/Santiago. Andrea revisa antes de publicar. Automatización activa: `borrador-del-lunes-tidy-studio`, vinculada a este chat. Los borradores no se publican automáticamente.

## Propósito y voz

Atraer a profesionales independientes que necesitan una web propia y herramientas adaptadas a su trabajo. La mirada nace de Andrea como licenciada en educación y desarrolladora web: curiosa, preocupada por las personas, dedicada y apasionada por aprender. Educación es el hilo conductor, sin excluir otros rubros.

Escribir en primera persona y español de Chile. Mostrar el cuidado a través de preguntas, decisiones y ejemplos concretos. No inventar recuerdos de aula, años de experiencia, clientes, testimonios ni resultados. Los ejemplos hipotéticos deben identificarse. Evitar promesas comerciales y afirmaciones clínicas o legales. Verificar y enlazar fuentes primarias si se incorporan afirmaciones pedagógicas, técnicas o normativas. No presentar los supuestos estilos visual/auditivo/kinestésico como categorías fijas de aprendizaje.

Cada entrada: una necesidad reconocible, una mirada educativa personal, un ejemplo práctico, una posible solución web, una pregunta y una invitación a conversar. Aproximadamente 600–900 palabras, sin rellenar para cumplir una extensión. CTA actual: https://www.instagram.com/tidy_studio_dev/ (@tidy_studio_dev). Hablar de calendario, login, panel o PDF como posibilidades de un proyecto, sin afirmar que el portafolio ya ofrece esos servicios en línea.

## Entradas escritas por Andrea

Andrea puede escribir entradas cualquier día, además del calendario de los lunes. El panel Sanity está integrado en `/admin`: inicio de sesión con Google (la cuenta de Google de Andrea autorizada en Sanity), editor en español, borradores guardados y botón Publicar. Solo la cuenta miembro del proyecto puede editar; no hay registro público para obtener permisos. Guía en `docs/BLOG_ADMIN.md`.

## Calendario propuesto

La entrada de bienvenida «Una web también puede acompañar» se incorpora al código el 6 de noviembre. Los temas siguientes son propuestas; Andrea puede cambiarlos.

| Lunes | Tema propuesto | Necesidad y posible solución | Estado |
| --- | --- | --- | --- |
| 09-11-2026 | Tu web también explica: qué necesita saber quien llega por primera vez | Presentar servicios educativos con claridad; recorrido y preguntas frecuentes | Borrador preparado: [Markdown](../content/blog/drafts/2026-11-09-tu-web-tambien-explica.md) · [Sanity: pendiente de revisión](https://tidy-studio.vercel.app/admin/structure/todasMisEntradas;post-tu-web-tambien-explica) |
| 16-11-2026 | Una agenda pensada para tu forma de acompañar | Coordinar clases o sesiones; calendario y confirmaciones según el proyecto | Pendiente de borrador |
| 23-11-2026 | Un espacio propio para compartir materiales | Entregar recursos a estudiantes o familias; acceso privado y permisos | Pendiente de borrador |
| 30-11-2026 | Menos pasos para preparar tus documentos | Repetición de datos en registros educativos; plantillas y PDF personalizados | Pendiente de borrador |
| 07-12-2026 | Un panel que puedas entender y hacer tuyo | Administrar recursos, contenidos o citas; controles claros y acompañamiento | Pendiente de borrador |
| 14-12-2026 | Dar tiempo y claridad a quien visita tu web | Leer instrucciones, formularios y errores; diseño accesible, con fuentes verificadas | Pendiente de borrador |
| 21-12-2026 | Tu manera de trabajar merece un espacio propio | Traducir una práctica profesional en secciones y herramientas pertinentes | Pendiente de borrador |
| 28-12-2026 | Empezar por lo que hoy necesitas | Priorizar una primera versión y proyectar el siguiente año | Pendiente de borrador |

## Flujo semanal

1. Consultar este calendario y las entradas previas. Elegir el siguiente tema pendiente; pasado este ciclo, proponer temas nuevos a partir de necesidades reales.
2. Guardar un Markdown en `content/blog/drafts/YYYY-MM-DD-slug.md` con fecha propuesta, título, descripción, cuerpo, pregunta y CTA. Marcar el tema como «Borrador preparado» y enlazarlo aquí.
3. Preparar también un JSON con `title`, `slug`, `description`, `date` (YYYY-MM-DD), `category`, `introduction`, `sections` (objetos con `title` y `paragraphs`), y `question`. Guardarlo junto al Markdown y ejecutar `node scripts/sanity-import-draft.mjs content/blog/drafts/archivo.json`. Usa las credenciales del archivo local ignorado; nunca mostrarlas. El helper crea únicamente un borrador y no reemplaza contenido existente. Si falla el acceso, conservar los archivos y avisar; no publicar por otra vía.
4. Entregar el enlace de `/admin` a Andrea para que revise su voz, los ejemplos y las afirmaciones y pulse Publicar cuando lo decida. No hacer push, despliegues ni publicación en el proceso automático.
5. Marcar «Publicado» únicamente después de verificar que la entrada aparece en `/blog`. El guardado del borrador no equivale a publicación.

## Implementación

Listado en `/blog` y rutas dinámicas `/blog/[slug]`, autoría, fecha y tiempo de lectura, metadata por artículo, navegación desde portada y footer. Contenido persistente en Sanity (`zwt63c3h`, dataset `production`); consulta exclusivamente con perspectiva `published`, excluyendo IDs de borradores y versiones. Lecturas sin caché: publicar o retirar una publicación se refleja al recargar, sin despliegue. La fecha es editorial; no programa una publicación. `content/blog/posts.ts` conserva solo la entrada inicial como fuente de migración; no se usa como respaldo que pudiera hacer reaparecer un artículo retirado.

El comando de build usa Webpack por el fallo local de procesos de Turbopack. Verificación reproducible de borradores, permisos y páginas: `node scripts/verify-blog.mjs URL`. Solo elimina el borrador temporal de esa ejecución. Ver estado de producción y comprobaciones en `docs/BLOG_ADMIN.md`.
