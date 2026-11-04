const instagram = "https://www.instagram.com/mama_programadora_/";

const approach = [
  { number: "01", title: "Escuchar primero", text: "Entender a la persona detrás del proyecto, lo que hace y lo que necesita comunicar." },
  { number: "02", title: "Dar espacio a lo esencial", text: "Ordenar la información para que encontrar un servicio o conocer una propuesta sea sencillo." },
  { number: "03", title: "Construir con intención", text: "Cuidar los detalles, desde cómo se lee en un teléfono hasta el siguiente paso de quien visita la web." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#inicio" aria-label="Tidy Studio, inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></a>
        <nav aria-label="Navegación principal"><a href="#enfoque">Mi enfoque</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a></nav>
        <a className="header-contact" href={instagram}>Conectemos <span aria-hidden="true">↗</span></a>
      </header>

      <main id="contenido">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="little-star" aria-hidden="true">✳</span> DESARROLLO WEB CON SENTIDO HUMANO</p>
            <h1 id="hero-title">Detrás de cada web,<br />hay una <span>persona.</span></h1>
            <p className="hero-description">Y detrás de Tidy Studio, estoy yo. Soy Andrea y me gusta transformar ideas en espacios digitales claros, cercanos y con identidad.</p>
            <a className="button" href="#proyectos">Conoce mi trabajo <span aria-hidden="true">↗</span></a>
            <p className="hero-note">Hecho con calma, cuidado y mucho propósito.</p>
          </div>
          <div className="hero-art" aria-label="Ilustración de una web organizada con espacio para las personas" role="img">
            <div className="art-label">UN POCO DE ORDEN. MUCHO DE TI.</div>
            <div className="browser-art">
              <div className="browser-bar"><span /><span /><span /><i>un espacio para tu proyecto</i></div>
              <div className="art-content"><div className="art-greeting">Hola, qué bueno<br />encontrarte aquí.</div><div className="art-rule" /><div className="art-rule short" /><div className="art-pill">Tu esencia, en la web <span>↗</span></div></div>
              <div className="art-flower" aria-hidden="true">✳</div>
            </div>
            <div className="art-sticker">Pensado para personas.<br /><strong>Creado por una también.</strong></div>
            <span className="art-caption">ideas + código + cercanía</span>
          </div>
        </section>

        <div className="intro-strip"><div className="wrap"><span>Una web puede sentirse como tú.</span><span aria-hidden="true">✳</span><span>Clara. Cercana. Con propósito.</span></div></div>

        <section className="section wrap focus-section" id="enfoque" aria-labelledby="focus-title">
          <div><p className="eyebrow">01 / MI ENFOQUE</p><h2 id="focus-title">Tú te dedicas<br />a las personas.<br /><span>Tu web también puede.</span></h2></div>
          <div className="focus-copy"><p>Me interesa crear sitios para profesionales que atienden con cita. Especialmente en salud, terapias y bienestar, donde la confianza empieza mucho antes de la primera consulta.</p><p>Espacios que ayuden a entender qué haces, conocer tus servicios y encontrar cómo dar el siguiente paso. Sin perder lo más importante: tu forma de acompañar.</p><div className="tags"><span>Salud</span><span>Bienestar</span><span>Servicios con cita</span></div><p className="small-note">Una dirección que estoy construyendo, proyecto a proyecto.</p></div>
        </section>

        <section className="project-section" id="proyectos" aria-labelledby="project-title"><div className="wrap section">
          <div className="section-heading"><div><p className="eyebrow">02 / UN PROYECTO REAL</p><h2 id="project-title">Del propósito<br /><span>a la pantalla.</span></h2></div><p>Cada proyecto tiene su historia.<br />Este es parte de la mía.</p></div>
          <article className="project-card">
            <div className="project-visual"><span className="project-overline">PROYECTO / FRANCIA ACADEMY</span><div className="project-monogram" aria-hidden="true">f<span>.</span></div><p>Un proyecto con<br /><em>nombre propio.</em></p><span className="project-visual-foot">DESARROLLO WEB · ANDREA OYARCE</span></div>
            <div className="project-info"><p className="eyebrow">DESARROLLO WEB</p><h3>Francia Academy</h3><p>Un sitio que desarrollé para una psicóloga. Un trabajo real que reúne mi interés por la tecnología y por los proyectos que nacen de las personas.</p><p>Te invito a recorrerlo y conocer de primera mano lo que construyo.</p><a className="text-link" href="https://francia-academy.vercel.app" target="_blank" rel="noopener noreferrer">Visitar el proyecto <span aria-hidden="true">↗</span><span className="sr-only"> (se abre en otra pestaña)</span></a><span className="project-caption">Presentación gráfica del proyecto; visita el sitio para ver su diseño.</span></div>
          </article>
        </div></section>

        <section className="section wrap" aria-labelledby="process-title"><p className="eyebrow">03 / MI FORMA DE CREAR</p><h2 id="process-title">Primero entender.<br /><span>Después, construir.</span></h2><div className="approach-grid">{approach.map((item) => <article className="approach" key={item.number}><span className="approach-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

        <section className="about-section wrap" id="sobre-mi" aria-labelledby="about-title"><div className="about-mark" aria-hidden="true"><span>ao.</span><p>LA PERSONA<br />DETRÁS DEL CÓDIGO</p></div><div><p className="eyebrow">04 / MUCHO GUSTO</p><h2 id="about-title">Soy Andrea.<br /><span>Y esto es Tidy Studio.</span></h2><p>Soy desarrolladora web y la persona detrás de Mamá Programadora. Tidy Studio es una nueva etapa de ese camino: un lugar para compartir lo que hago y la manera en que entiendo la web.</p><p>Me importa que la tecnología se sienta cercana. Que las cosas tengan sentido. Y que una web pueda hablar de ti con la misma claridad con la que tú hablas de lo que te apasiona.</p><a className="text-link" href={instagram}>Encuéntrame en Instagram <span aria-hidden="true">↗</span></a></div></section>

        <section className="contact-section wrap" aria-labelledby="contact-title"><span className="contact-star" aria-hidden="true">✳</span><p className="eyebrow">SIGAMOS EN CONTACTO</p><h2 id="contact-title">Las buenas ideas<br />empiezan conversando.</h2><p>Comparto mi trabajo, aprendizajes y esta nueva etapa en Instagram.<br />Me encantará encontrarte por ahí.</p><a className="button light" href={instagram}>Hola, Andrea <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#inicio">tidy<span className="wordmark-dot">.</span><span className="wordmark-small">STUDIO</span></a><p>Un espacio digital. Una persona detrás.</p><span>Andrea Oyarce · Chile · {new Date().getFullYear()}</span></footer>
    </>
  );
}
