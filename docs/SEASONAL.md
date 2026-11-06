# Navidad y herramienta gratuita

Actualizado: 2026-11-05.

- Ilustraciones navideñas con elementos HTML y CSS: árbol por capas, estrella, regalos y guirnalda. Sin imágenes, canvas, SVG ni librerías de animación.
- Luces animadas mediante JavaScript y Web Animations API; ritmo lento, sin destellos rápidos. Botón para pausar/activar; `prefers-reduced-motion` conserva escena estática y deshabilita movimiento. IntersectionObserver y visibilidad del documento pausan fuera de pantalla o en pestañas ocultas. Cleanup al desmontar o cambiar preferencias.
- `components/holiday-scene.tsx` es el único componente cliente nuevo. `components/growth-lab-section.tsx` se renderiza en servidor. Estilos de esta portada en `app/(marketing)/home.css`.
- Para retirar Navidad: quitar HolidayScene y su wrapper seasonal-hero-art del inicio, restaurar copy de temporada y retirar reglas holiday/tree/gift de home.css. Se puede conservar Growth Lab.
- Growth Lab enlazado en https://tidy-growth-lab.vercel.app/ como herramienta gratuita de calendario editorial, registro manual de métricas y exportación, según descripción proporcionada por Andrea. No se promete aumento de seguidores ni sincronización automática con redes.
- El enlace abre una pestaña independiente con noopener/noreferrer; no se incorpora iframe ni se envían datos desde el portafolio. La ilustración del calendario se identifica como representación, no captura real.
- La búsqueda web no pudo abrir la URL; se verificó después en navegador la portada pública, los tres pasos, gratuidad y acceso mediante cuenta. Se aclara en el enlace que requiere cuenta en Growth Lab; el portafolio sigue sin registro propio.
