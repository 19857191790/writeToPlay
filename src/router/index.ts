// index.vue
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // @ts-ignore
    { path: '/', component: ()=>import('../views/login/index.vue') }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})