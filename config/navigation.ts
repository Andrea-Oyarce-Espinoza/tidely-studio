/**
 * Configuración de navegación principal del sitio.
 * 
 * Todas las rutas públicas deben declarase aquí. 
 * El Navbar, Footer, Sitemap y Breadcumbs consumirán esta configuración. 
 */

export interface NavigationItem {
    /**
     * Texto visible.
     */
    label: string;

    /**
     * Ruta interna o URL externa. 
     */
    href: string;

    /**
     * Indica si el enlace abre fuera del sitio. 
     */
    external?: boolean;

    /**
     * Indica si debe abrir en una nueva pestaña. 
     */
    newTab?: boolean;

    /**
     * Permite ocultar elementos temporalmente
     * sin eliminarlos del código.
     */
    disabled?: boolean;

    /**
     * Preparado para futuros menús desplegables. 
     */
    children?: NavigationItem[];
}

/** 
 * Menú principal
 */

export const mainNavigation: NavigationItem[] = [
    {
        label: "Inicio",
        href: "/",
    },

    {
        label: "Servicios",
        href: "/servicios",
    },

    {
        label: "Auditorías",
        href: "/auditorias",
    },

    {
        label: "Recursos",
        href: "/recursos",
    },

    {
        label: "Blog",
        href: "/blog",
    },

    {
        label: "Agenda",
        href: "/agenda",
    },
];

/**
 * Navegación del Footer
 */

export const footerNavigation = {
    company: [
        {
            label: "Sobre mí",
            href: "/sobre-mi",
        },

        {
            label: "Contacto",
            href: "/contacto",
        },
    ],

    services: [
        {
            label: "Auditoría SEO",
            href: "/servicios/auditoria-seo",
        },

        { 
            label: "Consultoría",
            href: "/servicios/consultoria",
        },

        {
            label: "Optimización Web",
            href: "/servicios/optimizacion-web",
            disabled: true,
        },
    ],

    resources: [
        {
            label: "Blog",
            href: "/blog",
        },

        {
            label: "Recursos",
            href: "/recursos",
        },

        { 
            label: "Política de privacidad",
            href: "/privacidad",
        },

        {
            label: "Términos y condiciones",
            href: "/terminos",
        },
    ],
};