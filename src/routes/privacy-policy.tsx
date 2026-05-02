import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Parveen Packaging" }, { name: "description", content: "How Parveen Packaging handles your data." }] }),
  component: () => (
    <PolicyPage title="Privacy Policy">
      <p>At Parveen Packaging Industries, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or services.</p>
      <p><strong>Last Updated:</strong> January 2026</p>
      
      <h2>Information We Collect</h2>
      <p>We collect information that you provide directly to us and information that is automatically collected when you use our website:</p>
      
      <h3>Personal Information You Provide</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
        <li><strong>Order Information:</strong> Shipping address, billing address, and payment details when you place an order</li>
        <li><strong>Communication Information:</strong> Information you provide when you contact us, submit enquiries, or participate in surveys</li>
        <li><strong>Business Information:</strong> Company name, GST number, and business details for bulk orders</li>
      </ul>
      
      <h3>Automatically Collected Information</h3>
      <ul>
        <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
        <li><strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, and browsing patterns</li>
        <li><strong>Location Information:</strong> General geographic location based on IP address</li>
        <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li><strong>Order Processing:</strong> To process and fulfill your orders, send order confirmations, and provide shipping updates</li>
        <li><strong>Customer Service:</strong> To respond to your enquiries, provide customer support, and resolve issues</li>
        <li><strong>Communication:</strong> To send you important updates about your orders, account, and our services</li>
        <li><strong>Marketing:</strong> To send promotional emails about new products, special offers, and updates (you can opt-out anytime)</li>
        <li><strong>Improvement:</strong> To analyze usage patterns, improve our website, and enhance user experience</li>
        <li><strong>Security:</strong> To detect and prevent fraud, unauthorized access, and other illegal activities</li>
        <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
      </ul>
      
      <h2>How We Share Your Information</h2>
      <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our business (shipping partners, payment processors, hosting providers). These providers are contractually obligated to protect your information.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the new owner</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation, or to protect our rights and safety</li>
        <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information with specific third parties</li>
      </ul>
      
      <h2>Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
      <ul>
        <li>Secure Socket Layer (SSL) encryption for data transmission</li>
        <li>Secure servers with restricted access</li>
        <li>Regular security audits and updates</li>
        <li>Employee training on data protection and privacy</li>
        <li>Payment information is processed through PCI-DSS compliant payment gateways</li>
      </ul>
      <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
      
      <h2>Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to enhance your browsing experience:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for website functionality, such as shopping cart and checkout processes</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website to improve user experience</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
        <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits</li>
      </ul>
      <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
      
      <h2>Data Retention</h2>
      <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy:</p>
      <ul>
        <li>Account information: Until you request deletion or close your account</li>
        <li>Order information: For 7 years to comply with tax and accounting regulations</li>
        <li>Marketing communications: Until you unsubscribe or request removal</li>
        <li>Analytics data: Typically aggregated and anonymized after 24 months</li>
      </ul>
      
      <h2>Your Rights and Choices</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
        <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
        <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails using the link in our emails</li>
        <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
        <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
      </ul>
      <p>To exercise these rights, please contact us at privacy@parveenpackaging.in</p>
      
      <h2>Children's Privacy</h2>
      <p>Our website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
      
      <h2>Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
      
      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending you an email. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> privacy@parveenpackaging.in</li>
        <li><strong>Phone:</strong> +91 98765 43210</li>
        <li><strong>Address:</strong> Parveen Packaging Industries, Chennai, India</li>
        <li><strong>Business Hours:</strong> Monday to Saturday, 9:00 AM - 7:00 PM</li>
      </ul>
    </PolicyPage>
  ),
});
