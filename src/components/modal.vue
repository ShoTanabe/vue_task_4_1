<template>
  <div id="app">
    <div class="modal-content">
      <div class="modal-body">
        <p class="modal-text">{{ modalName }} さんの残高</p>
        <p class="modal-text">{{ modalMoney }}</p>
        <button class="red-btn" @click="closeModal()">閉じる</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('from-child');
    }
  },
  computed: {
    modalName() {
      return this.$store.getters.modalName;
    },
    modalMoney() {
      return this.$store.getters.modalMoney;
    }
  },
}

</script>

<style lang="scss">

</style>
