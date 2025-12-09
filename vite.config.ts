import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('jspdf') || id.includes('html2canvas')) {
              return 'pdf-vendor';
            }
            if (id.includes('react-router-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'react-vendor';
            }
            if (id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
          }
          if (id.includes('src/components/calculator')) {
            return 'calculator';
          }
          if (id.includes('src/components/schema')) {
            return 'schema';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    assetsInlineLimit: 2048,
    target: 'es2020',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    cssMinify: true,
  },
  esbuild: {
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
  },
  server: {
    warmup: {
      clientFiles: ['./src/main.tsx', './src/pages/HomePage.tsx'],
    },
  },
});
