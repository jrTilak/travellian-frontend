import { ImLocation2 } from "react-icons/im";
import DESTINATIONS from "../../assets/constants/destinations";
type ImgCardProps = (typeof DESTINATIONS)[number];

const ImgCard = ({ title, img, location }: ImgCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="min-w-full h-80 sm:h-[456px] md:aspect-[3/4] md:min-w-fit md:max-w-[497px] bg-cover bg-center rounded-xl flex flex-col p-6 text-secondary-white justify-end snap-start"
    >
      <h2 className="text-xl md:text-3xl font-playfair">{title}</h2>
      <span className="flex gap-3 items-center">
        <ImLocation2 className="text-base sm:text-xl" />
        <p className="text-base sm:text-xl">{location}</p>
      </span>
    </div>
  );
};
export default ImgCard;
