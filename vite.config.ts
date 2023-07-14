import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue','vue-router']
      })
    ],
    server:{
        host:'0.0.0.0',
        proxy:{},
        open:true
    }
})
