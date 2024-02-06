import Blogs from "./components/blog/blog";
import Destinations from "./components/destinations/destinations";
import HeroSection from "./components/hero-section/hero-section";
import SpecialOffers from "./components/special-offer/special-offers";

const App = () => {
  return (
    <main className="w-svw h-max" id="home">
      <HeroSection />
      <Destinations />
      <SpecialOffers />
      <Blogs />
    </main>
  );
};
export default App;
