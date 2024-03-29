import { useEffect, useRef, useState } from "react";
import { HERO_IMAGES } from "../../assets/constants/images";
import { GoDotFill } from "react-icons/go";
import { cn } from "../../utils/cn";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
//import nodejs

const CrousalImages = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const crousalImagesRef = useRef<HTMLDivElement>(null);
  const interval = useRef<NodeJS.Timeout>();

  // slide images
  useEffect(() => {
    const slideImages = () => {
      const landingBackgroundImages =
        crousalImagesRef.current?.querySelectorAll(
          "img"
        ) as NodeListOf<HTMLImageElement>;
      landingBackgroundImages.forEach((image) => {
        image.style.transform = `translateX(-${slideIndex * 100}%)`;
      });

      // clear the interval and set it again
      clearInterval(interval.current as NodeJS.Timeout);
      interval.current = setInterval(() => {
        setSlideIndex((prev) =>
          prev === HERO_IMAGES.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    };
    slideImages();
  }, [slideIndex]);

  return (
    <>
      {/* crousal images  */}
      <div
        ref={crousalImagesRef}
        className="absolute top-0 left-0 w-full h-full overflow-x-hidden"
      >
        {HERO_IMAGES.map((img, i) => (
          <img
            loading="lazy"
            key={i}
            style={{ left: `${i * 100}%` }}
            src={img}
            className="w-full h-full object-cover object-center absolute z-0 "
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50 h-full w-screen" />
      </div>

      {/* crousal buttons */}
      <div className="absolute right-4 flex-col justify-center items-center z-30 hidden sm:flex gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button
            name="crousal-button"
            aria-label="crousal-button"
            key={i}
            onClick={() => {
              setSlideIndex(i);
            }}
            className={cn(
              "cursor-pointer z-20 animate-fade",
              i === slideIndex ? "text-primary" : "text-white"
            )}
          >
            <GoDotFill className="h-4 w-4" />
          </button>
        ))}
        <button
          name="crousal-button"
          aria-label="crousal-button"
          disabled={slideIndex === 0}
          onClick={() => setSlideIndex((prev) => prev - 1)}
          className={cn(
            "z-20 animate-fade",
            slideIndex === 0
              ? "text-white cursor-default"
              : "text-primary cursor-pointer"
          )}
        >
          <IoIosArrowUp className="h-4 w-4" />
        </button>
        <button
          name="crousal-button"
          aria-label="crousal-button"
          disabled={slideIndex === HERO_IMAGES.length - 1}
          onClick={() => setSlideIndex((prev) => prev + 1)}
          className={cn(
            "z-20 animate-fade",
            slideIndex === HERO_IMAGES.length - 1
              ? "text-white cursor-default"
              : "text-primary cursor-pointer"
          )}
        >
          <IoIosArrowDown className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};
export default CrousalImages;
