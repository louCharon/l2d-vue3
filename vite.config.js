import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // assetsInclude: '**/*.html',
  plugins: [
      vue(),
    createHtmlPlugin(), // 处理 HTML 文件
  ],
  server: {
    proxy: {
      '/data': {
        target: 'http://127.0.0.1:5173/public/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/data/, '')
      }
    }
  },
  build: {

  }
})
