import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    electron([
      {
        entry: './src/app/main.ts',
        vite: {
          resolve: {
            alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
          },
        },
      },
      {
        entry: './src/app/preload.ts',
        onstart: (options) => {
          options.reload();
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
