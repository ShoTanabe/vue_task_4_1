<template>
  <div class="container">
    <h2>ログイン画面</h2>
    <form class="login-form">
      <div class="input-group">
        <div class="input-title">
          <label for="email">メールアドレス：</label>
        </div>
        <div class="input-area">
          <input type="email" id="email">
        </div>
      </div>
      <div class="input-group">
        <div class="input-title">
          <label for="email">パスワード：</label>
        </div>
        <div class="input-area">
          <input type="text" id="password">
        </div>
      </div>
      <div class="input-btn">
        <button type="button">送信</button>
      </div>
      <router-link to="/signup"><p class="sf-link">新規登録はこちらから</p></router-link>
    </form>
  </div>
</template>

<script>

</script>

<style lang="scss">
</style>
