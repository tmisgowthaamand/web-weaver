import { hydrateRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/react-start';
import { getRouter } from './router';

// Create router instance
const router = getRouter();

// Hydrate the app
hydrateRoot(
  document.getElementById('root')!,
  <StartClient router={router} />
);
