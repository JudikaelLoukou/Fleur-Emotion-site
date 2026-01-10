import useScrollReveal from "../hooks/useScrollReveal";

export default function SectionBouquets() {
  const [ref, visible] = useScrollReveal();

  const bouquets = [
    {
      titre: "Bouquets Romantiques",
      texte: "Des fleurs délicates pour exprimer l’amour et la tendresse.",
      image: "/images/1.png",
    },
    {
      titre: "Fleurs de Saison",
      texte: "Des compositions inspirées par la nature et le moment présent.",
      image: "/images/2.png",
    },
    {
      titre: "Créations Sur-Mesure",
      texte: "Chaque bouquet est imaginé pour raconter une histoire unique.",
      image: "/images/3.png",
    },
  ];

  return (
    <section className="bouquets" ref={ref}>
      <div className="bouquets-entete">
        <h2 className={visible ? "visible" : ""}>
          Nos créations florales
        </h2>
        <p className={visible ? "visible" : ""}>
          Laissez-vous guider par la beauté naturelle de nos fleurs.
        </p>
      </div>

      <div className="bouquets-grille">
        {bouquets.map((b, index) => (
          <div
            key={index}
            className={`bouquet-carte ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div
              className="bouquet-image"
              style={{ backgroundImage: `url(${b.image})` }}
            ></div>

            <div className="bouquet-texte">
              <h3>{b.titre}</h3>
              <p>{b.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
