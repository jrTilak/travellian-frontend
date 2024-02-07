import Button from "../shared/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import TESTIMONIALS from "../../assets/constants/testimonials";
import Testimonial from "./testimonial";

const Testimonials = () => {
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
    <section id="explore" className="p-8 lg:mb-28">
      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-[40px] leading-[53.2px] sm:text-[54px]  md:text-6xl lg:text-7xl">
          Traveler's Experiences
        </h2>
        <span className="w-80 h-0.5 bg-primary" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-lg lg:text-2xl text-muted mt-4">
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
      </div>
      <div
        ref={destinationsImgContainerRef}
        className="flex gap-5 overflow-x-scroll my-8 md:my-12"
      >
        {TESTIMONIALS.map((review, index) => (
          <Testimonial key={index} {...review} />
        ))}
      </div>
      <div className="flex gap-8 mt-16 justify-end">
        <Button
          onClick={() => handleSlide("left")}
          variant="secondary"
          className="p-3 px-4"
        >
          <IoIosArrowBack className="text-xl lg:text-2xl" />
        </Button>
        <Button
          onClick={() => handleSlide("right")}
          variant="primary"
          className="p-3 px-4"
        >
          <IoIosArrowForward className="text-xl lg:text-2xl" />
        </Button>
      </div>
    </section>
  );
};
export default Testimonials;
