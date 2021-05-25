<template>
  <div class="container">
    <div class="user-info clear-fix">
      <p class="user-name">{{ userName }} さんようこそ！！</p>
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
        <tr>
          <th>test2</th>
          <td>
            <div class="btn">
              <button class="stretched-link" type="button" name="button">walletを見る</button>
            </div>
          </td>
          <td>
            <div class="btn">
              <button class="stretched-link" type="button" name="button">送る</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      startMoney: 500,
      paidMoney: 0
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    moneyPossession() {
      return this.startMoney - this.paidMoney;
    }
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
    width: 50%;
    float: right;
    text-align: center;
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

</style>
