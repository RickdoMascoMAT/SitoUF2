import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Header({ logo, menuOpen, setMenuOpen }) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} className="logo" alt="Gym Logo" />
        </Link>
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
          <h1 className="logo-text">IronRhino</h1>
        </Link>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/servizi" onClick={() => setMenuOpen(false)}>Servizi</Link></li>
          <li><Link to="/abbonamenti" onClick={() => setMenuOpen(false)}>Abbonamenti</Link></li>
          <li><Link to="/chi-siamo" onClick={() => setMenuOpen(false)}>Chi Siamo</Link></li>
          <li><Link to="/social" onClick={() => setMenuOpen(false)}>Social</Link></li>
          <li><Link to="/contatti" onClick={() => setMenuOpen(false)}>Contatti</Link></li>
        </ul>
      </nav>
      <div className="header-social-links">
        <a href="https://www.instagram.com/_ironrhino_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@ironrhino2025" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
    </header>
  )
}

