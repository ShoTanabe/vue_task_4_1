<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss">

.container {
  width: 70%;
  margin: 0 auto;
  padding: 40px;

  h2 {
    color: #444444;
    text-align: center;
    font-size: 2.4em;
    font-weight: bold;
    margin-bottom: 80px;
  }

  .login-form {
    color: #444444;
    font-size: 1.2em;


    .input-group {
      margin: 20px 0;

      &::after {
        content: "";
        display: block;
        clear: both;
      }

      .input-title {
        width: 40%;
        float: left;
        text-align: right;
        padding: 2px 0;
      }

      .input-area {
        width: 60%;
        float: left;
      }

      input{
        border: solid 1px #9c9c9c;
        border-radius: 4px;
        padding: 2px 0;
      }
    }

    .input-btn {
      width: 25%;
      margin: 30px auto 10px auto;
      border: 1px solid #3397f5;
      border-radius: 4px;
      color: #3397f5;
      text-align: center;
      padding: 10px;

      &:hover {
        background-color: #3397f5;
        color: #fff;
      }
    }

    .sf-link {
      font-size: 0.8em;
      color: #3397f5;
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

  }

}





</style>
