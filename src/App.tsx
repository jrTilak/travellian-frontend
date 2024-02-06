import Destinations from "./components/destinations/destinations";
import HeroSection from "./components/hero-section/hero-section";
import SpecialOffers from "./components/special-offer/special-offers";

const App = () => {
  return (
    <main className="w-svw h-max">
      <HeroSection />
      <Destinations />
      <SpecialOffers />
    </main>
  );
};
export default App;
