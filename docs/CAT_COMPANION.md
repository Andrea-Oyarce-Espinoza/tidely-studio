# Gato acompañante

Preparado: 2026-11-15.

Gato propio dibujado en SVG inline, inspirado en el trazo simple de la referencia. No utiliza la imagen de stock ni requiere descarga de imágenes, librerías, audio o servicios externos.

## Interacción

- Acompaña las páginas públicas desde una esquina. No aparece en `/admin` ni `/studio`.
- Movimiento contenido: cola, parpadeos y pequeños pasos al desplazarse; no persigue el cursor ni cruza el contenido.
- En móvil empieza reducido a un botón de 48 px. Al tocarlo se abre el gato con sus opciones.
- Caricia voluntaria: ojos contentos, corazón y respuesta breve; sin mensajes automáticos.
- Pausa y ocultación accesibles. El botón al final de la página permite recuperarlo. Escape cierra las opciones.
- Preferencias solo en memoria durante la navegación de esta sesión de la aplicación; no escribe cookies ni almacenamiento del navegador. Al recargar vuelve al estado inicial.

## Flujo y accesibilidad

Contenedor sin intercepción de puntero excepto botones, listeners de scroll pasivos y detección de colisiones con enlaces, botones, inputs y diálogos. Si ambas esquinas están ocupadas se aparta temporalmente; al editar un campo deja espacio. No bloquea el scroll ni cambia su posición. El panel es voluntario y no modal.

`prefers-reduced-motion` elimina movimientos. La pestaña oculta pausa las animaciones; limpieza de listeners y temporizadores al desmontar. Sin anuncios de los cambios de movimiento; solo responde mediante estado accesible al pedir una caricia. Ilustración decorativa oculta a lectores de pantalla, botones con nombres y foco visible. Oculto al imprimir.

## Archivos

- `components/cat-companion.tsx`: dibujo y comportamiento.
- `components/cat-companion.css`: estilo y animaciones nativas.
- `app/layout.tsx`: montaje persistente entre páginas; no depende del contenido del blog.

El checkout contiene cambios previos de blog/administración que deben preservarse y no incluirse en la publicación del gato por accidente.
