import Button from "../shared/buttons/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImgCard from "./img-card";
import { useRef } from "react";
import SPECIAL_OFFERS from "../../assets/constants/offers";
const SpecialOffers = () => {
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
    <section id="travel" className="p-8 mt-18">
      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-[64px] self-end">Special Offer</h2>
        <span className="w-60 h-0.5 bg-primary self-end" />
      </div>
      <div className="flex items-center flex-row-reverse justify-between">
        <p className="text-2xl">Check out our special offer and discounts</p>
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
        {SPECIAL_OFFERS.map((offer, index) => (
          <ImgCard key={index} {...offer} />
        ))}
      </div>
    </section>
  );
};
export default SpecialOffers;
