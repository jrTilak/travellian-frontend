import TRIPS from "../../assets/constants/trip";
import { cn } from "../../utils/cn";
import Ratings from "../shared/ratings";

type TripBoxProps = (typeof TRIPS)[number] & {
  showDetails: boolean;
};

const TripBox = ({
  duration,
  image,
  name,
  price,
  ratings,
  type,
  showDetails,
}: TripBoxProps) => {
  return (
    <div className="flex flex-col gap-3 font-rubik">
      <img
        src={image}
        alt=""
        className="w-[300px] h-[399px] min-w-[300px] aspect-[3/4] object-cover object-center rounded-3xl"
      />
      <div
        className={cn(
          "flex flex-col gap-2 px-3",
          showDetails ? "flex" : "hidden"
        )}
      >
        <h3 className="flex justify-between text-lg">
          <span className="uppercase">{type}</span>
          <span>€{price}</span>
        </h3>
        <h2 className="text-3xl font-semibold font-playfair">{name}</h2>
        <div className="flex justify-between">
          <Ratings rating={ratings} />
          <span>{duration} tour</span>
        </div>
      </div>
    </div>
  );
};
export default TripBox;