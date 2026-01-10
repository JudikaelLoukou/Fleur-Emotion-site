import "../styles/accueil.css";

export default function SectionHero() {
  return (
    <section className="hero-fond">
      {/* Overlay léger */}
      <div className="hero-overlay"></div>

      {/* Contenu */}
      <div className="hero-contenu">
        <span className="hero-surtitre anim-surtitre">
          Fleurir chaque instant
        </span>

        <h1 className="anim-titre">
          Des bouquets élégants <br />
          pour toutes vos émotions
        </h1>

        <p className="anim-texte">
          Découvrez des compositions florales uniques, pensées pour sublimer
          vos moments précieux avec douceur, fraîcheur et raffinement.
        </p>

        <button className="bouton-principal anim-bouton">
          DÉCOUVRIR NOS BOUQUETS
        </button>
      </div>
    </section>
  );
}
