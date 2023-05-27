import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router/index.ts'
createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    App.component(key, component)
}