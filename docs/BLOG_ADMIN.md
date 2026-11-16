# Panel de Notas con sentido

Panel previsto: https://tidy-studio.vercel.app/admin
Blog: https://tidy-studio.vercel.app/blog

## Escribir y publicar

1. Entra al panel e inicia sesión con Google usando la cuenta de Google de Andrea autorizada en Sanity, la cuenta miembro del proyecto Sanity.
2. En «Todas mis entradas», usa el botón para crear una entrada. Completa título, dirección (Generar), resumen, tema, fecha, introducción, contenido y pregunta final.
3. Los cambios se guardan como borrador. Espera el indicador de guardado antes de cerrar; necesitas conexión. Puedes volver a «Borradores» para continuar.
4. Pulsa «Publicar» cuando esté lista. Abre `/blog` y recarga para verla. No necesitas un despliegue ni editar archivos.
5. Si editas una entrada ya publicada, los cambios quedan como borrador hasta volver a publicar. Para retirarla del blog, usa la acción «Despublicar» del menú del documento. Conserva el slug para no romper enlaces compartidos.
6. Cierra sesión desde tu avatar si usas un equipo compartido.

La fecha de la entrada es la que ve quien lee, no una programación automática. La automatización de los lunes prepara borradores para tu revisión; no pulsa Publicar.

## Acceso y datos

Sanity proyecto `zwt63c3h`, dataset `production`, recurso Vercel `ir_b97Znhwjd3kickSw`. Una sola cuenta humana verificada: la cuenta de Google de Andrea autorizada en Sanity. El inicio de sesión y los permisos los controla Sanity; visitar `/admin` no concede acceso a contenido ni escritura.

El esquema exige campos completos y slugs únicos. Los enlaces del contenido aceptan http, https y mailto; el render también valida el protocolo. No se ejecuta HTML del editor.

El servidor usa `SANITY_API_READ_TOKEN`; la credencial de escritura solo la usan las herramientas editoriales locales. Ninguna credencial secreta se importa en el Studio. Solo el ID de proyecto y el nombre del dataset son públicos. CORS de producción autorizado expresamente por Andrea para `https://tidy-studio.vercel.app`, con credenciales, sin comodines.

El dataset creado por la integración es para contenido del blog; no guardar fichas clínicas, datos de pacientes ni información privada de terceros. Los borradores de Sanity requieren autenticación incluso cuando un dataset contiene artículos de acceso público.

## Plan

Instalación solicitada y devuelta por Vercel con plan `free-2023-10-19` (Free). Sanity activa automáticamente un trial de Growth en proyectos nuevos. Según la documentación, al finalizar vuelve a Free si no se contrata Growth. Este panel utiliza editor, borradores y publicación básica, sin depender de comentarios, publicación programada ni roles de pago. No se añadió un método de pago ni se solicitó Growth.

Fuentes: https://www.sanity.io/docs/platform-management/growth-plan-trial y https://www.sanity.io/docs/developer-guides/vercel-integration.

## Operación y comprobaciones

- `vercel env pull .env.local --yes`: descarga configuración al archivo ignorado; nunca mostrar valores.
- `node scripts/sanity-setup.mjs seed`: migración inicial idempotente de la entrada de bienvenida. No sobrescribe documentos existentes; no usar para restaurar una entrada retirada.
- `node scripts/sanity-import-draft.mjs archivo.json`: añade un borrador; no publica ni sobrescribe artículos publicados.
- `node scripts/verify-blog.mjs URL`: crea un borrador temporal, comprueba persistencia, exclusión pública, rechazo de escritura anónima y páginas. Elimina solo su propio borrador.
- `npm run build` y `npm run lint`: validación del sitio y el Studio.

Despliegue verificado: `dpl_2yAtZsJ2tDH8D2cE4wvtxsVn6sV4`, READY, promovido a https://tidy-studio.vercel.app. Despliegue desde checkout local mediante CLI; no se hizo commit ni push a GitHub. Conservar estos cambios en el repositorio antes de futuros despliegues desde Git.

Comprobaciones: build local y remoto correctos, ESLint correcto; portada, blog, artículo y admin responden 200 en producción; borrador temporal responde 404 y no aparece en el listado. Verificados guardado persistente de borradores, exclusión de consultas públicas, rechazo de escritura sin autenticación y ausencia de secretos en las páginas. Navegación visual local a artículo correcta. Acceso real a `/admin` con Google y la cuenta de Google de Andrea autorizada en Sanity verificado; lista y editor de la entrada migrada cargados en español, con estado publicado y botón Publicar. La primera entrada ya estaba publicada: no se modificó ni se republicó durante esta revisión visual. Revisión visual móvil pendiente.

Auditoría de dependencias de producción: 0 altas/críticas, 14 moderadas indirectas en herramientas de Sanity, principalmente minimatch. Se corrigieron js-yaml, smol-toml y undici con overrides compatibles; no se forzó una bajada mayor de Sanity. Credencial de escritura disponible solo en entorno; ninguna ruta del sitio la usa.
