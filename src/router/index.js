import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    }
]

const router = new VueRouter({
    routes
})

export default router