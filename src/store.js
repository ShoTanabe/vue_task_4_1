import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userName: null,
    modalName: null,
    modalMoney: null
  },
  getters: {
    idToken: state => state.idToken,
    userName: state => state.userName,
    modalName: state => state.modalName,
    modalMoney: state => state.modalMoney
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    updateUserName(state, userName) {
      state.userName = userName;
    },
    updateModalName(state, modalName) {
      state.modalName = modalName;
    },
    updateModalMoney(state, modalMoney) {
      state.modalMoney = modalMoney;
    }
  }
});
