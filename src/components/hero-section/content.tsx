import Button from "../shared/buttons/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Destination from "./inputs/destination";
import Person from "./inputs/person";
import Date from "./inputs/date";
const Content = () => {
  return (
    <div className="z-20 text-secondary-white w-full h-full flex flex-col justify-center gap-16 lg:gap-20 mt-28">
      <div className="mx-auto xs:mx-4 sm:mx-8 ld:mx-12">
        <h1 className="font-playfair text-3xl xs:text-4xl lg:text-6xl">
          Start your <br className="xs:hidden" />
          unforgettable
          <br />
          journey with us.
        </h1>
        <h2 className="font-rubik text-xs xs:text-base lg:text-lg mt-4">
          The best travel for your jouney begins now
        </h2>
      </div>
      <form className="flex flex-col sm:flex-row w-[80%] m-auto mb-24 sm:m-0 sm:mb-24 md:h-40 lg:h-52">
        <div className="bg-secondary-white text-muted text-xs sm:text-base grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center p-5 gap-6 rounded-t-2xl sm:rounded-tr-none sm:rounded-tl-none">
          <Destination name="destination" placeholder="Dubai" />
          <Person name="person" placeholder="2" />
          <Date name="check in" placeholder="12/12/2022" />
          <Date name="check out" placeholder="12/12/2022" />
        </div>
        <Button
          type="submit"
          onClick={(e) => e.preventDefault()}
          variant="primary"
          className="flex font-normal gap-2 h-full w-full sm:w-40 items-center justify-center rounded-none rounded-b-2xl sm:rounded-bl-none sm:rounded-r-2xl font-playfair py-8 md:px-6"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-light font-playfair">
            Book <br className="hidden sm:block" />
            Now
          </span>
          <IoIosArrowRoundForward className="h-7 md:h-12 w-max" />
        </Button>
      </form>
    </div>
  );
};
export default Content;
