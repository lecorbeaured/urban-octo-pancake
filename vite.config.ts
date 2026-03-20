import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins:[react()],
  build: {
    target: 'es2022',
    polyfillDynamicImport: false,
    rollupOptions: {},
    // ensure esbuild target is modern so top-level await is allowed
    minify: false
  },
  esbuild: {
    target: 'es2022'
  }
})
