import TESTIMONIALS from "../../assets/constants/testimonials";
import Ratings from "../shared/ratings";

type Props = (typeof TESTIMONIALS)[number];
const Testimonial = ({ img, name, rating, review, title }: Props) => {
  return (
    <div className="relative flex items-end mt-14 text-muted min-w-full sm:min-w-[562px]">
      <div className="w-full min-w-full sm:w-[562px] sm:min-w-[562px] relative sm:h-[300px] bg-[#F5F6F7] rounded-2xl p-6 flex flex-col gap-3">
        <img
          src={img}
          alt=""
          className="w-24 h-24 rounded-full -top-[50px] left-12 absolute"
        />
        <p className="mt-14 flex-grow text-sm sm:text-base">{review}</p>
        <Ratings rating={rating} />
        <h3 className="text-lg sm:text-xl flex flex-col gap-2">
          <span className="font-playfair">{name}</span>
          <span className="font-playfair">{title}</span>
        </h3>
      </div>
    </div>
  );
};
export default Testimonial;
