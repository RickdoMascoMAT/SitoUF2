export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonial</h2>
      <div className="testimonials-container">
        <div className="testimonials-scroll">
          {/* ...duplicated testimonial cards... */}
          <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
            <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>{"Questa palestra ha cambiato la mia vita! Personale fantastico e risultati incredibili."}</p>
            <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Maria R.</p>
          </div>
          <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
            <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>{"L'allenamento personalizzato mi ha aiutato a raggiungere i miei obiettivi in modo sicuro e efficace."}</p>
            <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Luca T.</p>
          </div>
          <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '15px', width: '280px', flexShrink: 0}}>
            <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem'}}>{"Consigli nutrizionali eccellenti. Raccomando a tutti!"}</p>
            <p style={{fontSize: '1rem', fontWeight: '600', color: '#2980b9'}}>- Sofia M.</p>
          </div>
          {/* ...more cards duplicated for scroll effect... */}
        </div>
      </div>
    </section>
  )
}

