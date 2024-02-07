import ImgCard from "./img-card";
import DESTINATIONS from "../../assets/constants/destinations";
import { useRef } from "react";
import SectionWrapper from "../shared/section-wrapper";

const Destinations = () => {
  const destinationsImgContainerRef = useRef<HTMLDivElement>(null);
  return (
    <SectionWrapper
      underlineClassName="w-full xs:w-[227px] md:w-[365px]"
      dir="row"
      childRef={destinationsImgContainerRef}
      title="Popular Destinations"
      id="explore"
      desc="Most popular destinations around the world, from historical places to natural wonders."
    >
      <div
        ref={destinationsImgContainerRef}
        className="flex gap-8 overflow-x-scroll my-8 md:my-12"
      >
        {DESTINATIONS.map((destination, index) => (
          <ImgCard key={index} {...destination} />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Destinations;
