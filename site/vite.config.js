import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Servi par GitHub Pages sous https://mponanwess.github.io/me/
  base: '/me/',
  plugins: [tailwindcss()],
})
