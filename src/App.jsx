import logo from './assets/erasebg-transformed-downscaled.png'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MobilePageNav from './components/MobilePageNav'

// Pages
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import MediaPage from './pages/MediaPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename="/SitoUF2">
      <Header logo={logo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<ServicesPage />} />
        <Route path="/abbonamenti" element={<PricingPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/social" element={<MediaPage />} />
        <Route path="/contatti" element={<ContactPage />} />
      </Routes>
      <MobilePageNav />
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
