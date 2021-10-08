export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  CONNECT: 'users/connect',
  DISCONNECT: 'users/disconnect'
}

export const state = () => ({
  users: [],
  session: {
    email: '',
  },
})

export const getters = {
  getSession: (state) => {
    return state.users.session
  }
}

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  CONNECT: (state, data) => state.session = data,
  DISCONNECT: (state) => state.session.email = '',
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
  connect({ commit }, data) {
    commit('CONNECT', data)
    this.$cookies.set('session', data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  disconnect({ commit }) {
    commit('DISCONNECT')
    this.$cookies.remove('session')
  },
}
