import { readFileSync, writeFileSync } from 'fs';

// Read all CSV files
const csv1 = readFileSync('amazon.csv', 'utf-8');
const csv2 = readFileSync('amazon (1).csv', 'utf-8');
const csv3 = readFileSync('amazon (2).csv', 'utf-8');

function parseCSV(csvText) {
  const lines = csvText.split('\n');
  const headers = lines[0].split('","').map(h => h.replace(/^"|"$/g, ''));
  const products = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    
    const values = lines[i].split('","').map(v => v.replace(/^"|"$/g, ''));
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    // Extract product info - the title is in column 6 (a-link-normal href 3)
    const title = row['a-size-base'] || row['a-link-normal'] || '';
    const priceText = row['a-color-base'] || '';
    const image = row['s-image src'] || '';
    const rating = row['a-icon-alt'] || '';
    const reviews = row['a-size-mini'] || '';
    
    // Skip if title is too short or generic
    if (!title || title.length < 20 || title.includes('Leave ad') || title.includes('Sponsored')) {
      continue;
    }
    
    // Only add if has title and price
    if (title && priceText && priceText.includes('INR')) {
      // Extract price from INR format
      const priceMatch = priceText.match(/INR\s*([\d,]+\.?\d*)/);
      if (priceMatch) {
        const price = parseFloat(priceMatch[1].replace(/,/g, ''));
        
        // Extract rating
        const ratingMatch = rating.match(/([\d.]+)\s*out of/);
        const ratingValue = ratingMatch ? parseFloat(ratingMatch[1]) : 4.5;
        
        // Extract review count
        const reviewMatch = reviews.match(/\(([^)]+)\)/);
        const reviewCount = reviewMatch ? reviewMatch[1] : '50+';
        
        products.push({
          title,
          price,
          image,
          rating: ratingValue,
          reviews: reviewCount
        });
      }
    }
  }
  
  return products;
}

// Parse all CSVs
const allProducts = [
  ...parseCSV(csv1),
  ...parseCSV(csv2),
  ...parseCSV(csv3)
];

// Remove duplicates based on title
const uniqueProducts = [];
const seenTitles = new Set();

allProducts.forEach(product => {
  if (!seenTitles.has(product.title)) {
    seenTitles.add(product.title);
    uniqueProducts.push(product);
  }
});

// Generate smart descriptions and categorize
const categories = {
  'Shipping Boxes': ['shipping', 'corrugated', 'cardboard', 'mailer', 'literature'],
  'Gift Boxes': ['gift', 'present', 'magnetic', 'collapsible', 'wedding', 'birthday'],
  'Small Boxes': ['small', '6x4', '9x6', 'mini'],
  'Large Boxes': ['large', '12x9', '13x9', '11x8'],
  'Specialty Boxes': ['black', 'white', 'kraft', 'recyclable']
};

function categorizeProduct(title) {
  const lowerTitle = title.toLowerCase();
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerTitle.includes(keyword))) {
      return category;
    }
  }
  return 'Packaging Boxes';
}

function generateDescription(title) {
  const lowerTitle = title.toLowerCase();
  
  // Extract dimensions
  const dimMatch = title.match(/(\d+)\s*x\s*(\d+)\s*x\s*(\d+)/i);
  const dimensions = dimMatch ? `${dimMatch[1]}"×${dimMatch[2]}"×${dimMatch[3]}"` : '';
  
  // Extract quantity
  const qtyMatch = title.match(/(\d+)\s*(pack|set|pcs)/i);
  const quantity = qtyMatch ? `${qtyMatch[1]}-pack` : '';
  
  let desc = '';
  
  if (lowerTitle.includes('shipping') || lowerTitle.includes('mailer')) {
    desc = `Premium corrugated shipping boxes ${dimensions ? `measuring ${dimensions}` : ''}. ${quantity ? `Sold in ${quantity}` : 'Bulk quantity available'}. Perfect for e-commerce businesses, online sellers, and product shipping. Durable construction ensures safe transit.`;
  } else if (lowerTitle.includes('gift')) {
    desc = `Elegant gift boxes ${dimensions ? `sized ${dimensions}` : ''} ideal for special occasions. ${lowerTitle.includes('magnetic') ? 'Features magnetic closure for premium presentation.' : 'Easy assembly design.'} Perfect for weddings, birthdays, corporate gifts, and special events.`;
  } else {
    desc = `High-quality corrugated boxes ${dimensions ? `${dimensions}` : ''} suitable for packaging and shipping. ${quantity ? `Available in ${quantity}` : 'Multiple quantities available'}. Recyclable and eco-friendly material. Ideal for small businesses and personal use.`;
  }
  
  return desc;
}

// Process products
const finalProducts = uniqueProducts.map((product, index) => {
  const category = categorizeProduct(product.title);
  const description = generateDescription(product.title);
  
  // Convert INR to approximate USD for pricing (1 USD ≈ 83 INR)
  const priceInUSD = Math.round(product.price / 83);
  const originalPrice = Math.round(priceInUSD * 1.3); // 30% markup for original price
  
  return {
    id: `prod-${index + 1}`,
    title: product.title.length > 100 ? product.title.substring(0, 97) + '...' : product.title,
    description,
    price: priceInUSD,
    originalPrice,
    image: product.image || 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
    category,
    rating: product.rating,
    reviews: product.reviews,
    inStock: true,
    stock: Math.floor(Math.random() * 200) + 50
  };
});

// Write to JSON file
writeFileSync('src/data/products.json', JSON.stringify(finalProducts, null, 2));

console.log(`✓ Generated ${finalProducts.length} products`);
console.log(`✓ Categories: ${Object.keys(categories).join(', ')}`);
console.log(`✓ Saved to src/data/products.json`);
