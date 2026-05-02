import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Bulk Enquiry — Parveen Packaging Industries" },
      { name: "description", content: "Request a custom quote for bulk packaging orders." },
      { property: "og:title", content: "Bulk Enquiry — Parveen Packaging Industries" },
      { property: "og:description", content: "Request a custom quote for bulk packaging orders." },
    ],
  }),
  component: Enquiry,
});

function Enquiry() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-4xl font-bold">Bulk Enquiry</h1>
        <p className="text-muted-foreground mt-2">Tell us what you need and we'll get back within 24 hours with a quote.</p>

        {sent ? (
          <div className="mt-8 p-6 rounded-xl bg-secondary border border-border flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Enquiry received!</h3>
              <p className="text-sm text-muted-foreground mt-1">Our team will reach out shortly.</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 grid gap-4 p-6 rounded-xl bg-card border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Field label="Full name" name="name" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Company" name="company" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Product type" name="product" placeholder="Mailer / Shipping box / Gift box" />
              <Field label="Quantity" name="qty" placeholder="e.g. 500 units" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" rows={4} required className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
              <Send className="h-4 w-4" /> Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}
