import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Icons from 'unplugin-icons/vite';
import { AnyUIResolver } from '@any-design/anyui/lib/resolver.js';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Icons({ autoInstall: true }),
    AutoImport({
      resolvers: [AnyUIResolver()],
    }),
    Components({
      resolvers: [AnyUIResolver(), IconsResolver()],
    }),
    electron([
      {
        entry: './src/app/main.ts',
        vite: {
          resolve: {
            alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
          },
          build: {
            rollupOptions: {
              external: ['better-sqlite3', 'typeorm', '@node-rs/jieba'],
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
