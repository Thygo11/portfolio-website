import "../App.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact</h1>

      <form className="contact-form">
        <label>Naam</label>
        <input type="text" placeholder="Voer je naam in" required />

        <label>Email</label>
        <input type="email" placeholder="Voer je email in" required />

        <label>Bericht</label>
        <textarea rows="5" placeholder="Typ je bericht..." required></textarea>

        <button className="contact-button">Verstuur <span className="arrow">→</span></button>
      </form>
    </div>
  );
}
