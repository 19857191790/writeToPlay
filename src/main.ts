import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router'
// @ts-ignore
import store from './store'
import mock from './mock'
import Particles from "particles.vue3"

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    // @ts-ignore
    .use(mock)
    .use(Particles)
    .mount('#app')

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}