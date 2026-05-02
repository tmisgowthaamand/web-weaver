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
            Family-run since 2017 — combining protective design, honest pricing and reliable supply for businesses across Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Parveen Packaging Industries was founded in 2017 by Mohamedsulaiman Ajmulkhan in a small workshop
            in Vyasarpadi, Chennai, with a simple goal: make great packaging easy for local businesses to buy.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Nine years on, we supply hundreds of small businesses, e-commerce sellers and traders across Chennai
            and neighbouring cities — one carton at a time, with the same hands-on care we started with.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Every box we ship is designed to balance strength, weight and cost — so your products arrive safely without overspending.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, k: "500+", v: "Happy clients" },
            { icon: Globe2, k: "Chennai", v: "& nearby cities" },
            { icon: Award, k: "Since 2017", v: "9 years strong" },
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
