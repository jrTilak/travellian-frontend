import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";
import Button from "../shared/buttons/button";
import HEADER_LINKS from "./header-links";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full z-50 px-6 py-4 sm:px-8 sm:py-5 lg:p-8 text-secondary-white absolute top-0 left-0 right-0">
      <img src={logo} className="h-4 sm:h-8 lg:h-11" alt="Travellian" />
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
      <Button variant="ghost" className="lg:hidden">
        <IoIosMenu className="h-7 w-7 sm:h-9 sm:w-9" />
      </Button>
    </nav>
  );
};
export default Header;
