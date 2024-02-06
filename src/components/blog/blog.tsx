import BLOG from "../../assets/constants/blog";
import Button from "../shared/buttons/button";
import { IoIosArrowRoundForward } from "react-icons/io";
const Blogs = () => {
  return (
    <section id="blog" className="p-8">
      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-[64px]">Our Blog</h2>
        <span className="w-36 h-0.5 bg-primary" />
      </div>
      <p className="text-2xl mt-4">
        An insight the incredible experience in the world
      </p>
      <div className="flex gap-8 mt-28 items-center justify-start ">
        <img
          src={BLOG.img}
          alt=""
          className="h-[802px] w-[672px] aspect-[0.84/1] rounded-xl"
        />
        <div className="flex flex-col gap-4 max-w-[672px] items-start justify-between">
          <h2
            dangerouslySetInnerHTML={{ __html: BLOG.title }}
            className="text-[64px] font-playfair"
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
    </section>
  );
};
export default Blogs;
