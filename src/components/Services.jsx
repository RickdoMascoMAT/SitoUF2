export default function Services({ personalTrainingImg, nutritionImg }) {
  return (
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
  )
}

