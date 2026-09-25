import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    // Allow the Arena/e2b preview proxy host to reach the dev server.
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
