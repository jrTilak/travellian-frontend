import { IoIosStar } from "react-icons/io";

const Ratings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <IoIosStar key={index} className="text-yellow h-6 w-6 " />
      ))}
    </div>
  );
};

export default Ratings;
