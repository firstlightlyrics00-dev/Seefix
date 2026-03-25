import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact-page">
        <h1>Contact</h1>
        <div className="contact-page__main">
          <ContactForm />
          <div className="contact-page__info">
            <p>+ (509) 3215-0000</p>
            <p>tizestreaming@gmail.com</p>
            <p>rue Metellus, Pétion-Ville #30</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
