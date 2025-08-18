import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './App.tsx';
import './index.css';

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => e.preventDefault());

Sentry.init({
  dsn: 'https://81ccc90ca72193f24ec2ea5ef405d121@o4509617082269696.ingest.us.sentry.io/4509622411853824',
  sendDefaultPii: true,
});

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
