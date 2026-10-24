import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { COMPANY, mailHref, telHref } from "@/lib/company";
import { sendQuoteRequest } from "@/lib/quote.functions";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Phone number contains invalid characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  location: z.string().trim().min(2, "Please enter your delivery location").max(120),
  requirement: z.string().trim().min(2, "Please describe your diesel requirement").max(200),
  quantity: z.string().trim().max(60).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  website: z.string().max(0).optional(), // honeypot
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const FIELDS: {
  name: keyof Values;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  textarea?: boolean;
  placeholder?: string;
}[] = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "company", label: "Company Name" },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "location", label: "Location", required: true },
  { name: "requirement", label: "Diesel Requirement", required: true, placeholder: "e.g. generator diesel supply" },
  { name: "quantity", label: "Estimated Quantity", placeholder: "e.g. 10,000 litres" },
  { name: "date", label: "Preferred Delivery Date", type: "date" },
  { name: "message", label: "Additional Information", full: true, textarea: true },
];

const input =
  "mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Values>({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    requirement: "",
    quantity: "",
    date: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const send = useServerFn(sendQuoteRequest);

  const fields = compact
    ? FIELDS.filter((f) =>
        ["fullName", "company", "phone", "email", "requirement", "message"].includes(
          f.name as string,
        ),
      )
    : FIELDS;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Values] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    if (values.website) return; // silent honeypot reject
    setErrors({});
    setFailed(false);
    setSending(true);
    try {
      const { website: _w, ...payload } = parsed.data;
      const res = await send({ data: payload });
      if (res.ok) {
        setSent(true);
        toast.success("Your request has been received.");
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  const summary = [
    `Customer name: ${values.fullName}`,
    values.company ? `Company: ${values.company}` : "",
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Location: ${values.location}`,
    `Diesel requirement: ${values.requirement}`,
    values.quantity ? `Estimated quantity: ${values.quantity}` : "",
    values.date ? `Preferred delivery date: ${values.date}` : "",
    values.message ? `Additional information: ${values.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (sent) {
    return (
      <div className="rounded-sm border bg-card p-9 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
          Your request has been received. A member of the BER OIL &amp; GAS LTD team will
          get in touch with you.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-sm border bg-card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name as string} className={f.full ? "sm:col-span-2" : ""}>
            <label
              htmlFor={f.name as string}
              className="font-display text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground"
            >
              {f.label}
              {f.required ? <span className="text-flame"> *</span> : null}
            </label>
            {f.textarea ? (
              <textarea
                id={f.name as string}
                name={f.name as string}
                rows={5}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
                aria-invalid={Boolean(errors[f.name])}
                aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                className={`${input} h-auto py-3`}
              />
            ) : (
              <input
                id={f.name as string}
                name={f.name as string}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
                aria-invalid={Boolean(errors[f.name])}
                aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                className={input}
              />
            )}
            {errors[f.name] ? (
              <p id={`${f.name}-error`} className="mt-1.5 text-xs text-destructive">
                {errors[f.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues({ ...values, website: e.target.value })}
        />
      </div>

      {failed ? (
        <div role="alert" className="mt-8 rounded-sm border border-destructive/40 bg-destructive/5 p-5 text-sm">
          <p className="font-semibold text-foreground">
            We couldn&apos;t send your request online just now.
          </p>
          <p className="mt-1 text-muted-foreground">
            Please reach us directly — your details are pre-filled in the email option.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={telHref(COMPANY.primaryPhone)} className="btn-lift inline-flex h-11 items-center rounded-sm bg-navy px-5 font-semibold text-navy-foreground">
              Call {COMPANY.primaryPhone}
            </a>
            <a
              href={mailHref("BER Oil & Gas Ltd — Diesel Supply Enquiry", summary)}
              className="btn-lift inline-flex h-11 items-center rounded-sm border px-5 font-semibold"
            >
              Email {COMPANY.email}
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="btn-lift mt-8 inline-flex h-13 w-full items-center justify-center rounded-sm bg-flame px-8 py-3.5 font-display font-semibold text-flame-foreground transition-colors hover:bg-navy disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Submit Quote Request"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Your details are used only to respond to this enquiry. See our privacy policy.
      </p>
    </form>
  );
}
