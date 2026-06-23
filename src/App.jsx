const WHATSAPP_URL = 'https://wa.me/5493815936070';

const serviceNotes = [
  'Respondo por WhatsApp',
  'Atencion directa',
  'Disponible todos los dias',
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero">
        <img
          className="hero-photo"
          src="/assets/valen-background.png"
          alt="Valen, cajera VIP online"
        />

        <div className="hero-shade" />

        <div className="hero-content">
          <p className="availability">
            <span />
            Disponible ahora
          </p>

          <h1>Valen</h1>
          <p className="role">Cajera VIP Online</p>
          <p className="intro">
            Escribime por WhatsApp y te ayudo con atencion personalizada, rapida y privada.
          </p>

          <CTAButton href={WHATSAPP_URL} label="Hablar por WhatsApp" primary />

          <div className="quick-notes" aria-label="Informacion de atencion">
            {serviceNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="conversation">
        <div className="conversation-copy">
          <p className="section-kicker">Atencion privada</p>
          <h2>Una conversacion simple, sin vueltas.</h2>
          <p>
            Me mandas un mensaje, te respondo y te guio paso a paso. Todo queda en WhatsApp.
          </p>
        </div>

        <div className="chat-preview" aria-label="Vista previa de chat">
          <div className="chat-header">
            <img src="/assets/valen-profile.png" alt="" loading="lazy" />
            <div>
              <strong>Valen</strong>
              <span>en linea</span>
            </div>
          </div>
          <div className="message incoming">Hola, decime que necesitás y te ayudo ahora.</div>
          <div className="message outgoing">Quiero atencion rapida</div>
          <div className="typing">
            <i />
            <i />
            <i />
          </div>
          <CTAButton href={WHATSAPP_URL} label="Abrir chat" />
        </div>
      </section>

      <section className="trust-strip">
        <article>
          <strong>Rapido</strong>
          <span>Respuesta directa cuando estas online.</span>
        </article>
        <article>
          <strong>Privado</strong>
          <span>Sin formularios ni pasos innecesarios.</span>
        </article>
        <article>
          <strong>Personal</strong>
          <span>Te atiendo como si estuvieras en sala VIP.</span>
        </article>
      </section>

      <FloatingWhatsAppButton href={WHATSAPP_URL} />
    </main>
  );
}

function CTAButton({ href, label, primary = false }) {
  return (
    <a
      className={`whatsapp-button ${primary ? 'primary' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}

function FloatingWhatsAppButton({ href }) {
  return (
    <a className="floating-whatsapp" href={href} target="_blank" rel="noreferrer">
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.11 17.61c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.29-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.27-.2-.57-.35z"
      />
      <path
        fill="currentColor"
        d="M16 3C8.82 3 3 8.82 3 16c0 2.57.75 4.98 2.04 7.01L4 29l6.18-1.02A12.95 12.95 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.7c-2.28 0-4.4-.67-6.18-1.82l-.44-.28-3.66.61.62-3.57-.29-.46A10.67 10.67 0 0 1 5.3 16C5.3 10.11 10.11 5.3 16 5.3S26.7 10.11 26.7 16 21.89 26.7 16 26.7z"
      />
    </svg>
  );
}

export default App;
