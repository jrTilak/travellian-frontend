import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";
import Button from "../shared/buttons/button";
import HEADER_LINKS from "./header-links";
const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full z-50 px-12 py-6 text-secondary-white absolute top-0 left-0 right-0">
      <img src={logo} className="h-8" alt="Travellian" />
      <ul className="flex gap-3 font-rubik">
        {HEADER_LINKS.map((link, i) => (
          <li
            key={i}
            className={cn(
              "inline-block mx-4 relative",
              link.path === "/" ? "font-semibold" : "font-normal"
            )}
          >
            <a href={link.path}>{link.label}</a>
            {
              <div
                className={cn(
                  "h-0.5 w-full absolute -bottom-1 bg-primary",
                  link.path === "/" ? "opacity-100" : "opacity-0"
                )}
              />
            }
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <Button variant="ghost">
          <a href="#login">Login</a>
        </Button>
        <Button variant="primary">
          <a href="#signup">Sign Up</a>
        </Button>
      </div>
    </nav>
  );
};
export default Header;
