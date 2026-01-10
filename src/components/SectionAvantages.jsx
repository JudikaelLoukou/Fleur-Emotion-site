import useScrollReveal from "../hooks/useScrollReveal";

export default function SectionAvantages() {
  const [ref, visible] = useScrollReveal();

  const valeurs = [
    "Fleurs fraîches chaque jour",
    "Créations artisanales",
    "Respect de la saisonnalité",
    "Compositions sur-mesure",
    "Livraison soignée",
    "Émotions florales",
    "Émotions florales",
    "Émotions florales",
  ];

  return (
    <section className="avantages-fleurs" ref={ref}>
      <p className={`avantages-intro ${visible ? "visible" : ""}`}>
        Chaque bouquet est pensé comme une émotion à offrir,
        en harmonie avec la nature et le rythme des saisons.
      </p>

      <div className="avantages-fleurs-liste">
        {valeurs.map((texte, index) => (
          <div
            key={index}
            className={`avantage-fleur ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.7}s` }}
          >
            <span className="petale"></span>
            <span>{texte}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
