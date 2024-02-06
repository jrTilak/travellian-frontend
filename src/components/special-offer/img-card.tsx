import { IoIosStar } from "react-icons/io";
import SPECIAL_OFFERS from "../../assets/constants/offers";
import Button from "../shared/buttons/button";

type ImgCardProps = (typeof SPECIAL_OFFERS)[number];

const ImgCard = ({ desc, img, location, price, rating }: ImgCardProps) => {
  return (
    <div className="w-[437.33px] h-[629px] bg-secondary-yellow aspect-[0.69/1] rounded-2xl">
      <img
        src={img}
        alt=""
        className="h-[45%] w-full object-cover object-center rounded-t-2xl"
      />
      <div className="p-6 flex gap-5 items-start flex-col m-auto">
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl font-extralight font-mulish">{location}</h2>
          <Ratings rating={rating} />
        </div>
        <p className="text-lg">{desc}</p>
        <div className="flex justify-between items-center w-full">
          <p className="flex gap-4 items-center justify-center">
            <span className="text-[20px]">From</span>
            <span className="text-4xl text-primary">€{price}</span>
          </p>
          <Button
            variant="primary"
            className="text-[20px] px-6 py-3 rounded-2xl"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ImgCard;

const Ratings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <IoIosStar key={index} className="text-yellow h-6 w-6 " />
      ))}
    </div>
  );
};
