import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/productos': {
        target: 'http://localhost:8081', // Puerto del product-service
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/productos/, ''),
      },
      '/api/cart': {
        target: 'http://localhost:8082', // Puerto del cart-service
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cart/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Carpeta de salida para el build
  },
});