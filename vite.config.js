import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Production is served from domain root (https://www.rovaip.com/)
  // so base path should be '/' (or omitted).
  base: '/',
})
