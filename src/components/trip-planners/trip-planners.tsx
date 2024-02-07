import TRIPS from "../../assets/constants/trip";
import SuperBtn from "../shared/super-btn";
import TripBox from "./trip-box";

const TripPlanners = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:items-center sm:py-16 px-4 sm:px-5 xl:px-8">
      <div className="flex flex-col gap-6 sm:min-w-[394px] sm:w-[394px] w-max">
        <div className="flex flex-col gap-5 w-max">
          <h2 className="font-playfair text-[40px] leading-[53.2px] sm:text-[54px]  md:text-6xl lg:text-7xl inline w-max">
            Trip Planners
          </h2>
          <span className="h-0.5 bg-primary w-[231px]" />
        </div>
        <p className="text-sm sm:text-lg lg:text-2xl text-muted max-w-[90vw]">
          20 years from now you will be more disappointed by the things that you
          didn't do. Stop regretting and start travelling, start throwing off
          the bowlines.
        </p>
        <SuperBtn>View all trip plans</SuperBtn>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 md:gap-6 overflow-scroll h-full items-end">
        {TRIPS.map((trip, index) => (
          <TripBox {...trip} key={index} showDetails={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};
export default TripPlanners;
