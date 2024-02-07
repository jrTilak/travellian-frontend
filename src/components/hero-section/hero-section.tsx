import Header from "../header/header";
import Content from "./content";
import CrousalImages from "./crousal-images";

const HeroSection = () => {
  return (
    <div className="w-full sm:h-dvh flex justify-center items-center m-auto flex-col relative">
      <Header />
      <CrousalImages />
      <Content />
    </div>
  );
};
export default HeroSection;
