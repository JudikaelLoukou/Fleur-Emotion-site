import "../styles/accueil.css";

export default function SectionHistoire() {
  return (
    <section className="histoire-section">
      <div className="histoire-contenu">
        {/* Image */}
        <div className="histoire-image anim-scroll">
          <img
            src="/images/histoire-fleurs.png"
            alt="Notre univers floral"
          />
        </div>

        {/* Texte */}
        <div className="histoire-texte anim-scroll">
          <span className="histoire-surtitre">
            Notre histoire
          </span>

          <h2>
            Une passion florale <br />
            née de la nature
          </h2>

          <p>
            Depuis nos débuts, nous croyons que chaque fleur
            porte une émotion unique. Nos créations sont
            imaginées avec amour, en respectant le rythme
            des saisons et la beauté naturelle de chaque tige.
          </p>

          <p>
            Plus qu’un fleuriste, nous racontons des histoires
            à travers des bouquets pensés pour accompagner
            vos moments les plus précieux.
          </p>

          <button className="bouton-principal">
            Découvrir notre univers
          </button>
        </div>
      </div>
    </section>
  );
}
