# Accesos y despliegue

Actualizado: 2026-11-04. Estado: definición y documentación; sin despliegue confirmado.

## Acceso comprobado

Lectura y edición del checkout local `C:/proyectos/tidely-studio`. Remote configurado: `https://github.com/Andrea-Oyarce-Espinoza/tidely-studio.git`. Esto no demuestra permiso para hacer push. Se pudo leer el chat «Reorienta marca para terapias» y recuperar el enfoque visual sin modificar ese proyecto.

GitHub conectado y verificado el 2026-11-04: el repositorio es público, su rama predeterminada es `main` y la API confirma permisos `pull` y `push` (también administración). Se utilizarán solo los permisos necesarios para este trabajo. No se ha hecho push.

Vercel conectado y verificado el 2026-11-04 mediante su integración. Equipo: `andrea-oyarce-espinozas-projects`, ID `team_dxUavSSz7RaIVWKyjXMXdNQp`, plan Hobby. La consulta de contexto no devolvió proyectos vinculados y la búsqueda por `tidely` devolvió cero proyectos. No se ha creado ni desplegado este proyecto todavía. La CLI de Vercel está instalada; su sesión es independiente y no se ha comprobado. Supabase no se necesita para el MVP.

## Cómo habilitar la gestión

1. Conectar GitHub desde su integración e iniciar sesión personalmente. Seleccionar solamente `tidely-studio` cuando el flujo permita elegir repositorios. Verificar después permisos efectivos de lectura y escritura.
2. Conectar Vercel mediante la integración disponible. Andrea precisó que la primera etapa será un portafolio personal para mostrar lo que hace. Andrea realiza login y MFA. No pegar tokens en el chat. Revisar elegibilidad de Hobby conforme al uso real antes de publicar.
3. Autorizar la integración del hosting con GitHub para este repositorio. Importar como proyecto Next.js y confirmar la rama real de producción. Los cambios enviados a esa rama podrán disparar despliegues automáticos. Verificar comandos y configuración según el proveedor seleccionado.
4. Para la primera etapa, confirmar proyectos y presentación personal. Precios y agenda para cotizaciones quedan pospuestos por el nuevo alcance. Si se retoman, no se necesita acceso completo al calendario para enlazar una agenda.
5. Preparar preview, revisar móvil, teclado, enlaces y una reserva completa. Desplegar con el subdominio gratuito asignado y registrar la URL comprobada. Ningún nombre está reservado todavía.

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
