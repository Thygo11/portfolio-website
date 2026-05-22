import "../App.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact</h1>

      <form className="contact-form">
        <label htmlFor="naam">Naam</label>
        <input type="text" id="naam" name="naam" placeholder="Voer je naam in" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Voer je email in" required />

        <label htmlFor="bericht">Bericht</label>
        <textarea id="bericht" name="bericht" rows="5" placeholder="Typ je bericht..." required></textarea>

        <button type="submit" className="contact-button">Verstuur <span className="arrow">→</span></button>
      </form>
    </div>
  );
}
