import { Link, useParams, useNavigate } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import products from "@/data/enhanced-products.json";
import { useState } from "react";
import { Star, ShoppingCart, Check, Minus, Plus, ArrowLeft, Package, Shield, Truck } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <button
          onClick={() => navigate("/products")}
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </button>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-muted border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-8"
              suppressHydrationWarning
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <div className="flex items-center gap-2 text-green-600 mb-6">
                <Check className="h-5 w-5" />
                <span className="font-semibold">In Stock ({product.stock} units available)</span>
              </div>
            ) : (
              <div className="text-red-600 font-semibold mb-6">Out of Stock</div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Quantity:</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-border rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                    disabled={!product.inStock}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                    disabled={!product.inStock}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-muted-foreground">
                  Total: ₹{(product.price * quantity).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || added}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {added ? (
                  <>
                    <Check className="h-6 w-6" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-6 w-6" /> Add to Cart
                  </>
                )}
              </button>
              <Link
                to="/cart"
                className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all"
              >
                View Cart
              </Link>
            </div>

            {/* Features */}
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {[
                { icon: Truck, text: "Fast Delivery" },
                { icon: Shield, text: "Quality Assured" },
                { icon: Package, text: "Secure Packaging" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-4">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-3">Specifications:</h3>
              <div className="grid gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
