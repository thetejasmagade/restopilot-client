import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update the service worker when new version is available
      manifest: {
        name: 'Your App Name',
        short_name: 'App Name',
        description: 'A description of your app',
        theme_color: '#ffffff', // Set the theme color
        background_color: '#ffffff', // Background color of the app
        start_url: '/',
        display: 'standalone', // Fullscreen or standalone mode for PWA
        orientation: 'portrait', // Set screen orientation
        icons: [
          {
            src: '/pwa-images/android/192x192.png', // Path to icon images
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-images/android/512x512.png', // Path to icon images
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-images/android/256x256.png', // Path to icon images
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
