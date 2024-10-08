import Footer from "./components/Footer/Footer";
import Galerie from "./components/Galerie/Galerie";
import Header from "./components/Header/Header";
import Reservation from "./components/Reservation/Reservation";
import VillaInfos from "./components/VillaInfos/VillaInfos";

export default function Home() {
  return (
    <div>
      <Header />
      <Galerie />
      <VillaInfos
        surface={120}
        bathrooms={3}
        bedrooms={6}
        hasKitchen={true}
        hasPool={true}
        hasCinema={true}
      />
      <Reservation />
      <Footer />
    </div>
  );
}
