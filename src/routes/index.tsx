import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/products.json";
import { ArrowRight, Truck, Shield, Recycle, Star, Package, Award, Users, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

export default function Index() {
  const featured = products.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="mx-auto max-w-7xl px-4 py-28 md:py-40 text-primary-foreground relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Proudly serving Chennai businesses since 2017 — 9 years of excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Packaging that protects, performs & delights.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-primary-foreground/95 leading-relaxed">
              From premium corrugated mailers to custom gift boxes — delivering quality packaging solutions from our family-run workshop in Vyasarpadi, Chennai. Trusted by 500+ businesses across Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Browse Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/enquiry" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-lg hover:bg-white/15 backdrop-blur-sm transition-all">
                Get Bulk Quote
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">100% Recyclable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 -mt-16 relative z-10">
        <div className="grid gap-6 md:grid-cols-4 bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
          {[
            { icon: Users, value: "500+", label: "Satisfied Clients", color: "text-blue-600" },
            { icon: Package, value: "50,000+", label: "Boxes Delivered", color: "text-purple-600" },
            { icon: Award, value: "9 Years", label: "In Business", color: "text-pink-600" },
            { icon: TrendingUp, value: "98%", label: "Client Retention", color: "text-green-600" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose Parveen Packaging?</h2>
          <p className="text-muted-foreground mt-3 text-lg">Quality, reliability, and sustainability in every box we make</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { 
              icon: Truck, 
              title: "Lightning-Fast Dispatch", 
              desc: "Same-day pickup available in Chennai. Delivery within 2–4 days across Tamil Nadu. We understand your business can't wait.",
              gradient: "from-blue-500 to-cyan-500"
            },
            { 
              icon: Shield, 
              title: "Built to Last", 
              desc: "Heavy-duty 3-ply and 5-ply corrugated boards, rigorously tested for daily transit. Your products stay protected, guaranteed.",
              gradient: "from-purple-500 to-pink-500"
            },
            { 
              icon: Recycle, 
              title: "100% Eco-Friendly", 
              desc: "Fully recyclable kraft paper and responsibly sourced materials. Great for your business and better for our planet.",
              gradient: "from-green-500 to-emerald-500"
            },
          ].map((f) => (
            <div key={f.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-2" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${f.gradient} mb-5`}>
                <f.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16" style={{ background: "var(--gradient-warm)" }}>
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold">Featured Packaging Solutions</h2>
            <p className="text-muted-foreground mt-2 text-lg">Hand-picked best-sellers trusted by hundreds of businesses</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Products <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <article key={`featured-${i}-${p.title.slice(0, 20)}`} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:-translate-y-2 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-square bg-muted overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  suppressHydrationWarning
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  Popular
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base line-clamp-2 min-h-12 group-hover:text-primary transition-colors">{p.title}</h3>
                {p.rating && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 
                      <span className="font-semibold text-foreground">{p.rating}</span>
                    </div>
                    {p.reviews && <span>· {p.reviews} reviews</span>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-xl hover:scale-105 transition-all">
            Explore Full Catalog <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "var(--gradient-accent)" }}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to upgrade your packaging?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses who trust Parveen Packaging for their shipping and packaging needs. Get a custom quote today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/enquiry" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Request Bulk Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/15 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
