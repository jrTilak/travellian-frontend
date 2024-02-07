import { cn } from "../../utils/cn";
import Button from "./button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type SectionWrapperProps = {
  children: React.ReactNode;
  childRef?: React.RefObject<HTMLDivElement>;
  showBtn?: boolean;
  title: string;
  desc: string;
  id: string;
  dir: "row" | "reverse";
  underlineClassName?: string;
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
    underlineClassName,
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
    <section id={id} className="py-10 sm:py-16 px-4 sm:px-5 xl:px-8">
      <div
        className={cn(
          "flex items-end w-full justify-between",
          dir === "row" ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-3 sm:gap-6",
            dir === "row" ? "items-start" : "items-end"
          )}
        >
          <h2 className="font-playfair text-[40px] leading-[53.2px] sm:text-[54px]  md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <span className={cn("h-0.5 bg-primary", underlineClassName)} />
          <p className="text-sm sm:text-lg lg:text-2xl text-muted">{desc}</p>
        </div>
        {showBtn && (
          <div className="gap-8 hidden lg:flex">
            <Buttons handleSlide={handleSlide} />
          </div>
        )}
      </div>
      {children}
      {showBtn && (
        <div className="flex gap-8 lg:hidden items-center justify-center">
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
        className="p-3 px-4"
      >
        <IoIosArrowBack className="text-xl lg:text-2xl" />
      </Button>
      <Button
        onClick={() => handleSlide("right")}
        variant="primary"
        className="p-3 px-4"
      >
        <IoIosArrowForward className="text-xl lg:text-2xl" />
      </Button>
    </>
  );
};
