import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Aviso informativo | Tidy Studio", description: "Alcance informativo del portafolio y de los proyectos de desarrollo web presentados por Andrea Oyarce." };

export default function DisclaimerPage() {
  return <>
    <p className="eyebrow">UN POCO DE CONTEXTO</p>
    <h1>Aviso informativo</h1>
    <p className="legal-date">Última actualización: 4 de noviembre de 2026</p>
    <p className="legal-lead">Conocer un proyecto ayuda a entender cómo trabajo. También es importante saber qué representa cada ejemplo.</p>
    <h2>Un portafolio, no una contratación</h2>
    <p>Este sitio muestra el trabajo y el enfoque de Andrea Oyarce en desarrollo web. Su contenido es informativo: no reemplaza un análisis de las necesidades particulares de un proyecto ni constituye una propuesta contractual. No hay pagos ni reservas dentro de esta web.</p>
    <h2>Ejemplos y resultados</h2>
    <p>Los proyectos son referencias de trabajos realizados. Las composiciones gráficas de presentación no son necesariamente capturas de sus interfaces; cuando son ilustrativas se indica junto a ellas. Los sitios externos pueden haber cambiado desde su desarrollo.</p>
    <p>Las funciones, integraciones y resultados de un proyecto no se garantizan para otros. Cualquier implementación futura depende de su alcance y de los servicios de terceros que se acuerden.</p>
    <h2>Salud y bienestar como enfoque de diseño</h2>
    <p>Las menciones a psicología, salud o bienestar describen el tipo de proyectos que me interesa desarrollar. Tidy Studio no presta atención clínica, diagnósticos ni asesoramiento sanitario. Las consultas sobre atención o contenidos de un proyecto enlazado corresponden a su profesional o entidad responsable.</p>
    <h2>Consultas y correcciones</h2>
    <p>Si necesitas aclarar una referencia o encuentras un error, puedes escribir a <a href="https://www.instagram.com/mama_programadora_/">@mama_programadora_ en Instagram</a>. Para conocer el uso de datos y las condiciones de navegación, revisa <Link href="/privacidad">Privacidad</Link> y los <Link href="/terminos">Términos y condiciones</Link>.</p>
  </>;
}
