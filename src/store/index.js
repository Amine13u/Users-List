import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
  modules: {},
});
