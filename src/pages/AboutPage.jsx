export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Chi Siamo</h1>
        <p>La nostra storia, la tua trasformazione</p>
      </div>

      <section className="about-content">
        <div className="about-section">
          <h2>La Nostra Missione</h2>
          <p>
            IronRhino è nata dalla passione per il fitness e il benessere. Crediamo che ogni persona
            meriti di raggiungere il proprio massimo potenziale, sia fisico che mentale.
            Il nostro team di professionisti certificati è qui per guidarti in ogni passo del tuo percorso.
          </p>
        </div>

        <div className="about-section">
          <h2>Il Nostro Approccio</h2>
          <p>
            Combiniamo allenamento personalizzato e nutrizione scientifica per creare programmi
            su misura che portano risultati concreti. Non crediamo nelle soluzioni magiche,
            ma nel lavoro costante, nella dedizione e nel supporto continuo.
          </p>
        </div>

        <div className="about-section">
          <h2>Perché IronRhino?</h2>
          <ul className="benefits-list">
            <li>✓ Trainer certificati con anni di esperienza</li>
            <li>✓ Programmi personalizzati basati sui tuoi obiettivi</li>
            <li>✓ Supporto nutrizionale professionale</li>
            <li>✓ Ambiente motivante e inclusivo</li>
            <li>✓ Attrezzature moderne e ben mantenute</li>
            <li>✓ Risultati misurabili e duraturi</li>
          </ul>
        </div>

        <div className="stats-section">
          <div className="stat-box">
            <h3>500+</h3>
            <p>Clienti Soddisfatti</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Anni di Esperienza</p>
          </div>
          <div className="stat-box">
            <h3>95%</h3>
            <p>Obiettivi Raggiunti</p>
          </div>
        </div>
      </section>
    </div>
  )
}

