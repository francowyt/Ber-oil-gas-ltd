import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY, NAV, telHref } from "@/lib/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-navy-foreground lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide text-navy-foreground/75">{COMPANY.address}</p>
          <div className="flex items-center gap-5">
            <span className="text-navy-foreground/60">{COMPANY.rc}</span>
            <a
              href={telHref(COMPANY.primaryPhone)}
              className="inline-flex items-center gap-1.5 font-medium hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call Us: {COMPANY.primaryPhone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b backdrop-blur transition-all duration-300 ${
           scrolled ? "bg-background shadow-[0_6px_24px_-16px_rgba(10,30,70,0.6)]" : "bg-background/95"
        }`}
      >
        <div className={`container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3.5"}`}>
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link text-sm font-medium text-foreground/75 transition-colors hover:text-primary [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="inline-flex h-11 items-center rounded-sm bg-flame px-6 text-sm font-semibold text-flame-foreground transition-colors hover:bg-navy btn-lift"
            >
              Request a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telHref(COMPANY.primaryPhone)}
              aria-label={`Call BER Oil & Gas on ${COMPANY.primaryPhone}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/quote"
              className="inline-flex h-10 items-center rounded-sm bg-flame px-4 text-sm font-semibold text-flame-foreground"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto border-t bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b py-4 font-display text-lg font-medium text-foreground [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 space-y-3 pb-10">
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center rounded-sm bg-flame font-semibold text-flame-foreground"
              >
                Request a Quote
              </Link>
              <a
                href={telHref(COMPANY.primaryPhone)}
                className="flex h-12 items-center justify-center gap-2 rounded-sm border font-medium"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call Us:{" "}
                {COMPANY.primaryPhone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
