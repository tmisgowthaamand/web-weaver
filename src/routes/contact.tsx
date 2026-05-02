import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Clock, MessageCircle, User, Building2, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parveen Packaging Industries" },
      { name: "description", content: "Get in touch with the Parveen Packaging team for orders, support or partnerships." },
      { property: "og:title", content: "Contact — Parveen Packaging Industries" },
      { property: "og:description", content: "Get in touch with the Parveen Packaging team for orders, support or partnerships." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, title: "Visit Our Workshop", lines: ["857/1121, B V Colony 25th Street", "Vyasarpadi, Chennai", "Tamil Nadu 600039"], color: "text-blue-600" },
    { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211", "Mon–Sat, 9am – 7pm"], color: "text-green-600" },
    { icon: Mail, title: "Email Us", lines: ["hello@parveenpackaging.in", "support@parveenpackaging.in", "Quick response guaranteed"], color: "text-purple-600" },
    { icon: Clock, title: "Business Hours", lines: ["Mon–Fri: 9:00 AM – 7:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"], color: "text-orange-600" },
  ];
  
  return (
    <SiteLayout>
      {/* Header */}
      <section className="py-16" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products or need assistance with your order? We're here to help! 
            Reach out through any of the channels below and we'll respond promptly.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Contact Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4`}>
                <it.icon className={`h-7 w-7 ${it.color}`} />
              </div>
              <h3 className="font-bold text-lg mb-3">{it.title}</h3>
              <div className="text-sm text-muted-foreground space-y-1.5">
                {it.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* About Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">About Our Business</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Parveen Packaging Industries</strong> is proudly run by proprietor 
                  <strong className="text-foreground"> Mohamedsulaiman Ajmulkhan</strong>, who founded the business in 2017 
                  with a vision to provide quality packaging solutions to businesses of all sizes.
                </p>
                <p>
                  Over the past <strong className="text-foreground">9 years</strong>, we've built a reputation for reliability, 
                  quality, and personalized service. Our workshop in Vyasarpadi, Chennai, is equipped with modern machinery 
                  while maintaining the family-run, hands-on approach that our clients appreciate.
                </p>
                <p>
                  Whether you're a small startup or an established business, we treat every order with the same care and 
                  attention to detail. Visit us to see our production process, discuss your packaging needs, or simply 
                  learn more about what we do.
                </p>
              </div>
            </div>

            {/* Proprietor Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Mohamedsulaiman Ajmulkhan</h3>
                  <p className="text-sm text-muted-foreground mb-3">Founder & Proprietor</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With 9 years of experience in the packaging industry, committed to delivering quality 
                    products and exceptional customer service to every client.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Location Details */}
            <div className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visit Our Workshop</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <div className="font-semibold text-foreground mb-1">Address</div>
                  <div className="text-sm">
                    857/1121, B V Colony 25th Street<br />
                    Vyasarpadi, Chennai<br />
                    Tamil Nadu 600039, India
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Landmark</div>
                  <div className="text-sm">Near Vyasarpadi Railway Station</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Parking</div>
                  <div className="text-sm">Street parking available</div>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=857/1121,+B+V+Colony+25th+Street,+Vyasarpadi,+Chennai,+Tamil+Nadu+600039" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>

            {/* Quick Contact */}
            <div className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Primary</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                  </div>
                </a>
                <a href="tel:+919876543211" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Alternate</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43211</div>
                  </div>
                </a>
                <a href="mailto:hello@parveenpackaging.in" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">General Enquiries</div>
                    <div className="text-sm text-muted-foreground">hello@parveenpackaging.in</div>
                  </div>
                </a>
                <a href="mailto:support@parveenpackaging.in" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Customer Support</div>
                    <div className="text-sm text-muted-foreground">support@parveenpackaging.in</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Quick answers to common questions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { q: "What are your business hours?", a: "We're open Monday to Friday from 9:00 AM to 7:00 PM, and Saturday from 10:00 AM to 4:00 PM. We're closed on Sundays." },
              { q: "Do you offer same-day delivery?", a: "Yes! We offer same-day pickup for orders placed before 2:00 PM in Chennai. Delivery across Tamil Nadu typically takes 2-4 days." },
              { q: "What's the minimum order quantity?", a: "We cater to orders of all sizes. Whether you need 50 boxes or 5,000, we're happy to help. Contact us for bulk pricing." },
              { q: "Can I visit your workshop?", a: "Absolutely! We welcome clients to visit our workshop in Vyasarpadi. You can see our production process and discuss your requirements in person." },
              { q: "Do you provide custom packaging?", a: "Yes, we specialize in custom packaging solutions. Share your requirements and we'll design packaging that fits your specific needs." },
              { q: "How quickly do you respond to enquiries?", a: "We typically respond to all enquiries within 24 hours. For urgent requests, please call us directly during business hours." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
