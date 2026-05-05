import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";



export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { formatPrice } = useCurrency();

  if (cart.length === 0) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/50 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Add some products to your cart to get started
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Browse Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const totalPrice = getTotalPrice();
  const deliveryCharge = totalPrice > 2000 ? 0 : 100;
  const finalTotal = totalPrice + deliveryCharge;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-semibold"
          >
            <Trash2 className="h-5 w-5" />
            Clear All
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {formatPrice(item.price)}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-semibold"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                  <p className="text-2xl font-bold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="p-8 rounded-2xl bg-card border border-border sticky top-24"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Charges</span>
                  <span className="font-semibold">
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      formatPrice(deliveryCharge)
                    )}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add {formatPrice(2000 - totalPrice)} more for FREE delivery
                  </p>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
              </div>
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Proceed to Checkout <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border font-semibold hover:bg-secondary transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
