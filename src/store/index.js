import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: "",
    auth: false,
  },
  mutations: {
    getUserData(state, payload) {
      state.user = payload.data.data;
    },
    getUserAuth(state, payload) {
      state.auth = payload.data.auth;
    },
  },
  actions: {
    async getUserDataAction(context, email) {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      const data = await axios.get(baseUrl + "user?email=" + email);
      context.commit("getUserData", data);
    },
    async getUserAuthAction(context, childData) {
      const baseUrl = "https://thawing-refuge-74444.herokuapp.com/api/";
      const data = await axios.post(baseUrl + "login", childData);
      context.commit("getUserAuth", data);
    },
  },
});
