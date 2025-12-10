export default function Signup({ selectedPlan, setSelectedPlan, selectedDuration, setSelectedDuration, discountedPrice, basePrice }) {
  return (
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
  )
}

