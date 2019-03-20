<template>
<div @click="back()" class="back">
  <img src="../assets/backX.svg" alt="">
</div>
</template>

<script>
export default {
  methods: {
    back: function () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.back img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
