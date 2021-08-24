import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user_id: "",
    auth: false,
  },
  mutations: {
    userData(state, payload) {
      state.user_id = payload.data.id;
    },
    userAuth(state, payload) {
      state.auth = payload.data.auth;
    },
    logout(state, payload) {
      state.auth = payload.data.auth;
    },
  },
  actions: {
    async userAuthAction(context, childData) {
      const baseUrl = "https://desolate-journey-37709.herokuapp.com/api/v1/";
      const data = await axios.post(baseUrl + "users/login", childData);
      context.commit("userData", data);
      context.commit("userAuth", data);
    },
    async logoutAction(context) {
      const baseUrl = "https://desolate-journey-37709.herokuapp.com/api/v1/";
      const data = await axios.post(baseUrl + "users/logout");
      context.commit("logout", data);
    },
  },
});
