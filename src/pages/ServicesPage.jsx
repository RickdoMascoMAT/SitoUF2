import Services from '../components/Services'
import personalTrainingImg from '../assets/personal-training-downscaled.png'
import nutritionImg from '../assets/nutrition-downscaled.png'

export default function ServicesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>I Nostri Servizi</h1>
        <p>Scopri come possiamo aiutarti a raggiungere i tuoi obiettivi</p>
      </div>
      <Services personalTrainingImg={personalTrainingImg} nutritionImg={nutritionImg} />
    </div>
  )
}

