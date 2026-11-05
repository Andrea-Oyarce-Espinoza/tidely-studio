import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacidad | Tidy Studio", description: "Qué información se trata al visitar el portafolio de Tidy Studio y cómo contactar a Andrea sobre privacidad." };

export default function PrivacyPage() {
  return <>
    <p className="eyebrow">TU INFORMACIÓN IMPORTA</p>
    <h1>Política de privacidad</h1>
    <p className="legal-date">Última actualización: 4 de noviembre de 2026</p>
    <p className="legal-lead">Este portafolio está pensado para mostrar mi trabajo, no para pedirte datos. Aquí te explico qué ocurre al visitarlo y al contactarme.</p>
    <h2>1. Quién está detrás</h2>
    <p>Andrea Oyarce, en Chile, es la responsable de Tidy Studio y de la información que recibe directamente a través de su canal de contacto. Puedes enviar tus consultas por mensaje a <a href="https://www.instagram.com/mama_programadora_/">@mama_programadora_ en Instagram</a>. Actualmente no hay un correo público de contacto habilitado.</p>
    <h2>2. Datos al navegar</h2>
    <p>Esta versión no tiene cuentas de usuario, formularios, newsletter, pagos ni agenda propia. No solicita datos de salud ni documentos personales. El código del sitio no incorpora herramientas de analítica, píxeles publicitarios ni cookies propias para seguimiento.</p>
    <p>Para entregar las páginas y proteger la infraestructura, Vercel, proveedor de alojamiento, puede procesar datos técnicos como dirección IP, navegador, fecha, rutas solicitadas y registros de solicitudes o errores. No debes interpretar la ausencia de formularios como ausencia absoluta de tratamiento técnico.</p>
    <h2>3. Si me escribes</h2>
    <p>Al enviar un mensaje por Instagram, compartes con esa plataforma y conmigo tu perfil y el contenido que decidas enviar. Utilizaré lo necesario para leer y responder tu consulta y dar seguimiento a esa conversación. No te añadiré a listas de publicidad por el solo hecho de escribir.</p>
    <p>No envíes contraseñas, credenciales, antecedentes clínicos ni datos privados de terceros. Para cualquier gestión posterior que requiera información adicional se deberá explicar previamente su finalidad y el canal adecuado.</p>
    <h2>4. Proveedores y enlaces externos</h2>
    <p>El alojamiento utiliza infraestructura de Vercel, que puede procesar información en otros países. Sus condiciones y el acuerdo aplicable al alojamiento regulan ese tratamiento técnico. Consulta el <a href="https://vercel.com/legal/privacy-notice">aviso de privacidad de Vercel</a> y su <a href="https://vercel.com/legal/dpa">acuerdo de tratamiento de datos</a>.</p>
    <p>Instagram y los proyectos enlazados son sitios externos. Al abrirlos se aplican sus propias políticas y tecnologías. Este portafolio no incorpora sus contenidos mediante widgets ni les envía mensajes automáticamente.</p>
    <h2>5. Conservación y cuidado</h2>
    <p>La información de las conversaciones se conserva mientras sea necesaria para atenderlas y su seguimiento, o para cumplir una obligación aplicable. Puedes solicitar su eliminación cuando corresponda. La conservación de registros técnicos y de copias de la plataforma externa depende también del proveedor y de su configuración; eliminar una conversación de mi acceso no implica eliminar todas sus copias en Instagram.</p>
    <p>El sitio utiliza HTTPS. No se promete seguridad absoluta ni se publican datos recibidos por mensaje sin una autorización o fundamento que lo permita.</p>
    <h2>6. Tus solicitudes</h2>
    <p>Puedes pedir información sobre tus datos y solicitar su rectificación, eliminación o bloqueo cuando corresponda conforme a la normativa aplicable. Envía un mensaje al canal indicado, señalando la solicitud y la conversación relacionada. Solo se pedirá la información mínima necesaria para verificar que la solicitud sea tuya; evita enviar documentos de identidad por mensaje sin que antes se acuerde un medio adecuado.</p>
    <h2>7. Cambios en esta política</h2>
    <p>Si se incorporan formularios, analítica, reservas u otras funciones, esta política deberá actualizarse antes de activar el nuevo tratamiento y, cuando corresponda, solicitar la autorización necesaria. La fecha de esta página identifica su última actualización.</p>
  </>;
}
