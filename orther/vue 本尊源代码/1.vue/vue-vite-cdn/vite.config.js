import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue'
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});