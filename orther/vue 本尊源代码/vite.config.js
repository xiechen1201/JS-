import { viteExternalsPlugin } from 'vite-plugin-externals'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
    vue(),
    viteExternalsPlugin({
	    vue: 'Vue'
	  })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.mjs'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})