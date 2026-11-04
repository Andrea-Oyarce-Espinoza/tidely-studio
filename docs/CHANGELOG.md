# Changelog

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
