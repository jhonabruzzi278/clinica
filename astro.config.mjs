import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';


import mdx from '@astrojs/mdx';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: vercelAdapter({}),
  integrations: [mdx()],
});