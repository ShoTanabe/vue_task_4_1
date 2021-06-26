import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    walletModalData: { modalName: null, modalMoney: null },
    remittanceModalData: { remittanceName: null, totalFee: null },
    remittanceId: null,
    userId: null
  },
  getters: {
    walletModalData: state => state.walletModalData,
    remittanceModalData: state => state.remittanceModalData,
    remittanceId: state => state.remittanceId,
    userId: state => state.userId
  },
  mutations: {
    updateWalletModalData(state, walletModalData) {
      state.walletModalData = walletModalData;
    },
    updateRemittanceModalData(state, remittanceModalData) {
      state.remittanceModalData = remittanceModalData;
    },
    updateRemittanceId(state, remittanceId) {
      state.remittanceId = remittanceId;
    },
    updateUserId(state, userId) {
      state.userId = userId;
    }
  }
});
