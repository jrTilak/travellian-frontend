import Button from "../shared/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Destination from "./inputs/destination";
import Person from "./inputs/person";
import Date from "./inputs/date";
import { useEffect, useState } from "react";
import { getDate } from "../../utils/date";

type formData = {
  destination: string;
  person: number;
  checkIn: string;
  checkOut: string;
};

const Content = () => {
  const [formData, setFormData] = useState<formData>({
    destination: "",
    person: 0,
    checkIn: getDate(),
    checkOut: getDate(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // Check if checkIn date is greater than checkOut date to avoid invalid date
  useEffect(() => {
    if (formData.checkIn > formData.checkOut) {
      setFormData((prev) => ({ ...prev, checkOut: formData.checkIn }));
    }
  }, [formData.checkIn, formData.checkOut]);

  return (
    <div className="z-20 text-secondary-white w-full h-full flex flex-col justify-center gap-16 lg:gap-12 mt-40 lg:mt-72">
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
      <form
        className="flex flex-col sm:flex-row w-[80%] m-auto mb-24 sm:m-0 sm:mb-24 md:h-40 2xl:h-44"
        onSubmit={handleSubmit}
      >
        <div className="bg-secondary-white text-muted text-sm sm:text-base grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center p-5 gap-6 rounded-t-2xl sm:rounded-tr-none sm:rounded-tl-none">
          <Destination
            name="destination"
            placeholder="Dubai"
            onChange={handleChange}
            value={formData.destination}
          />
          <Person name="person" placeholder="2" onChange={handleChange} />
          <Date
            name="checkIn"
            min={getDate()}
            value={formData.checkIn}
            onChange={handleChange}
          />
          <Date
            name="checkOut"
            value={formData.checkOut}
            min={formData.checkIn}
            onChange={handleChange}
          />
        </div>
        <Button
          name="book-now"
          aria-label="book-now"
          type="submit"
          variant="primary"
          className="flex font-normal gap-2 h-full w-full sm:w-40 items-center justify-center rounded-none rounded-b-2xl sm:rounded-bl-none sm:rounded-r-2xl font-playfair py-8 md:px-6"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-light font-playfair">
            Book <br className="hidden sm:block" />
            Now
          </span>
          <IoIosArrowRoundForward className="text-3xl lg:text-4xl" />
        </Button>
      </form>
    </div>
  );
};
export default Content;
