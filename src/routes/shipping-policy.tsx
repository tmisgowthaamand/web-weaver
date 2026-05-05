
import { PolicyPage } from "@/components/PolicyPage";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function ShippingPolicy() {
  const { formatPrice } = useCurrency();
  return (
    <PolicyPage title="Shipping Policy">
      <p>At Parveen Packaging Industries, we are committed to delivering your packaging products safely and on time. This policy outlines our shipping procedures, timelines, and charges.</p>
      
      <h2>Order Processing Time</h2>
      <p>All orders are processed within 1-2 business days (Monday to Saturday, excluding public holidays) after receiving your order confirmation email. You will receive a notification with tracking information once your order has been dispatched from our facility.</p>
      
      <h2>Delivery Timeline</h2>
      <p>Standard delivery within India typically takes 3-5 business days from the date of dispatch. However, delivery times may vary based on your location:</p>
      <ul>
        <li><strong>Metro Cities:</strong> 2-3 business days</li>
        <li><strong>Tier 2 Cities:</strong> 3-5 business days</li>
        <li><strong>Remote Areas:</strong> 5-7 business days</li>
      </ul>
      <p>Please note that these are estimated delivery times and may be affected by factors beyond our control, such as weather conditions, courier delays, or local holidays.</p>
      
      <h2>Shipping Charges</h2>
      <p>Shipping charges are calculated at checkout based on the weight of your order and delivery location. Our shipping rates are competitive and transparent:</p>
      <ul>
        <li>Orders above {formatPrice(2000)} qualify for <strong>FREE shipping</strong> across India</li>
        <li>Orders below {formatPrice(2000)} incur a flat shipping fee of {formatPrice(100)}</li>
        <li>Bulk orders may have special shipping arrangements - please contact us for details</li>
      </ul>
      
      <h2>Order Tracking</h2>
      <p>Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this tracking number to monitor your shipment's progress on the courier partner's website. If you have any questions about your shipment, please contact our customer support team.</p>
      
      <h2>Delivery Partners</h2>
      <p>We work with reliable courier partners including Blue Dart, DTDC, and India Post to ensure safe and timely delivery of your orders. The courier partner is selected based on your location and order specifications.</p>
      
      <h2>Delivery Attempts</h2>
      <p>Our courier partners typically make 2-3 delivery attempts. If delivery is unsuccessful after multiple attempts, the package will be returned to our facility. In such cases, we will contact you to arrange redelivery, which may incur additional shipping charges.</p>
      
      <h2>International Shipping</h2>
      <p>We currently offer international shipping on a case-by-case basis for bulk orders. International shipping costs, customs duties, and delivery timelines vary by destination country. Please contact us at hello@parveenpackaging.in with your requirements for a custom quote.</p>
      
      <h2>Damaged or Lost Shipments</h2>
      <p>While we take utmost care in packaging your orders, if your shipment arrives damaged or goes missing during transit, please contact us within 48 hours of the expected delivery date. We will work with our courier partners to resolve the issue and arrange for a replacement or refund as appropriate.</p>
      
      <h2>Address Changes</h2>
      <p>If you need to change your delivery address after placing an order, please contact us immediately. We can modify the address only if the order has not yet been dispatched. Once dispatched, address changes must be coordinated directly with the courier partner using your tracking number.</p>
      
      <h2>Contact Us</h2>
      <p>For any shipping-related queries, please reach out to us:</p>
      <ul>
        <li>Email: hello@parveenpackaging.in</li>
        <li>Phone: +91 98765 43210</li>
        <li>Business Hours: Monday to Saturday, 9:00 AM - 7:00 PM</li>
      </ul>
    </PolicyPage>
  );
}

