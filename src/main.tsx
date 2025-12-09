// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './index.css';

function renderApp() {
  const container = document.getElementById('root');

  if (!container) {
    console.error('Root container "#root" not found. App cannot mount.');
    return;
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

// Make sure we only run after the DOM is ready
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
