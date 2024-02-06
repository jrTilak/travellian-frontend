import TRIPS from "../../assets/constants/trip";
import SuperBtn from "../shared/buttons/super-btn";
import TripBox from "./trip-box";

const TripPlanners = () => {
  return (
    <section className="flex gap-12 mt-28 p-8 items-center">
      <div className="flex flex-col gap-6 min-w-[394px] w-[394px]">
        <div className="flex flex-col gap-5">
          <h2 className="font-playfair text-[64px]">Trip Planners</h2>
          <span className="w-52 h-0.5 bg-primary" />
        </div>
        <p className="text-2xl mt-4">
          20 years from now you will be more disappointed by the things that you
          didn't do. Stop regretting and start travelling, start throwing off
          the bowlines.
        </p>
        <SuperBtn>View all trip plans</SuperBtn>
      </div>
      <div className="flex gap-6 overflow-hidden h-full items-end">
        {TRIPS.map((trip, index) => (
          <TripBox {...trip} key={index} showDetails={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};
export default TripPlanners;
