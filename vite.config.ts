import { defineConfig } from 'vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: [
          '**/*.{js,css,html,png,svg,jpg,jpeg}' // Pre-cache all important assets
        ],
        runtimeCaching: [
          {
            // Match requests for images, fonts, and other static resources
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|eot|ttf|woff|woff2)$/,
            handler: 'CacheFirst', // Use cache first, then network if not available
            options: {
              cacheName: 'images-fonts-static',
              expiration: {
                maxEntries: 100, // Maximum number of entries in the cache
                maxAgeSeconds: 30 * 24 * 60 * 60 // Cache for 30 days
              },
              cacheableResponse: {
                statuses: [0, 200] // Cache successful and opaque responses
              }
            }
          },
          {
            // Match navigation requests for HTML (single-page or app-shell)
            urlPattern: /\/$/,
            handler: 'NetworkFirst', // Try network first, then cache if offline
            options: {
              cacheName: 'html-cache'
            }
          }
        ]
      },
      devOptions: {
        enabled: true // Enable service worker in development for testing
      },
      // Specify the path to your custom service worker file
      // (relative to the project root)
      srcDir: path.resolve(__dirname, './src'),
      filename: 'service-worker.js', // Custom service worker file
      manifest: {
        short_name: 'Trackademic',
        name: 'Trackademic - Your Academic Tracker',
        icons: [
          {
            src: 'images/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'images/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'images/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'images/screenshots/home.png',
            sizes: '932x430',
            type: 'image/png',
            label: 'Home Page'
          },
          {
            src: 'images/screenshots/login.png',
            sizes: '932x430',
            type: 'image/png',
            label: 'Tasks Overview'
          }
        ],
        start_url: '.',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        theme_color: '#317EFB',
        description:
          'A web app to track and manage your academic tasks efficiently.',
        orientation: 'portrait'
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
