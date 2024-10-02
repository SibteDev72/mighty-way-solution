import type { navLinkInterface } from "~/types/NavLink";
import type { serviceInterface } from "~/types/Services";
export const navLinks: navLinkInterface[] = [
  {
    id: 1,
    ref: "home",
    title: "home",
    hash: "#home",
  },
  {
    id: 2,
    ref: "services",
    title: "services",
    hash: "#services",
  },
  {
    id: 3,
    ref: "about",
    title: "about",
    hash: "#about",
  },
  {
    id: 4,
    ref: "contact",
    title: "contact",
    hash: "#contact",
  },
];

export const serviceItems: serviceInterface[] = [
  {
    id: 1,
    icon: "IT.png",
    name: "information technology",
  },
  {
    id: 2,
    icon: "banking.png",
    name: "banking and finance",
  },
  {
    id: 3,
    icon: "healthcare.png",
    name: "healthcare",
  },
  {
    id: 4,
    icon: "amazon.png",
    name: "amazon",
  },
  {
    id: 5,
    icon: "truck.png",
    name: "truck dispatch",
  },
  {
    id: 6,
    icon: "shopify.png",
    name: "shopify",
  },
  {
    id: 7,
    icon: "digital-media.png",
    name: "digital media",
  },
];
