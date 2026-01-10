import "../styles/accueil.css";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-contenu">
        <span className="hero-surtitre anim-1">
          Fleuriste artisanal
        </span>

        <h1 className="anim-2">
          Des fleurs qui <br />
          parlent au cœur
        </h1>

        <p className="anim-3">
          Découvrez des bouquets élégants, inspirés par la nature
          et créés pour accompagner vos plus beaux moments.
        </p>

        <div className="hero-actions anim-4">
          <button className="hero-bouton-principal">
            Découvrir les bouquets
          </button>
          <button className="hero-bouton-secondaire">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
