import SPECIAL_OFFERS from "../../assets/constants/offers";
import Button from "../shared/button";
import Ratings from "../shared/ratings";

type ImgCardProps = (typeof SPECIAL_OFFERS)[number];

const ImgCard = ({ desc, img, location, price, rating }: ImgCardProps) => {
  return (
    <div className="min-w-full sm:min-w-96 sm:w-96 h-fit bg-secondary-yellow rounded-2xl">
      <img
        src={img}
        alt=""
        className="h-52 md:h-60 w-full object-cover object-center rounded-t-2xl"
      />
      <div className="p-6 flex gap-3 md:gap-4 items-start flex-col m-auto h-max">
        <div className="flex gap-1 md:gap-2 flex-col">
          <h2 className="text-2xl md:text-3xl font-extralight font-mulish text-muted">
            {location}
          </h2>
          <Ratings rating={rating} />
        </div>
        <p className="text-base">{desc}</p>
        <div className="flex justify-between items-center w-full">
          <p className="flex gap-4 items-center justify-center">
            <span className="text-sm md:text-base text-muted">From</span>
            <span className="text-2xl md:text-3xl text-primary">€{price}</span>
          </p>
          <Button
            variant="primary"
            className="text-sm md:text-base px-6 py-3 rounded-lg md:rounded-xl"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ImgCard;
