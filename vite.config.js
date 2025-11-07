import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// config de Vite pour un projet React basique
// base: './' permet d'ouvrir dist/index.html directement (chemins relatifs)
export default defineConfig({
  base: './',
  plugins: [react()],
})
