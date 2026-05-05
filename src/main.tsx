import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import './styles.css';

// Import route components
import Index from './routes/index';
import About from './routes/about';
import Products from './routes/products';
import ProductDetail from './routes/product.$id';
import Cart from './routes/cart';
import Checkout from './routes/checkout';
import OrderSuccess from './routes/order-success';
import Contact from './routes/contact';
import Enquiry from './routes/enquiry';
import PrivacyPolicy from './routes/privacy-policy';
import TermsConditions from './routes/terms-conditions';
import ShippingPolicy from './routes/shipping-policy';
import CancellationRefund from './routes/cancellation-refund';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrencyProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
