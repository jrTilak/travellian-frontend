import { useRef } from "react";
import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";
import Button from "../shared/button";
import HEADER_LINKS from "./header-links";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
// import useScrollTop from "../../hooks/use-scroll-top";

const Header = () => {
  const asideRef = useRef<HTMLDivElement>(null);
  // const isScrolled = useScrollTop(100);
  const isScrolled = false;
  return (
    <nav
      className={cn(
        "flex justify-between items-center w-full z-50 px-6 py-4 sm:px-8 sm:py-5 lg:p-8 xl:px-20 text-secondary-white absolute top-0 left-0 right-0 transition-all",
        isScrolled
          ? "fixed bg-gray-600 bg-opacity-40 backdrop-blur-sm py-2 sm:py-3 lg:p-5"
          : ""
      )}
    >
      <img src={logo} loading="lazy" className="h-5 sm:h-8 lg:h-10" alt="Travellian" />
      <ul className="gap-3 font-rubik hidden lg:flex">
        {HEADER_LINKS.map((link, i) => (
          <li
            key={i}
            className={cn(
              "inline-block mx-4 relative text-lg group",
              link.path === "#main" ? "font-semibold" : "font-normal"
            )}
          >
            <a href={link.path}>{link.label}</a>
            {
              <div
                className={cn(
                  "h-0.5 w-full absolute -bottom-1 bg-primary",
                  link.path === "#main"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 w-0 group-hover:w-full transition-all duration-500"
                )}
              />
            }
          </li>
        ))}
      </ul>
      <div className="items-center hidden lg:flex">
        <Button variant="ghost">
          <a href="#login">Login</a>
        </Button>
        <Button variant="primary">
          <a href="#signup">Sign Up</a>
        </Button>
      </div>

      {/* aside navbar for small devices */}
      <aside
        ref={asideRef}
        className="flex flex-col items-center justify-between pt-28 p-6 fixed top-0 right-0 w-56 h-full bg-secondary-white text-secondary-black lg:hidden
        transition-all translate-x-full
        "
      >
        <button
          className="absolute top-4 left-4"
          onClick={() => {
            if (asideRef.current) {
              asideRef.current.classList.toggle("translate-x-full");
            }
          }}
        >
          <RxCross2 className="h-7 w-7 sm:h-9 sm:w-9" />
        </button>
        <ul className="gap-5 font-rubik flex flex-col w-full">
          {HEADER_LINKS.map((link, i) => (
            <li
              key={i}
              className={cn(
                "inline-block mx-4 relative text-lg group",
                link.path === "#main" ? "font-semibold" : "font-normal"
              )}
            >
              <a href={link.path}>{link.label}</a>
              {
                <div
                  className={cn(
                    "h-0.5 w-full absolute -bottom-0.5 bg-primary",
                    link.path === "#main"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 w-0 group-hover:w-full transition-all duration-500"
                  )}
                />
              }
            </li>
          ))}
        </ul>
        <div className="items-center flex flex-col justify-center w-full gap-1">
          <Button variant="ghost" className="text-secondary-black w-full">
            <a href="#login">Login</a>
          </Button>
          <Button variant="primary" className="w-full">
            <a href="#signup">Sign Up</a>
          </Button>
        </div>
      </aside>

      <Button
        onClick={() => {
          if (asideRef.current) {
            asideRef.current.classList.toggle("translate-x-full");
          }
        }}
        variant="ghost"
        className="lg:hidden"
      >
        <IoIosMenu className="h-7 w-7 sm:h-9 sm:w-9" />
      </Button>
    </nav>
  );
};
export default Header;
