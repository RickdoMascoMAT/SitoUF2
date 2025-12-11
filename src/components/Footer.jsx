import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Contattaci</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#e5e5e5' }}>
        Hai domande o vuoi maggiori informazioni? Siamo qui per aiutarti!
      </p>
      <Link to="/contatti" className="btn" style={{ marginBottom: '2rem' }}>
        Vai alla Pagina Contatti
      </Link>
      <p>info@ironrhino.it | Tel: 123-456-7890</p>

      <div className="social-links">
        <a href="https://www.instagram.com/_ironrhino_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@ironrhino2025" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>

      <p>&copy; 2025 IronRhino. Tutti i diritti riservati.</p>
    </footer>
  )
}

