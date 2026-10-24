import { Link } from "@tanstack/react-router";
import { BrandMark } from "./BrandMark";

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label="BER OIL & GAS LTD — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <BrandMark
        fallbackClassName={`h-16 w-20 bg-background px-1 sm:h-20 sm:w-24 ${variant === "dark" ? "rounded-sm" : ""}`}
      />
      <span className="sr-only">BER OIL &amp; GAS LTD</span>
    </Link>
  );
}
