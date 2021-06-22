import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalName: null,
    modalMoney: null,
    remittanceName: null,
    remittanceId: null,
    userId: null,
    totalFee: null
  },
  getters: {
    modalName: state => state.modalName,
    modalMoney: state => state.modalMoney,
    remittanceName: state => state.remittanceName,
    remittanceId: state => state.remittanceId,
    userId: state => state.userId,
    totalFee: state => state.totalFee
  },
  mutations: {
    updateModalName(state, modalName) {
      state.modalName = modalName;
    },
    updateModalMoney(state, modalMoney) {
      state.modalMoney = modalMoney;
    },
    updateRemittanceName(state, remittanceName) {
      state.remittanceName = remittanceName;
    },
    updateRemittanceId(state, remittanceId) {
      state.remittanceId = remittanceId;
    },
    updateUserId(state, userId) {
      state.userId = userId;
    },
    updateTotalFee(state, totalFee) {
      state.totalFee = totalFee;
    }
  }
});
