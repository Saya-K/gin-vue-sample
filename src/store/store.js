import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      name: ""
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})
