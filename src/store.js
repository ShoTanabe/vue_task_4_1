import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userName: null,
  },
  getters: {
    idToken: state => state.idToken,
    userName: state => state.userName
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    updateUserName(state, userName) {
      state.userName = userName;
    }
  }
});
