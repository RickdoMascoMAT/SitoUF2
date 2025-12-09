import logo from './assets/erasebg-transformed.png'
import personalTrainingImg from './assets/personal-training-downscaled.png'
import nutritionImg from './assets/nutrition-downscaled.png'
import { useState } from 'react'
import './App.css'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('base');
  const [selectedDuration, setSelectedDuration] = useState('1');
  const [menuOpen, setMenuOpen] = useState(false);

  const prices = {
    base: 29,
    premium: 59,
    competizione: 99
  };

  const discounts = {
    1: 0,
    3: 0.1,
    6: 0.2,
    12: 0.3
  };

  const basePrice = prices[selectedPlan];
  const discount = discounts[selectedDuration];
  const discountedPrice = basePrice * (1 - discount);

  return (
    <>
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
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contatto</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="hero">
        <h1>Benvenuti in IronRhino</h1>
        <p>Promuovi uno stile di vita sano attraverso lo sport e preparati per le gare.</p>
        <a href="#signup" className="btn">Iscriviti Ora</a>
      </section>
      <section id="services" className="services">
        <h2>I Nostri Servizi</h2>
        <div className="service-cards">
          <div className="card">
            <img src={personalTrainingImg} alt="Preparazione alle Gare" />
            <h3>Preparazione alle Gare</h3>
            <p>Allenamenti specifici per powerlifting con personale preparato per aiutarti a metterti in gioco e competere. Strutture e attrezzature adeguate per atleti di tutte le età.</p>
          </div>
          <div className="card">
            <img src={nutritionImg} alt="Palestra anche a tavola" />
            <h3>Palestra anche a tavola</h3>
            <p>Cucina con professionista che segue l'ambito alimentare, strutturando diete sane ed equilibrate apportate ai tuoi obiettivi sportivi.</p>
          </div>
        </div>
      </section>
      <section id="trial" className="trial">
        <h2>Prova Gratuita</h2>
        <p>Inizia con una settimana gratuita e scopri tutti i nostri servizi senza impegno.</p>
        <a href="#signup" className="btn">Prova Ora</a>
      </section>
      <section id="signup" className="signup">
        <h2>Piani e Prezzi</h2>
        <div className="plans">
          <div className="plan-card">
            <h3>Piano Base</h3>
            <p>Accesso illimitato alla palestra</p>
            <p className="price">€29/mese</p>
            <ul>
              <li>Allenamenti liberi</li>
              <li>Spogliatoi</li>
              <li>Docce</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Piano Premium</h3>
            <p>Allenamento personalizzato + nutrizione</p>
            <p className="price">€59/mese</p>
            <ul>
              <li>Tutto del Piano Base</li>
              <li>Personal Trainer</li>
              <li>Consulenza nutrizionale</li>
              <li>Diete personalizzate</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Piano Competizione</h3>
            <p>Preparazione per gare di powerlifting</p>
            <p className="price">€99/mese</p>
            <ul>
              <li>Tutto del Piano Premium</li>
              <li>Allenamenti specifici per gare</li>
              <li>Supporto psicologico</li>
              <li>Partecipazione a eventi</li>
            </ul>
          </div>
        </div>
        <div className="signup-form-container">
          <h2>Iscriviti Ora</h2>
          <div className="price-indicator">
            <p style={{marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '600'}}>Riepilogo Prezzo</p>
            {selectedDuration === '1' ? (
              <p style={{marginBottom: '0'}}>
                <span style={{display: 'inline-block', minWidth: '140px'}}>Prezzo Mensile:</span>
                <span className="price-display">€{discountedPrice.toFixed(2)}</span>
              </p>
            ) : (
              <>
                <p style={{marginBottom: '0.5rem'}}>
                  <span style={{display: 'inline-block', minWidth: '140px'}}>Totale Iscrizione:</span>
                  <span className="price-display">€{(discountedPrice * parseInt(selectedDuration)).toFixed(2)}</span>
                  <span className="price-original" style={{marginLeft: '0.5rem'}}>€{(basePrice * parseInt(selectedDuration)).toFixed(2)}</span>
                </p>
                <p style={{marginBottom: '0'}}>
                  <span style={{display: 'inline-block', minWidth: '140px'}}>Prezzo Mensile:</span>
                  <span className="price-display">€{discountedPrice.toFixed(2)}</span>
                  <span className="price-original" style={{marginLeft: '0.5rem'}}>€{basePrice.toFixed(2)}</span>
                </p>
              </>
            )}
          </div>
          <form className="signup-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefono" required />
            <select required value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
              <option value="base">Piano Base</option>
              <option value="premium">Piano Premium</option>
              <option value="competizione">Piano Competizione</option>
            </select>
            <select required value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
              <option value="1">1 mese</option>
              <option value="3">3 mesi (sconto 10%)</option>
              <option value="6">6 mesi (sconto 20%)</option>
              <option value="12">12 mesi (sconto 30%)</option>
            </select>
            <input type="text" placeholder="Codice Promo (opzionale)" />
            <label>
              <input type="checkbox" /> Richiedi offerta speciale
            </label>
            <button type="submit" className="btn">Iscriviti</button>
          </form>
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <h2>Testimonial</h2>
        <div className="testimonials-container">
          <div className="testimonials-scroll">
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Questa palestra ha cambiato la mia vita! Personale fantastico e risultati incredibili."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Maria R.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"L'allenamento personalizzato mi ha aiutato a raggiungere i miei obiettivi in modo sicuro e efficace."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Luca T.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Consigli nutrizionali eccellenti. Raccomando a tutti!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Sofia M.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Ambiente motivante e attrezzature di qualità. Sono diventato più forte che mai!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Giovanni P.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"La dieta personalizzata ha fatto la differenza. Mi sento energico e in forma."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Elena S.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Preparazione perfetta per le gare. Grazie al team per il supporto!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Marco L.</p>
            </div>
            {/* Duplicate for seamless scroll */}
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Questa palestra ha cambiato la mia vita! Personale fantastico e risultati incredibili."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Maria R.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"L'allenamento personalizzato mi ha aiutato a raggiungere i miei obiettivi in modo sicuro e efficace."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Luca T.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Consigli nutrizionali eccellenti. Raccomando a tutti!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Sofia M.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Ambiente motivante e attrezzature di qualità. Sono diventato più forte che mai!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Giovanni P.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"La dieta personalizzata ha fatto la differenza. Mi sento energico e in forma."</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Elena S.</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>"Preparazione perfetta per le gare. Grazie al team per il supporto!"</p>
              <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Marco L.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>Chi Siamo</h2>
        <p>La nostra missione è promuovere uno stile di vita sano attraverso lo sport e offrire la possibilità di mettersi in gioco preparandosi per le gare. Raggiungiamo questo obiettivo con personale preparato che gestisce sia chi vuole allenarsi per uno stile di vita sano sia chi ha intenzione di gareggiare, fornendo strutture e attrezzature adeguate.</p>
      </section>
      <footer id="contact" className="footer">
        <h2>Contattaci</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Telefono" />
          <textarea placeholder="Messaggio" rows="4"></textarea>
          <button type="submit" className="btn">Invia</button>
        </form>
        <p>info@ironrhino.it | Tel: 123-456-7890</p>
        <p>&copy; 2025 IronRhino. Tutti i diritti riservati.</p>
      </footer>
    </>
  )
}

export default App