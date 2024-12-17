import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bolyosaniko.com',
  base: '',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          hu: 'hu-HU',
        },
      },
    }),
  ]
});