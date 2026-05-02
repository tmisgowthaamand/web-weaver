import { cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Create public directory if it doesn't exist
if (!existsSync('public')) {
  mkdirSync('public', { recursive: true });
}

// Copy dist/client contents to public
cpSync('dist/client', 'public', { recursive: true });

console.log('✓ Copied dist/client to public directory for Vercel');
