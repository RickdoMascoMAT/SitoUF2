export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contattaci</h1>
        <p>Siamo qui per rispondere a tutte le tue domande</p>
      </div>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Informazioni di Contatto</h2>
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@ironrhino.it</p>
          </div>
          <div className="info-item">
            <h3>📱 Telefono</h3>
            <p>+39 123 456 7890</p>
          </div>
          <div className="info-item">
            <h3>📍 Indirizzo</h3>
            <p>Via Esempio 123<br/>00100 Roma, Italia</p>
          </div>
          <div className="info-item">
            <h3>🕐 Orari</h3>
            <p>Lun-Ven: 6:00 - 22:00<br/>Sab-Dom: 8:00 - 20:00</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Inviaci un Messaggio</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefono" />
            <textarea placeholder="Messaggio" rows="6" required></textarea>
            <button type="submit" className="btn">Invia Messaggio</button>
          </form>
        </div>
      </section>
    </div>
  )
}

