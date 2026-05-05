import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/all-products.json";
import { ArrowRight, Zap, Shield, Leaf, Star, Package, Award, Users, Sparkles, ChevronRight } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Index() {
  const { formatPrice } = useCurrency();
  const featured = products.slice(0, 6);
  const totalProducts = products.length;

  return (
    <SiteLayout>
      {/* Hero Section - Modern SaaS */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.55 0.18 240 / 0.15)" }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.65 0.16 140 / 0.10)" }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{totalProducts} Premium Products Collection</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              Premium Packaging
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-accent)" }}>
                Redefined
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Elevate your brand with our premium packaging solutions. Trusted by 500+ businesses since 2017.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "var(--color-primary)",
                  boxShadow: "0 4px 12px rgba(85, 161, 211, 0.2)"
                }}
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-accent text-accent hover:bg-accent/5"
              >
                Get Custom Quote <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <p className="text-muted-foreground">Boxes Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9 Yrs</div>
                <p className="text-muted-foreground">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why We're Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Premium quality meets affordable pricing</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Same-day dispatch in Chennai. 2-4 days across Tamil Nadu.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Fortress Durability",
                desc: "3-ply & 5-ply construction. Built to protect your products.",
                color: "from-blue-500 to-green-500"
              },
              {
                icon: Leaf,
                title: "100% Eco-Friendly",
                desc: "Recyclable materials. Sustainable practices throughout.",
                color: "from-green-500 to-emerald-500"
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ background: "var(--color-card)", boxShadow: "var(--shadow-card)" }}
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white font-bold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Featured Collection</h2>
              <p className="text-muted-foreground text-lg">Handpicked premium selections</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => {
              const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
              return (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div
                    className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ background: "var(--color-card)" }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        suppressHydrationWarning
                      />
                      {discount > 0 && (
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm">
                          {discount}% OFF
                        </div>
                      )}
                      {i < 3 && (
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm">
                          ★ FEATURED
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold text-foreground">{p.rating}</span>
                        <span className="text-xs text-muted-foreground">({p.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{formatPrice(p.price)}</span>
                        <span className="text-sm text-muted-foreground line-through">{formatPrice(p.originalPrice)}</span>
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                          Save {formatPrice(p.originalPrice - p.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Clients Served", value: "500+", icon: "👥" },
              { label: "Boxes Delivered", value: "50K+", icon: "📦" },
              { label: "Years Experience", value: "9", icon: "🏆" },
              { label: "Retention Rate", value: "98%", icon: "💯" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="p-16 rounded-2xl text-center border border-border"
            style={{
              background: "linear-gradient(135deg, var(--gradient-accent))",
              boxShadow: "0 4px 12px rgba(85, 161, 211, 0.1)"
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a personalized quote for your custom packaging needs
            </p>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-lg font-semibold text-lg text-primary-foreground transition-all hover:scale-105"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 4px 12px rgba(85, 161, 211, 0.2)"
              }}
            >
              Request Custom Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
