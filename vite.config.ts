import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// NOTE:
// The previous config aggressively split vendor chunks (react, framer, lucide, etc.)
// and excluded `lucide-react` from optimizeDeps pre-bundling. A production crash
// showed `Cannot read properties of undefined (reading 'forwardRef')` which
// indicates `React` was undefined inside a vendor chunk referencing
// `React.forwardRef` (lucide icons use that). Custom chunking + exclusion can
// sometimes lead to timing / circular resolution issues in rare edge cases or
// with CDN/runtime caching of partially updated chunks. We revert to a simpler
// config letting Rollup decide chunk boundaries to ensure dependency ordering.
// If size analysis is needed later we can re-introduce controlled chunking.

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'src/knowledge-hub/*', dest: 'knowledge-hub' }],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    // Default Rollup chunking (manualChunks removed)
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
