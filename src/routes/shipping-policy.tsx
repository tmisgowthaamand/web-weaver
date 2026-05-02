import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({ meta: [{ title: "Shipping Policy — BoxCraft" }, { name: "description", content: "BoxCraft shipping policy." }] }),
  component: () => (
    <PolicyPage title="Shipping Policy">
      <p>We dispatch all orders within 1–2 business days from our Mumbai warehouse.</p>
      <h2>Delivery Timeline</h2>
      <p>Standard delivery takes 3–5 business days within India. Remote pin codes may take up to 7 business days.</p>
      <h2>Shipping Charges</h2>
      <p>Shipping is calculated at checkout based on weight and destination. Orders above ₹2,500 ship free across India.</p>
      <h2>Tracking</h2>
      <p>You will receive a tracking link via email and SMS once your order is dispatched.</p>
      <h2>International Shipping</h2>
      <p>We currently ship internationally on a quote basis. Please contact us for details.</p>
    </PolicyPage>
  ),
});
