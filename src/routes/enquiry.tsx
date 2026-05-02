
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Send, CheckCircle2, Clock, MessageSquare, Phone, Mail } from "lucide-react";



export default function Enquiry() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      {/* Header */}
      <section className="py-16" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Request a Bulk Quote</h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your packaging needs and we'll get back to you within 24 hours with a competitive quote. 
            No order is too small or too large — we serve businesses of all sizes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="p-8 rounded-2xl bg-card border-2 border-primary/30" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Enquiry Received Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out to Parveen Packaging Industries. Our team has received your enquiry 
                      and will review your requirements carefully.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 p-6 rounded-xl bg-secondary/50">
                  <h4 className="font-semibold">What happens next?</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Our team will review your requirements within 2-4 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>We'll prepare a detailed quote with pricing and specifications</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>You'll receive our response via email or phone within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>We can arrange samples if needed before you place a bulk order</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setSent(false)} className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all">
                    Submit Another Enquiry
                  </button>
                  <a href="/" className="px-6 py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition-all">
                    Back to Home
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="p-8 rounded-2xl bg-card border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h2 className="text-2xl font-bold mb-6">Fill in Your Details</h2>
                <div className="grid gap-6">
                  <Field label="Full Name" name="name" required placeholder="Enter your full name" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Email Address" name="email" type="email" required placeholder="your@email.com" />
                    <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <Field label="Company Name" name="company" placeholder="Your business name (optional)" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Product Type" name="product" required placeholder="e.g., Shipping box, Mailer, Gift box" />
                    <Field label="Quantity Needed" name="qty" required placeholder="e.g., 500 units, 1000 pieces" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Detailed Requirements *</label>
                    <textarea 
                      name="message" 
                      rows={5} 
                      required 
                      placeholder="Please provide details like dimensions, material preferences, printing requirements, delivery timeline, etc."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" 
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      The more details you provide, the more accurate our quote will be.
                    </p>
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                    <Send className="h-5 w-5" /> Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Response Time */}
            <div className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Quick Response Time</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We typically respond to all enquiries within 24 hours. Urgent requests? Call us directly!
              </p>
              <div className="text-xs text-muted-foreground">
                Mon-Sat: 9:00 AM - 7:00 PM
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-muted-foreground">+91 98765 43210</div>
                  </div>
                </a>
                <a href="mailto:hello@parveenpackaging.in" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-muted-foreground">hello@parveenpackaging.in</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="font-bold text-lg mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Competitive bulk pricing",
                  "Custom packaging solutions",
                  "Fast turnaround times",
                  "Quality guaranteed",
                  "9 years of experience",
                  "500+ satisfied clients"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-2 block" htmlFor={name}>
        {label}{required && " *"}
      </label>
      <input 
        id={name} 
        name={name} 
        type={type} 
        required={required} 
        placeholder={placeholder}
        autoComplete="off"
        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" 
      />
    </div>
  );
}
