import TESTIMONIALS from "../../assets/constants/testimonials";
import Ratings from "../shared/ratings";

type Props = (typeof TESTIMONIALS)[number];
const Testimonial = ({ img, name, rating, review, title }: Props) => {
  return (
    <div className="relative flex items-end h-[400px]">
      <div className="w-[562px] min-w-[562px] relative h-[300px] bg-[#F5F6F7] rounded-2xl p-6 flex flex-col gap-3">
        <img
          src={img}
          alt=""
          className="w-[100px] h-[100px] rounded-full -top-[50px] left-12 absolute"
        />
        <p className="mt-[60px] flex-grow">{review}</p>
        <Ratings rating={rating} />
        <h3 className="font-playfair text-xl flex flex-col gap-2">
          <span>{name}</span>
          <span>{title}</span>
        </h3>
      </div>
    </div>
  );
};
export default Testimonial;
