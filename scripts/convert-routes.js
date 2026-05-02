import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const routesDir = 'src/routes';
const files = readdirSync(routesDir).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');

files.forEach(file => {
  const filePath = join(routesDir, file);
  let content = readFileSync(filePath, 'utf-8');
  
  // Replace TanStack Router imports with React Router
  content = content.replace(
    /import\s+{[^}]*}\s+from\s+"@tanstack\/react-router";/g,
    (match) => {
      if (match.includes('Link')) {
        return 'import { Link } from "react-router-dom";';
      }
      if (match.includes('useNavigate')) {
        return 'import { useNavigate } from "react-router-dom";';
      }
      if (match.includes('useParams')) {
        return 'import { useParams } from "react-router-dom";';
      }
      if (match.includes('useSearch')) {
        return 'import { useSearchParams } from "react-router-dom";';
      }
      return '';
    }
  );
  
  // Remove createFileRoute exports and extract component
  const routeMatch = content.match(/export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?component:\s*(\w+)/);
  const inlineMatch = content.match(/export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?component:\s*\(\)\s*=>\s*\(/);
  
  if (routeMatch) {
    const componentName = routeMatch[1];
    content = content.replace(/export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?\}\);/, '');
    content = content.replace(new RegExp(`function ${componentName}\\(`), `export default function ${componentName}(`);
  } else if (inlineMatch) {
    // Handle inline components
    content = content.replace(
      /export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?component:\s*\(\)\s*=>\s*\(/,
      'export default function Component() {\n  return ('
    );
    content = content.replace(/\s*\}\);[\s]*$/, '\n  );\n}');
  }
  
  writeFileSync(filePath, content);
  console.log(`✓ Converted ${file}`);
});

console.log('✓ All routes converted!');
