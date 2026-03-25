import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const PlayIcon = () => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 64 64"
    fill="var(--color-accent)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 12L52 32L16 52V12Z" />
  </svg>
);

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-page">
        <h1>About us</h1>
        <div className="about-page__content">
          <div className="about-page__text">
            <h2>Our Mission</h2>
            <p>
              We are a next generation streaming platform built to bring your
              favorite movies, shows and live events together in one place.
            </p>
            <p>
              Our mission is to connect creators and audiences through
              high-quality, ad-free entertainment - anytime, anywhere.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>Quality Content</li>
              <li>Global Access</li>
              <li>Community &amp; Creativity</li>
            </ul>
          </div>
          <div className="about-page__icon">
            <PlayIcon />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
