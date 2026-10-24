import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const QuoteSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  location: z.string().trim().min(2).max(120),
  requirement: z.string().trim().min(2).max(200),
  quantity: z.string().trim().max(60).optional().default(""),
  date: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const sendQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => QuoteSchema.parse(d))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["QUOTE_FROM_EMAIL"] || "BER Website <website@beroilgasltd.com>";
    if (!apiKey) return { ok: false as const, reason: "not_configured" };

    const submitted = new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" }) + " (WAT)";
    const rows: [string, string][] = [
      ["Customer name", data.fullName],
      ["Company name", data.company || "-"],
      ["Phone number", data.phone],
      ["Email", data.email],
      ["Location", data.location],
      ["Diesel requirement", data.requirement],
      ["Estimated quantity", data.quantity || "-"],
      ["Preferred delivery date", data.date || "-"],
      ["Additional message", data.message || "-"],
      ["Submitted", submitted],
    ];
    const html = `<h2>New Diesel Supply Enquiry</h2><table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${esc(v)}</td></tr>`)
      .join("")}</table>`;
    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["hello@beroilgasltd.com"],
        reply_to: data.email,
        subject: "New Diesel Supply Enquiry — BER Oil & Gas Ltd",
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Quote email failed", res.status, await res.text());
      return { ok: false as const, reason: "send_failed" };
    }
    return { ok: true as const };
  });
