export const UserModule = {
    namespaced: true,
    state: {
        user: {
            username: '',
            token: 'token this is',

        }
    },

    // Mutations are functions that effect the STATE.
    mutations: {
        SET_USER(state, user) {
            state.user.username = user;
        },
        SET_TOKEN(state, token) {
            state.user.token = token;
        }
    },

    // Actions are functions that you call throughout your application that call mutations.
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        },
        setToken({ commit }, token) {
            commit('SET_TOKEN', token);
        }
    },
    getters: {
        getUserName: state => state.user.username,
        getToken: state => state.user.token
    }
}