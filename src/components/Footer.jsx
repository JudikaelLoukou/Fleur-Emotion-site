import "../styles/accueil.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenu">

        {/* COL 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">Fleur & Émotion</h3>
          <p>
            Des créations florales pensées pour sublimer
            chaque moment important de votre vie.
          </p>
        </div>

        {/* COL 2 */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>Accueil</li>
            <li>Bouquets</li>
            <li>Notre histoire</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COL 3 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p> Abidjan, Côte d’Ivoire</p>
          <p>+225 07 02 38 93</p>
          <p>judikaelloukou@gmail.com</p>
        </div>

        {/* COL 4 */}
        <div className="footer-col">
          <h4>Suivez-nous</h4>
          <div className="footer-reseaux">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Tiktok</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Fleur & Émotion — LOUKOU Judikael
      </div>
    </footer>
  );
}
