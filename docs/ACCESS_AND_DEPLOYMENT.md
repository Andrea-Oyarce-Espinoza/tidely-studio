# Accesos y despliegue

## Recuperación del 15 de noviembre de 2026

El dominio público servía `dpl_G8wkmk9WBC6Kc8u88nWXNXebJtgU`, sin rutas de blog/editor. GitHub main estaba en `891d17d`, con la portada anterior; el código del blog y de Sanity seguía sin versionar en el checkout. Se recuperan esas rutas y se guarda el cambio completo en Git para evitar otra regresión al desplegar desde main.

Blog permanente en portada, herramienta Growth Lab retirada y Francia Academy actualizado a https://franciavarubin.cl. Verificación HTTP de regresión: `node scripts/verify-home.mjs URL`. El catálogo editable en código está en content/projects.ts y solo contiene Francia Academy. No se modifican ni se publican entradas de Sanity durante esta recuperación.

## Actualización: blog y panel privado

Producción actual: https://tidy-studio.vercel.app. Despliegue CLI `dpl_2yAtZsJ2tDH8D2cE4wvtxsVn6sV4`, READY, comprobado y promovido. Blog en `/blog`; Studio privado en `/admin`, Sanity proyecto `zwt63c3h`, dataset `production`, cuenta de Andrea verificada con Google. CORS de dominio de producción autorizado expresamente. Detalles en BLOG_ADMIN.md. La automatización de los lunes también prepara el borrador en Sanity sin publicarlo.

Despliegue desde checkout local con cambios aún sin commit/push; las referencias a commits y despliegues siguientes describen el historial previo. Antes de un futuro despliegue Git, conservar este código en el repositorio para no reemplazar el panel con una versión anterior.

Actualizado: 2026-11-04. Estado: portafolio desplegado y verificado en https://tidy-studio.vercel.app.

## Acceso comprobado

Lectura y edición del checkout local `C:/proyectos/tidely-studio`. Remote configurado: `https://github.com/Andrea-Oyarce-Espinoza/tidely-studio.git`. Esto no demuestra permiso para hacer push. Se pudo leer el chat «Reorienta marca para terapias» y recuperar el enfoque visual sin modificar ese proyecto.

GitHub conectado y verificado el 2026-11-04: repositorio público, rama `main`, permisos de lectura/escritura confirmados. Push realizado del commit `baa94b8` con la portada y correcciones.

Vercel conectado y verificado: equipo `andrea-oyarce-espinozas-projects`, ID `team_dxUavSSz7RaIVWKyjXMXdNQp`, plan Hobby. Andrea creó el proyecto `tidy-studio` (sin «el»), ID `prj_XTTq3bBCmi2pzY4p2ylbw957NCx1`. CLI autenticada y verificada; utilizada como alternativa porque algunas consultas del plugin devolvían errores. Supabase no se necesita para el portafolio.

## Despliegue comprobado

- Producción: https://tidy-studio.vercel.app
- Deployment: `dpl_GmCoiEEX8m1BmkZSNsgyDLNU2uPC`, estado Ready.
- Código: `baa94b8`, rama `main`, publicado el 2026-11-04.
- Build de Vercel: 23 segundos. Respuesta pública HTTP 200 con título y contenido nuevos.
- Revisión en navegador: portada visible y enlace interno «Conoce mi trabajo» funcionando. Revisión móvil y recorrido exhaustivo por teclado pendientes.
- GitHub dispara despliegues de producción al actualizar `main`. No se creó otro proyecto ni se modificó Francia Academy.

## Cómo habilitar la gestión

1. Conectar GitHub desde su integración e iniciar sesión personalmente. Seleccionar solamente `tidely-studio` cuando el flujo permita elegir repositorios. Verificar después permisos efectivos de lectura y escritura.
2. Conectar Vercel mediante la integración disponible. Andrea precisó que la primera etapa será un portafolio personal para mostrar lo que hace. Andrea realiza login y MFA. No pegar tokens en el chat. Revisar elegibilidad de Hobby conforme al uso real antes de publicar.
3. Autorizar la integración del hosting con GitHub para este repositorio. Importar como proyecto Next.js y confirmar la rama real de producción. Los cambios enviados a esa rama podrán disparar despliegues automáticos. Verificar comandos y configuración según el proveedor seleccionado.
4. Para la primera etapa, confirmar proyectos y presentación personal. Precios y agenda para cotizaciones quedan pospuestos por el nuevo alcance. Si se retoman, no se necesita acceso completo al calendario para enlazar una agenda.
5. Mantener las comprobaciones antes de nuevas publicaciones. El subdominio asignado ya es `tidy-studio.vercel.app`. No hay reservas en esta versión.

Las conexiones habilitan operaciones específicas, no acceso ilimitado ni ejecución autónoma permanente. Los permisos reales dependen de cada integración. No solicitar contraseñas, códigos MFA ni claves administrativas en mensajes.

## Permisos mínimos

| Servicio | Cuándo | Acceso |
| --- | --- | --- |
| GitHub | MVP | Leer y escribir este repositorio; PR y checks cuando estén disponibles. Sin administración global. |
| Hosting | MVP | Gestionar el proyecto y sus despliegues, con el alcance más reducido disponible. Sin compras automáticas. |
| Agenda | MVP | Enlace público de reservas. OAuth limitado solo para una integración futura que lo necesite. |
| Supabase | Futuro CRM o portal | Proyecto dedicado; migraciones y RLS revisadas. Claves administrativas solo en servidor. |
| Cloudflare R2 | Solo si hacen falta archivos externos | Token limitado al bucket requerido; nunca clave global. |

Guardar secretos únicamente en un entorno local ignorado por Git o en el gestor del hosting. Las variables `NEXT_PUBLIC_*` son públicas. No versionar tokens. Revocar conexiones que ya no se necesiten.

## Costos y publicación

Vercel ofrece subdominio vercel.app y Hobby se limita al uso personal no comercial. La última instrucción de Andrea vuelve a priorizar Vercel para una primera etapa de portafolio personal, sin el enfoque comercial inicial. La cuenta ya está conectada; queda revisar la elegibilidad de la versión final. Netlify queda como alternativa investigada. Un plan gratuito no garantiza servicio ilimitado.

Fuentes: https://vercel.com/docs/plans/hobby y https://www.netlify.com/blog/introducing-netlify-free-plan/.
