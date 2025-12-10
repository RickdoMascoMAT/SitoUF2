export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Contattaci</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telefono" />
        <textarea placeholder="Messaggio" rows="4"></textarea>
        <button type="submit" className="btn">Invia</button>
      </form>
      <p>info@ironrhino.it | Tel: 123-456-7890</p>
      <p>&copy; 2025 IronRhino. Tutti i diritti riservati.</p>
    </footer>
  )
}

