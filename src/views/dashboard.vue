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
      <p class="user-money">残高 ： {{ moneyPossession }}</p>
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
          <th>{{ user.fields.name.stringValue }}</th>
          <td>
            <div class="btn">
              <button
                class="stretched-link"
                type="button" name="button"
                @click="openModal(user)">
                walletを見る
              </button>
            </div>
          </td>
          <td>
            <div class="btn">
              <button
                class="stretched-link"
                type="button"
                name="button">
                送る
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showModal" class="modal">
      <modal
        @from-child="closeModal()">
      </modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import modal from '@/components/modal';

export default {
  components: {
    modal,
  },
  data() {
    return {
      startMoney: 500,
      paidMoney: 0,
      userList: [],
      showModal: false
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    moneyPossession() {
      return this.startMoney - this.paidMoney;
    }
  },
  methods: {
    logout() {
      this.$store.commit('updateIdToken', null);
      this.$store.commit('updateUserName', null);
      this.$router.push('/');
    },
    openModal(user) {
      this.$store.commit('updateModalName', user.fields.name.stringValue);
      this.$store.commit('updateModalMoney', user.fields.money.integerValue);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  created() {
    axios.get(
      'https://firestore.googleapis.com/v1/projects/vue-task-4/databases/(default)/documents/lists/'
    ).then((response) => {
      this.userList = response.data.documents;
    }).catch(() => {
      console.log('取得エラー');
    })
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
