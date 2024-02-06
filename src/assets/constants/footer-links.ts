import { IconType } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const FOOTER_LINKS: FooterLink = [
  {
    title: "Menu",
    links: [
      { label: "Home", url: "#" },
      { label: "Explore", url: "#" },
      { label: "Explore", url: "#" },
      { label: "Travel", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Pricing", url: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Destinations", url: "#" },
      { label: "Supports", url: "#" },
      { label: "Terms & Conditions", url: "#" },
      { label: "Privacy", url: "#" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { label: "+123 456 789", url: "tel:+123 456 789" },
      { label: "info@travellian.com", url: "mailto:info@travellian.com" },
      { label: "1245, New Yourk, USA", url: "#" },
    ],
  },
  {
    title: "Follow us on",
    links: [
      { url: "#", Icon: FaFacebook },
      { url: "#", Icon: FaPinterest },
      { url: "#", Icon: BsInstagram },
      { url: "#", Icon: FaTwitter },
    ],
  },
];

type FooterLink = {
  title: string;
  links: { label?: string; url: string; Icon?: IconType }[];
}[];

export default FOOTER_LINKS;
