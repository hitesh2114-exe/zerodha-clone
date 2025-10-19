import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true, // ✅ default for Vite, Render expects this
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional, for cleaner imports
    },
  },
  base: './', // ✅ ensures relative paths for static hosting
})