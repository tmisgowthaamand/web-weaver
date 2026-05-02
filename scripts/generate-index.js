import { writeFileSync, readdirSync } from 'fs';

// Find the main JS bundle
const assetsDir = 'dist/client/assets';
const files = readdirSync(assetsDir);
const mainBundle = files.find(f => f.startsWith('index-') && f.endsWith('.js') && !f.includes('CKevi7Se'));
const cssFile = files.find(f => f.endsWith('.css'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Premium corrugated shipping boxes & packaging solutions for businesses">
  <title>Parveen Packaging Industries</title>
  <link rel="icon" href="/favicon.ico">
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''}
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${mainBundle}"></script>
</body>
</html>`;

writeFileSync('dist/client/index.html', html);
console.log('✓ Generated index.html for Vercel deployment');
