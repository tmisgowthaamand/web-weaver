import { Link, useLocation } from "react-router-dom";
import { Package, Menu, X, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const [mounted, setMounted] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setMounted(true);
    setTotalItems(getTotalItems());
  }, [getTotalItems]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 font-bold text-primary hover:opacity-80 transition-opacity">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <Package className="h-7 w-7 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base leading-tight tracking-tight">PARVEEN PACKAGING</div>
            <div className="text-xs text-muted-foreground font-normal">Industries</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to || (l.to === "/" && location.pathname === "/");
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/cart"
            className="relative px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-all flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
        <button
          className="md:hidden p-2.5 text-foreground hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg px-4 py-4 flex flex-col gap-2">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Cart
            </span>
            {mounted && totalItems > 0 && (
              <span className="bg-accent text-accent-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      )}
    </header>
  );
}
