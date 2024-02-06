import { ImLocation2 } from "react-icons/im";
import DESTINATIONS from "../../assets/constants/destinations";
type ImgCardProps = (typeof DESTINATIONS)[number];

const ImgCard = ({ title, img, location }: ImgCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="aspect-[3/4] w-[497px] h-[661px] bg-cover bg-center rounded-xl flex flex-col p-6 text-secondary-white justify-end"
    >
      <h2 className="text-3xl font-playfair">{title}</h2>
      <span className="flex gap-3 items-center">
        <ImLocation2 className="text-xl" />
        <p className="text-xl">{location}</p>
      </span>
    </div>
  );
};
export default ImgCard;
