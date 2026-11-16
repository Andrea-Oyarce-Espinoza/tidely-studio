# Changelog

## 2026-11-15 — Recuperación del blog y actualización del portafolio

- Detectado en producción un despliegue sin rutas de blog/admin, mientras Sanity conserva las dos entradas publicadas. La recuperación previa existía solo en el checkout local y fue reemplazada por un despliegue del código antiguo de GitHub.
- Blog permanente en portada, después de proyectos y antes del proceso, con enlace accesible incluso sin última entrada disponible. Se conserva el editor privado de Sanity.
- Retirada la sección y el acceso de Tidy Growth Lab en la portada. Catálogo de proyectos reales en content/projects.ts; solo Francia Academy, con dominio https://franciavarubin.cl y descripción de servicios, membresía y espacio de aprendizaje comprobados en su web pública.
- Verificación reproducible de portada, blog, artículo, editor y 404 en scripts/verify-home.mjs.

## 2026-11-07 — Editor privado del blog

- Sanity provisionado en el proyecto Vercel existente con plan Free, configuración de Google ya vinculada y cuenta de Andrea verificada. Origen de producción autorizado con confirmación expresa.
- Studio en español en `/admin`: editor enriquecido, validación de campos, vistas de borradores y publicaciones. Sin permisos de edición para visitantes.
- Blog conectado al contenido persistente; publicación y retirada visibles al recargar sin nuevos despliegues. Primera entrada migrada sin sobrescrituras. Instagram actualizado a @tidy_studio_dev.
- Comprobadas persistencia y privacidad de borradores, rechazo de escritura anónima, respuestas 200/404 y ausencia de credenciales en el HTML local. Build con Webpack y ESLint correctos.
- React alineado con el editor; overrides compatibles de dependencias de herramientas. Auditoría de producción: 0 avisos altos/críticos y 14 moderados indirectos, principalmente minimatch en CLI de Sanity. No se aplicó el downgrade mayor sugerido por audit.
- Guía de uso y operación en BLOG_ADMIN.md. Herramienta local para incorporar los borradores semanales a Sanity sin publicarlos.

## 2026-11-06 — Blog y mirada educativa

- Actualizados los enlaces y las menciones de contacto de Instagram a @tidy_studio_dev en portada, blog, páginas legales y configuración social.

- Blog «Notas con sentido» en `/blog`, páginas por entrada, metadata, autoría y tiempo de lectura. Primera entrada: «Una web también puede acompañar».
- Accesos desde navegación, portada y footer; presentación de Andrea como licenciada en educación y desarrolladora web para profesionales independientes.
- Calendario propuesto de ocho lunes y criterios de voz en BLOG_EDITORIAL.md. Automatización semanal acordada: lunes 09:00, America/Santiago, borrador para revisión sin publicación automática.
- Contenido en código con estado explícito; borradores excluidos del listado y de las rutas públicas. Sin dependencias nuevas, base de datos ni CMS.

## 2026-11-05 — Navidad y Tidy Growth Lab

- Decoración navideña en el inicio con dibujos CSS y luces animadas en JavaScript, con pausa y respeto de movimiento reducido.
- Nueva sección y acceso de navegación a Tidy Growth Lab: calendario editorial, métricas manuales y exportación, con enlace externo a la herramienta gratuita. Sin garantías de seguidores.
- Detalles y retiro de temporada en SEASONAL.md. Sin nuevas dependencias.

## 2026-11-04 — Páginas legales y footer

- Añadidas privacidad, términos y aviso informativo adaptados al portafolio, con fecha de actualización y contacto real por Instagram (correo público aún no creado).
- Footer global inspirado en Francia Academy, con disclaimer de desarrollo web y enlaces en todas las páginas.
- Solicitud enviada a v0 y propuesta recibida: aplicadas recomendaciones visuales, navegación activa, foco y áreas táctiles; detalles y fuentes en LEGAL.md.
- Sin scripts de analítica, formularios ni dependencias nuevas. No se afirma validación jurídica profesional.

## 2026-11-04 — Publicación confirmada

- Commit `baa94b8` enviado a `main`; despliegue automático de Vercel Ready en 23 segundos, ID `dpl_GmCoiEEX8m1BmkZSNsgyDLNU2uPC`.
- URL pública https://tidy-studio.vercel.app responde HTTP 200 con el portafolio nuevo.
- Verificadas visualmente portada y navegación interna a proyectos en navegador. Pendiente revisión móvil y recorrido exhaustivo con teclado.
- Documentada la causa del fallo inicial: import de tipo faltante. No se modificó el proyecto Francia Academy ni se creó otro proyecto Vercel.

## 2026-11-04 — Primera portada y corrección de despliegue

- Implementado portafolio Tidy Studio: enfoque, Francia Academy, proceso, Andrea y enlaces a Instagram. Paleta marfil, morado, lavanda y menta; ilustraciones CSS y diseño adaptable. Sin precios ni agenda comercial.
- Añadido layout raíz en español y metadatos; retirado el layout HTML incorrectamente ubicado en `app/api/`.
- Corregido el tipo `NavigationItem` sin importar en `config/social.ts`, causa del despliegue fallido `dpl_47Wi9rQHZ7o2Qt8tKWktoNRnVNKq`, confirmada en logs mediante CLI.
- Añadidas clsx y tailwind-merge, usadas por la base local existente. Actualizados Next.js y eslint-config-next a 16.4.5 y dependencias indirectas compatibles.
- Build/TypeScript y ESLint locales correctos. Auditoría de producción: cero vulnerabilidades conocidas. Quedan avisos de herramientas de desarrollo; no se aplicó actualización forzada.
- El navegador integrado no alcanzó localhost; revisión visual pendiente. Fuentes del sistema; Poppins/Inter locales y foto real quedan pendientes.
- Proyecto de Vercel creado por Andrea: `tidy-studio`, ID `prj_XTTq3bBCmi2pzY4p2ylbw957NCx1`, destino solicitado `https://tidy-studio.vercel.app`.

## 2026-11-04 — Definición del nuevo enfoque

- Recuperado el contexto del chat «Reorienta marca para terapias»: webs para profesionales que atienden con cita, identidad Tidy Studio y Andrea como rostro de la marca.
- Documentados alcance, arquitectura propuesta, decisiones, roadmap y permisos.
- Registrada la elección de evaluar hosting gratuito comercial, tras comprobar la restricción de Vercel Hobby.
- Actualización posterior de Andrea: comenzar como portafolio personal para mostrar su trabajo y conectar GitHub/Vercel; precios y agenda de cotización se posponen. Vercel vuelve a ser la preferencia vigente.
- No se ha implementado la nueva portada, conectado agenda, definido precios, hecho push ni desplegado.
- Conservado el trabajo previo no versionado en `components/` y `lib/`.
- GitHub conectado: comprobados acceso al repositorio, rama predeterminada `main` y permisos de lectura/escritura mediante la API. Vercel sigue pendiente de conexión.
- Vercel conectado posteriormente: acceso verificado al equipo `andrea-oyarce-espinozas-projects`, plan Hobby. No se encontraron proyectos por el nombre `tidely` ni vínculos Git en el contexto devuelto. Sin proyecto nuevo ni despliegue realizado.
