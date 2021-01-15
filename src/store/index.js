import Vue from 'vue'
import Vuex from 'vuex'
import { UserModule } from './user'
import { Todo } from './todos'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        User: UserModule,
        Todo: Todo
    }
})