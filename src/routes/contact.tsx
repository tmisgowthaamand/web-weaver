import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parveen Packaging Industries" },
      { name: "description", content: "Get in touch with the Parveen Packaging team for orders, support or partnerships." },
      { property: "og:title", content: "Contact — Parveen Packaging Industries" },
      { property: "og:description", content: "Get in touch with the Parveen Packaging team for orders, support or partnerships." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, title: "Visit", lines: ["12 Industrial Park", "Andheri East, Mumbai 400072"] },
    { icon: Phone, title: "Call", lines: ["+91 98765 43210", "Mon–Sat, 9am – 7pm"] },
    { icon: Mail, title: "Email", lines: ["hello@parveenpackaging.in", "support@parveenpackaging.in"] },
    { icon: Clock, title: "Hours", lines: ["Mon–Fri: 9am – 7pm", "Sat: 10am – 4pm"] },
  ];
  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="text-muted-foreground mt-2">We'd love to hear from you. Reach out through any of the channels below.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <it.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-semibold">{it.title}</h3>
              <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
                {it.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
