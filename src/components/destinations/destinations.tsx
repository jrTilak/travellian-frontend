import Button from "../shared/buttons/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImgCard from "./img-card";
import DESTINATIONS from "../../assets/constants/destinations";
import { useRef } from "react";
const Destinations = () => {
  const destinationsImgContainerRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (destinationsImgContainerRef.current) {
      const container = destinationsImgContainerRef.current;
      const scrollAmount = document.documentElement.clientWidth / 2;
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="explore" className="p-8">
      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-[64px]">Popular Destinations</h2>
        <span className="w-80 h-0.5 bg-primary" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
        <div className="flex gap-8">
          <Button
            onClick={() => handleSlide("left")}
            variant="secondary"
            className="p-4 px-5"
          >
            <IoIosArrowBack className="text-2xl" />
          </Button>
          <Button
            onClick={() => handleSlide("right")}
            variant="primary"
            className="p-4 px-5"
          >
            <IoIosArrowForward className="text-2xl" />
          </Button>
        </div>
      </div>
      <div
        ref={destinationsImgContainerRef}
        className="flex gap-8 overflow-x-hidden mt-28 scroll-smooth snap-mandatory snap-x"
      >
        {DESTINATIONS.map((destination, index) => (
          <ImgCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
};
export default Destinations;
