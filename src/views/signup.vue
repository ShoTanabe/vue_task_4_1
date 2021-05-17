<template>
  <div class="container">
    <h2>新規登録画面</h2>
    <form class="login-form">
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
        <button type="button" @click="register()">新規登録</button>
      </div>
      <router-link to="/"><p class="sf-link">ログインはこちらから</p></router-link>
    </form>
  </div>
</template>

<script>
  import axios from '../axios-for-auth.js';
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        axios.post(
          '/accounts:signUp?key=AIzaSyDshjRyPmOuk405B5g_XRfz2ri_QuXsSmQ',
          {
            name: this.name,
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        ).then((response) => {
          console.log(response);
        });
        this.name = '';
        this.email = '';
        this.password = '';
      }
    }
  }

</script>

<style lang="scss">
</style>
