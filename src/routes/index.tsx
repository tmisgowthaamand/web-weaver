import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/products.json";
import { ArrowRight, Truck, Shield, Recycle, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parveen Packaging — Premium Shipping & Packaging Boxes" },
      { name: "description", content: "Durable corrugated shipping boxes, mailers and gift packaging for businesses." },
      { property: "og:title", content: "Parveen Packaging — Premium Shipping & Packaging Boxes" },
      { property: "og:description", content: "Durable corrugated shipping boxes, mailers and gift packaging for businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-primary-foreground">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium mb-5">
            Serving Chennai businesses since 2017
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Packaging that protects, performs & delights.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
            From corrugated mailers to custom gift boxes — quality packaging from a family-run workshop in Vyasarpadi, Chennai.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background text-primary font-semibold hover:opacity-90 transition">
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition">
              Bulk Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Truck, title: "Fast dispatch", desc: "Same-day pickup in Chennai, 2–4 days across Tamil Nadu." },
          { icon: Shield, title: "Built to last", desc: "Heavy-duty corrugated, tested for daily transit." },
          { icon: Recycle, title: "Eco-friendly", desc: "100% recyclable kraft & responsibly sourced board." },
        ].map((f) => (
          <div key={f.title} className="p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <f.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured packaging</h2>
            <p className="text-muted-foreground mt-1">Hand-picked best-sellers from our catalog.</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-1 text-primary font-medium hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden bg-card border border-border hover:-translate-y-1 transition" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-square bg-muted overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem]">{p.title}</h3>
                {p.rating && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" /> {p.rating} {p.reviews && <span>· {p.reviews}</span>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
