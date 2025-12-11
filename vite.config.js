import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages path - cambia in '/' se usi repository user site (rickdomascomat.github.io)
  base: '/untitled/',
  plugins: [react()],
})
