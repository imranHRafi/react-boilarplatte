import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Source+Sans+Pro:wght@400;600;900&display=swap',
    ]),
  ],
});
