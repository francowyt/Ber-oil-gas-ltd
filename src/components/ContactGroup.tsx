import { Mail, Phone } from "lucide-react";
import { COMPANY, mailHref, telHref } from "@/lib/company";

/** Both company phones side by side, plus the official email, as one unified block. */
export function ContactGroup({
  tone = "light",
  showEmail = true,
  className = "",
}: {
  tone?: "light" | "dark";
  showEmail?: boolean;
  className?: string;
}) {
  const link =
    tone === "dark"
      ? "text-current opacity-90 hover:opacity-100 hover:underline underline-offset-4"
      : "text-foreground/85 hover:text-primary";
  const sep = tone === "dark" ? "opacity-40" : "text-border";
  return (
    <div className={`space-y-2 text-sm ${className}`}>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Phone className="h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
        {COMPANY.phones.map((p, i) => (
          <span key={p} className="inline-flex items-center gap-3">
            {i > 0 ? <span className={sep} aria-hidden="true">|</span> : null}
            <a href={telHref(p)} className={`font-medium tabular-nums transition-colors ${link}`}>
              {p}
            </a>
          </span>
        ))}
      </p>
      {showEmail ? (
        <p className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
          <a href={mailHref()} className={`break-all font-medium transition-colors ${link}`}>
            {COMPANY.email}
          </a>
        </p>
      ) : null}
    </div>
  );
}
