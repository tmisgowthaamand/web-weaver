import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/cancellation-refund")({
  head: () => ({ meta: [{ title: "Cancellation & Refund — BoxCraft" }, { name: "description", content: "Cancellation and refund policy." }] }),
  component: () => (
    <PolicyPage title="Cancellation & Refund">
      <p>We want you to be happy with your order. Please review our cancellation and refund terms below.</p>
      <h2>Order Cancellation</h2>
      <p>Orders can be cancelled within 12 hours of placing them, provided they have not yet been dispatched.</p>
      <h2>Returns</h2>
      <p>Unused, sealed packaging in original condition can be returned within 7 days of delivery. Custom-printed orders are non-returnable.</p>
      <h2>Refunds</h2>
      <p>Approved refunds are processed within 5–7 business days to your original payment method.</p>
      <h2>Damaged Goods</h2>
      <p>If your order arrives damaged, share photos within 48 hours of delivery and we will arrange a free replacement.</p>
    </PolicyPage>
  ),
});
