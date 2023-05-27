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
createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    // @ts-ignore
    .use(mock)
    .mount('#app')