import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'
import store from '../store/index';

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
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAdmin: true }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach(async(to, from, next) => {
    // const user = store.state.user.username;
    // const isAdmin = ;
    const user = store.state.User.user.username;
    if (user) {
        console.log('users', user)
            // await store.dispatch('User/setUser', users[0]);
            // await store.dispatch(type: 'setUser', users[0])
    } else {
        console.log('Theres no username stated');

    }
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
    if (requiresAdmin && !user) {
        next({ name: 'Home' });
        console.log('routing')
    } else {
        next();
        console.log('not routing')
    }
})
export default router