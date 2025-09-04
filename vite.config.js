import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cambia 'paradise-nursery' por el nombre de tu repo si usas GitHub Pages
  base: process.env.GITHUB_PAGES ? '/paradise-nursery/' : '/',
})
