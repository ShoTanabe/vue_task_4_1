<template>
  <div id="app">
    <div class="modal-content">
      <div class="modal-body">
        <p class="modal-text">あなたの残高</p>
        <p class="modal-text">{{ this.possession }}</p>
        <p class="modal-text">
          <input type="integerValue" class="remittance-form" name="remittance" v-model="remittance" value="" @focus="deleteText()">
        </p>
        <button class="red-btn" @click="closeRemittanceModal(remittance)">送る</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['possession'],
  data() {
    return {
      remittance: null,
    }
  },
  methods: {
    closeRemittanceModal() {
      this.$emit('from-child', this.remittance);
    },
    deleteText() {
      this.remittance = "";
    }
  },
  computed: {
    modalName() {
      return this.$store.getters.modalName;
    },
    modalMoney() {
      return this.$store.getters.modalMoney;
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

</style>
