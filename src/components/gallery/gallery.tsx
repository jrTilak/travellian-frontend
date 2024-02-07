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
    >
      <div
        ref={galleryImgContainerRef}
        className="flex flex-col lg:flex-row gap-8 overflow-x-hidden mt-28 scroll-smooth snap-mandatory snap-x"
      >
        {GALLERY_IMAGES.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            className={cn(
              "w-full h-[351px] lg:w-[320px] lg:min-w-[320px] lg:h-[469px] object-cover object-center rounded-3xl",
              index === 1 ? "" : "mt-16"
            )}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Gallery;
