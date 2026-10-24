import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { COMPANY, CREDIT, DESIGNER_PHONE, telHref } from "@/lib/company";
import { ContactGroup } from "./ContactGroup";
import { SocialLinks } from "./SocialLinks";
import { BrandMark } from "./BrandMark";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products & Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

const offerings = [
  "Diesel Supply",
  "Diesel Distribution",
  "Bulk Diesel Supply",
  "Commercial & Industrial Supply",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <BrandMark
            loading="lazy"
            fallbackClassName="h-16 w-28 rounded-sm bg-background px-2"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            {COMPANY.tagline}
          </p>
          <p className="mt-5 text-xs tracking-[0.18em] text-navy-foreground/50">
            {COMPANY.rc}
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-navy-foreground/60">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/85 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-navy-foreground/60">
            Products &amp; Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {offerings.map((o) => (
              <li key={o}>
                <Link
                  to="/products"
                  className="text-navy-foreground/85 transition-colors hover:text-white"
                >
                  {o}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-navy-foreground/60">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
              <span className="text-navy-foreground/85">{COMPANY.address}</span>
            </li>
            <li>
              <ContactGroup tone="dark" className="text-navy-foreground" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All Rights Reserved. · {COMPANY.rc}
          </p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
        <div className="container-x pb-28 sm:pb-6 text-[0.68rem] tracking-[0.12em] text-navy-foreground/40">
          Designed by {CREDIT}{" "}
          <span className="whitespace-nowrap">
            <span aria-hidden="true">|</span>{" "}
            <a href={telHref(DESIGNER_PHONE)} className="hover:text-white">
              {DESIGNER_PHONE}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
