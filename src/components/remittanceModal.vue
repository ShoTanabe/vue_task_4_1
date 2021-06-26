<template>
  <div id="app">
    <div class="modal-content">
      <div class="modal-body">
        <p class="modal-text">あなたの残高</p>
        <p class="modal-text">{{ this.possession }}</p>
        <p class="modal-text">
          <input type="integerValue" class="remittance-form" name="remittance" v-model="remittance" value="" @focus="deleteText()">
        </p>
        <p v-if="alert" class="alert-message">{{ this.alertMessage }}</p>
        <button class="red-btn" @click="closeRemittanceModal(remittance)">送る</button>
        <button class="gray-btn" @click="onlyCloseRemittanceModal(remittance)">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['possession'],
  data() {
    return {
      remittance: '送金額を入力',
      alert: false,
      alertMessage: null,
    }
  },
  methods: {
    closeRemittanceModal() {
      if(this.userMoney >= this.remittance && Number.isInteger(Number(this.remittance))){
        this.$emit('from-remittance-btn', this.remittance);
      }
      if(!Number.isInteger(Number(this.remittance))){
        this.remittance = '';
        this.alertMessage = '整数を入力してください';
        this.alert = true;
      }
      if(this.possession < this.remittance){
        this.remittance = '';
        this.alertMessage = '残高以上は送金できません';
        this.alert = true;
      }
    },
    onlyCloseRemittanceModal() {
      this.$emit('from-close-btn');
    },
    deleteText() {
      this.remittance = '';
      this.alert = false;
    }
  }
}

</script>

<style lang="scss">
input.remittance-form {
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  padding: 4px;
  width: 150px;
}

.alert-message {
  text-align: center;
  margin: 5px;
  color: red;
}

</style>
