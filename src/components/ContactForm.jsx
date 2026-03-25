import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact-form__group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />
      </div>
      <div className="contact-form__group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="contact-form__group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Message" rows="5" required />
      </div>
      <button type="submit" className="contact-form__submit">
        Send message
      </button>
    </form>
  );
}
