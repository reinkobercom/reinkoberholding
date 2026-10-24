// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URLs wie auf der alten Onepage-Seite: /, /impressum, /datenschutz (ohne Schrägstrich am Ende)
export default defineConfig({
  site: 'https://reinkoberholding.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
