import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Entrada del blog",
  type: "document",
  initialValue: () => ({
    date: new Intl.DateTimeFormat("en-CA", { timeZone: "America/Santiago", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()),
    category: "Educación y mundo digital",
  }),
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required().max(140) }),
    defineField({ name: "slug", title: "Dirección de la entrada", description: "Pulsa Generar a partir del título. Una vez publicada, conserva esta dirección para que los enlaces sigan funcionando.", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) || "Usa solo letras minúsculas sin tildes, números y guiones.") }),
    defineField({ name: "description", title: "Resumen", description: "Se muestra en el listado del blog y al compartir la entrada.", type: "text", rows: 3, validation: (rule) => rule.required().max(300) }),
    defineField({ name: "category", title: "Tema", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "date", title: "Fecha de la entrada", description: "Es la fecha que verá quien lea el artículo; el botón Publicar determina cuándo se hace visible.", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "introduction", title: "Introducción", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({
      name: "body", title: "Contenido", description: "Escribe con calma: los cambios se guardan como borrador. Solo se muestran en el blog cuando pulsas Publicar.", type: "array",
      of: [defineArrayMember({
        type: "block",
        styles: [{ title: "Párrafo", value: "normal" }, { title: "Subtítulo", value: "h2" }, { title: "Subtítulo pequeño", value: "h3" }, { title: "Cita", value: "blockquote" }],
        lists: [{ title: "Lista con viñetas", value: "bullet" }, { title: "Lista numerada", value: "number" }],
        marks: {
          decorators: [{ title: "Negrita", value: "strong" }, { title: "Cursiva", value: "em" }],
          annotations: [{ name: "link", title: "Enlace", type: "object", fields: [{ name: "href", title: "Dirección", type: "url", validation: (rule) => rule.required().uri({ scheme: ["https", "http", "mailto"], allowRelative: false }) }] }],
        },
      })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: "question", title: "Pregunta para quien lee", type: "string", validation: (rule) => rule.required().max(240) }),
  ],
  orderings: [{ title: "Más recientes", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
