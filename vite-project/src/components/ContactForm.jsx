function ContactForm() {
  return (
    <form className="contact-form">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Vul email" required />

      <label htmlFor="mobile">Mobile</label>
      <input type="tel" id="mobile" placeholder="Vul nummer" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" rows="5" placeholder="Bericht" required />

      <button type="submit" className="contact-button">
        Versturen <span className="arrow">›</span>
      </button>
    </form>
  );
}

export default ContactForm;
