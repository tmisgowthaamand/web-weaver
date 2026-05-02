import { Link } from "@tanstack/react-router";
import { Package, Mail, Phone, MapPin } from "lucide-react";
import { navLinks } from "./SiteHeader";

const policies = [
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/cancellation-refund", label: "Cancellation & Refund" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-primary">
            <Package className="h-6 w-6 flex-shrink-0" />
            <span className="text-base leading-tight">PARVEEN PACKAGING INDUSTRIES</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium corrugated shipping boxes & packaging solutions for businesses of every size.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Proprietor: Mohamedsulaiman Ajmulkhan
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> <span>857/1121, B V Colony 25th Street,<br />Vyasarpadi, Chennai, Tamil Nadu 600039</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@parveenpackaging.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Parveen Packaging Industries. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {policies.map((p) => (
              <Link key={p.to} to={p.to} className="hover:text-primary transition-colors">
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
