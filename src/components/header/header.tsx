import { useRef } from "react";
import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";
import Button from "../shared/button";
import HEADER_LINKS from "./header-links";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import useScrollDirection from "../../hooks/use-scroll-direction";

const Header = () => {
  const asideRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollDirection();

  const toggleAside = (toRemove: boolean) => {
    if (asideRef.current) {
      if (toRemove) {
        asideRef.current.classList.add("translate-x-full");
      } else {
        asideRef.current.classList.remove("translate-x-full");
      }
    }
  };

  return (
    <nav
      className={cn(
        "flex justify-between items-center w-full z-50 px-6 py-4 sm:px-8 sm:py-5 lg:p-8 xl:px-20 text-secondary-white absolute top-0 left-0 right-0 transition-all",
        isScrolled
          ? "fixed bg-gray-600 bg-opacity-40 backdrop-blur-sm py-2 sm:py-3 lg:p-4"
          : ""
      )}
    >
      <a href="#main">
        <img
          src={logo}
          loading="lazy"
          className="h-5 sm:h-8"
          alt="Travellian"
        />
      </a>
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
        <Button name="login" aria-label="login" variant="ghost">
          <a href="#login">Login</a>
        </Button>
        <Button name="signup" aria-label="signup" variant="primary">
          <a href="#signup">Sign Up</a>
        </Button>
      </div>

      {/* aside navbar for small devices */}
      <aside
        ref={asideRef}
        onBlur={() => toggleAside(true)}
        className="flex flex-col items-center justify-between pt-28 p-6 fixed top-0 right-0 w-56 h-dvh bg-secondary-white text-secondary-black lg:hidden
        transition-all translate-x-full"
      >
        <button
          name="menu"
          aria-label="menu"
          className="absolute top-4 left-4"
          onClick={() => toggleAside(true)}
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
          <Button
            name="login"
            aria-label="login"
            variant="ghost"
            className="text-secondary-black w-full"
          >
            <a href="#login">Login</a>
          </Button>
          <Button
            name="signup"
            aria-label="signup"
            variant="primary"
            className="w-full"
          >
            <a href="#signup">Sign Up</a>
          </Button>
        </div>
      </aside>

      <Button
        onClick={() => toggleAside(false)}
        variant="ghost"
        className="lg:hidden"
        name="menu"
        aria-label="menu"
      >
        <IoIosMenu className="h-7 w-7 sm:h-9 sm:w-9" />
      </Button>
    </nav>
  );
};
export default Header;
