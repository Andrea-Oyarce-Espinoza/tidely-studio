# Arquitectura — actualización 2026-11-04

## Dirección vigente

Sitio de servicios web para profesionales que atienden con cita. Recorrido: comprender el servicio → conocer a Andrea y un trabajo real → revisar alcance y precios → reservar una reunión para cotizar.

Stack instalado: Next.js 16, React 19, TypeScript y Tailwind CSS 4. shadcn/ui, Framer Motion y Lucide mencionados más abajo no figuran en package.json; son aspiraciones históricas.

Arquitectura propuesta del MVP:

- `app/layout.tsx`: documento raíz en español y metadatos. Corregida la ubicación del layout del starter; retirado el HTML anidado de `app/api/`.
- `app/(marketing)/page.tsx`: portafolio con enfoque, proyecto real, proceso, sobre Andrea y enlaces a Instagram. Precios y agenda pospuestos.
- `config/`: datos públicos centralizados y montos aprobados.
- `public/`: recursos estáticos públicos; nunca archivos privados de clientes.
- `components/` y `lib/`: bases existentes, preservando trabajo previo no versionado.
- `docs/`: decisiones y estado verificable.

Sin autenticación ni base de datos en el MVP. La agenda externa mantiene disponibilidad, confirmación y cancelación. No recoger datos de salud. Un futuro CRM puede justificar Supabase; un portal puede justificar Auth. Los precios y enlaces no requieren base de datos.

Último ajuste de alcance: portafolio personal; precios y agenda pospuestos. Desplegado en Vercel Hobby por elección de Andrea, en https://tidy-studio.vercel.app. Ver ACCESS_AND_DEPLOYMENT.md para commit, deployment y comprobaciones. Revisar elegibilidad del plan si se incorpora un uso comercial.

Comprobaciones previas al lanzamiento: build, TypeScript, revisión móvil y teclado, enlaces válidos, precios aprobados, reserva completa con America/Santiago y otra zona horaria. No afirmar validaciones todavía no realizadas.

---

## Antecedentes históricos (versión 1.0, superados donde contradigan lo anterior)

> Proyecto: Tidely Studio
> Documento: Arquitectura
> Versión: 1.0

---

# Objetivo

Definir la arquitectura técnica del sitio web para garantizar escalabilidad, mantenibilidad y reutilización. 

---

# Filosofía

Cada componente debe resolver un único problema. 

Todo debe poder reutilizarse. 

Toda funcionalidad debe poder eliminarse sin afectar al resto del sistema. 

---

# TEcnologías

Framework

- Next.js 16

Lenguaje

- TypeScript

Estilos

- Tailwind CSS v4

Componentes

-shadcn/ui

Animaciones

- Framer Motion

Iconografía

- Lucide React

Hosting

- Vercel

Repositorio 

- GitHub

---

# Organización

/app

/components

/content

/config

/hooks

/lib

/types

/public

/styles

/docs

---

# Arquitectura

Página 

↓

Secciones

↓

Componentes

↓

UI

---

# Objetivos

- Modularidad. 
- Bajo acoplamiento. 
- Alta reutilización. 
- SEO First. 
- Mobile First. 

---

# Regla principal

Si una nueva funcionalidad obliga a modificar muchos módulos existentes, la arquitectura debe revisarse.
