import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
        date:"2021-07-24",
        description:"แม่ให้เงิน",
        amount:200
      },
      {
        date:"2021-07-24",
        description:"ซื้อเบอเกอร์",
        amount:-89
      }

    ],
  },

  getters: {
    info: (state) => state.data,
  },

  mutations: {
    add(state, { payload }) {
      state.data.push(payload)
    },

  },

  actions: {

    addIncomeExpenses({ commit }, payload) {
      commit("add", { payload })
    },

  },
  modules: {},
})