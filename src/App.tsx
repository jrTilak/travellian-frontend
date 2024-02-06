import Blogs from "./components/blog/blog";
import Destinations from "./components/destinations/destinations";
import HeroSection from "./components/hero-section/hero-section";
import SpecialOffers from "./components/special-offer/special-offers";
import TripPlanners from "./components/trip-planners/trip-planners";

const App = () => {
  return (
    <main className="w-svw h-max" id="home">
      <HeroSection />
      <Destinations />
      <SpecialOffers />
      <Blogs />
      <TripPlanners />
    </main>
  );
};
export default App;
