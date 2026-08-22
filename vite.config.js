import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This user-site repository is deployed at the root GitHub Pages URL.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
