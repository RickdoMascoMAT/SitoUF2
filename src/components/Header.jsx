import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Header({ logo, menuOpen, setMenuOpen }) {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} className="logo" alt="Gym Logo" />
        <h1 className="logo-text">IronRhino</h1>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Servizi</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Chi Siamo</a></li>
          <li><a href="#social" onClick={() => setMenuOpen(false)}>Social</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contatto</a></li>
        </ul>
      </nav>
      <div className="header-social-links">
        <a href="https://www.instagram.com/ironrhino" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@ironrhino" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
    </header>
  )
}

