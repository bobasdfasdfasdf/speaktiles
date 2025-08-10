import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['all'], // allow all hosts
    host: true, // listen on all addresses
    port: 5173
  }
})
