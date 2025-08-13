import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'src/knowledge-hub/*', dest: 'knowledge-hub' }],
    }),
  ],
  optimizeDeps: {
    // Remove the exclusion of lucide-react to allow proper optimization
  },
  build: {
    chunkSizeWarningLimit: 600, // Increase the warning limit to 600kb
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Include lucide-react in the main vendor chunk for better compatibility
            return 'vendor'; // all other node_modules
          }

          // Feature-based chunks
          if (id.includes('/components/gallery/')) {
            return 'components-gallery';
          }
          if (id.includes('/components/layout/')) {
            return 'components-layout';
          }
          if (id.includes('/components/common/')) {
            return 'components-common';
          }
          if (id.includes('/pages/')) {
            return 'pages';
          }
          if (id.includes('/contexts/')) {
            return 'contexts';
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
