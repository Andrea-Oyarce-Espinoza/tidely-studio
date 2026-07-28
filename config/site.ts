/**
 * Configuración global del sitio.
 * 
 * Este archivo centraliza toda la información que identifica a Tidely Studio. 
 * Cualquier dato utilizado en más de un lugar del proyecto debe obtenerse desde aquí. 
 */

export const siteConfig = {
    // Información principal
    name: "Tidely Studio", 
    shortName: "Tidely",

    title: "Tidely Studio | Auditorías SEO y Consultoría Web",

    description: 
    "Auditorías SEO y revisiones técnicas para pequeños negocios. Descubre oportunidades de mejora y recibe un plan de acción claro para hacer crecer tu presencia digital.",

    language: "es-CL",
    locale: "es-CL",

    // Dominio (temporal)
    url: "https://tidely-studio.vercel.app",

    // Imagen para Open Graph
    ogImage: "/images/og/cover.png",

   // Empresa
   company: {
    name: "Tidely Studio",
    founder: "Andrea Oyarce",
    country: "Chile",
   },

   // Contacto
   contact: {
    email: "contacto@tidelystudio.com", // Temporal
   },

   // SEO
    keywords: [
        "Auditoría SEO",        
        "SEO Técnico",
        "Consultoría Web",
        "Optimización Web",
        "Performance",
        "Accesibilidad",
        "Core Web Vitals",
        "Pequeñas Empresas",
        "Emprendedores",
        "Chile",
    ],

    // Licencia 
    license: "MIT",
} as const;