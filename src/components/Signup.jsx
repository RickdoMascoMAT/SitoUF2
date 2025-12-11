import { useState } from 'react'

export default function Signup({ selectedPlan, setSelectedPlan, selectedDuration, setSelectedDuration, discountedPrice, basePrice }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    promo: '',
    freeTrial: false,
    specialOffer: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Il telefono è obbligatorio';
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Numero di telefono non valido';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Rimuovi l'errore quando l'utente inizia a correggere
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simula invio al server
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form dopo successo
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', promo: '', notes: '', freeTrial: false });
      setSubmitSuccess(false);
    }, 3000);
  };

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
        {submitSuccess && (
          <div className="success-message">
            ✓ Grazie {formData.name}! Ti contatteremo presto al tuo indirizzo email.
          </div>
        )}
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
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              disabled={isSubmitting}
              aria-label="Nome completo"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span className="error-message" id="name-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={isSubmitting}
              aria-label="Indirizzo email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span className="error-message" id="email-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <input
              type="tel"
              name="phone"
              placeholder="Telefono"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
              disabled={isSubmitting}
              aria-label="Numero di telefono"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <span className="error-message" id="phone-error">{errors.phone}</span>}
          </div>

          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            disabled={isSubmitting}
            aria-label="Seleziona piano"
          >
            <option value="base">Piano Base</option>
            <option value="premium">Piano Premium</option>
            <option value="competizione">Piano Competizione</option>
          </select>

          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            disabled={isSubmitting}
            aria-label="Seleziona durata"
          >
            <option value="1">1 mese</option>
            <option value="3">3 mesi (sconto 10%)</option>
            <option value="6">6 mesi (sconto 20%)</option>
            <option value="12">12 mesi (sconto 30%)</option>
          </select>

          <input
            type="text"
            name="promo"
            placeholder="Codice Promo (opzionale)"
            value={formData.promo}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-label="Codice promozionale"
          />

          <label className="free-trial-checkbox">
            <input
              type="checkbox"
              name="freeTrial"
              checked={formData.freeTrial}
              onChange={(e) => {
                handleChange(e);
                // Se seleziona la prova gratuita, pre-compila il campo note
                if (e.target.checked && !formData.notes) {
                  setFormData(prev => ({
                    ...prev,
                    freeTrial: true,
                    notes: 'Vorrei attivare la Prova Gratuita di 7 giorni.'
                  }));
                } else if (!e.target.checked && formData.notes === 'Vorrei attivare la Prova Gratuita di 7 giorni.') {
                  setFormData(prev => ({
                    ...prev,
                    freeTrial: false,
                    notes: ''
                  }));
                }
              }}
              disabled={isSubmitting}
            />
            <span>Voglio attivare la <strong>Prova Gratuita di 7 giorni</strong></span>
          </label>

          <div className="form-field">
            <textarea
              name="notes"
              placeholder="Note o richieste particolari (opzionale)"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-label="Note o richieste"
              className="notes-textarea"
            />
          </div>

          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Invio in corso...' : 'Iscriviti'}
          </button>
        </form>
      </div>
    </section>
  )
}

