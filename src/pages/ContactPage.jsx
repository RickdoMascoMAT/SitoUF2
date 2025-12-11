import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve essere di almeno 10 caratteri';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contattaci</h1>
        <p>Siamo qui per rispondere a tutte le tue domande</p>
      </div>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Informazioni di Contatto</h2>
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@ironrhino.it</p>
          </div>
          <div className="info-item">
            <h3>📱 Telefono</h3>
            <p>+39 123 456 7890</p>
          </div>
          <div className="info-item">
            <h3>📍 Indirizzo</h3>
            <p>Via Esempio 123<br/>00100 Roma, Italia</p>
          </div>
          <div className="info-item">
            <h3>🕐 Orari</h3>
            <p>Lun-Ven: 6:00 - 22:00<br/>Sab-Dom: 8:00 - 20:00</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Inviaci un Messaggio</h2>
          {submitSuccess && (
            <div className="success-message">
              ✓ Grazie {formData.name}! Il tuo messaggio è stato inviato con successo.
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
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
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
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
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-field">
              <input
                type="tel"
                name="phone"
                placeholder="Telefono (opzionale)"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Numero di telefono"
              />
            </div>

            <div className="form-field">
              <textarea
                name="message"
                placeholder="Messaggio"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                disabled={isSubmitting}
                aria-label="Messaggio"
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

