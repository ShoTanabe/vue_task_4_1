<template>
  <div class="container">
    <h2>ログイン画面</h2>
    <form class="login-form">
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
        <button class="stretched-link" type="button" @click="login()">送信</button>
      </div>
      <router-link to="/signup"><p class="sf-link">新規登録はこちらから</p></router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDshjRyPmOuk405B5g_XRfz2ri_QuXsSmQ',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then((response) => {
        this.$store.commit('updateIdToken', response.data.idToken);
        this.$store.commit('updateUserName', response.data.displayName);
        this.$router.push('/dashboard');
        }
      ).catch(() => {
        this.$router.push('/error');
      })
      this.email = '';
      this.password = '';
    }
  }
}


</script>

<style lang="scss">
</style>
