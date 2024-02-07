import { useRef } from "react";
import GALLERY_IMAGES from "../../assets/constants/gallery";
import { cn } from "../../utils/cn";
import SectionWrapper from "../shared/section-wrapper";

const Gallery = () => {
  const galleryImgContainerRef = useRef<HTMLDivElement>(null);
  return (
    <SectionWrapper
      id="gallery"
      desc="Our photo gallery on trip"
      title="Destination Gallery"
      childRef={galleryImgContainerRef}
      dir="row"
      showBtn={true}
      underlineClassName="w-[283px]"
    >
      <div
        ref={galleryImgContainerRef}
        className="flex flex-col sm:flex-row gap-5 overflow-x-scroll my-8 md:my-12"
      >
        {GALLERY_IMAGES.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            className={cn(
              "w-full h-60   sm:w-[320px] sm:min-w-[320px] sm:h-[469px] object-cover object-center rounded-3xl",
              index === 1 ? "" : "sm:mt-16",
              index > 3 ? "hidden sm:block" : ""
            )}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Gallery;
