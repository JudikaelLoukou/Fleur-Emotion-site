import "../styles/accueil.css";

export default function SectionCTA() {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>

      <div className="cta-contenu anim-scroll">
        <span className="cta-surtitre">
          Un bouquet, une émotion
        </span>

        <h2>
          Prêt à offrir un moment <br />
          inoubliable ?
        </h2>

        <p>
          Commandez dès maintenant un bouquet pensé avec
          soin ou contactez-nous pour une création sur mesure.
        </p>

        <div className="cta-boutons">
          <button className="cta-bouton-principal">
            Commander
          </button>

          <button className="cta-bouton-secondaire">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
