import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Users, Globe2, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parveen Packaging Industries" },
      { name: "description", content: "Learn about Parveen Packaging's mission to make protective, sustainable packaging accessible." },
      { property: "og:title", content: "About — Parveen Packaging Industries" },
      { property: "og:description", content: "Learn about Parveen Packaging's mission to make protective, sustainable packaging accessible." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Packaging crafted with purpose.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We've been helping brands ship smarter since 2014 — combining protective design, sustainable materials and reliable supply.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Parveen Packaging started in a small Chennai workshop with a simple goal: make great packaging easy to buy.
            A decade later, we serve thousands of small businesses, e-commerce sellers and enterprises across India and beyond.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Every box we ship is designed to balance strength, weight and cost — so your products arrive safely without overspending.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, k: "5,000+", v: "Happy clients" },
            { icon: Globe2, k: "30+", v: "Cities served" },
            { icon: Award, k: "10 yrs", v: "In business" },
            { icon: Leaf, k: "100%", v: "Recyclable" },
          ].map((s) => (
            <div key={s.v} className="p-5 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <s.icon className="h-6 w-6 text-primary mb-2" />
              <div className="text-2xl font-bold">{s.k}</div>
              <div className="text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
