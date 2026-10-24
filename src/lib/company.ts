export const COMPANY = {
  name: "BER OIL & GAS LTD",
  shortName: "BER Oil & Gas",
  rc: "RC 1924614",
  type: "Private Company Limited by Shares",
  incorporated: "29 April 2022",
  address: "Plot 601 T.O.S Benson Crescent, Utako, Abuja, FCT, Nigeria",
  phones: ["08068002660", "09110816350"],
  primaryPhone: "08068002660",
  email: "hello@beroilgasltd.com",
  tagline:
    "Quality diesel supply and distribution solutions designed around reliability and professional service.",
} as const;

export const telHref = (p: string) => `tel:+234${p.replace(/^0/, "")}`;
export const waHref = (p: string) =>
  `https://wa.me/234${p.replace(/^0/, "")}?text=${encodeURIComponent(
    "Hello BER Oil & Gas Ltd, I would like to enquire about your diesel supply services.",
  )}`;
export const mailHref = (subject = "BER Oil & Gas Ltd — Diesel Supply Enquiry", body?: string) =>
  `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

/** YouTube: paste a specific video URL here once available. Leave empty to show the channel card. */
export const YOUTUBE_VIDEO_URL = "";
export const YOUTUBE_CHANNEL_URL = "https://youtube.com/@beroilgasltd?si=-DhpbP6Mp_1EasiS";

export const DESIGNER_PHONE = "08167364546";

export const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DZh9cBLUF/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/beroil_limited?stkn=MWg2azZldmhsNGM0dA%3D%3D&utm_source=qr",
  },
  {
    label: "X",
    href: "https://x.com/beroil_gasltd?s=11",
  },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Companies Supplied" },
  { value: 6, suffix: "", label: "Years of Operation" },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products & Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export const CREDIT = "Digital Evangelist Global Technology";
