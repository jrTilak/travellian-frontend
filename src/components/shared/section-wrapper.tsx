import { cn } from "../../utils/cn";
import Button from "../shared/buttons/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type SectionWrapperProps = {
  children: React.ReactNode;
  childRef?: React.RefObject<HTMLDivElement>;
  showBtn?: boolean;
  title: string;
  desc: string;
  id: string;
  dir: "row" | "reverse";
};

const SectionWrapper = (props: SectionWrapperProps) => {
  const {
    childRef,
    title,
    id,
    desc,
    dir = "row",
    children,
    showBtn = true,
  } = props;
  const handleSlide = (direction: "left" | "right") => {
    if (childRef?.current) {
      const container = childRef.current;
      const scrollAmount = document.documentElement.clientWidth / (3 / 2);
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id={id} className="px-8 my-24">
      <div
        className={cn(
          "flex items-end w-full justify-between",
          dir === "row" ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <span className="w-80 h-0.5 bg-primary" />
          <p className="text-2xl text-muted">{desc}</p>
        </div>
        {showBtn && (
          <div className="gap-8 hidden lg:flex">
            <Buttons handleSlide={handleSlide} />
          </div>
        )}
      </div>
      {children}
      {showBtn && (
        <div className="flex gap-8 lg:hidden mt-28 items-center justify-center">
          <Buttons handleSlide={handleSlide} />
        </div>
      )}
    </section>
  );
};
export default SectionWrapper;

const Buttons = ({
  handleSlide,
}: {
  handleSlide: (direction: "left" | "right") => void;
}) => {
  return (
    <>
      <Button
        onClick={() => handleSlide("left")}
        variant="secondary"
        className="p-4 px-5"
      >
        <IoIosArrowBack className="text-3xl" />
      </Button>
      <Button
        onClick={() => handleSlide("right")}
        variant="primary"
        className="p-4 px-5"
      >
        <IoIosArrowForward className="text-3xl" />
      </Button>
    </>
  );
};
