<template>
  <div class="container">
    <h2>新規登録画面</h2>
    <form class="login-form">
      <p v-if="success" class="center">登録が完了しました</p>
      <p v-if="failed" class="center">登録できませんでした</p>
      <div class="input-group">
        <div class="input-title">
          <label for="name">ユーザー名：</label>
        </div>
        <div class="input-area">
          <input type="text" id="name" v-model="name">
        </div>
      </div>
      <div class="input-group">
        <div class="input-title">
          <label for="email">メールアドレス：</label>
        </div>
        <div class="input-area">
          <input type="email" id="email" v-model="email">
        </div>
      </div>
      <div class="input-group">
        <div class="input-title">
          <label for="password">パスワード：</label>
        </div>
        <div class="input-area">
          <input type="password" id="password" v-model="password">
        </div>
      </div>
      <div class="input-btn">
        <button class="stretched-link" type="button" @click="register()">新規登録</button>
      </div>
      <router-link to="/"><p class="sf-link">ログインはこちらから</p></router-link>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        success: false,
        failed: false
      }
    },
    methods: {
      register() {
        axios.post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDshjRyPmOuk405B5g_XRfz2ri_QuXsSmQ',
          {
            displayName: this.name,
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        ).then(() => {
          this.success = true;
          this.failed = false;
          axios.post(
            'https://firestore.googleapis.com/v1/projects/vue-task-4/databases/(default)/documents/lists/',
            {
              fields: {
                name: { stringValue: this.name },
                money: { integerValue: 500 },
              }
            }
          ).catch(() => {
            console.log('エラー発生');
          });
          this.name = '';
          this.email = '';
          this.password = '';
        }).catch(() => {
          this.failed = true;
          this.success = false;
          this.name = '';
          this.email = '';
          this.password = '';
        });
      }
    }
  }

</script>

<style lang="scss">
  .center {
    text-align: center;
    color: red;
  }
</style>
