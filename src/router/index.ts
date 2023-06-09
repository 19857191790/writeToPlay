// hello.vue
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // @ts-ignore
    { path: '/', component: ()=>import('../views/login/index.vue'),meta:{title:'SystemLogin'}},
    // @ts-ignore
    { path: '/hello', component: ()=>import('../views/hello/index.vue'),meta:{title:'HelloPage'}}
]

const router=createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.title && from){
        window.document.title=(to.meta.title) as string
        next()
    }
})

export default router