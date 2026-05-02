import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/cancellation-refund")({
  head: () => ({ meta: [{ title: "Cancellation & Refund — Parveen Packaging" }, { name: "description", content: "Cancellation and refund policy." }] }),
  component: () => (
    <PolicyPage title="Cancellation & Refund Policy">
      <p>At Parveen Packaging Industries, customer satisfaction is our priority. We understand that sometimes you may need to cancel an order or request a refund. This policy outlines the terms and conditions for cancellations and refunds.</p>
      
      <h2>Order Cancellation</h2>
      <p>You can cancel your order under the following conditions:</p>
      <ul>
        <li><strong>Before Dispatch:</strong> Orders can be cancelled free of charge within 12 hours of placing the order, provided they have not been dispatched from our facility.</li>
        <li><strong>After Dispatch:</strong> Once an order has been dispatched, it cannot be cancelled. However, you may refuse delivery and the order will be returned to us, subject to our return policy.</li>
      </ul>
      <p>To cancel an order, please contact us immediately at hello@parveenpackaging.in or call +91 98765 43210 with your order number.</p>
      
      <h2>Return Policy</h2>
      <p>We accept returns under the following conditions:</p>
      <ul>
        <li>Products must be unused, unopened, and in their original sealed packaging</li>
        <li>Returns must be initiated within 7 days of delivery</li>
        <li>Products must be in resalable condition with all original tags and labels intact</li>
        <li>Custom-printed or personalized packaging orders are non-returnable and non-refundable</li>
        <li>Bulk orders (above 1000 units) may have different return terms - please contact us for details</li>
      </ul>
      
      <h2>How to Initiate a Return</h2>
      <p>To initiate a return, please follow these steps:</p>
      <ol>
        <li>Contact our customer support team within 7 days of receiving your order</li>
        <li>Provide your order number and reason for return</li>
        <li>Our team will review your request and provide return instructions if approved</li>
        <li>Pack the items securely in their original packaging</li>
        <li>Ship the items back to the address provided by our team</li>
      </ol>
      <p>Return shipping costs are the responsibility of the customer unless the return is due to a defect or error on our part.</p>
      
      <h2>Refund Process</h2>
      <p>Once we receive and inspect your returned items, we will process your refund according to the following timeline:</p>
      <ul>
        <li>Inspection and approval: 2-3 business days after receiving the returned items</li>
        <li>Refund processing: 5-7 business days after approval</li>
        <li>Bank credit: 3-5 business days depending on your bank or payment provider</li>
      </ul>
      <p>Refunds will be credited to your original payment method. If you paid via Cash on Delivery, we will process a bank transfer to your provided account details.</p>
      
      <h2>Partial Refunds</h2>
      <p>In some cases, only partial refunds may be granted:</p>
      <ul>
        <li>Items showing signs of use or damage not caused during shipping</li>
        <li>Items returned more than 7 days after delivery</li>
        <li>Items missing original packaging or accessories</li>
      </ul>
      
      <h2>Damaged or Defective Products</h2>
      <p>If you receive damaged or defective products, please notify us within 48 hours of delivery:</p>
      <ul>
        <li>Take clear photos of the damaged items and packaging</li>
        <li>Email the photos to hello@parveenpackaging.in with your order number</li>
        <li>Our team will review your claim and arrange for a free replacement or full refund</li>
        <li>Return shipping for damaged/defective items will be covered by us</li>
      </ul>
      
      <h2>Wrong Items Delivered</h2>
      <p>If you receive incorrect items, please contact us immediately. We will arrange for the correct items to be shipped to you at no additional cost and provide instructions for returning the wrong items.</p>
      
      <h2>Non-Refundable Items</h2>
      <p>The following items are non-refundable:</p>
      <ul>
        <li>Custom-printed or personalized packaging</li>
        <li>Items marked as "Final Sale" or "Clearance"</li>
        <li>Gift cards or promotional vouchers</li>
        <li>Items damaged due to misuse or improper storage</li>
      </ul>
      
      <h2>Exchanges</h2>
      <p>We currently do not offer direct exchanges. If you need a different product, please return the original item for a refund and place a new order for the desired product.</p>
      
      <h2>Contact Us</h2>
      <p>For any questions regarding cancellations, returns, or refunds, please contact us:</p>
      <ul>
        <li>Email: hello@parveenpackaging.in</li>
        <li>Phone: +91 98765 43210</li>
        <li>Business Hours: Monday to Saturday, 9:00 AM - 7:00 PM</li>
      </ul>
    </PolicyPage>
  ),
});
