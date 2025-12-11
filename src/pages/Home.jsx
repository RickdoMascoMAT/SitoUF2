import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

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
              <h3>Personal Training</h3>
              <p>Allenamenti personalizzati con trainer certificati</p>
            </div>
            <div className="feature-box">
              <h3>Nutrizione</h3>
              <p>Piani alimentari studiati per le tue esigenze</p>
            </div>
            <div className="feature-box">
              <h3>Risultati Garantiti</h3>
              <p>Metodologie testate e comprovate</p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

