import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp('http://localhost:1337/*'),
            handler: 'CacheFirst',
          },
          {
            urlPattern: new RegExp('http://localhost:1337/staled'),
            handler: 'StaleWhileRevalidate',
          }
        ],
      }
    })
  ],
})
