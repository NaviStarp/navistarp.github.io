import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://navistarp.github.io',
  build: {
    inlineStylesheets: 'always',
  },
});

