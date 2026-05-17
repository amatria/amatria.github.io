// @ts-check
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://amatria.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), preact()],
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static',
});
