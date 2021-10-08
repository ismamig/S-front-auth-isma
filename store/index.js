
export const state = () => ({
  //number: 0,
})

export const mutations = {
  INCREMENT: (state) => state.number++,
}

export const actions = {
  add({ commit }) {
    commit('INCREMENT')
  },
}

const users = []

users[0] = 1

const user2 = users.map((e) => e)

user2[1] = 2
