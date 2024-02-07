import BLOG from "../../assets/constants/blog";
import Button from "../shared/buttons/button";
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
    >
      <div className="flex lg:flex-row flex-col gap-8 mt-28 items-center justify-start ">
        <img
          src={BLOG.img}
          alt=""
          className=" w-full lg:h-[802px] lg:w-[672px] md:aspect-[0.84/1] rounded-xl"
        />
        <div className="flex flex-col gap-4 max-w-[672px] items-start justify-between">
          <h2
            dangerouslySetInnerHTML={{ __html: BLOG.title }}
            className="text-5xl md:text-6xl font-playfair"
          />
          <p className="text-[24px] leading-[52px]">{BLOG.desc}</p>
          <Button
            variant="ghost"
            className="text-primary text-2xl flex gap-3 items-center justify-center"
          >
            <span>Read More</span>
            <IoIosArrowRoundForward className="w-12 h-full" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Blogs;
