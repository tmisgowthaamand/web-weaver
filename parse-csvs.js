const fs = require('fs');

const csvFiles = [
  './amazon.csv',
  './amazon (1).csv',
  './amazon (2).csv'
];

const products = [];
let pid = 1;

csvFiles.forEach((file) => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Skip header (line 0)
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      // Split by comma but handle quoted fields
      const fields = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < lines[i].length; j++) {
        const char = lines[i][j];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          fields.push(current.replace(/^"(.*)"$/, '$1'));
          current = '';
        } else {
          current += char;
        }
      }
      fields.push(current.replace(/^"(.*)"$/, '$1'));
      
      // Extract product info - image is at index 1, title info at index 9-11
      const image = fields[1] || '';
      const title = (fields[9] || `Product ${pid}`).split(',')[0].substring(0, 100).trim();
      const ratingStr = fields[10] || '4.5';
      const reviewsStr = fields[12] || '0';
      
      if (title && title.length > 5) {
        products.push({
          id: `prod-csv-${pid}`,
          title: title,
          image: image,
          price: 20 + (pid % 30),
          originalPrice: 30 + (pid % 40),
          rating: parseFloat(ratingStr.match(/[\d.]+/)?.[0] || '4.5'),
          reviews: reviewsStr.replace(/[()]/g, '').split(' ')[0] || '0',
          category: 'Boxes & Packaging',
          description: `${title} - Premium quality product perfect for shipping, packaging, and storage solutions.`,
          inStock: true,
          stock: 50 + (pid * 5) % 300
        });
        pid++;
      }
    }
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
  }
});

// Write to JSON
fs.writeFileSync('./src/data/all-products.json', JSON.stringify(products, null, 2));
console.log(`✓ Extracted ${products.length} products to all-products.json`);
console.log('Sample products:', JSON.stringify(products.slice(0, 2), null, 2));
