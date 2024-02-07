import BLOG from "../../assets/constants/blog";
import Button from "../shared/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import SectionWrapper from "../shared/section-wrapper";
const Blogs = () => {
  return (
    <SectionWrapper
      desc="An insight the incredible experience in the world"
      dir="row"
      showBtn={false}
      title="Our Blog"
      id="blog"
      underlineClassName="w-[150px]"
    >
      <div className="flex lg:flex-row flex-col gap-8 my-8 md:my-12 items-center justify-start ">
        <img
          src={BLOG.img}
          alt=""
          className=" w-full h-64 lg:h-[500px] lg:max-w-[672px] rounded-xl object-cover object-center "
        />
        <div className="flex flex-col gap-2 sm:gap-4 lg:max-w-[672px] items-start justify-between">
          <h2
            dangerouslySetInnerHTML={{ __html: BLOG.title }}
            className="text-4xl leading-[53.2px] md:text-6xl font-playfair"
          />
          <p className="text-base sm:text-lg leading-[30px] sm:leading-[40px]">
            {BLOG.desc}
          </p>
          <Button
            variant="ghost"
            className="text-primary text-lg sm:text-xl flex gap-3 items-center justify-center"
          >
            <span>Read More</span>
            <IoIosArrowRoundForward className="text-2xl sm:text-4xl" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Blogs;
