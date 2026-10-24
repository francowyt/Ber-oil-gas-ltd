import { Facebook, Instagram } from "lucide-react";
import type { ReactNode } from "react";
import { SOCIALS } from "@/lib/company";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-4.6-6.02L5.7 22H2.44l7.9-9.03L1.5 2h7.07l4.16 5.5L18.244 2Zm-1.21 18h1.86L7.05 3.9H5.06L17.034 20Z" />
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  Facebook: <Facebook className="h-4 w-4" aria-hidden="true" />,
  Instagram: <Instagram className="h-4 w-4" aria-hidden="true" />,
  X: <XIcon />,
};

export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <ul className="flex items-center gap-3">
      {SOCIALS.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`BER Oil & Gas on ${s.label}`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors ${
              tone === "dark"
                ? "border-white/20 text-navy-foreground/80 hover:border-flame hover:text-white"
                : "border-border text-foreground/70 hover:border-flame hover:text-flame"
            }`}
          >
            {ICONS[s.label]}
          </a>
        </li>
      ))}
    </ul>
  );
}
