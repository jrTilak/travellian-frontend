import Button from "../shared/buttons/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import GALLERY_IMAGES from "../../assets/constants/gallery";
import { cn } from "../../utils/cn";
const Destinations = () => {
  const galleryImgContainerRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (galleryImgContainerRef.current) {
      const container = galleryImgContainerRef.current;
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
        <h2 className="font-playfair text-[64px]">Destination Gallery</h2>
        <span className="w-80 h-0.5 bg-primary" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">Our photo gallery on trip</p>
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
        ref={galleryImgContainerRef}
        className="flex gap-8 overflow-x-hidden mt-28 scroll-smooth snap-mandatory snap-x"
      >
        {GALLERY_IMAGES.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            className={cn(
              "w-[320px] min-w-[320px] h-[469px] object-cover object-center rounded-3xl",
              index === 1 ? "" : "mt-16"
            )}
          />
        ))}
      </div>
    </section>
  );
};
export default Destinations;
