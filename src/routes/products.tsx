import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/products.json";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Parveen Packaging Industries" },
      { name: "description", content: "Browse our catalog of shipping boxes, mailers and gift packaging." },
      { property: "og:title", content: "Products — Parveen Packaging Industries" },
      { property: "og:description", content: "Browse our catalog of shipping boxes, mailers and gift packaging." },
    ],
  }),
  component: Products,
});

function Products() {
  const [q, setQ] = useState("");
  const list = products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-muted-foreground mt-2">Explore {products.length}+ packaging solutions for every need.</p>
        <div className="mt-6">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search boxes, mailers, sizes..."
            className="w-full md:w-96 px-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
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
          {list.length === 0 && <p className="text-muted-foreground">No products match your search.</p>}
        </div>
      </div>
    </SiteLayout>
  );
}
