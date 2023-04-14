import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from 'vite-plugin-html';
// https://vitejs.dev/config/
export default ({
  mode
}) => defineConfig({
  base: './',
  // assetsInclude: '**/*.html',
  plugins: [
      vue(),
    createHtmlPlugin(), // 处理 HTML 文件
  ],
  define: {
    'process.env': {mode: mode, api: loadEnv(mode, process.cwd()).VITE_MODEL}
  },
  server: {
    proxy: {
      '/model': {
        target: loadEnv(mode, process.cwd()).VITE_MODEL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/model/, '')
      }
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist', // 指定输出路径，要和库的包区分开
    assetsDir: 'static/',
  }
})
