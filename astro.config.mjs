import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';
import node from '@astrojs/node';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    clerk({
      afterSignInUrl: '/',
      afterSignUpUrl: '/',
      ssoCallbackUrl: '/login/sso-callback',
    })
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
