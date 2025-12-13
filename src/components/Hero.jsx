import { Link } from 'react-router-dom'
import logo from '../assets/erasebg-transformed-downscaled.png'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src={logo} className="hero-logo" alt="IronRhino Logo" />
      <h1>Benvenuti in IronRhino</h1>
      <p>Promuovi uno stile di vita sano attraverso lo sport e preparati per le gare.</p>
      <Link to="/abbonamenti" className="btn">Inizia Ora - Prova Gratuita</Link>
    </section>
  )
}

