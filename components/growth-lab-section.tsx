const steps = [
  { title: "Haz espacio para tus ideas", text: "Crea publicaciones, elige fechas y organiza tu calendario. Empieza desde cero y hazlo tuyo." },
  { title: "Observa tu progreso", text: "Registra seguidores, alcance, guardados y otras métricas manualmente. Tus resultados reales, en un solo lugar." },
  { title: "Aprende para volver a crear", text: "Consulta tus publicaciones y sus resultados. Exporta tu plan cuando quieras y decide tu próximo paso." },
];

export default function GrowthLabSection() {
  return <section className="growth-section section wrap" id="herramientas" aria-labelledby="growth-title">
    <div className="growth-intro">
      <div><p className="eyebrow">UNA HERRAMIENTA GRATUITA</p><p className="growth-name">Tidy Growth Lab</p><h2 id="growth-title">Tu contenido, con un poco<br /><span>más de dirección.</span></h2><p className="growth-description">Un espacio para planificar tu contenido, registrar tus métricas y aprender de lo que publicas. Menos improvisación, más intención.</p><a className="button" href="https://tidy-growth-lab.vercel.app/" target="_blank" rel="noopener noreferrer">Abrir herramienta gratuita <span aria-hidden="true">↗</span><span className="sr-only"> (se abre en otra pestaña)</span></a><p className="small-note">Gratuita · Requiere una cuenta en Tidy Growth Lab.</p></div>
      <div className="growth-planner" role="img" aria-label="Ilustración de un calendario editorial; no es una captura de la herramienta">
        <div className="planner-heading"><span>TU PRÓXIMA IDEA</span><span className="planner-check">✓</span></div>
        <div className="planner-week"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
        <div className="planner-grid">{Array.from({ length: 14 }, (_, i) => <span key={i} className={[2, 5, 9].includes(i) ? "planned-day" : ""}>{i + 1}{[2, 5, 9].includes(i) ? <i /> : null}</span>)}</div>
        <div className="planner-note"><span>Una idea a la vez.</span><span aria-hidden="true">↗</span></div><span className="planner-caption">Representación ilustrativa del calendario editorial</span>
      </div>
    </div>
    <div className="approach-grid growth-steps">{steps.map((step, i) => <article className="approach" key={step.title}><span className="approach-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <p className="growth-external">La herramienta se abre en un sitio independiente. Revisa allí sus condiciones y privacidad antes de ingresar información.</p>
  </section>;
}
