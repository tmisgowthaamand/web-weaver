import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/all-products.json";
import { Star, Search, Package, Filter, ShoppingCart, ArrowRight, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Products() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const sortRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  // Find actual price range from products
  const maxProductPrice = Math.max(...products.map(p => p.price));
  const minProductPrice = Math.min(...products.map(p => p.price));

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setShowPriceFilter(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let list = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Apply sorting
  list = [...list].sort((a, b) => {
    if (sort === "a-z") return a.title.localeCompare(b.title);
    if (sort === "z-a") return b.title.localeCompare(a.title);
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    return 0;
  });

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    setShowSortDropdown(false);
  };

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
      {/* Header */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.55 0.18 240 / 0.2)" }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.65 0.16 140 / 0.15)" }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{products.length} Premium Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Premium Packaging Catalog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our complete collection of high-quality packaging solutions
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
              style={{ background: "var(--color-card)" }}
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 flex items-center gap-3 overflow-x-auto pb-2">
          <Filter className="h-5 w-5 text-primary flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                category === cat
                  ? "text-primary-foreground scale-105"
                  : "text-foreground border border-border hover:border-primary/50"
              }`}
              style={
                category === cat
                  ? {
                      background: "var(--color-primary)",
                      boxShadow: "0 4px 12px rgba(85, 161, 211, 0.2)"
                    }
                  : { background: "var(--color-card)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Price Filter */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowPriceFilter(false);
              }}
              className="px-4 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-all flex items-center gap-2 whitespace-nowrap"
              style={{ background: "var(--color-card)" }}
            >
              <span className="hidden sm:inline">Sort:</span>
              <span className="font-bold text-primary">
                {sort === "featured" && "Featured"}
                {sort === "a-z" && "A → Z"}
                {sort === "z-a" && "Z → A"}
                {sort === "price-low" && "Price: Low to High"}
                {sort === "price-high" && "Price: High to Low"}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
            </button>

            {showSortDropdown && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-card shadow-2xl z-50">
                <button
                  onClick={() => handleSortChange("featured")}
                  className={`w-full text-left px-4 py-3 text-sm transition-all ${
                    sort === "featured" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  ⭐ Featured
                </button>
                <button
                  onClick={() => handleSortChange("a-z")}
                  className={`w-full text-left px-4 py-3 text-sm transition-all ${
                    sort === "a-z" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  A → Z (Alphabetical)
                </button>
                <button
                  onClick={() => handleSortChange("z-a")}
                  className={`w-full text-left px-4 py-3 text-sm transition-all ${
                    sort === "z-a" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Z → A (Reverse)
                </button>
                <button
                  onClick={() => handleSortChange("price-low")}
                  className={`w-full text-left px-4 py-3 text-sm transition-all ${
                    sort === "price-low" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => handleSortChange("price-high")}
                  className={`w-full text-left px-4 py-3 text-sm transition-all ${
                    sort === "price-high" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Price: High to Low
                </button>
              </div>
            )}
          </div>

          {/* Price Range Filter */}
          <div className="relative" ref={priceRef}>
            <button
              onClick={() => {
                setShowPriceFilter(!showPriceFilter);
                setShowSortDropdown(false);
              }}
              className="px-4 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-all flex items-center gap-2 whitespace-nowrap"
              style={{ background: "var(--color-card)" }}
            >
              <span>Price</span>
              <span className="font-bold text-primary">{formatPrice(minPrice)} - {formatPrice(maxPrice)}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showPriceFilter ? "rotate-180" : ""}`} />
            </button>

            {showPriceFilter && (
              <div className="absolute top-full right-0 mt-2 w-80 rounded-lg border border-border bg-card shadow-2xl z-50 p-6">
                <h4 className="font-semibold text-foreground mb-4">Price Range</h4>

                {/* Min Price */}
                <div className="mb-4">
                  <label className="text-sm text-muted-foreground block mb-2">Min Price: {formatPrice(minPrice)}</label>
                  <input
                    type="range"
                    min={minProductPrice}
                    max={maxProductPrice}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Max Price */}
                <div className="mb-4">
                  <label className="text-sm text-muted-foreground block mb-2">Max Price: {formatPrice(maxPrice)}</label>
                  <input
                    type="range"
                    min={minProductPrice}
                    max={maxProductPrice}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Quick Price Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    onClick={() => { setMinPrice(minProductPrice); setMaxPrice(500); }}
                    className="px-3 py-2 rounded text-sm bg-secondary text-foreground hover:bg-primary/20 transition-all"
                  >
                    Under {formatPrice(500)}
                  </button>
                  <button
                    onClick={() => { setMinPrice(500); setMaxPrice(1500); }}
                    className="px-3 py-2 rounded text-sm bg-secondary text-foreground hover:bg-primary/20 transition-all"
                  >
                    {formatPrice(500)} - {formatPrice(1500)}
                  </button>
                  <button
                    onClick={() => { setMinPrice(1500); setMaxPrice(5000); }}
                    className="px-3 py-2 rounded text-sm bg-secondary text-foreground hover:bg-primary/20 transition-all"
                  >
                    {formatPrice(1500)} - {formatPrice(5000)}
                  </button>
                  <button
                    onClick={() => { setMinPrice(5000); setMaxPrice(maxProductPrice); }}
                    className="px-3 py-2 rounded text-sm bg-secondary text-foreground hover:bg-primary/20 transition-all"
                  >
                    Above {formatPrice(5000)}
                  </button>
                </div>

                <button
                  onClick={() => { setMinPrice(minProductPrice); setMaxPrice(maxProductPrice); setShowPriceFilter(false); }}
                  className="w-full px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground transition-all"
                  style={{ background: "var(--color-primary)" }}
                >
                  Reset Price
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Count & Clear */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-muted-foreground">
            Showing <span className="font-bold text-primary">{list.length}</span> of{" "}
            <span className="font-bold text-primary">{products.length}</span> products
          </p>
          {(minPrice !== minProductPrice || maxPrice !== maxProductPrice || sort !== "featured" || q || category !== "All") && (
            <button
              onClick={() => {
                setQ("");
                setCategory("All");
                setSort("featured");
                setMinPrice(minProductPrice);
                setMaxPrice(maxProductPrice);
              }}
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {list.map((p, i) => {
            const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
            const isAdded = addedItems.has(p.id);

            return (
              <article key={p.id} className="group">
                <Link to={`/product/${p.id}`} className="block">
                  <div
                    className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all relative aspect-square mb-4"
                    style={{ background: "var(--color-card)", boxShadow: "var(--shadow-card)" }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      suppressHydrationWarning
                    />
                    {discount > 0 && (
                      <div className="absolute top-4 left-4 px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold">
                        {discount}% OFF
                      </div>
                    )}
                    {i < 3 && (
                      <div className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-accent text-accent-foreground text-xs font-semibold">
                        ⭐ FEATURED
                      </div>
                    )}
                  </div>
                </Link>

                <div className="px-2">
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">Boxes & Packaging</div>
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-semibold text-base text-foreground line-clamp-2 min-h-12 group-hover:text-primary transition-colors mb-3">
                      {p.title}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 text-sm mb-3">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{p.rating}</span>
                    <span className="text-muted-foreground text-xs">({p.reviews})</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{formatPrice(p.price)}</span>
                    <span className="text-sm text-muted-foreground line-through">{formatPrice(p.originalPrice)}</span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                      Save {formatPrice(p.originalPrice - p.price)}
                    </span>
                  </div>

                  {p.inStock ? (
                    <div className="text-xs text-primary font-semibold mb-4">✓ In Stock ({p.stock})</div>
                  ) : (
                    <div className="text-xs text-destructive font-semibold mb-4">Out of Stock</div>
                  )}

                  <div className="flex gap-2">
                    <Link
                      to={`/product/${p.id}`}
                      className="flex-1 py-2 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all text-center"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => handleQuickAdd(p)}
                      disabled={!p.inStock || isAdded}
                      className="px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50"
                      style={
                        isAdded || !p.inStock
                          ? { background: "var(--color-muted)" }
                          : { background: "var(--color-primary)", color: "var(--color-primary-foreground)" }
                      }
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
          <div className="text-center py-20">
            <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search</p>
            <button
              onClick={() => {
                setQ("");
                setCategory("All");
              }}
              className="px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-all"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 4px 12px rgba(85, 161, 211, 0.2)"
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {list.length > 0 && (
          <section
            className="p-12 rounded-2xl text-center border border-border"
            style={{
              background: "linear-gradient(135deg, var(--gradient-accent))",
              boxShadow: "0 4px 12px rgba(85, 161, 211, 0.1)"
            }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Need Custom Solutions?</h3>
            <p className="text-lg text-muted-foreground mb-8">Request a personalized quote for your specific needs</p>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-primary-foreground transition-all hover:scale-105"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 4px 12px rgba(85, 161, 211, 0.2)"
              }}
            >
              Get Custom Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </section>
        )}
      </div>
    </SiteLayout>
  );
}
