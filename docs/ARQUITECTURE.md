# ARQUITECTURE.md

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