// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yoursite.com',
  base: '/',
  // Enable server-side rendering for dynamic routes
  output: 'static',
  // Configure routes for internationalization
  trailingSlash: 'always',
  // Set up URL pattern for language routes
  routes: [
    {
      // Default route (English)
      path: '/',
      component: './src/pages/index.astro',
      props: { lang: 'en' }
    },
    {
      // English route
      path: '/en',
      component: './src/pages/index.astro',
      props: { lang: 'en' }
    },
    {
      // French route
      path: '/fr',
      component: './src/pages/index.astro',
      props: { lang: 'fr' }
    }
  ],
  // Configure dev server
  server: {
    port: 3000,
    host: true
  }
});