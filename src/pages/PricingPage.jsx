import { useState } from 'react'
import Signup from '../components/Signup'

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

