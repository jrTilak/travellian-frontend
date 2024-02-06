import Blogs from "./components/blog/blog";
import Destinations from "./components/destinations/destinations";
import Footer from "./components/footer/footer";
import Newsletter from "./components/footer/newsletter";
import Gallery from "./components/gallery/gallery";
import HeroSection from "./components/hero-section/hero-section";
import SpecialOffers from "./components/special-offer/special-offers";
import Testimonials from "./components/testimonal/testimonials";
import TripPlanners from "./components/trip-planners/trip-planners";

const App = () => {
  return (
    <main className="w-svw h-max" id="home">
      <HeroSection />
      <Destinations />
      <SpecialOffers />
      <Blogs />
      <TripPlanners />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};
export default App;
