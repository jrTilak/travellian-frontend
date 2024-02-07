import FOOTER_LINKS from "../../assets/constants/footer-links";
import logo from "../../assets/img/logo.svg";
import { cn } from "../../utils/cn";

const Footer = () => {
  return (
    <footer className="bg-grey py-20 px-4 flex lg:relative flex-col lg:flex-row gap-12 justify-evenly text-secondary-white">
      <div className="hidden xl:block absolute inset-x-1/2 -translate-x-1/2">
        <Footer />
      </div>
      <div className="flex flex-col gap-1 justify-start">
        <img src={logo} alt="" className="h-11 w-max" />
        <span className="text-sm">
          Copyright © Travellian 2020 All rights reserved
        </span>
      </div>
      {FOOTER_LINKS.map(({ title, links }, i) => (
        <div key={i}>
          <h4 className="text-2xl font-medium mb-4">{title}</h4>
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
