import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './' // Using relative base path to ensure it works in any deployment folder (e.g. GitHub Pages or university servers)
})
