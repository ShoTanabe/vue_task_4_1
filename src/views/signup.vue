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
          <input type="text" id="name" v-model="name" @focus="deleteJudge">
        </div>
      </div>
      <div class="input-group">
        <div class="input-title">
          <label for="email">メールアドレス：</label>
        </div>
        <div class="input-area">
          <input type="email" id="email" v-model="email" @focus="deleteJudge">
        </div>
      </div>
      <div class="input-group">
        <div class="input-title">
          <label for="password">パスワード：</label>
        </div>
        <div class="input-area">
          <input type="password" id="password" v-model="password" @focus="deleteJudge">
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
  import firebase from 'firebase/app'
  import 'firebase/auth';
  import 'firebase/firestore';

  export default {

    data() {
      return {
        name: '',
        email: '',
        password: '',
        success: false,
        failed: false,
        db: null
      }
    },
    methods: {
      register() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((result) => {
              result.user.updateProfile({
                displayName: this.name
              });
              const list = {
                  name: this.name,
                  money: 500
              };
              firebase.firestore().collection('lists').add(list);
              this.success = true;
              this.name = '';
              this.email = '';
              this.password = '';
            })
            .catch(() => {
              this.failed = true;
              this.name = '';
              this.email = '';
              this.password = '';
            })
      },
      deleteJudge() {
        this.success = false;
        this.failed = false;
      }
    },
  }

</script>

<style lang="scss">
  .center {
    text-align: center;
    color: red;
  }
</style>
