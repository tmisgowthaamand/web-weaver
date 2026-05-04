import { SiteLayout } from "@/components/SiteLayout";
import { Award, Users, Globe2, Leaf, Target, Heart, TrendingUp, Zap, Shield } from "lucide-react";

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.55 0.18 240 / 0.2)" }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.65 0.16 140 / 0.15)" }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Celebrating 9 Years of Excellence</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Built on
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-accent)" }}>
              Trust & Quality
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From humble beginnings in 2017 to serving 500+ businesses across Tamil Nadu with premium packaging solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Happy Clients", value: "500+", icon: "👥" },
              { label: "Boxes Delivered", value: "50K+", icon: "📦" },
              { label: "Years Active", value: "9", icon: "🏆" },
              { label: "Retention Rate", value: "98%", icon: "💯" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-all text-center"
                style={{ background: "var(--color-card)" }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Our Journey</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2017 by Mohamedsulaiman Ajmulkhan, Parveen Packaging Industries started with one simple vision: deliver premium packaging at honest prices.
                </p>
                <p>
                  What began as a family workshop has grown into a trusted name across Tamil Nadu. We've delivered 50,000+ boxes to 500+ satisfied clients while maintaining our core values of quality and integrity.
                </p>
                <p>
                  Every day, we're committed to protecting your products and elevating your brand with premium packaging solutions.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden border border-border aspect-square"
              style={{ background: "var(--color-card)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Our Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-5xl font-black text-white mb-16 text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Quality First",
                desc: "3-ply & 5-ply construction tested for durability. Every box meets our high standards.",
                gradient: "from-cyan-400 to-blue-400"
              },
              {
                icon: Heart,
                title: "Integrity Always",
                desc: "Honest pricing, transparent communication, and always keeping our promises.",
                gradient: "from-orange-400 to-red-400"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "100% recyclable materials. Eco-friendly practices across all operations.",
                gradient: "from-green-400 to-teal-400"
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
                style={{ background: "oklch(0.12 0.03 240)" }}
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${value.gradient} mb-5 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-6 w-6 text-black font-bold" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-white mb-16 text-center">Our Timeline</h2>
          <div className="space-y-8">
            {[
              { year: "2017", title: "Founded", desc: "Parveen Packaging Industries begins with a vision for quality." },
              { year: "2019", title: "Growth", desc: "Expanded product line to serve 300+ clients." },
              { year: "2021", title: "Recognition", desc: "Regional growth milestone achieved." },
              { year: "2023", title: "Modern Facility", desc: "Upgraded to state-of-the-art production facility." },
              { year: "2026", title: "9 Years Strong", desc: "500+ clients, 50K+ boxes, 98% retention rate." },
            ].map((milestone, idx) => (
              <div key={milestone.year} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full font-black text-lg mb-4 text-black"
                    style={{
                      background: "linear-gradient(120deg, oklch(0.62 0.22 200) 0%, oklch(0.68 0.20 60) 100%)"
                    }}
                  >
                    {milestone.year}
                  </div>
                  {idx !== 4 && <div className="w-1 h-16 bg-primary/30 mb-4"></div>}
                </div>
                <div
                  className="flex-1 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                  style={{ background: "oklch(0.12 0.03 240)" }}
                >
                  <h3 className="text-2xl font-black text-primary mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-5xl font-black text-white mb-4 text-center">Why Choose Us?</h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            6 reasons why 500+ businesses trust Parveen Packaging
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Premium Quality", desc: "3-ply & 5-ply tested construction" },
              { title: "Fast Delivery", desc: "Same-day dispatch in Chennai" },
              { title: "Expert Support", desc: "Dedicated customer service team" },
              { title: "Eco-Friendly", desc: "100% recyclable materials" },
              { title: "Proven Trust", desc: "9 years of reliability" },
              { title: "Custom Solutions", desc: "Tailored packaging for your needs" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                style={{ background: "oklch(0.12 0.03 240)" }}
              >
                <h3 className="font-black text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietor */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="p-12 rounded-2xl border border-primary/30"
            style={{
              background: "linear-gradient(135deg, oklch(0.12 0.03 240) 0%, oklch(0.15 0.03 220) 100%)",
              boxShadow: "0 0 60px oklch(0.62 0.22 200 / 0.1)"
            }}
          >
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary font-bold text-sm mb-4">
                  FOUNDER & PROPRIETOR
                </div>
                <h2 className="text-4xl font-black text-white mb-4">Mohamedsulaiman Ajmulkhan</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  With a vision to provide quality packaging solutions at honest prices, Mohamedsulaiman founded Parveen Packaging Industries in 2017. Over 9 years, he has built a trusted business serving 500+ clients with unwavering commitment to excellence.
                </p>
                <div className="flex gap-4">
                  <a
                    href="tel:+919876543210"
                    className="px-6 py-3 rounded-lg font-bold text-black transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(120deg, oklch(0.62 0.22 200) 0%, oklch(0.68 0.20 60) 100%)"
                    }}
                  >
                    Call Now
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border-4 border-primary aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Mohamedsulaiman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
