import Link from "next/link";
import HomeBlogSection from "@/components/home-blog-section";
import { projects } from "@/content/projects";
import HolidayScene from "@/components/holiday-scene";
import "./home.css";

const instagram = "https://www.instagram.com/tidy_studio_dev/";

const approach = [
  { number: "01", title: "Escuchar primero", text: "Entender a la persona detrás del proyecto, lo que hace y lo que necesita comunicar." },
  { number: "02", title: "Dar espacio a lo esencial", text: "Ordenar la información para que encontrar un servicio o conocer una propuesta sea sencillo." },
  { number: "03", title: "Construir con intención", text: "Cuidar los detalles, desde cómo se lee en un teléfono hasta el siguiente paso de quien visita la web." },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#inicio" aria-label="Tidy Studio, inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></a>
        <nav aria-label="Navegación principal"><a href="#enfoque">Mi enfoque</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><Link href="/blog">Blog</Link></nav>
        <a className="header-contact" href={instagram}>Conectemos <span aria-hidden="true">↗</span></a>
      </header>

      <main id="contenido">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="little-star" aria-hidden="true">✳</span> DESARROLLO WEB CON SENTIDO HUMANO</p>
            <h1 id="hero-title">Detrás de cada web,<br />hay una <span>persona.</span></h1>
            <p className="hero-description">Y detrás de Tidy Studio, estoy yo. Soy Andrea y me gusta transformar ideas en espacios digitales claros, cercanos y con identidad.</p>
            <a className="button" href="#proyectos">Conoce mi trabajo <span aria-hidden="true">↗</span></a>
            <p className="hero-note">Hecho con calma, cuidado y un poquito de magia navideña.</p>
          </div>
          <div className="seasonal-hero-art">
          <div className="hero-art" aria-label="Ilustración de una web con un saludo de Navidad" role="img">
            <div className="art-label">UNA NAVIDAD CON ESPACIO PARA CREAR.</div>
            <div className="browser-art">
              <div className="browser-bar"><span /><span /><span /><i>un espacio para tu proyecto</i></div>
              <div className="art-content"><div className="art-greeting">Hola, qué bueno<br />encontrarte aquí.</div><div className="art-rule" /><div className="art-rule short" /><div className="art-pill">Tu esencia, en la web <span>↗</span></div></div>
            </div>
            <div className="art-sticker">Pensado para personas.<br /><strong>Creado por una también.</strong></div>
            <span className="art-caption">ideas + código + espíritu navideño</span>
          </div>
          <HolidayScene />
          </div>
        </section>

        <div className="intro-strip"><div className="wrap"><span>Una web puede sentirse como tú.</span><span aria-hidden="true">✳</span><span>Clara. Cercana. Con propósito.</span></div></div>

        <section className="section wrap focus-section" id="enfoque" aria-labelledby="focus-title">
          <div><p className="eyebrow">01 / MI ENFOQUE</p><h2 id="focus-title">Tú te dedicas<br />a las personas.<br /><span>Tu web también puede.</span></h2></div>
          <div className="focus-copy"><p>Me interesa crear sitios personalizados para profesionales independientes. En educación, salud, terapias y otras áreas, cada persona tiene una manera propia de acompañar y necesidades distintas en su trabajo.</p><p>Espacios que ayuden a entender qué haces y que puedan crecer contigo: un calendario, un acceso privado, un panel de administración o documentos PDF pensados para tu rubro. El punto de partida es escuchar qué necesitas.</p><div className="tags"><span>Educación</span><span>Salud y bienestar</span><span>Profesionales independientes</span></div><p className="small-note">Una dirección que estoy construyendo, proyecto a proyecto.</p></div>
        </section>

        <section className="project-section" id="proyectos" aria-labelledby="project-title"><div className="wrap section">
          <div className="section-heading"><div><p className="eyebrow">02 / PROYECTOS</p><h2 id="project-title">Ideas que encuentran<br /><span>su propio espacio.</span></h2></div><p>Proyectos reales, hechos con cuidado.<br />Aquí compartiré los que vayan tomando forma.</p></div>
          <div className="projects-list">{projects.map((project) => <article className="project-card" key={project.id}>
            <div className="project-visual"><span className="project-overline">PROYECTO / {project.name.toUpperCase()}</span><div className="project-monogram" aria-hidden="true">{project.monogram}<span>.</span></div><p>Un proyecto con<br /><em>nombre propio.</em></p><span className="project-visual-foot">DESARROLLO WEB · ANDREA OYARCE</span></div>
            <div className="project-info"><p className="eyebrow">DESARROLLO WEB · EN PRODUCCIÓN</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div><p>{project.note}</p><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Visitar {project.domain} <span aria-hidden="true">↗</span><span className="sr-only"> (se abre en otra pestaña)</span></a><span className="project-caption">Presentación gráfica del proyecto; visita el sitio para ver su diseño.</span></div>
          </article>)}</div>
        </div></section>

        <HomeBlogSection />

        <section className="section wrap" aria-labelledby="process-title"><p className="eyebrow">04 / MI FORMA DE CREAR</p><h2 id="process-title">Primero entender.<br /><span>Después, construir.</span></h2><div className="approach-grid">{approach.map((item) => <article className="approach" key={item.number}><span className="approach-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

        <section className="about-section wrap" id="sobre-mi" aria-labelledby="about-title"><div className="about-mark" aria-hidden="true"><span>ao.</span><p>LA PERSONA<br />DETRÁS DEL CÓDIGO</p></div><div><p className="eyebrow">05 / MUCHO GUSTO</p><h2 id="about-title">Soy Andrea.<br /><span>Y esto es Tidy Studio.</span></h2><p>Soy licenciada en educación, desarrolladora web y la persona detrás de Mamá Programadora. Tidy Studio es una nueva etapa de ese camino: un lugar para compartir lo que hago y la manera en que entiendo la web.</p><p>La educación y las formas en que aprendemos me apasionan. Esa mirada también guía lo que construyo: escuchar, explicar con cuidado y crear una web que hable de ti y acompañe a las personas que llegan a ella.</p><a className="text-link" href={instagram}>Encuéntrame en Instagram <span aria-hidden="true">↗</span></a></div></section>


        <section className="contact-section wrap" aria-labelledby="contact-title"><span className="contact-star" aria-hidden="true">✳</span><p className="eyebrow">SIGAMOS EN CONTACTO</p><h2 id="contact-title">Las buenas ideas<br />empiezan conversando.</h2><p>Comparto mi trabajo, aprendizajes y esta nueva etapa en Instagram.<br />Me encantará encontrarte por ahí.</p><a className="button light" href={instagram}>Hola, Andrea <span aria-hidden="true">↗</span></a></section>
      </main>
    </>
  );
}
