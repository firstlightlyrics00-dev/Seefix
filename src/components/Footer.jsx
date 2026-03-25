import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">Seeflix</div>
      <p>© {new Date().getFullYear()} Seeflix. All rights reserved.</p>
      <nav className="footer__nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/media">Media</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </footer>
  );
}
