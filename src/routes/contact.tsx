import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";

export default function Contact() {
  const items = [
    { icon: MapPin, title: "Visit Us", lines: ["Vyasarpadi, Chennai", "Tamil Nadu 600039"], color: "from-cyan-400 to-blue-400" },
    { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211"], color: "from-cyan-400 to-teal-400" },
    { icon: Mail, title: "Email Us", lines: ["hello@parveenpackaging.in", "support@parveenpackaging.in"], color: "from-yellow-400 to-orange-400" },
    { icon: Clock, title: "Hours", lines: ["Mon-Fri: 9AM-7PM", "Sat: 10AM-4PM"], color: "from-purple-400 to-pink-400" },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.55 0.18 240 / 0.2)" }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.65 0.16 140 / 0.15)" }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 w-full relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">Reach out to our team for any inquiries or custom packaging needs</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.title === "Call Us" ? "tel:+919876543210" : item.title === "Email Us" ? "mailto:hello@parveenpackaging.in" : "#"}
                  className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
                  style={{ background: "var(--color-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${item.color} mb-5 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white font-bold" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">{item.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {item.lines.map((l) => <div key={l}>{l}</div>)}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black text-white mb-8">Headquarters</h2>
              <div
                className="p-8 rounded-2xl border border-white/10 mb-6"
                style={{ background: "oklch(0.12 0.03 240)" }}
              >
                <h3 className="font-black text-white text-xl mb-4">📍 Address</h3>
                <p className="text-gray-400 leading-relaxed">
                  857/1121, B V Colony 25th Street<br />
                  Vyasarpadi, Chennai<br />
                  Tamil Nadu, 600039<br />
                  India
                </p>
              </div>

              <div
                className="p-8 rounded-2xl border border-white/10"
                style={{ background: "oklch(0.12 0.03 240)" }}
              >
                <h3 className="font-black text-white text-xl mb-4">📞 Quick Contact</h3>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="block text-primary font-bold hover:text-accent transition-colors">
                    +91 98765 43210
                  </a>
                  <a href="mailto:hello@parveenpackaging.in" className="block text-primary font-bold hover:text-accent transition-colors">
                    hello@parveenpackaging.in
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black text-white mb-8">About Us</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Parveen Packaging Industries is a trusted packaging solutions provider serving 500+ businesses across Tamil Nadu since 2017.
                </p>

                <div
                  className="p-6 rounded-2xl border border-primary/30"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.12 0.03 240) 0%, oklch(0.15 0.03 220) 100%)"
                  }}
                >
                  <h3 className="font-black text-white text-lg mb-4">📊 Our Stats</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-400">Clients Served</span><span className="text-primary font-bold">500+</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Boxes Delivered</span><span className="text-accent font-bold">50K+</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Years Active</span><span className="text-primary font-bold">9</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Retention Rate</span><span className="text-accent font-bold">98%</span></div>
                  </div>
                </div>

                <p>
                  With premium quality, fast delivery, and eco-friendly practices, we're your trusted partner for all packaging needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-black text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { q: "What are your business hours?", a: "Mon-Fri: 9AM-7PM, Sat: 10AM-4PM. Appointments available by request." },
              { q: "Do you offer same-day delivery?", a: "Yes! Same-day pickup in Chennai. 2-4 days delivery across Tamil Nadu." },
              { q: "Can I customize packaging?", a: "Absolutely! We specialize in custom solutions tailored to your needs." },
              { q: "Are materials eco-friendly?", a: "Yes, 100% recyclable kraft paper and sustainably sourced materials." },
              { q: "What's the minimum order?", a: "Flexible quantities available. Contact us for your specific needs." },
              { q: "How do I get a quote?", a: "Visit our Enquiry page or call us. Response within 2 hours guaranteed." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                style={{ background: "oklch(0.12 0.03 240)" }}
              >
                <h3 className="font-black text-primary mb-3">Q: {item.q}</h3>
                <p className="text-gray-400 text-sm">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
