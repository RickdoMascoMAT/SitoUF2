import { useState } from 'react'
import Signup from '../components/Signup'
import { FaGift, FaCheckCircle } from 'react-icons/fa'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('base');
  const [selectedDuration, setSelectedDuration] = useState('1');

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
    <div className="page-container">
      <div className="page-header">
        <h1>Abbonamenti e Prezzi</h1>
        <p>Scegli il piano perfetto per te</p>
      </div>

      {/* Sezione Prova Gratuita */}
      <section className="free-trial-section">
        <div className="free-trial-container">
          <div className="free-trial-icon">
            <FaGift />
          </div>
          <h2>Prova Gratuita di 7 Giorni!</h2>
          <p className="free-trial-subtitle">
            Scopri IronRhino senza impegno. Accesso completo a tutti i servizi per 7 giorni.
          </p>
          <div className="free-trial-benefits">
            <div className="benefit">
              <FaCheckCircle /> <span>Accesso illimitato alla palestra</span>
            </div>
            <div className="benefit">
              <FaCheckCircle /> <span>1 sessione di Personal Training inclusa</span>
            </div>
            <div className="benefit">
              <FaCheckCircle /> <span>Consulenza nutrizionale gratuita</span>
            </div>
            <div className="benefit">
              <FaCheckCircle /> <span>Nessuna carta di credito richiesta</span>
            </div>
            <div className="benefit">
              <FaCheckCircle /> <span>Disdici quando vuoi, senza vincoli</span>
            </div>
          </div>
          <p className="free-trial-note">
            💡 <strong>Come funziona:</strong> Compila il modulo qui sotto selezionando il piano che preferisci
            e <strong>spunta il checkbox "Prova Gratuita"</strong>. Il campo note verrà automaticamente compilato
            con la tua richiesta. Ti contatteremo entro 24 ore per confermare e iniziare subito!
          </p>
        </div>
      </section>

      <Signup
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        discountedPrice={discountedPrice}
        basePrice={basePrice}
      />
    </div>
  )
}

