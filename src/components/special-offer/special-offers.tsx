import ImgCard from "./img-card";
import { useRef } from "react";
import SPECIAL_OFFERS from "../../assets/constants/offers";
import SectionWrapper from "../shared/section-wrapper";
const SpecialOffers = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper
      id="travel"
      childRef={ref}
      desc="Check out our special offer and discounts"
      title="Special Offer"
      dir="reverse"
      underlineClassName="w-[241px]"
    >
      <div
        ref={ref}
        className="flex gap-8 overflow-x-scroll my-8 md:my-12 snap-mandatory snap-x"
      >
        {SPECIAL_OFFERS.map((offer, index) => (
          <ImgCard key={index} {...offer} />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default SpecialOffers;
