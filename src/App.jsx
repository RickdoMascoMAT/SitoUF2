import logo from './assets/erasebg-transformed-downscaled.png'
import personalTrainingImg from './assets/personal-training-downscaled.png'
import nutritionImg from './assets/nutrition-downscaled.png'
import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Signup from './components/Signup'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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
      <Header logo={logo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services personalTrainingImg={personalTrainingImg} nutritionImg={nutritionImg} />
      <Signup
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        discountedPrice={discountedPrice}
        basePrice={basePrice}
      />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App