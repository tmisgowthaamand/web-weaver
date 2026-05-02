import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CheckCircle2, Package, Mail, Phone, Home } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/order-success")({
  head: () => ({
    meta: [
      { title: "Order Successful — Parveen Packaging Industries" },
      { name: "description", content: "Your order has been placed successfully" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => {
    return {
      orderId: (search.orderId as string) || "",
      amount: (search.amount as number) || 0,
    };
  },
  component: OrderSuccess,
});

function OrderSuccess() {
  const navigate = useNavigate();
  const { orderId, amount } = Route.useSearch();

  useEffect(() => {
    // Redirect to home if no order data
    if (!orderId || !amount) {
      navigate({ to: "/" });
    }
  }, [orderId, amount, navigate]);

  if (!orderId || !amount) {
    return null;
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you for your order. We've received your payment and will process your order shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="p-8 rounded-2xl bg-card border border-border mb-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <h2 className="text-2xl font-bold mb-6">Order Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono font-bold text-lg">{orderId}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">Total Amount</span>
              <span className="font-bold text-2xl text-primary">₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Order Date</span>
              <span className="font-semibold">January 2026</span>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-8">
          <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Order Confirmation Email</h4>
                <p className="text-sm text-muted-foreground">
                  You'll receive a confirmation email with your order details within a few minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Order Processing</h4>
                <p className="text-sm text-muted-foreground">
                  We'll prepare your order within 1-2 business days and send you tracking information.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Need Help?</h4>
                <p className="text-sm text-muted-foreground">
                  Contact us at +91 98765 43210 or hello@parveenpackaging.in for any questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 mb-8">
          <h4 className="font-semibold text-blue-900 mb-2">📦 Estimated Delivery</h4>
          <p className="text-sm text-blue-800">
            Your order will be delivered within 3-5 business days. You'll receive tracking details via email and SMS once shipped.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>
          <button
            onClick={() => navigate({ to: "/products" })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border font-bold hover:bg-secondary transition-all"
          >
            Continue Shopping
          </button>
        </div>

        {/* Thank You Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Thank you for choosing <span className="font-semibold text-foreground">Parveen Packaging Industries</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Serving businesses with quality packaging solutions since 2017
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
