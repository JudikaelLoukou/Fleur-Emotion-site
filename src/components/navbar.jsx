import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
      <div className="navbar-contenu">
        {/* LOGO */}
        <div className="navbar-logo">
          Fleur & Émotion
        </div>

        {/* LIENS */}
        <nav className={`navbar-liens ${menuOuvert ? "ouvert" : ""}`}>
          <Link to="/" onClick={() => setMenuOuvert(false)}>Accueil</Link>
          <Link to="/#bouquets" onClick={() => setMenuOuvert(false)}>Bouquets</Link>
          <Link to="/#histoire" onClick={() => setMenuOuvert(false)}>Notre histoire</Link>
          <Link to="/contact" className="lien-contact" onClick={() => setMenuOuvert(false)}>
            Contact
          </Link>
        </nav>

        {/* BURGER */}
        <div
          className={`burger ${menuOuvert ? "actif" : ""}`}
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
