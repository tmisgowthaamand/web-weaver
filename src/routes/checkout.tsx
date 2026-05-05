import { useNavigate } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { CreditCard, Smartphone, Banknote, Building2, Check } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";



type PaymentMethod = "credit" | "debit" | "upi" | "cod";

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  // Redirect to cart if empty - but not when placing order
  useEffect(() => {
    if (cart.length === 0 && !isPlacingOrder) {
      navigate("/cart");
    }
  }, [cart.length, navigate, isPlacingOrder]);

  if (cart.length === 0 && !isPlacingOrder) {
    return null;
  }

  const totalPrice = getTotalPrice();
  const deliveryCharge = totalPrice > 2000 ? 0 : 100;
  const finalTotal = totalPrice + deliveryCharge;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Set flag to prevent redirect during order placement
    setIsPlacingOrder(true);
    
    // Simulate order processing
    const orderId = `ORD${Date.now()}`;
    
    // Navigate to success page
    setTimeout(() => {
      clearCart();
      navigate(`/order-success?orderId=${orderId}&amount=${finalTotal}`);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const paymentMethods = [
    { id: "upi" as PaymentMethod, name: "UPI", icon: Smartphone, desc: "Pay using UPI apps" },
    { id: "credit" as PaymentMethod, name: "Credit Card", icon: CreditCard, desc: "Visa, Mastercard, Amex" },
    { id: "debit" as PaymentMethod, name: "Debit Card", icon: Building2, desc: "All major banks" },
    { id: "cod" as PaymentMethod, name: "Cash on Delivery", icon: Banknote, desc: "Pay when you receive" },
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Address *</label>
                  <textarea
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="House no., Street, Area"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="grid gap-4 mb-6">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${paymentMethod === method.id ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{method.name}</div>
                      <div className="text-sm text-muted-foreground">{method.desc}</div>
                    </div>
                    {paymentMethod === method.id && (
                      <Check className="h-6 w-6 text-primary" />
                    )}
                  </button>
                ))}
              </div>

              {/* Payment Details */}
              {paymentMethod === "upi" && (
                <div>
                  <label className="block text-sm font-semibold mb-2">UPI ID *</label>
                  <input
                    type="text"
                    name="upiId"
                    required={paymentMethod === "upi"}
                    value={formData.upiId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="yourname@upi"
                  />
                </div>
              )}

              {(paymentMethod === "credit" || paymentMethod === "debit") && (
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      required={paymentMethod === "credit" || paymentMethod === "debit"}
                      value={formData.cardNumber}
                      onChange={handleChange}
                      maxLength={16}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      required={paymentMethod === "credit" || paymentMethod === "debit"}
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Name on card"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        required={paymentMethod === "credit" || paymentMethod === "debit"}
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        required={paymentMethod === "credit" || paymentMethod === "debit"}
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "cod" && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> You will pay {formatPrice(finalTotal)} in cash when your order is delivered.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-8 rounded-2xl bg-card border border-border sticky top-24" style={{ boxShadow: "var(--shadow-card)" }}>
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold">{deliveryCharge === 0 ? <span className="text-green-600">FREE</span> : formatPrice(deliveryCharge)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(finalTotal)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
}
