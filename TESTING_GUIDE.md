# Testing Guide - E-Commerce Features

## Quick Test Checklist

### 1. Test Shopping Cart Flow
1. Go to **Products** page (http://localhost:8080/products)
2. Click on any product to view details
3. Select quantity using +/- buttons
4. Click "Add to Cart"
5. Notice cart icon in header shows item count
6. Click cart icon to view cart
7. In cart page:
   - Try updating quantities with +/- buttons
   - Try removing individual items
   - Try "Clear All" button
   - Verify price calculations

### 2. Test Checkout Flow
1. Add items to cart (if empty)
2. Click "Proceed to Checkout"
3. Fill in shipping information:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Address: 123 Test Street
   - City: Chennai
   - State: Tamil Nadu
   - Pincode: 600001
4. Select a payment method:
   - **UPI**: Enter UPI ID (e.g., test@upi)
   - **Credit/Debit Card**: Enter card details
   - **COD**: No additional details needed
5. Click "Place Order"
6. Verify order success page appears with:
   - Order ID
   - Total amount
   - Order date
   - Next steps information

### 3. Test Enquiry Form
1. Go to **Enquiry** page (http://localhost:8080/enquiry)
2. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Company: Test Company (optional)
   - Product Type: Shipping boxes
   - Quantity: 500 units
   - Requirements: Need custom printed boxes
3. Click "Submit Enquiry"
4. Verify success message appears with:
   - Confirmation message
   - "What happens next" information
   - Option to submit another enquiry

### 4. Test Product Features
1. Go to **Products** page
2. Test category filters:
   - Click "All Products"
   - Click "Shipping Boxes"
   - Click "Mailers"
   - Click "Gift Boxes"
   - Click "Custom"
3. Test search:
   - Type "corrugated" in search box
   - Verify filtered results
4. Test quick add to cart:
   - Click "Add to Cart" on any product card
   - Verify cart count increases

### 5. Test Policy Pages
Visit each policy page and verify content:
1. **Shipping Policy** (http://localhost:8080/shipping-policy)
   - Verify comprehensive shipping information
   - Check delivery timelines
   - Check shipping charges

2. **Cancellation & Refund** (http://localhost:8080/cancellation-refund)
   - Verify cancellation terms
   - Check return policy
   - Check refund process

3. **Privacy Policy** (http://localhost:8080/privacy-policy)
   - Verify data collection information
   - Check user rights
   - Check security measures

4. **Terms & Conditions** (http://localhost:8080/terms-conditions)
   - Verify comprehensive terms
   - Check liability information
   - Check governing law

### 6. Test Responsive Design
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)
4. Verify:
   - Navigation menu works
   - Cart displays correctly
   - Forms are usable
   - Images scale properly

### 7. Test Cart Persistence
1. Add items to cart
2. Refresh the page (F5)
3. Verify cart items are still there
4. Close browser tab
5. Open new tab to http://localhost:8080
6. Verify cart items persist

### 8. Test Navigation
1. Test all header links:
   - Home
   - Products
   - About
   - Enquiry
   - Contact
2. Test footer links:
   - All policy pages
   - Contact information
3. Test breadcrumb navigation
4. Test back buttons

## Expected Behaviors

### Cart
- ✅ Items persist after page refresh
- ✅ Cart count updates in header
- ✅ Quantities can be updated
- ✅ Items can be removed
- ✅ Total price calculates correctly
- ✅ Free shipping on orders above ₹2,000

### Checkout
- ✅ Form validation works
- ✅ Payment method selection works
- ✅ Order summary displays correctly
- ✅ Order placement redirects to success page
- ✅ Cart clears after order placement

### Products
- ✅ All products display with images
- ✅ Filters work correctly
- ✅ Search works correctly
- ✅ Product details page shows full information
- ✅ Add to cart works from both listing and detail pages

### Forms
- ✅ Required fields are validated
- ✅ Email format is validated
- ✅ Phone format is validated
- ✅ Success messages appear after submission

## Known Limitations (By Design)

1. **No Backend**: All data is stored in browser localStorage
2. **Dummy Payments**: Payment processing is simulated
3. **No Email**: Email notifications are simulated
4. **No Authentication**: No user login/registration
5. **No Order History**: Orders are not saved after success page

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)

## Performance

- ✅ Build completes without errors
- ✅ No console errors
- ✅ Fast page loads
- ✅ Smooth animations
- ✅ Responsive interactions

## Accessibility

- ✅ Semantic HTML
- ✅ Form labels
- ✅ Alt text on images
- ✅ Keyboard navigation
- ✅ Focus indicators

## Issues to Watch For

1. **LocalStorage Limits**: Browser localStorage has ~5-10MB limit
2. **Hydration Warnings**: Some warnings are from browser extensions (Grammarly)
3. **Linter Warnings**: `bg-gradient-to-br` warnings are false positives

## Quick Fixes

### If cart is not working:
1. Check browser console for errors
2. Clear localStorage: `localStorage.clear()`
3. Refresh page

### If styles look broken:
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Rebuild: `npm run build`

### If routes don't work:
1. Check if dev server is running
2. Restart dev server: `npm run dev`
3. Check console for routing errors

## Success Criteria

All features are working if:
- ✅ Can add products to cart
- ✅ Can update cart quantities
- ✅ Can complete checkout
- ✅ Order success page appears
- ✅ Enquiry form submits successfully
- ✅ All policy pages load with content
- ✅ Cart persists after refresh
- ✅ No console errors
- ✅ Responsive on all screen sizes
