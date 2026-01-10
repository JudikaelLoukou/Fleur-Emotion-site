import SectionHero from "../components/SectionHero";
import SectionAvantages from "../components/SectionAvantages";
import SectionBouquets from "../components/SectionBouquets";
import SectionHistoire from "../components/SectionHistoire";
import SectionCTA from "../components/SectionCTA";
import SectionInspiration from "../components/SectionInspiration";
import Footer from "../components/Footer";

export default function Accueil() {
  return (
    <>
      <SectionHero />
      <SectionAvantages />
      <SectionBouquets />
      <SectionHistoire />
      <SectionCTA />
      <SectionInspiration />
      <Footer />
      
    </>
  );
}
