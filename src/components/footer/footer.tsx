import FOOTER_LINKS from "../../assets/constants/footer-links";
import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";

const Footer = () => {
  return (
    <footer className="bg-black px-12 py-44 flex justify-evenly text-secondary-white">
      <div className="flex flex-col gap-1 justify-start">
        <img src={logo} alt="" className="h-11 w-max" />
        <span className="text-xs">
          Copyright © Travellian 2020 All rights reserved
        </span>
      </div>
      {FOOTER_LINKS.map(({ title, links }, i) => (
        <div key={i}>
          <h4 className="text-2xl font-medium mb-3">{title}</h4>
          <ul
            className={cn(
              "flex",
              links[0].Icon ? "flex-row gap-3" : "flex-col gap-1"
            )}
          >
            {links.map((link) => (
              <li key={link.label}>
                <a className="text-base" href={link.url}>
                  {link.Icon ? (
                    <link.Icon className="w-7 h-7" />
                  ) : (
                    <>{link.label}</>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};
export default Footer;
