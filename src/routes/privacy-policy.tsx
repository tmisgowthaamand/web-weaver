import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Parveen Packaging" }, { name: "description", content: "How Parveen Packaging handles your data." }] }),
  component: () => (
    <PolicyPage title="Privacy Policy">
      <p>Your privacy is important to us. This policy explains how we collect, use and protect your information.</p>
      <h2>Information We Collect</h2>
      <p>Name, email, phone, shipping address and payment details required to fulfill your orders.</p>
      <h2>How We Use It</h2>
      <p>To process orders, send updates, provide customer support and improve our services.</p>
      <h2>Sharing</h2>
      <p>We never sell your data. We share only with shipping partners and payment processors strictly to fulfill your order.</p>
      <h2>Cookies</h2>
      <p>We use essential cookies for site functionality and analytics cookies to understand usage patterns.</p>
      <h2>Your Rights</h2>
      <p>You can request access, correction or deletion of your data anytime by emailing privacy@parveenpackaging.in.</p>
    </PolicyPage>
  ),
});
