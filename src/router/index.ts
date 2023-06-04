// hello.vue
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // @ts-ignore
    { path: '/', component: ()=>import('../views/login/index.vue')},
    // @ts-ignore
    { path: '/hello', component: ()=>import('../views/hello/index.vue')},
    // @ts-ignore
    { path: '/main', component: ()=>import('../views/main/index.vue')}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})