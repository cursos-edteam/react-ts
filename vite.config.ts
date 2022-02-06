import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/': {
        target: 'https://cursos-edteam.github.io/react-ts/'
      },

      '/detail/:id': {
        target: 'https://cursos-edteam.github.io/react-ts/detail/2'
      }
    }
  },
  plugins: [react()]
})
