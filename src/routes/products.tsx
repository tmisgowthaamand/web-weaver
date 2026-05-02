import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/enhanced-products.json";
import { Star, Search, Package, Filter, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

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
  const [category, setCategory] = useState("All");
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  
  const list = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(q.toLowerCase()) || 
                         p.description.toLowerCase().includes(q.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleQuickAdd = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <SiteLayout>
      {/* Header Section */}
      <section className="relative overflow-hidden py-16" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Package className="h-4 w-4" />
            {products.length} Premium Products Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Product Catalog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of packaging solutions — from corrugated shipping boxes to custom gift packaging. 
            Every product is crafted with quality materials and tested for durability.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Search and Filter Bar */}
        <div className="mb-10 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by product name, description, or category..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  category === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{list.length}</span> of <span className="font-semibold text-foreground">{products.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => {
            const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
            const isAdded = addedItems.has(p.id);
            
            return (
              <article key={p.id} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:-translate-y-2 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <Link to={`/product/${p.id}`} className="block">
                  <div className="aspect-square bg-muted overflow-hidden relative">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      suppressHydrationWarning
                    />
                    {discount > 0 && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                        {discount}% OFF
                      </div>
                    )}
                    {i < 3 && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                        Bestseller
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <div className="text-xs text-primary font-semibold mb-2">{p.category}</div>
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-semibold text-base line-clamp-2 min-h-12 group-hover:text-primary transition-colors mb-3">
                      {p.title}
                    </h3>
                  </Link>
                  
                  {/* Rating */}
                  {p.rating && (
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 
                        <span className="font-semibold text-foreground">{p.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({p.reviews})</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">₹{p.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{p.originalPrice}</span>
                    </div>
                  </div>

                  {/* Stock Status */}
                  {p.inStock ? (
                    <div className="text-xs text-green-600 font-medium mb-3">
                      In Stock ({p.stock} available)
                    </div>
                  ) : (
                    <div className="text-xs text-red-600 font-medium mb-3">Out of Stock</div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/product/${p.id}`}
                      className="flex-1 px-4 py-2.5 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleQuickAdd(p)}
                      disabled={!p.inStock || isAdded}
                      className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAdded ? "✓" : <ShoppingCart className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {list.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setQ("");
                setCategory("All");
              }}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        {list.length > 0 && (
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
            <p className="text-muted-foreground mb-6">We offer custom packaging solutions tailored to your specific needs</p>
            <Link to="/enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Request Custom Quote
            </Link>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
