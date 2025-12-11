import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

import { Link } from 'react-router-dom'
import { FaDumbbell, FaAppleAlt, FaTrophy, FaUsers, FaClock, FaHeart } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="home-intro">
        <div className="intro-content">
          <h2>Benvenuti a IronRhino</h2>
          <p>
            La tua palestra di riferimento per <strong>Personal Training</strong> e <strong>Nutrizione</strong> personalizzata.
            Raggiungi i tuoi obiettivi con il supporto di professionisti qualificati.
          </p>
          <div className="home-features">
            <div className="feature-box">
              <FaDumbbell style={{ fontSize: '3rem', color: '#dc3545', marginBottom: '1rem' }} />
              <h3>Personal Training</h3>
              <p>Allenamenti personalizzati con trainer certificati per massimizzare i tuoi risultati</p>
            </div>
            <div className="feature-box">
              <FaAppleAlt style={{ fontSize: '3rem', color: '#dc3545', marginBottom: '1rem' }} />
              <h3>Nutrizione</h3>
              <p>Piani alimentari studiati per le tue esigenze specifiche e obiettivi</p>
            </div>
            <div className="feature-box">
              <FaTrophy style={{ fontSize: '3rem', color: '#dc3545', marginBottom: '1rem' }} />
              <h3>Risultati Garantiti</h3>
              <p>Metodologie testate e comprovate da anni di esperienza nel settore</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="intro-content">
          <h2>Perché Scegliere IronRhino?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <FaUsers style={{ fontSize: '2.5rem', color: '#2980b9', marginBottom: '1rem' }} />
              <h3>Staff Qualificato</h3>
              <p>Trainer certificati e nutrizionisti professionisti sempre al tuo fianco</p>
            </div>
            <div className="benefit-item">
              <FaClock style={{ fontSize: '2.5rem', color: '#2980b9', marginBottom: '1rem' }} />
              <h3>Flessibilità Oraria</h3>
              <p>Orari flessibili per adattarsi al tuo stile di vita</p>
            </div>
            <div className="benefit-item">
              <FaHeart style={{ fontSize: '2.5rem', color: '#2980b9', marginBottom: '1rem' }} />
              <h3>Approccio Personalizzato</h3>
              <p>Ogni percorso è unico e creato su misura per te</p>
            </div>
          </div>
          <Link to="/abbonamenti" className="btn" style={{ marginTop: '3rem' }}>
            Scopri i Nostri Piani
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  )
}

