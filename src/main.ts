import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router/index.ts'
createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')