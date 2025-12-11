import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Social() {
  return (
    <section className="social-section" id="social">
      <h2>Seguici sui Social</h2>
      <p className="social-intro">
        Resta aggiornato con i nostri contenuti esclusivi! Scopri eventi su Instagram e tutorial fitness su YouTube.
      </p>

      <div className="social-content">
        {/* Instagram Section - Link diretto */}
        <div className="social-card instagram-card">
          <div className="social-header">
            <FaInstagram className="social-icon" />
            <h3>Instagram</h3>
          </div>
          <p>
            Seguici su Instagram per rimanere aggiornato sui nostri <strong>eventi</strong>,
            sfide fitness, trasformazioni dei nostri clienti e molto altro!
          </p>
          <div className="instagram-cta">
            <p className="instagram-text">
              📸 Scopri le nostre foto, storie e aggiornamenti quotidiani direttamente su Instagram!
            </p>
          </div>
          <a
            href="https://www.instagram.com/_ironrhino_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn social-btn"
          >
            Seguici su Instagram
          </a>
        </div>

        {/* YouTube Section */}
        <div className="social-card youtube-card">
          <div className="social-header">
            <FaYoutube className="social-icon" />
            <h3>YouTube</h3>
          </div>
          <p>
            Sul nostro canale YouTube trovi <strong>tutorial di esercizi</strong> con la tecnica corretta
            e <strong>ricette salutari</strong> per supportare il tuo percorso fitness!
          </p>

          <div className="youtube-videos">
            {/* Video 1 - Tutorial Esercizi */}
            <div className="video-container">
              <h4>Tutorial Esercizi</h4>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mP8vKg-9Dbk"
                title="Tutorial Esercizi IronRhino"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 - Ricette Fitness */}
            <div className="video-container">
              <h4>Ricette Fitness</h4>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/bYucvY7RTZM"
                title="Ricette Fitness IronRhino"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@ironrhino2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn social-btn"
          >
            Iscriviti al Canale
          </a>
        </div>
      </div>
    </section>
  )
}

