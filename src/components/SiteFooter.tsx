import { Link } from "@tanstack/react-router";
import { Package, Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { navLinks } from "./SiteHeader";

const policies = [
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/cancellation-refund", label: "Cancellation & Refund" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 font-bold text-primary mb-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Package className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-lg leading-tight">PARVEEN PACKAGING</div>
                <div className="text-xs text-muted-foreground font-normal">Industries</div>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
              Premium corrugated shipping boxes & packaging solutions for businesses of every size. 
              Trusted by 500+ clients across Tamil Nadu since 2017.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="font-semibold">Established 2017 — 9 Years of Excellence</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Proprietor:</strong> Mohamedsulaiman Ajmulkhan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" /> 
                <span className="text-muted-foreground">
                  857/1121, B V Colony 25th Street,<br />
                  Vyasarpadi, Chennai,<br />
                  Tamil Nadu 600039
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" /> 
                <div>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 98765 43210
                  </a>
                  <span className="text-xs text-muted-foreground">Mon–Sat, 9am – 7pm</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" /> 
                <div>
                  <a href="mailto:hello@parveenpackaging.in" className="text-muted-foreground hover:text-primary transition-colors block">
                    hello@parveenpackaging.in
                  </a>
                  <a href="mailto:support@parveenpackaging.in" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    support@parveenpackaging.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Parveen Packaging Industries. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {policies.map((p) => (
                <Link key={p.to} to={p.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {p.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
