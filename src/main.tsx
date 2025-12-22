import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './index.css';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#dc2626',
          color: 'white',
          padding: '40px',
          fontFamily: 'monospace',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Something went wrong</h1>
          <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = '<div style="background: red; color: white; padding: 40px; font-size: 20px;">ERROR: Root element not found in DOM</div>';
  throw new Error('Failed to find the root element');
}

console.log('✅ Root element found, mounting React...');

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log('✅ React mounted successfully');
} catch (error) {
  console.error('❌ Failed to mount React:', error);
  document.body.innerHTML = `<div style="background: red; color: white; padding: 40px; font-size: 16px; font-family: monospace;"><h1>Failed to mount React</h1><pre>${error}</pre></div>`;
}
