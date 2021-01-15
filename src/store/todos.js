// import { http_post, http_get } from "@/assets/http-handler.js";

export const Todo = {
    namespaced: true,
    state: {
        todolist: []
    },

    // Mutations are functions that effect the STATE.
    mutations: {
        TODO_LIST(state, data) {
            state.todolist = data;
        },
        UPDATE_TODO(state, data) {
            const index = data['index']
            state.todolist[index] = data['data'];
        },
        ADD_TODO(state, data) {
            console.log('This is the ADD function in the store =>', state.todolist)
            state.todolist.unshift(data);
        },
        DELETE_TODO(state, data) {
            // console.log('This is the delete function in the store =>', data, state.todolist)
            // state.todolist.splice(data, 1);
            const i = state.todolist.map(item => item.id).indexOf(data);
            state.todolist.splice(i, 1);
        }
    },

    // Actions are functions that you call throughout your application that call mutations.
    actions: {
        setTodo({ commit }, data) {
            commit('TODO_LIST', data);
        },

        // UpdateTodo({ commit }, data) {
        //     commit('SET_TOKEN', token);
        // },
        addTodo({ commit }, data) {
            commit('ADD_TODO', data);
        },
        deleteTodo({ commit }, index) {
            commit('DELETE_TODO', index);
        }
    },
    getters: {
        getTodos: state => state.todolist
    }
}