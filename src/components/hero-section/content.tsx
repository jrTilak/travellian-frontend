import Button from "../shared/buttons/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Destination from "./inputs/destination";
import Person from "./inputs/person";
import Date from "./inputs/date";
const Content = () => {
  return (
    <div className="z-20 text-secondary-white w-full h-full flex flex-col justify-center gap-24">
      <div className="ml-12">
        <h1 className="font-playfair text-[84px] leading-[112px]">
          Start your unforgettable
          <br />
          journey with us.
        </h1>
        <h2 className="font-rubik text-xl">
          The best travel for your jouney begins now
        </h2>
      </div>
      <form className="h-52 flex">
        <div className="bg-secondary-white text-secondary-black flex items-center justify-center px-6 gap-8">
          <Destination name="destination" placeholder="Dubai" />
          <Person name="person" placeholder="2" />
          <Date name="check in" placeholder="12/12/2022" />
          <Date name="check out" placeholder="12/12/2022" />
        </div>
        <Button
          type="submit"
          onClick={(e) => e.preventDefault()}
          variant="primary"
          className="flex gap-2 h-full w-40 items-center justify-center rounded-l-none rounded-r-2xl font-playfair"
        >
          <span className="text-3xl font-light">
            Book
            <br />
            Now
          </span>
          <IoIosArrowRoundForward className="h-12 w-max" />
        </Button>
      </form>
    </div>
  );
};
export default Content;
