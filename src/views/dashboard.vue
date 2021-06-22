<template>
  <div class="container">
    <div class="user-info clear-fix">
      <p class="user-name">{{ userName }} さんようこそ！！</p>
      <div class="logout-area">
        <div class="logout-btn">
          <button
            class="stretched-link"
            type="button"
            name="logout"
            @click="logout()">
            ログアウト
          </button>
        </div>
      </div>
      <p class="user-money">残高 ： {{ userMoney }}</p>
    </div>
    <h2>一覧</h2>
    <table class="user-list">
      <thead>
        <tr>
          <th class="user-list-name">ユーザー名</th>
          <td class="user-list-btn-wallet"></td>
          <td class="user-list-btn-pay"></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.name">
          <th>{{ user.name }}</th>
          <td>
            <div class="btn">
              <button
                class="stretched-link"
                type="button" name="button"
                @click="openWalletModal(user)">
                walletを見る
              </button>
            </div>
          </td>
          <td>
            <div class="btn">
              <button
                class="stretched-link"
                type="button"
                name="button"
                @click="openRemittanceModal(user)">
                送る
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showWalletModal" class="modal">
      <walletModal
        @from-child="closeWalletModal()">
      </walletModal>
    </div>
    <div v-if="showRemittanceModal" class="modal">
      <remittanceModal
        :possession="userMoney"
        @from-child="closeRemittanceModal">
      </remittanceModal>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore';

import walletModal from '@/components/walletModal';
import remittanceModal from '@/components/remittanceModal';

export default {
  components: {
    walletModal,
    remittanceModal,
  },
  data() {
    return {
      userName: firebase.auth().currentUser.displayName,
      userIndex: null,
      remittanceIndex: null,
      userMoney: null,
      userList: [],
      userIdList: [],
      showWalletModal: false,
      showRemittanceModal: false
    }
  },
  computed: {
    totalFee() {
      return this.$store.getters.totalFee;
    },
    remittanceName() {
      return this.$store.getters.remittanceName;
    },
    remittanceId() {
      return this.$store.getters.remittanceId;
    },
    userId() {
      return this.$store.getters.userId;
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    openWalletModal(user) {
      this.userList = [];
      firebase.firestore().collection('lists').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.userList.push(doc.data())
          });
        this.userMoney = this.userList[this.userIndex].money;
        });
      this.$store.commit('updateModalName', user.name);
      this.$store.commit('updateModalMoney', user.money);
      this.showWalletModal = true;
    },
    openRemittanceModal(user) {
      this.$store.commit('updateTotalFee', user.money);
      this.$store.commit('updateRemittanceName', user.name);
      for(let l = 0; l < this.userList.length; l++) {
        if(this.userList[l].name === user.name) {
          this.remittanceIndex = l;
        } else {
          continue;
        }
      }
      this.$store.commit('updateRemittanceId', this.userIdList[this.remittanceIndex]);
      this.showRemittanceModal = true;
    },
    closeWalletModal() {
      this.showWalletModal = false;
    },
    closeRemittanceModal(val) {
      let remittanceUpdate = {
        name: this.remittanceName,
        money: Number(this.totalFee) + Number(val)
      };
      let myUpdate = {
        name: this.userName,
        money: Number(this.userMoney) - Number(val)
      };
      if(this.remittanceName !== this.userName && this.userMoney >= val){
        firebase.firestore().collection('lists').doc(this.remittanceId).set(remittanceUpdate);
        firebase.firestore().collection('lists').doc(this.userId).set(myUpdate);
        this.userList = [];
        firebase.firestore().collection('lists').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              this.userList.push(doc.data());
            });
          this.userMoney = this.userList[this.userIndex].money;
          });
      }
      this.showRemittanceModal = false;
      if(this.userMoney < val){
        alert('所持金以上の送金はできません');
      }
      if(this.remittanceName === this.userName){
        alert('自分自身への送金はできません');
      }
    }
  },
  created() {
    firebase.firestore().collection('lists').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.userList.push(doc.data());
          this.userIdList.push(doc.id);
        });
      for(let i = 0; i < this.userList.length; i++) {
        if(this.userList[i].name === this.userName) {
          this.userIndex = i;
        } else {
          continue;
        }
      }
      this.userMoney = this.userList[this.userIndex].money;
      this.$store.commit('updateUserId', this.userIdList[this.userIndex]);
      });
  }
}


</script>

<style lang="scss">
.user-info{
  margin-bottom: 80px;

  .user-name {
    width: 50%;
    float: left;
    text-align: center;
  }

  .user-money {
    width: 30%;
    float: right;
    text-align: center;
  }

  .logout-area {
    width: 20%;
    float: right;
  }

  .logout-btn {
    width: 60%;
    min-width: 70px;
    font-size: 0.7em;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    line-height: 1em;
    position: relative;
    background-color: #777777;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }

}

table.user-list {
  width: 100%;
  margin: 0 auto;

  th {
    width: 40%;
    line-height: 1.8em;
    font-size: 1.2em;
    text-align: center;
  }
  td {
    width: 30%;
    text-align: center;
    padding: 0 10px;

    .btn {
      border-radius: 3px;
      background-color: #14A2B5;
      position: relative;

      button {
        color: #fff;
        font-size: 1.2em;
        padding: 5px;
      }
    }
  }
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);

  .modal-content {
    background-color: #fff;
    width: 240px;
    margin: 200px auto;
    border-radius: 10px;
    padding-bottom: 5px;

    p.modal-text {
      text-align: center;
      padding-top: 15px;
    }
  }

  .red-btn {
    display: block;
    width: 80px;
    margin: 10px auto;
    background-color: #c74e6a;
    padding: 8px;
    border-radius: 3px;
    color: #fff;
    text-align: center;
  }
}

</style>
