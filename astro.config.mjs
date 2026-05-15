// @ts-check
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://amatria.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static',
});
