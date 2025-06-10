
import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: vercelAdapter({}),

});