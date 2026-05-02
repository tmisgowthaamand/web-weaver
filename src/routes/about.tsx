
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Users, Globe2, Leaf, Target, Heart, TrendingUp, CheckCircle, Calendar, Factory } from "lucide-react";



export default function About() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-5xl px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Calendar className="h-4 w-4" />
            Established 2017 — Celebrating 9 Years of Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Packaging crafted with purpose.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A family-run business since 2017, combining protective design, honest pricing, and reliable supply 
            for businesses across Tamil Nadu. From humble beginnings to serving 500+ satisfied clients.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="mx-auto max-w-6xl px-4 -mt-12 relative z-10">
        <div className="grid gap-6 md:grid-cols-4 bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
          {[
            { icon: Users, k: "500+", v: "Happy Clients", color: "text-blue-600" },
            { icon: Calendar, k: "9 Years", v: "In Business", color: "text-purple-600" },
            { icon: Globe2, k: "Tamil Nadu", v: "Wide Coverage", color: "text-green-600" },
            { icon: Leaf, k: "100%", v: "Recyclable", color: "text-emerald-600" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <s.icon className={`h-10 w-10 mx-auto mb-3 ${s.color}`} />
              <div className="text-3xl font-bold">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story: 9 Years of Growth</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Parveen Packaging Industries</strong> was founded in <strong className="text-foreground">2017</strong> by 
                <strong className="text-foreground"> Mohamedsulaiman Ajmulkhan</strong> in a modest workshop in Vyasarpadi, Chennai. 
                What started as a one-man operation with a simple vision has grown into a trusted name in the packaging industry.
              </p>
              <p>
                Our founder recognized a critical gap in the market: small and medium businesses struggled to find 
                reliable, affordable, and high-quality packaging solutions. Large suppliers often ignored smaller orders, 
                while quality was frequently compromised for cost. We set out to change that.
              </p>
              <p>
                Over the past <strong className="text-foreground">nine years (2017-2026)</strong>, we've grown from serving a handful of local businesses 
                to becoming the preferred packaging partner for <strong className="text-foreground">500+ businesses</strong> across Chennai and Tamil Nadu. 
                Our commitment to quality, fair pricing, and personalized service has remained unchanged.
              </p>
              <p>
                Today, we operate from an expanded facility in Vyasarpadi, equipped with modern machinery while 
                maintaining the hands-on, family-run approach that our clients value. Every box that leaves our 
                workshop carries the same attention to detail and quality assurance that defined our first order in 2017.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Factory, title: "Modern Facility", desc: "State-of-the-art workshop in Vyasarpadi" },
              { icon: Award, title: "Quality First", desc: "Rigorous testing for every product" },
              { icon: Heart, title: "Family Values", desc: "Personal care in every order" },
              { icon: TrendingUp, title: "Steady Growth", desc: "98% client retention rate" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that have guided us for 9 years and will continue to drive us forward
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide businesses of all sizes with premium packaging solutions that protect their products, enhance their brand, and support sustainable practices — all at fair, transparent prices.",
              },
              {
                icon: CheckCircle,
                title: "Quality Promise",
                desc: "Every box undergoes rigorous quality checks. We use only premium-grade corrugated boards and materials, ensuring your products reach customers safely every single time.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "We're committed to environmental responsibility. All our products are 100% recyclable, made from responsibly sourced materials, and designed to minimize waste.",
              },
            ].map((val) => (
              <div key={val.title} className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-5">
                  <val.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Journey: 2017 - 2026</h2>
          <p className="text-muted-foreground text-lg">Nine years of milestones and achievements</p>
        </div>
        <div className="space-y-8">
          {[
            { year: "2017", title: "The Beginning", desc: "Founded by Mohamedsulaiman Ajmulkhan in a small workshop in Vyasarpadi. Started with 5 clients and a vision to revolutionize packaging for small businesses." },
            { year: "2019", title: "Expansion", desc: "Doubled our production capacity and expanded our product range. Reached 50+ regular clients across Chennai." },
            { year: "2021", title: "Regional Growth", desc: "Extended delivery services across Tamil Nadu. Introduced eco-friendly packaging line. Client base grew to 200+." },
            { year: "2023", title: "Modern Facility", desc: "Upgraded to a larger, modern facility with advanced machinery. Launched custom packaging design services." },
            { year: "2026", title: "9 Years Strong", desc: "Celebrating 9 years of excellence with 500+ satisfied clients, 50,000+ boxes delivered, and a 98% client retention rate. Looking forward to the next decade!" },
          ].map((milestone, i) => (
            <div key={milestone.year} className="flex gap-6 items-start group">
              <div className="shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">{milestone.year}</span>
              </div>
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-border pl-6 -ml-[9px]">
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-muted-foreground text-lg">What sets us apart after 9 years in the industry</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Family-Run Care", desc: "Personal attention to every order, no matter the size" },
              { title: "Transparent Pricing", desc: "No hidden costs, fair rates for all clients" },
              { title: "Fast Turnaround", desc: "Same-day dispatch available in Chennai" },
              { title: "Quality Assured", desc: "Every product tested for durability and protection" },
              { title: "Custom Solutions", desc: "Tailored packaging designed for your specific needs" },
              { title: "Eco-Conscious", desc: "100% recyclable materials, sustainable practices" },
            ].map((reason) => (
              <div key={reason.title} className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/40 transition-all">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
