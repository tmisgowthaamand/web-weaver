import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Parveen Packaging" }, { name: "description", content: "Terms governing use of Parveen Packaging." }] }),
  component: () => (
    <PolicyPage title="Terms & Conditions">
      <p>By using this website and placing an order, you agree to the terms outlined below.</p>
      <h2>Use of Site</h2>
      <p>You agree to use this site for lawful purposes only and not to misuse the content or services provided.</p>
      <h2>Pricing</h2>
      <p>All prices are listed in INR and inclusive of applicable taxes unless stated otherwise. Prices may change without notice.</p>
      <h2>Orders</h2>
      <p>We reserve the right to refuse or cancel any order at our discretion, with a full refund in such cases.</p>
      <h2>Intellectual Property</h2>
      <p>All content, logos and product imagery are property of Parveen Packaging and may not be reused without permission.</p>
      <h2>Limitation of Liability</h2>
      <p>Parveen Packaging is not liable for indirect or consequential damages arising from use of products beyond their intended purpose.</p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of India. Disputes are subject to the jurisdiction of Mumbai courts.</p>
    </PolicyPage>
  ),
});
