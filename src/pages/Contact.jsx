import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay"></div>
        <div className="contact-hero-contenu">
          <h1>Contactez-nous</h1>
          <p>
            Une question, une commande spéciale ?
            Écrivez-nous, nous vous répondrons avec plaisir.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="contact-section">
        <div className="contact-grille">

          {/* INFOS */}
          <div className="contact-infos anim-scroll">
            <h2>Nos coordonnées</h2>
            <p>📍 Abidjan, Côte d’Ivoire</p>
            <p>📞 +225 00 00 00 00</p>
            <p>✉️ contact@fleur-emotion.com</p>

            <p className="contact-note">
              Nous sommes disponibles du lundi au samedi,
              de 8h à 18h.
            </p>
          </div>

          {/* FORMULAIRE */}
          <form className="contact-form anim-scroll">
            <h2>Envoyez-nous un message</h2>

            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <textarea placeholder="Votre message"></textarea>

            <button type="submit">
              Envoyer le message
            </button>
          </form>

        </div>
      </section>
    </>
  );
}
