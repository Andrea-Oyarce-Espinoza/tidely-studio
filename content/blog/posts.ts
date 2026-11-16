import type { PortableTextBlock } from "@portabletext/types";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  status: "draft" | "published";
  introduction: string;
  sections: { title: string; paragraphs: string[] }[];
  question: string;
  body?: PortableTextBlock[];
};

// Only reviewed entries marked as published are exposed by the blog routes.
const posts: BlogPost[] = [
  {
    slug: "una-web-tambien-puede-acompanar",
    title: "Una web también puede acompañar",
    description: "Mi mirada desde la educación sobre los sitios web: escuchar a quien llega, explicar con cuidado y crear herramientas que tengan sentido en tu trabajo.",
    date: "2026-11-06",
    category: "Educación y mundo digital",
    status: "published",
    introduction: "Soy Andrea, licenciada en educación y desarrolladora web. La educación es uno de los temas que más me apasionan, y quiero que tenga un lugar en este espacio. Porque cuando pienso en una web, también pienso en la persona que llega a ella: qué necesita entender, qué preguntas trae y cómo puedo ayudarla a encontrar su camino.",
    sections: [
      {
        title: "Antes de diseñar una pantalla, quiero entender a una persona",
        paragraphs: [
          "Si trabajas de manera independiente, hay mucho de ti en lo que haces. En cómo explicas una idea, preparas una sesión o respondes una duda. Me interesa que tu sitio pueda mostrar esa dedicación y que, al recorrerlo, alguien pueda reconocer si tu forma de trabajar es lo que estaba buscando.",
          "Desde mi mirada como licenciada en educación, me gusta hacerme preguntas antes de construir: ¿qué sabe quien llega?, ¿qué necesita que le expliquemos?, ¿qué palabras podrían resultar confusas? Son preguntas que quiero llevar al desarrollo web, para crear espacios donde la información se presente con intención y cuidado.",
        ],
      },
      {
        title: "Explicar también es una forma de cuidar",
        paragraphs: [
          "Imagina la web de una profesional que ofrece apoyo educativo. Una familia podría llegar buscando saber a quién acompaña, cómo es el primer encuentro y qué necesita preparar. Yo empezaría por esas dudas. Después pensaría cómo ordenar los servicios, qué ejemplos incluir y dónde ofrecer una manera sencilla de conversar.",
          "Me interesa dar espacio a distintas maneras de acercarse a una información: una explicación breve para ubicarse, un ejemplo concreto para comprender la propuesta y más detalle para quien quiera profundizar. Quiero que cada persona pueda recorrer el sitio con calma, sin tener que adivinar lo que significan sus botones o sus palabras.",
        ],
      },
      {
        title: "Las herramientas empiezan en tu día a día",
        paragraphs: [
          "Un sitio personalizado puede ir más allá de presentar tus servicios. Si coordinar horarios ocupa parte de tu jornada, podríamos pensar en un calendario. Si compartes materiales con estudiantes o familias, tal vez tenga sentido un espacio con acceso privado. Si necesitas actualizar recursos, podríamos diseñar un panel de administración que puedas entender y usar con confianza.",
          "También puede haber tareas que terminan en un documento: un registro de acompañamiento, una pauta de observación o un resumen de una sesión. Un generador de PDF podría ayudarte a reunir esa información en un formato propio. Primero habría que conversar sobre qué necesitas registrar, quién lo utiliza y qué datos corresponde incluir. En salud y educación, ese cuidado debe formar parte del diseño desde el comienzo.",
          "Estas son posibilidades que podemos explorar en un proyecto. Mi punto de partida sería escuchar qué haces hoy, qué se repite y qué te gustaría resolver. A veces la primera versión necesita pocas funciones, bien pensadas, y espacio para crecer después.",
        ],
      },
      {
        title: "Un cuaderno abierto para los lunes",
        paragraphs: [
          "Me gustan los lunes. Quiero convertirlos en una oportunidad para compartir ideas sobre educación, aprendizaje y tecnología cercana. Este blog nace con esa intención: mirar situaciones cotidianas de profesionales independientes y preguntarnos cómo podría ayudar una web hecha para su realidad.",
          "Aquí quiero escribir con la misma dedicación con la que me gustaría conocer tu proyecto. Habrá preguntas, ejemplos y decisiones que vale la pena pensar antes de programar. También habrá espacio para seguir aprendiendo. Porque crear algo para otra persona empieza, para mí, por prestar atención.",
        ],
      },
    ],
    question: "¿Qué parte de tu trabajo te gustaría que tu web ayudara a hacer más simple?",
  },
];

export function getPublishedPosts(): BlogPost[] {
  return posts.filter((post) => post.status === "published").sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

export function readingMinutes(post: BlogPost): number {
  const content = post.body
    ? post.body.map((block) => block.children.map((span) => span.text ?? "").join(" "))
    : post.sections.flatMap((section) => [section.title, ...section.paragraphs]);
  const text = [post.introduction, ...content, post.question].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}
